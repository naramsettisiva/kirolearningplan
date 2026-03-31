// ── App Logic ──
let currentDay = null;
let interviewState = { active:false, questions:[], currentQ:0, answers:[], topic:"" };
let recognition = null;
let isListening = false;

function init() {
  renderNav();
  showTab('schedule');
}

function renderNav() {
  const nav = document.getElementById('nav');
  const tabs = [
    {id:'schedule',label:'📅 5-Week Schedule'},
    {id:'interviewer',label:'🎙️ AI Interviewer'},
    {id:'resources',label:'📚 Resources'},
    {id:'tracker',label:'✅ Tracker'}
  ];
  nav.innerHTML = tabs.map(t =>
    `<button onclick="showTab('${t.id}')" id="btn-${t.id}">${t.label}</button>`
  ).join('');
}

function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('btn-'+id).classList.add('active');
  if (id === 'schedule') renderSchedule();
  if (id === 'resources') renderResources();
  if (id === 'tracker') renderTracker();
  if (id === 'interviewer') renderInterviewer();
}

// ── Schedule Tab ──
function renderSchedule() {
  const el = document.getElementById('schedule');
  const weeks = [
    {n:1,t:"Foundations & System Design Basics",data:WEEK1},
    {n:2,t:"Advanced System Design & AI Deep Dive",data:WEEK2},
    {n:3,t:"TPM Skills & Leadership",data:WEEK3},
    {n:4,t:"Advanced Topics & Mock Interviews",data:WEEK4},
    {n:5,t:"Databricks, Data Lakes & Governance",data:WEEK5}
  ];
  el.innerHTML = weeks.map(w => `
    <h2 class="section-title">Week ${w.n}: ${w.t}</h2>
    <div class="week-grid">${w.data.map((d,i) => renderDayCard(d, `w${w.n}d${i}`)).join('')}</div>
  `).join('');
}

function renderDayCard(d, id) {
  return `<div class="card" id="${id}">
    <h3>${d.date}</h3>
    <h4 style="color:var(--accent);margin-bottom:12px">${d.title}</h4>
    ${d.blocks.map(b => `
      <div class="time-block">
        <span class="time-label">${b.t}</span>
        <div>
          <strong>${b.type} ${b.content}</strong>
          ${b.links ? b.links.map(l => `<br><a href="${l.url}" target="_blank" style="color:var(--accent);font-size:.85rem">→ ${l.name}</a>`).join('') : ''}
        </div>
      </div>`).join('')}
    ${d.questions ? `
      <details style="margin-top:12px">
        <summary style="cursor:pointer;color:var(--accent2);font-weight:600">🤖 Interview Questions (${d.questions.length})</summary>
        <ol style="margin-top:8px;padding-left:20px;color:var(--muted);font-size:.9rem">
          ${d.questions.map(q => `<li style="padding:4px 0">${q}</li>`).join('')}
        </ol>
        <button onclick="startInterview('${d.title}', ${JSON.stringify(d.questions).replace(/'/g,"\\'")})"
          style="margin-top:10px;padding:8px 16px;background:var(--accent2);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:.9rem">
          🎙️ Start Voice Interview for This Topic
        </button>
      </details>` : ''}
  </div>`;
}

