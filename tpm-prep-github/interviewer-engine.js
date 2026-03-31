// ── Multi-Turn AI Interviewer Engine ──
const INTERVIEW_TOPICS = [
  {group:"Week 1: Foundations",topics:[
    {name:"Scalability & Load Balancing",icon:"📈",questions:["Explain horizontal vs vertical scaling. When would you choose each?","How does a CDN improve performance?","Compare cache-aside, write-through, and write-behind strategies.","Design a system handling 10K req/sec."]},
    {name:"Database Design",icon:"🗄️",questions:["Explain CAP theorem with real examples.","When choose DynamoDB over Aurora?","Explain sharding strategies and cross-shard queries.","Design a data model for a social media feed."]},
    {name:"Distributed Systems",icon:"🌐",questions:["Explain Raft consensus at a high level.","What is a split-brain problem?","How does idempotency help in distributed systems?","Design a distributed lock service."]},
    {name:"API Design & Microservices",icon:"🔌",questions:["Compare REST, gRPC, and GraphQL.","What is the circuit breaker pattern?","How handle API versioning in microservices?","Design an API rate limiter."]},
    {name:"AWS Core Services",icon:"☁️",questions:["Walk me through a 3-tier architecture on AWS.","Compare ECS Fargate vs EKS.","How design for 99.99% availability?","Explain S3 storage classes."]}
  ]},
  {group:"Week 2: Advanced Design & AI",topics:[
    {name:"Event-Driven Architecture",icon:"⚡",questions:["Compare choreography vs orchestration.","What is event sourcing?","Explain the saga pattern.","How ensure ordering in event-driven systems?"]},
    {name:"Data Pipelines",icon:"🔄",questions:["Compare Lambda vs Kappa architecture.","When use Kinesis vs Kafka vs SQS?","Design a pipeline processing 1TB/hour.","How ensure exactly-once processing?"]},
    {name:"AI/ML Fundamentals",icon:"🧠",questions:["Explain the ML lifecycle end-to-end.","When use SageMaker vs Bedrock?","Design a recommendation system.","What metrics track for ML in production?"]},
    {name:"GenAI & LLMs",icon:"🤖",questions:["Explain RAG and why it's preferred over fine-tuning.","What is agentic RAG?","How evaluate RAG quality?","Design an AI chatbot with guardrails."]},
    {name:"Search & Observability",icon:"🔍",questions:["How does an inverted index work?","Define SLO, SLI, and SLA.","What is OpenTelemetry?","Design a monitoring platform."]}
  ]},
  {group:"Week 3: TPM & Leadership",topics:[
    {name:"Program Management",icon:"📋",questions:["How write an effective design doc?","How manage technical debt?","How make build vs buy decisions?","How manage dependencies across 5+ teams?"]},
    {name:"Leadership & Behavioral",icon:"👥",questions:["Tell me about leading a program with ambiguity. (STAR)","How handle conflicting priorities between teams?","Describe delivering bad news to leadership. (STAR)","How do you prioritize when everything is P0?"]},
    {name:"Security & Compliance",icon:"🔒",questions:["Explain zero trust architecture.","Walk me through OAuth2 with PKCE.","Design tenant isolation in multi-tenant SaaS.","How balance security with delivery speed?"]},
    {name:"Cost Optimization",icon:"💰",questions:["How reduce AWS costs by 30%?","What is FinOps?","How optimize LLM inference costs?","Design a cost allocation system."]}
  ]},
  {group:"Week 4-5: Advanced & Data",topics:[
    {name:"Multi-Region Systems",icon:"🌍",questions:["Design active-active multi-region architecture.","What conflict resolution for multi-region writes?","Design a chat system across 5 regions.","How test multi-region failover?"]},
    {name:"AI Agents & Real-Time",icon:"🤖",questions:["What are agentic AI patterns?","What is MCP (Model Context Protocol)?","Design a multi-agent system.","Compare LangChain vs LlamaIndex."]},
    {name:"Databricks & Data Lakes",icon:"🏗️",questions:["What is lakehouse architecture?","Explain Delta Lake and UniForm.","What is medallion architecture?","Design an enterprise data platform."]},
    {name:"Full System Design Mocks",icon:"🎯",questions:["Design Twitter/X end-to-end.","Design YouTube.","Design Uber.","Design Spotify."]}
  ]}
];