// ── AI Interviewer Tab ──
function renderInterviewer() {
  const el = document.getElementById('interviewer');
  el.innerHTML = `
    <h2 class="section-title">🎙️ AI Interview Simulator</h2>
    <p style="color:var(--muted);margin-bottom:20px">Simulates a real Principal TPM interview. The agent asks questions, you answer via voice or text. After each answer, get instant assessment and improvement suggestions.</p>

    <div class="grid-2" style="margin-bottom:20px">
      <div class="card">
        <h3>🎯 How It Works</h3>
        <ul>
          <li>Select a topic or start from any day's questions</li>
          <li>Agent asks questions one by one (with TTS)</li>
          <li>Answer via <strong>voice</strong> (mic button) or <strong>text</strong></li>
          <li>Get scored on: Clarity, Depth, Structure, Relevance</li>
          <li>Receive improvement suggestions after each answer</li>
          <li>Full assessment report at the end</li>
        </ul>
      </div>
      <div class="card">
        <h3>⚙️ Setup</h3>
        <ul>
          <li>Uses browser Speech Recognition (Chrome/Edge recommended)</li>
          <li>Uses browser Text-to-Speech for questions</li>
          <li>For AI assessment: connect your Bedrock API endpoint below</li>
          <li>Works offline with self-assessment mode too</li>
        </ul>
        <div style="margin-top:12px">
          <label style="font-size:.85rem;color:var(--muted)">Bedrock API Endpoint:</label>
          <input type="text" id="api-endpoint" value="http://localhost:8081/assess" placeholder="http://localhost:8081/assess"
            style="width:100%;padding:8px;margin-top:4px;background:var(--bg);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:.85rem">
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3>🎯 Choose Interview Topic</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px" id="topic-buttons"></div>
    </div>

    <div id="interview-area" style="display:none">
      <div class="card" style="margin-bottom:15px;border-color:var(--accent2)" id="question-card">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3 id="q-counter">Question 1 of 7</h3>
          <span class="badge badge-purple" id="q-topic">Topic</span>
        </div>
        <p id="q-text" style="font-size:1.1rem;margin:16px 0;line-height:1.7"></p>
        <button onclick="speakQuestion()" style="padding:6px 12px;background:transparent;border:1px solid var(--border);border-radius:6px;color:var(--text);cursor:pointer;font-size:.85rem">🔊 Read Aloud</button>
      </div>

      <div class="card" style="margin-bottom:15px">
        <h3>Your Answer</h3>
        <div style="display:flex;gap:10px;margin:12px 0;align-items:center">
          <button id="mic-btn" onclick="toggleVoice()"
            style="padding:12px 24px;background:var(--accent);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:1rem;display:flex;align-items:center;gap:8px">
            🎤 Start Speaking
          </button>
          <span id="mic-status" style="color:var(--muted);font-size:.85rem"></span>
        </div>
        <textarea id="answer-input" rows="6" placeholder="Your answer will appear here as you speak, or type directly..."
          style="width:100%;padding:12px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.95rem;resize:vertical;font-family:inherit"></textarea>
        <div style="display:flex;gap:10px;margin-top:12px">
          <button onclick="submitAnswer()" style="padding:10px 24px;background:var(--accent2);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:.95rem">✅ Submit Answer</button>
          <button onclick="skipQuestion()" style="padding:10px 24px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--text);cursor:pointer;font-size:.95rem">⏭️ Skip</button>
        </div>
      </div>

      <div id="assessment-area" style="display:none" class="card" style="margin-bottom:15px">
      </div>

      <div id="final-report" style="display:none"></div>
    </div>
  `;
  populateTopicButtons();
}

function populateTopicButtons() {
  const allDays = [...WEEK1,...WEEK2,...WEEK3,...WEEK4,...WEEK5].filter(d => d.questions);
  const el = document.getElementById('topic-buttons');
  if (!el) return;
  el.innerHTML = allDays.map(d =>
    `<button onclick='startInterview(${JSON.stringify(d.title)}, ${JSON.stringify(d.questions)})'
      style="padding:8px 14px;background:var(--card);border:1px solid var(--border);border-radius:6px;color:var(--text);cursor:pointer;font-size:.85rem;transition:.2s"
      onmouseover="this.style.borderColor='var(--accent2)'" onmouseout="this.style.borderColor='var(--border)'">${d.title}</button>`
  ).join('');
}

function startInterview(topic, questions) {
  showTab('interviewer');
  interviewState = { active:true, questions:questions, currentQ:0, answers:[], topic:topic };
  document.getElementById('interview-area').style.display = 'block';
  document.getElementById('final-report').style.display = 'none';
  document.getElementById('final-report').innerHTML = '';
  showQuestion();
}

function showQuestion() {
  const s = interviewState;
  if (s.currentQ >= s.questions.length) { showFinalReport(); return; }
  document.getElementById('q-counter').textContent = `Question ${s.currentQ+1} of ${s.questions.length}`;
  document.getElementById('q-topic').textContent = s.topic;
  document.getElementById('q-text').textContent = s.questions[s.currentQ];
  document.getElementById('answer-input').value = '';
  document.getElementById('assessment-area').style.display = 'none';
  // Auto-read question
  setTimeout(() => speakQuestion(), 500);
}

function speakQuestion() {
  const text = document.getElementById('q-text').textContent;
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95; u.pitch = 1;
    speechSynthesis.speak(u);
  }
}

function toggleVoice() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    document.getElementById('mic-status').textContent = '❌ Speech recognition not supported. Use Chrome or Edge.';
    return;
  }
  if (isListening) { stopListening(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  let finalTranscript = document.getElementById('answer-input').value;
  recognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalTranscript += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    document.getElementById('answer-input').value = finalTranscript + interim;
  };
  recognition.onerror = (e) => {
    document.getElementById('mic-status').textContent = `Error: ${e.error}`;
    stopListening();
  };
  recognition.onend = () => { if (isListening) recognition.start(); };
  recognition.start();
  isListening = true;
  document.getElementById('mic-btn').innerHTML = '⏹️ Stop Recording';
  document.getElementById('mic-btn').style.background = '#ef4444';
  document.getElementById('mic-status').textContent = '🔴 Listening...';
}

function stopListening() {
  if (recognition) recognition.stop();
  isListening = false;
  document.getElementById('mic-btn').innerHTML = '🎤 Start Speaking';
  document.getElementById('mic-btn').style.background = 'var(--accent)';
  document.getElementById('mic-status').textContent = 'Recording stopped.';
}

async function submitAnswer() {
  stopListening();
  const answer = document.getElementById('answer-input').value.trim();
  if (!answer) { alert('Please provide an answer first.'); return; }
  const s = interviewState;
  const question = s.questions[s.currentQ];
  s.answers.push({ question, answer, qIndex: s.currentQ });

  const apiEndpoint = document.getElementById('api-endpoint')?.value;
  const area = document.getElementById('assessment-area');
  area.style.display = 'block';

  if (apiEndpoint) {
    area.innerHTML = '<p style="color:var(--accent)">⏳ AI is assessing your answer...</p>';
    try {
      const resp = await fetch(apiEndpoint, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ question: `Assess this TPM interview answer.
Topic: ${s.topic}
Question: ${question}
Answer: ${answer}

Score on 1-10 for: Clarity, Technical Depth, Structure (STAR if behavioral), Relevance.
Give specific improvement suggestions. Be constructive but honest. Format as markdown.` })
      });
      const data = await resp.json();
      area.innerHTML = `<div class="card" style="border-color:var(--accent3)"><h3>📊 AI Assessment</h3><div style="margin-top:12px;white-space:pre-wrap;color:var(--muted);font-size:.9rem">${data.answer || data.response || 'Assessment received.'}</div></div>`;
    } catch(e) {
      area.innerHTML = selfAssess(question, answer);
    }
  } else {
    area.innerHTML = selfAssess(question, answer);
  }
}

function selfAssess(question, answer) {
  const wordCount = answer.split(/\s+/).length;
  const hasStructure = /first|second|third|additionally|moreover|finally|in conclusion/i.test(answer);
  const hasSTAR = /situation|task|action|result/i.test(answer);
  const hasTechnical = /architecture|system|database|api|service|scale|latency|throughput|availability/i.test(answer);
  const hasMetrics = /\d+%|\d+ms|\d+k|\d+m|slo|sli|p99|p95/i.test(answer);
  const isBehavioral = /tell me about|describe a time|star/i.test(question);

  let clarity = Math.min(10, Math.round(wordCount/20) + (hasStructure?2:0));
  let depth = Math.min(10, (hasTechnical?4:1) + (hasMetrics?3:0) + Math.min(3, Math.round(wordCount/40)));
  let structure = Math.min(10, (hasStructure?4:1) + (isBehavioral && hasSTAR?4:2) + (wordCount>50?2:0));
  let relevance = Math.min(10, 5 + (hasTechnical?2:0) + (wordCount>30?2:0) + (hasMetrics?1:0));

  const avg = ((clarity+depth+structure+relevance)/4).toFixed(1);
  const tips = [];
  if (wordCount < 50) tips.push("Your answer is quite short. Aim for 100-200 words with specific examples.");
  if (!hasStructure) tips.push("Add structure: use 'First... Second... Finally...' to organize your thoughts.");
  if (isBehavioral && !hasSTAR) tips.push("Use the STAR format: Situation → Task → Action → Result.");
  if (!hasTechnical) tips.push("Include more technical specifics: mention actual technologies, patterns, or metrics.");
  if (!hasMetrics) tips.push("Add quantifiable metrics: latency targets, throughput numbers, team sizes, timelines.");
  if (tips.length === 0) tips.push("Solid answer! Consider adding a trade-off discussion or alternative approach.");

  return `<div class="card" style="border-color:var(--accent3)">
    <h3>📊 Self-Assessment (connect Bedrock API for AI scoring)</h3>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:16px 0">
      ${[['Clarity',clarity],['Depth',depth],['Structure',structure],['Relevance',relevance]].map(([l,v]) =>
        `<div style="text-align:center"><div style="font-size:1.8rem;font-weight:700;color:${v>=7?'var(--accent3)':v>=5?'#fbbf24':'#ef4444'}">${v}</div><div style="font-size:.8rem;color:var(--muted)">${l}</div></div>`
      ).join('')}
    </div>
    <div style="text-align:center;margin-bottom:16px"><span style="font-size:.9rem;color:var(--muted)">Average: </span><span style="font-size:1.2rem;font-weight:700;color:var(--accent)">${avg}/10</span></div>
    <h4 style="margin-bottom:8px">💡 Improvement Tips</h4>
    <ul>${tips.map(t => `<li>${t}</li>`).join('')}</ul>
    <div style="margin-top:16px;display:flex;gap:10px">
      <button onclick="nextQuestion()" style="padding:10px 24px;background:var(--accent);border:none;border-radius:8px;color:#fff;cursor:pointer">Next Question →</button>
    </div>
  </div>`;
}