const SOFT_SKILLS = ["Clarity","Structure","Confidence","Conciseness","Technical Depth","Stakeholder Awareness","STAR Format"];

const INTERVIEWER_SYSTEM = `You are a senior Principal TPM interviewer at a top tech company (Google/Meta/Amazon level).

RULES:
- Ask ONE question at a time
- After the candidate answers, ask a FOLLOW-UP question that digs deeper into their answer
- Ask 3-5 follow-up questions before moving to the next main question
- Follow-ups should probe: specifics, trade-offs, scale, failure modes, alternatives, metrics
- Be conversational but professional — like a real interview
- If the answer is vague, push for specifics: "Can you be more specific about..."
- If the answer is good, go deeper: "Interesting. What would happen if..."
- Do NOT evaluate during the interview — just ask questions

FOLLOW-UP PATTERNS:
- "You mentioned X. Can you elaborate on how that works at scale?"
- "What are the trade-offs of that approach?"
- "What would you do differently if the requirement changed to Y?"
- "How would you handle failure in that component?"
- "What metrics would you use to measure success?"
- "How would you explain this decision to a VP?"`;

const EVALUATOR_SYSTEM = `You are evaluating a Principal TPM interview. Analyze the FULL conversation.

Score each dimension 1-10:

TECHNICAL:
- **Technical Depth**: Deep understanding of systems, architecture, trade-offs
- **Problem Solving**: Structured approach, considers edge cases
- **Breadth**: Awareness of alternatives and related technologies

SOFT SKILLS:
- **Clarity**: Articulate, easy to follow, avoids jargon overload
- **Structure**: Organized thoughts, uses frameworks (STAR for behavioral)
- **Confidence**: Decisive, owns opinions, comfortable saying "I don't know"
- **Conciseness**: Gets to the point, doesn't ramble
- **Stakeholder Awareness**: Considers business impact, cross-team dynamics

OVERALL:
- **Overall Score**: /10
- **Verdict**: Strong Hire / Hire / Borderline / No Hire

Then provide:
- **Top 3 Strengths**
- **Top 3 Areas to Improve** (specific, actionable)
- **Improvement Plan**: 3 concrete steps to get better in the next week`;

let ivState = {active:false, topic:'', messages:[], turnCount:0, maxTurns:8, mainQ:0, questions:[]};
let ivRecognition = null, ivListening = false;