function skipQuestion() {
  stopListening();
  interviewState.answers.push({ question:interviewState.questions[interviewState.currentQ], answer:'[SKIPPED]', qIndex:interviewState.currentQ });
  nextQuestion();
}

function nextQuestion() {
  interviewState.currentQ++;
  showQuestion();
}

function showFinalReport() {
  document.getElementById('interview-area').style.display = 'none';
  const el = document.getElementById('final-report');
  el.style.display = 'block';
  const s = interviewState;
  const answered = s.answers.filter(a => a.answer !== '[SKIPPED]').length;
  const skipped = s.answers.length - answered;

  el.innerHTML = `
    <div class="card" style="border-color:var(--accent2);margin-bottom:20px">
      <h2 style="margin-bottom:16px">📋 Interview Session Report</h2>
      <p><strong>Topic:</strong> ${s.topic}</p>
      <p><strong>Questions:</strong> ${s.questions.length} | <strong>Answered:</strong> ${answered} | <strong>Skipped:</strong> ${skipped}</p>
      <div class="progress-bar" style="margin:16px 0"><div class="progress-fill" style="width:${Math.round(answered/s.questions.length*100)}%;background:linear-gradient(90deg,var(--accent),var(--accent2))"></div></div>
    </div>
    <h3 class="section-title">Your Answers</h3>
    ${s.answers.map((a,i) => `
      <div class="card" style="margin-bottom:12px">
        <h4 style="color:var(--accent)">Q${i+1}: ${a.question}</h4>
        <p style="margin-top:8px;color:${a.answer==='[SKIPPED]'?'#ef4444':'var(--muted)'};font-size:.9rem;white-space:pre-wrap">${a.answer}</p>
      </div>`).join('')}
    <div class="card" style="border-color:var(--accent3);margin-top:20px">
      <h3>🎯 Improvement Plan</h3>
      <ul>
        <li>Review skipped questions and prepare written answers</li>
        <li>For short answers, expand with specific examples and metrics</li>
        <li>Practice answering out loud — record and listen back</li>
        <li>For behavioral questions, always use STAR format</li>
        <li>For system design, always start with requirements and constraints</li>
        <li>Time yourself: aim for 3-5 minutes per behavioral, 35 minutes for system design</li>
      </ul>
      <button onclick="startInterview('${s.topic}', ${JSON.stringify(s.questions).replace(/'/g,"\\'")})"
        style="margin-top:16px;padding:10px 24px;background:var(--accent2);border:none;border-radius:8px;color:#fff;cursor:pointer">🔄 Retry This Topic</button>
    </div>`;
}