function renderInterviewer() {
  const el = document.getElementById('interviewer');
  el.innerHTML = `
    <h2 class="section-title">🎙️ AI Interview Simulator</h2>
    <p style="color:var(--muted);margin-bottom:8px">Multi-turn interview with follow-up questions, powered by <strong>Ollama</strong> (free, local) or any AI via copy-paste.</p>

    <div class="card" style="margin-bottom:16px">
      <h3>⚙️ AI Backend</h3>
      <div style="display:flex;gap:12px;margin-top:8px;align-items:center;flex-wrap:wrap">
        <label style="font-size:.85rem;color:var(--muted)">Ollama URL:</label>
        <input type="text" id="ollama-url" value="${localStorage.getItem('ollama-url')||'http://localhost:11434'}"
          style="padding:6px 10px;background:var(--bg);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:.85rem;width:260px">
        <label style="font-size:.85rem;color:var(--muted)">Model:</label>
        <input type="text" id="ollama-model" value="${localStorage.getItem('ollama-model')||'llama3.1'}"
          style="padding:6px 10px;background:var(--bg);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:.85rem;width:140px">
        <button onclick="testOllama()" style="padding:6px 14px;background:var(--accent3);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:.85rem">Test Connection</button>
        <span id="ollama-status" style="font-size:.85rem;color:var(--muted)"></span>
      </div>
      <p style="color:var(--muted);font-size:.8rem;margin-top:8px">No Ollama? No problem — the interviewer works in <strong>manual mode</strong> too. Copy the conversation to any free AI.</p>
    </div>

    <h3 style="margin:20px 0 12px">Choose Interview Topic</h3>
    ${INTERVIEW_TOPICS.map(g => `
      <h4 style="margin:16px 0 8px;color:var(--accent)">${g.group}</h4>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${g.topics.map((t,ti) => `<button onclick="beginInterview('${g.group}','${t.name}',${INTERVIEW_TOPICS.indexOf(g)},${ti})"
          style="padding:10px 16px;background:var(--card);border:1px solid var(--border);border-radius:8px;color:var(--text);cursor:pointer;font-size:.9rem;transition:.2s"
          onmouseover="this.style.borderColor='var(--accent2)'" onmouseout="this.style.borderColor='var(--border)'">${t.icon} ${t.name}</button>`).join('')}
      </div>`).join('')}

    <div id="iv-area" style="display:none;margin-top:24px">
      <div class="card" style="margin-bottom:12px;border-color:var(--accent2)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3 id="iv-topic">Topic</h3>
          <span id="iv-turn-count" class="badge badge-purple">Turn 0/8</span>
        </div>
      </div>
      <div id="iv-chat" style="max-height:500px;overflow-y:auto;margin-bottom:12px"></div>
      <div class="card" id="iv-input-area">
        <div style="display:flex;gap:10px;margin-bottom:10px;align-items:center">
          <button id="iv-mic" onclick="toggleIvVoice()"
            style="padding:10px 20px;background:var(--accent);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:.95rem">🎤 Speak</button>
          <span id="iv-mic-status" style="color:var(--muted);font-size:.85rem"></span>
        </div>
        <textarea id="iv-answer" rows="4" placeholder="Speak or type your answer..."
          style="width:100%;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.95rem;resize:vertical;font-family:inherit"></textarea>
        <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
          <button onclick="submitIvAnswer()" style="padding:10px 20px;background:var(--accent2);border:none;border-radius:8px;color:#fff;cursor:pointer">Send Answer</button>
          <button onclick="endInterview()" style="padding:10px 20px;background:#ef4444;border:none;border-radius:8px;color:#fff;cursor:pointer">End & Evaluate</button>
          <button onclick="copyConversation()" style="padding:10px 20px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--text);cursor:pointer">📋 Copy for External AI</button>
        </div>
      </div>
      <div id="iv-eval" style="display:none;margin-top:16px"></div>
    </div>`;
}

async function testOllama() {
  const url = document.getElementById('ollama-url').value;
  const model = document.getElementById('ollama-model').value;
  localStorage.setItem('ollama-url', url);
  localStorage.setItem('ollama-model', model);
  document.getElementById('ollama-status').textContent = '⏳ Testing...';
  try {
    const r = await fetch(url+'/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model,prompt:'Say "connected" in one word.',stream:false})});
    if(r.ok) document.getElementById('ollama-status').textContent = '✅ Connected to '+model;
    else throw new Error();
  } catch(e) { document.getElementById('ollama-status').textContent = '❌ Cannot reach Ollama. Run: ollama serve'; }
}

function beginInterview(group, topicName, gi, ti) {
  const topic = INTERVIEW_TOPICS[gi].topics[ti];
  ivState = {active:true, topic:topicName, messages:[], turnCount:0, maxTurns:8, mainQ:0, questions:topic.questions};
  document.getElementById('iv-area').style.display = 'block';
  document.getElementById('iv-topic').textContent = `${topic.icon} ${topicName}`;
  document.getElementById('iv-chat').innerHTML = '';
  document.getElementById('iv-eval').style.display = 'none';
  document.getElementById('iv-eval').innerHTML = '';
  document.getElementById('iv-input-area').style.display = 'block';
  updateTurnCount();
  // Ask first question
  const firstQ = topic.questions[0];
  addChatBubble('interviewer', `Let's begin. ${firstQ}`);
  ivState.messages.push({role:'assistant',content:firstQ});
  speakText(firstQ);
}

function addChatBubble(role, text) {
  const chat = document.getElementById('iv-chat');
  const isInterviewer = role === 'interviewer';
  chat.innerHTML += `<div style="display:flex;justify-content:${isInterviewer?'flex-start':'flex-end'};margin:8px 0">
    <div style="max-width:80%;padding:12px 16px;border-radius:12px;background:${isInterviewer?'rgba(59,130,246,.15)':'rgba(139,92,246,.15)'};
      border:1px solid ${isInterviewer?'rgba(59,130,246,.3)':'rgba(139,92,246,.3)'};font-size:.9rem;line-height:1.6">
      <strong style="font-size:.75rem;color:${isInterviewer?'var(--accent)':'var(--accent2)'}">${isInterviewer?'🎤 Interviewer':'👤 You'}</strong><br>
      ${text}
    </div></div>`;
  chat.scrollTop = chat.scrollHeight;
}

function updateTurnCount() {
  const el = document.getElementById('iv-turn-count');
  if(el) el.textContent = `Turn ${ivState.turnCount}/${ivState.maxTurns}`;
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }
}