// ── Resources Tab ──
const RESOURCES = [
  {cat:"System Design",items:[
    {name:"Designing Data-Intensive Applications",type:"Book",url:"https://dataintensive.net/"},
    {name:"System Design Interview - Alex Xu",type:"Book",url:"https://www.amazon.com/dp/B08CMF2CQF"},
    {name:"System Design Primer (GitHub)",type:"Free",url:"https://github.com/donnemartin/system-design-primer"},
    {name:"ByteByteGo YouTube",type:"YouTube",url:"https://www.youtube.com/c/ByteByteGo"},
    {name:"Gaurav Sen YouTube",type:"YouTube",url:"https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7ber0Q"},
    {name:"AWS Well-Architected Framework",type:"AWS",url:"https://aws.amazon.com/architecture/well-architected/"},
    {name:"AWS Architecture Center",type:"AWS",url:"https://aws.amazon.com/architecture/"}
  ]},
  {cat:"AI / ML / GenAI",items:[
    {name:"Coursera: Andrew Ng ML Specialization",type:"Course",url:"https://www.coursera.org/specializations/machine-learning-introduction"},
    {name:"Coursera: GenAI with LLMs",type:"Course",url:"https://www.coursera.org/learn/generative-ai-with-llms"},
    {name:"3Blue1Brown: Neural Networks",type:"YouTube",url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"},
    {name:"AWS Bedrock Documentation",type:"AWS",url:"https://docs.aws.amazon.com/bedrock/"},
    {name:"AWS SageMaker Documentation",type:"AWS",url:"https://docs.aws.amazon.com/sagemaker/"},
    {name:"Chip Huyen: Designing ML Systems",type:"Book",url:"https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/"}
  ]},
  {cat:"Databricks & Data Engineering",items:[
    {name:"Coursera: Databricks Lakehouse Fundamentals",type:"Course",url:"https://www.coursera.org/learn/databricks-lakehouse-fundamentals"},
    {name:"Databricks Documentation",type:"Docs",url:"https://docs.databricks.com/"},
    {name:"Delta Lake Documentation",type:"Docs",url:"https://docs.delta.io/latest/index.html"},
    {name:"AWS Lake Formation",type:"AWS",url:"https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"},
    {name:"MLflow Documentation",type:"Docs",url:"https://mlflow.org/docs/latest/index.html"}
  ]},
  {cat:"TPM / Leadership",items:[
    {name:"Exponent: TPM Interview Course",type:"Course",url:"https://www.tryexponent.com/courses/tpm"},
    {name:"The Staff Engineer's Path",type:"Book",url:"https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/"},
    {name:"Cracking the PM Interview",type:"Book",url:"https://www.amazon.com/dp/0984782818"},
    {name:"LinkedIn: Technical Program Management",type:"Course",url:"https://www.linkedin.com/learning/technical-program-management-foundations"},
    {name:"Pramp: Free Mock Interviews",type:"Free",url:"https://www.pramp.com/"},
    {name:"interviewing.io",type:"Platform",url:"https://interviewing.io/"}
  ]}
];

function renderResources() {
  const el = document.getElementById('resources');
  el.innerHTML = '<h2 class="section-title">📚 Curated Resources</h2>' +
    RESOURCES.map(r => `
      <h3 style="margin:20px 0 10px;color:var(--accent)">${r.cat}</h3>
      <table><thead><tr><th>Resource</th><th>Type</th><th>Link</th></tr></thead>
      <tbody>${r.items.map(i => `<tr><td>${i.name}</td><td><span class="badge badge-blue">${i.type}</span></td>
        <td><a href="${i.url}" target="_blank" style="color:var(--accent)">Open →</a></td></tr>`).join('')}</tbody></table>`
    ).join('');
}

// ── Tracker Tab ──
function renderTracker() {
  const el = document.getElementById('tracker');
  const topics = [
    "Scalability & Load Balancing","Database Design & CAP Theorem","Distributed Systems","API Design & Microservices",
    "AWS Core Services","Event-Driven Architecture","Data Pipelines","AI/ML Fundamentals","GenAI & LLMs","RAG & Vector DBs",
    "Search & Observability","Program Management","Cross-Functional Leadership","Security & Compliance",
    "Cost Optimization","Multi-Region Systems","Real-Time Systems","AI Agents","Data-Intensive Apps",
    "Databricks & Lakehouse","Spark & ETL","Streaming & MLflow","Data Governance","Data Platform Design",
    "STAR Stories (8-10)","Mock Interviews (3+)","Behavioral Prep","Voice Practice Sessions"
  ];
  const saved = JSON.parse(localStorage.getItem('tpm-tracker2')||'{}');
  const checked = Object.values(saved).filter(Boolean).length;
  const pct = Math.round(checked/topics.length*100);

  el.innerHTML = `
    <h2 class="section-title">✅ Progress Tracker</h2>
    <div class="card" style="margin-bottom:20px">
      <h3>Overall: ${pct}% (${checked}/${topics.length})</h3>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--accent2))"></div></div>
    </div>
    <div class="grid-2">
      <div class="card checklist"><h3>📐 Technical Topics</h3>
        ${topics.slice(0,14).map((t,i) => `<label><input type="checkbox" ${saved[i]?'checked':''} onchange="toggleCheck(${i})"> ${t}</label>`).join('')}
      </div>
      <div class="card checklist"><h3>🤖 Advanced & Soft Skills</h3>
        ${topics.slice(14).map((t,i) => `<label><input type="checkbox" ${saved[i+14]?'checked':''} onchange="toggleCheck(${i+14})"> ${t}</label>`).join('')}
      </div>
    </div>`;
}

function toggleCheck(i) {
  const saved = JSON.parse(localStorage.getItem('tpm-tracker2')||'{}');
  saved[i] = !saved[i];
  localStorage.setItem('tpm-tracker2', JSON.stringify(saved));
  renderTracker();
}

document.addEventListener('DOMContentLoaded', init);