function toggleIvVoice() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    document.getElementById('iv-mic-status').textContent = '❌ Use Chrome/Edge';
    return;
  }
  if (ivListening) { stopIvVoice(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  ivRecognition = new SR();
  ivRecognition.continuous = true;
  ivRecognition.interimResults = true;
  ivRecognition.lang = 'en-US';
  let final = document.getElementById('iv-answer').value;
  ivRecognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) final += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    document.getElementById('iv-answer').value = final + interim;
  };
  ivRecognition.onerror = () => stopIvVoice();
  ivRecognition.onend = () => { if (ivListening) ivRecognition.start(); };
  ivRecognition.start();
  ivListening = true;
  document.getElementById('iv-mic').innerHTML = '⏹️ Stop';
  document.getElementById('iv-mic').style.background = '#ef4444';
  document.getElementById('iv-mic-status').textContent = '🔴 Listening...';
}

function stopIvVoice() {
  if (ivRecognition) ivRecognition.stop();
  ivListening = false;
  document.getElementById('iv-mic').innerHTML = '🎤 Speak';
  document.getElementById('iv-mic').style.background = 'var(--accent)';
  document.getElementById('iv-mic-status').textContent = '';
}

async function submitIvAnswer() {
  stopIvVoice();
  const answer = document.getElementById('iv-answer').value.trim();
  if (!answer) return;
  addChatBubble('candidate', answer);
  ivState.messages.push({role:'user',content:answer});
  ivState.turnCount++;
  updateTurnCount();
  document.getElementById('iv-answer').value = '';

  if (ivState.turnCount >= ivState.maxTurns) { endInterview(); return; }

  // Get follow-up from Ollama or show manual prompt
  const url = document.getElementById('ollama-url')?.value || 'http://localhost:11434';
  const model = document.getElementById('ollama-model')?.value || 'llama3.1';

  const nextMainQ = ivState.questions[Math.min(Math.floor(ivState.turnCount/2), ivState.questions.length-1)];
  const prompt = `${INTERVIEWER_SYSTEM}

TOPIC: ${ivState.topic}
AVAILABLE QUESTIONS: ${ivState.questions.join(' | ')}

CONVERSATION SO FAR:
${ivState.messages.map(m => `${m.role==='user'?'CANDIDATE':'INTERVIEWER'}: ${m.content}`).join('\n')}

Ask your next question. If the candidate's last answer was shallow, probe deeper. If they answered well, move to a new angle or the next main question. Remember: ONE question only, be conversational.`;

  try {
    addChatBubble('interviewer', '<em style="color:var(--muted)">Thinking...</em>');
    const r = await fetch(url+'/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model, prompt, stream:false})});
    const data = await r.json();
    const followUp = data.response.trim();
    // Replace thinking bubble
    const chat = document.getElementById('iv-chat');
    chat.removeChild(chat.lastChild);
    addChatBubble('interviewer', followUp);
    ivState.messages.push({role:'assistant',content:followUp});
    speakText(followUp);
  } catch(e) {
    const chat = document.getElementById('iv-chat');
    chat.removeChild(chat.lastChild);
    // Fallback: use next scripted question
    const fallbackQ = ivState.questions[Math.min(ivState.mainQ+1, ivState.questions.length-1)];
    ivState.mainQ++;
    addChatBubble('interviewer', `${fallbackQ} <br><small style="color:var(--muted)">(Ollama unavailable — using scripted question. Use "Copy for External AI" for AI follow-ups.)</small>`);
    ivState.messages.push({role:'assistant',content:fallbackQ});
    speakText(fallbackQ);
  }
}

async function endInterview() {
  stopIvVoice();
  if (ivState.messages.length < 2) return;
  document.getElementById('iv-input-area').style.display = 'none';
  const evalEl = document.getElementById('iv-eval');
  evalEl.style.display = 'block';

  const conversation = ivState.messages.map(m => `${m.role==='user'?'CANDIDATE':'INTERVIEWER'}: ${m.content}`).join('\n\n');
  const evalPrompt = `${EVALUATOR_SYSTEM}\n\nTOPIC: ${ivState.topic}\n\nFULL INTERVIEW TRANSCRIPT:\n${conversation}`;

  const url = document.getElementById('ollama-url')?.value || 'http://localhost:11434';
  const model = document.getElementById('ollama-model')?.value || 'llama3.1';

  evalEl.innerHTML = '<div class="card"><p style="color:var(--accent)">⏳ Generating evaluation...</p></div>';

  try {
    const r = await fetch(url+'/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model, prompt:evalPrompt, stream:false})});
    const data = await r.json();
    evalEl.innerHTML = `<div class="card" style="border-color:var(--accent3)">
      <h3>📊 Interview Evaluation</h3>
      <div style="margin-top:12px;white-space:pre-wrap;color:var(--muted);font-size:.9rem;line-height:1.7">${data.response}</div>
    </div>
    <div class="card" style="margin-top:12px">
      <button onclick="beginInterview('','${ivState.topic}',0,0);renderInterviewer();" style="padding:10px 20px;background:var(--accent2);border:none;border-radius:8px;color:#fff;cursor:pointer">🔄 Try Again</button>
    </div>`;
  } catch(e) {
    evalEl.innerHTML = `<div class="card" style="border-color:#fbbf24">
      <h3>📋 Manual Evaluation</h3>
      <p style="color:var(--muted);margin:8px 0">Ollama not available. Copy the evaluation prompt below and paste into any free AI:</p>
      <textarea readonly rows="6" style="width:100%;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.8rem;font-family:monospace">${evalPrompt.replace(/</g,'&lt;')}</textarea>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button onclick="navigator.clipboard.writeText(document.querySelector('#iv-eval textarea').value)" style="padding:8px 16px;background:var(--accent);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:.85rem">📋 Copy Evaluation Prompt</button>
        <a href="https://aistudio.google.com/" target="_blank" style="padding:8px 16px;background:var(--accent3);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:.85rem;text-decoration:none">→ Google AI Studio (free)</a>
        <a href="https://huggingface.co/chat/" target="_blank" style="padding:8px 16px;background:var(--accent3);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:.85rem;text-decoration:none">→ HuggingChat (free)</a>
      </div>
    </div>`;
  }
}

function copyConversation() {
  const conversation = ivState.messages.map(m => `${m.role==='user'?'CANDIDATE':'INTERVIEWER'}: ${m.content}`).join('\n\n');
  const prompt = `${INTERVIEWER_SYSTEM}\n\nTOPIC: ${ivState.topic}\n\nCONVERSATION SO FAR:\n${conversation}\n\nAsk your next follow-up question. ONE question only.`;
  navigator.clipboard.writeText(prompt).then(() => {
    document.getElementById('iv-mic-status').textContent = '📋 Copied! Paste into any AI, get the follow-up, then type it here.';
  });
}
