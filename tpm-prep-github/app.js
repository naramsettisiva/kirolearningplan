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
    {id:'schedule',label:'📅 6-Week Schedule'},
    {id:'patterns',label:'🧩 Design Patterns'},
    {id:'interviewer',label:'🎙️ AI Interviewer'},
    {id:'prepagent',label:'📄 Resume & Prep Agent'},
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
  if (id === 'patterns') renderPatterns();
  if (id === 'resources') renderResources();
  if (id === 'tracker') renderTracker();
  if (id === 'interviewer') renderInterviewer();
  if (id === 'prepagent') renderPrepAgent();
}

// ── Schedule Tab ──
const allDaysCache = [];

function renderSchedule() {
  const el = document.getElementById('schedule');
  allDaysCache.length = 0;
  const weeks = [
    {n:1,t:"Foundations & System Design Basics",data:WEEK1},
    {n:2,t:"Advanced System Design & AI Deep Dive",data:WEEK2},
    {n:3,t:"TPM Skills & Leadership",data:WEEK3},
    {n:4,t:"Advanced Topics & Mock Interviews",data:WEEK4},
    {n:5,t:"Databricks, Data Lakes & Governance",data:WEEK5},
    {n:6,t:"Hands-On AI Use Cases & Labs",data:WEEK6}
  ];
  weeks.forEach(w => w.data.forEach(d => { if(d.questions) allDaysCache.push(d); }));
  el.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <h2 style="margin:0">📅 Schedule</h2>
      <span id="progress-summary" style="color:var(--accent3);font-weight:600;font-size:.95rem"></span>
    </div>` + weeks.map(w => `
    <details class="week-collapse" style="margin-bottom:8px">
      <summary class="section-title" style="cursor:pointer;user-select:none">
        <span style="transition:transform .2s;display:inline-block" class="collapse-arrow">▶</span>
        Week ${w.n}: ${w.t} <span style="font-size:.8rem;color:var(--muted);font-weight:400">(${w.data.length} days)</span>
      </summary>
      <div class="week-grid" style="margin-top:12px">${w.data.map(d => renderDayCard(d)).join('')}</div>
    </details>`).join('');
  el.querySelectorAll('details.week-collapse').forEach(det => {
    det.addEventListener('toggle', () => {
      det.querySelector('.collapse-arrow').style.transform = det.open ? 'rotate(90deg)' : '';
    });
  });
  updateProgressSummary();
}

function renderDayCard(d) {
  const idx = allDaysCache.indexOf(d);
  const dayKey = d.date.replace(/[^a-zA-Z0-9]/g,'');
  const blocks = d.blocks || [];
  const completedCount = blocks.filter((_,i) => isDayComplete(dayKey+'_'+i)).length;
  const allDone = completedCount === blocks.length && blocks.length > 0;
  return `<details class="card" style="cursor:default">
    <summary style="cursor:pointer;user-select:none;display:flex;align-items:center;gap:8px">
      <div style="min-width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0;
        background:${allDone?'var(--accent3)':completedCount>0?'rgba(59,130,246,.2)':'var(--border)'};
        color:${allDone?'#fff':completedCount>0?'var(--accent)':'var(--muted)'}">
        ${completedCount}/${blocks.length}
      </div>
      <div>
        <h3 style="display:inline;${allDone?'text-decoration:line-through;opacity:.6':''}">${d.date}</h3>
        <h4 style="color:var(--accent);margin-top:4px;${allDone?'opacity:.6':''}">${d.title}</h4>
      </div>
    </summary>
    <div style="margin-top:12px">
    ${blocks.map((b,i) => {
      const bKey = dayKey+'_'+i;
      const done = isDayComplete(bKey);
      return `<div class="time-block" style="${done?'opacity:.5':''}">
        <input type="checkbox" class="day-check" ${done?'checked':''} onclick="toggleDayComplete('${bKey}',this);this.closest('.card').querySelector('summary').click();this.closest('.card').querySelector('summary').click();"
          style="accent-color:var(--accent3);width:16px;height:16px;cursor:pointer;flex-shrink:0;margin-right:4px">
        <span class="time-label">${b.t}</span>
        <div style="${done?'text-decoration:line-through':''}">
          <strong>${b.type} ${b.content}</strong>
          ${b.links ? b.links.map(l => `<br><a href="${l.url}" target="_blank" style="color:var(--accent);font-size:.85rem">→ ${l.name}</a>`).join('') : ''}
        </div>
      </div>`;
    }).join('')}
    ${d.questions ? `
      <details style="margin-top:12px">
        <summary style="cursor:pointer;color:var(--accent2);font-weight:600">🤖 Interview Questions (${d.questions.length})</summary>
        <ol style="margin-top:8px;padding-left:20px;color:var(--muted);font-size:.9rem">
          ${d.questions.map(q => `<li style="padding:4px 0">${q}</li>`).join('')}
        </ol>
        <button onclick="startInterviewByIndex(${idx})"
          style="margin-top:10px;padding:8px 16px;background:var(--accent2);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:.9rem">
          🎙️ Start Voice Interview for This Topic
        </button>
      </details>` : ''}
    </div>
  </details>`;
}

function startInterviewByIndex(idx) {
  const d = allDaysCache[idx];
  if (d) startInterview(d.title, d.questions);
}

// ── Patterns Tab ──
function renderPatterns() {
  const el = document.getElementById('patterns');
  const renderTable = (items) => items.map(p => `
    <tr>
      <td><strong>${p.name}</strong></td>
      <td style="color:var(--muted);font-size:.85rem">${p.desc}</td>
      <td style="font-size:.85rem">${p.when}</td>
      <td style="font-size:.85rem;color:var(--accent)">${p.interview}</td>
    </tr>`).join('');

  el.innerHTML = `
    <h2 class="section-title">🧩 System Design Patterns (${PATTERNS.system.length})</h2>
    <p style="color:var(--muted);margin-bottom:16px">These patterns come up repeatedly in system design interviews. Know when to apply each one.</p>
    <table><thead><tr><th>Pattern</th><th>What It Does</th><th>When to Use</th><th>Interview Questions</th></tr></thead>
    <tbody>${renderTable(PATTERNS.system)}</tbody></table>

    <h2 class="section-title" style="margin-top:40px">🤖 AI / GenAI Design Patterns (${PATTERNS.ai.length})</h2>
    <p style="color:var(--muted);margin-bottom:16px">Essential patterns for designing AI systems — increasingly asked in Principal TPM interviews.</p>
    <table><thead><tr><th>Pattern</th><th>What It Does</th><th>When to Use</th><th>Interview Questions</th></tr></thead>
    <tbody>${renderTable(PATTERNS.ai)}</tbody></table>
  `;
}

// ── AI Interviewer — powered by interviewer-engine.js ──

// ── Resume & Prep Agent Tab ──
let resumeText = localStorage.getItem('resume-text') || '';
let prepRecognition = null;
let prepIsListening = false;

function renderPrepAgent() {
  const el = document.getElementById('prepagent');
  el.innerHTML = `
    <h2 class="section-title">📄 Resume & Interview Prep Agent</h2>
    <p style="color:var(--muted);margin-bottom:20px">Upload your resume, record your answers to common questions, and get AI-powered feedback using free open-source tools.</p>

    <div class="grid-2" style="margin-bottom:20px">
      <div class="card">
        <h3>🔗 Open-Source AI Agents (Free)</h3>
        <p style="color:var(--muted);font-size:.9rem;margin:8px 0">Use any of these free tools for AI-powered evaluation:</p>
        <ul>
          <li><a href="https://ollama.com/" target="_blank" style="color:var(--accent)">Ollama</a> — Run Llama 3, Mistral, Gemma locally (100% free, private)</li>
          <li><a href="https://aistudio.google.com/" target="_blank" style="color:var(--accent)">Google AI Studio</a> — Gemini 1.5 Pro free tier (generous limits)</li>
          <li><a href="https://github.com/open-webui/open-webui" target="_blank" style="color:var(--accent)">Open WebUI</a> — ChatGPT-like UI for Ollama (free, self-hosted)</li>
          <li><a href="https://dify.ai/" target="_blank" style="color:var(--accent)">Dify</a> — Open-source LLM app platform (free tier)</li>
          <li><a href="https://huggingface.co/chat/" target="_blank" style="color:var(--accent)">HuggingChat</a> — Free chat with open-source models</li>
          <li><a href="https://chat.mistral.ai/" target="_blank" style="color:var(--accent)">Mistral Le Chat</a> — Free Mistral Large access</li>
        </ul>
      </div>
      <div class="card">
        <h3>⚙️ Quick Setup (Ollama — Recommended)</h3>
        <pre style="background:var(--bg);padding:12px;border-radius:8px;font-size:.8rem;color:var(--text);margin-top:8px;overflow-x:auto"><code># Install Ollama (one command)
curl -fsSL https://ollama.com/install.sh | sh

# Pull a model (pick one)
ollama pull llama3.1        # 8B, good balance
ollama pull mistral         # 7B, fast
ollama pull gemma2          # 9B, Google's model

# Start the API server (runs on localhost:11434)
ollama serve

# Test it
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "Hello!"
}'</code></pre>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3>📄 Step 1: Upload Your Resume</h3>
      <p style="color:var(--muted);font-size:.9rem;margin:8px 0">Paste your resume text below. It stays in your browser (localStorage) — never sent anywhere unless you use the AI evaluation.</p>
      <textarea id="resume-input" rows="8" placeholder="Paste your resume text here..."
        style="width:100%;padding:12px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.9rem;resize:vertical;font-family:inherit">${resumeText}</textarea>
      <button onclick="saveResume()" style="margin-top:8px;padding:8px 16px;background:var(--accent);border:none;border-radius:6px;color:#fff;cursor:pointer">💾 Save Resume</button>
      <span id="resume-status" style="margin-left:12px;color:var(--accent3);font-size:.85rem">${resumeText ? '✅ Resume saved' : ''}</span>
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3>🎙️ Step 2: Practice Common Questions</h3>
      <p style="color:var(--muted);font-size:.9rem;margin:8px 0">Select a question, record your answer via voice, then get AI evaluation.</p>
      <div id="prep-questions"></div>
    </div>

    <div id="prep-interview-area" style="display:none">
      <div class="card" style="margin-bottom:15px;border-color:var(--accent2)">
        <h3 id="prep-q-text" style="font-size:1.1rem;line-height:1.6"></h3>
        <button onclick="speakPrepQuestion()" style="margin-top:8px;padding:6px 12px;background:transparent;border:1px solid var(--border);border-radius:6px;color:var(--text);cursor:pointer;font-size:.85rem">🔊 Read Aloud</button>
      </div>
      <div class="card" style="margin-bottom:15px">
        <h3>Your Answer</h3>
        <div style="display:flex;gap:10px;margin:12px 0;align-items:center">
          <button id="prep-mic-btn" onclick="togglePrepVoice()"
            style="padding:12px 24px;background:var(--accent);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:1rem">🎤 Start Speaking</button>
          <span id="prep-mic-status" style="color:var(--muted);font-size:.85rem"></span>
        </div>
        <textarea id="prep-answer" rows="6" placeholder="Speak or type your answer..."
          style="width:100%;padding:12px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.95rem;resize:vertical;font-family:inherit"></textarea>
        <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
          <button onclick="evalWithOllama()" style="padding:10px 20px;background:var(--accent2);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:.9rem">🦙 Evaluate with Ollama (local)</button>
          <button onclick="evalSelfAssess()" style="padding:10px 20px;background:var(--accent3);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:.9rem">📊 Self-Assess (no AI)</button>
          <button onclick="copyPromptToClipboard()" style="padding:10px 20px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--text);cursor:pointer;font-size:.9rem">📋 Copy Prompt (for any AI)</button>
        </div>
      </div>
      <div id="prep-eval-area"></div>
    </div>

    <div class="card" style="margin-top:20px">
      <h3>💡 Pro Tips</h3>
      <ul>
        <li><strong>Copy Prompt</strong> works with ANY AI — paste into ChatGPT, Gemini, HuggingChat, Claude, Mistral, etc.</li>
        <li><strong>Ollama</strong> runs 100% locally — your resume never leaves your machine</li>
        <li>For "Tell me about yourself" — aim for 2 minutes, structured as: current role → key achievements → why this role</li>
        <li>Record yourself, listen back, then re-record. Repetition builds confidence.</li>
        <li>Use the <strong>🎙️ AI Interviewer</strong> tab for topic-specific deep-dive questions</li>
      </ul>
    </div>`;

  renderPrepQuestions();
}

const PREP_QUESTIONS = [
  {cat:"General",questions:[
    "Tell me about yourself.",
    "Why are you looking to leave your current role?",
    "Why do you want to be a Principal TPM?",
    "What makes you a good fit for this role?",
    "Where do you see yourself in 5 years?",
    "Walk me through your resume."
  ]},
  {cat:"Leadership & Behavioral",questions:[
    "Tell me about a time you led a large cross-functional program. (STAR)",
    "Describe a situation where you had to influence without authority. (STAR)",
    "Tell me about a time you failed. What did you learn? (STAR)",
    "How do you handle disagreements with engineering leadership?",
    "Describe a time you had to make a decision with incomplete data. (STAR)",
    "Tell me about your biggest technical achievement. (STAR)",
    "How do you prioritize when everything is urgent?"
  ]},
  {cat:"Technical / System Design",questions:[
    "How would you explain microservices to a non-technical executive?",
    "What is your experience with distributed systems?",
    "How do you approach system design trade-offs?",
    "Describe your experience with AI/ML projects.",
    "How do you evaluate build vs buy decisions?",
    "What's your approach to technical debt?"
  ]},
  {cat:"AI / GenAI Specific",questions:[
    "How would you explain RAG to a VP of Engineering?",
    "What is your experience with LLMs and GenAI?",
    "How do you evaluate AI product readiness for production?",
    "What are the key risks of deploying GenAI in production?",
    "How would you build an AI strategy for a new team?",
    "Explain the difference between fine-tuning and RAG."
  ]}
];

function renderPrepQuestions() {
  const el = document.getElementById('prep-questions');
  if (!el) return;
  el.innerHTML = PREP_QUESTIONS.map(cat => `
    <h4 style="margin:16px 0 8px;color:var(--accent)">${cat.cat}</h4>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${cat.questions.map(q => `<button onclick="startPrepQuestion('${q.replace(/'/g,"\\'")}')"
        style="padding:6px 12px;background:var(--bg);border:1px solid var(--border);border-radius:6px;color:var(--text);cursor:pointer;font-size:.82rem;text-align:left;transition:.2s"
        onmouseover="this.style.borderColor='var(--accent2)'" onmouseout="this.style.borderColor='var(--border)'">${q}</button>`).join('')}
    </div>`).join('');
}

function saveResume() {
  resumeText = document.getElementById('resume-input').value;
  localStorage.setItem('resume-text', resumeText);
  document.getElementById('resume-status').textContent = '✅ Resume saved';
}

let currentPrepQ = '';
function startPrepQuestion(q) {
  currentPrepQ = q;
  document.getElementById('prep-interview-area').style.display = 'block';
  document.getElementById('prep-q-text').textContent = q;
  document.getElementById('prep-answer').value = '';
  document.getElementById('prep-eval-area').innerHTML = '';
  setTimeout(() => speakPrepQuestion(), 300);
}

function speakPrepQuestion() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(currentPrepQ);
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }
}

function togglePrepVoice() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    document.getElementById('prep-mic-status').textContent = '❌ Use Chrome or Edge for voice.';
    return;
  }
  if (prepIsListening) { stopPrepListening(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  prepRecognition = new SR();
  prepRecognition.continuous = true;
  prepRecognition.interimResults = true;
  prepRecognition.lang = 'en-US';
  let final = document.getElementById('prep-answer').value;
  prepRecognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) final += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    document.getElementById('prep-answer').value = final + interim;
  };
  prepRecognition.onerror = () => stopPrepListening();
  prepRecognition.onend = () => { if (prepIsListening) prepRecognition.start(); };
  prepRecognition.start();
  prepIsListening = true;
  document.getElementById('prep-mic-btn').innerHTML = '⏹️ Stop';
  document.getElementById('prep-mic-btn').style.background = '#ef4444';
  document.getElementById('prep-mic-status').textContent = '🔴 Listening...';
}

function stopPrepListening() {
  if (prepRecognition) prepRecognition.stop();
  prepIsListening = false;
  document.getElementById('prep-mic-btn').innerHTML = '🎤 Start Speaking';
  document.getElementById('prep-mic-btn').style.background = 'var(--accent)';
  document.getElementById('prep-mic-status').textContent = '';
}

function buildEvalPrompt() {
  const answer = document.getElementById('prep-answer').value.trim();
  return `You are a senior hiring manager interviewing for a Principal TPM role at a top tech company.

CANDIDATE'S RESUME:
${resumeText || '[No resume provided]'}

INTERVIEW QUESTION: ${currentPrepQ}

CANDIDATE'S ANSWER:
${answer}

Please evaluate this answer and provide:

1. **Score** (1-10): Overall quality
2. **Clarity** (1-10): Was the answer clear and well-structured?
3. **Relevance** (1-10): Did it address the question directly?
4. **Depth** (1-10): Did it show sufficient technical/leadership depth?
5. **STAR Format** (if behavioral): Did they use Situation-Task-Action-Result?

**Strengths:** What was good about this answer?

**Improvements:** Specific, actionable suggestions to make it stronger.

**Example of a better answer:** Write a 3-4 sentence example of how to improve the weakest part.

**Verdict:** Would this answer pass at a Principal TPM level? (Strong Yes / Yes / Borderline / No)`;
}

async function evalWithOllama() {
  stopPrepListening();
  const answer = document.getElementById('prep-answer').value.trim();
  if (!answer) { alert('Record or type an answer first.'); return; }
  const area = document.getElementById('prep-eval-area');
  area.innerHTML = '<div class="card"><p style="color:var(--accent)">⏳ Evaluating with Ollama (localhost:11434)...</p></div>';
  try {
    const resp = await fetch('http://localhost:11434/api/generate', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ model:'llama3.1', prompt: buildEvalPrompt(), stream: false })
    });
    const data = await resp.json();
    area.innerHTML = `<div class="card" style="border-color:var(--accent3)"><h3>🦙 Ollama Evaluation</h3><div style="margin-top:12px;white-space:pre-wrap;color:var(--muted);font-size:.9rem;line-height:1.7">${data.response}</div></div>`;
  } catch(e) {
    area.innerHTML = `<div class="card" style="border-color:#ef4444"><h3>❌ Ollama not running</h3><p style="color:var(--muted);margin-top:8px">Make sure Ollama is running: <code>ollama serve</code> and you have a model: <code>ollama pull llama3.1</code></p><p style="color:var(--muted);margin-top:8px">Or use <strong>Copy Prompt</strong> and paste into any free AI (Gemini, HuggingChat, Mistral, etc.)</p></div>`;
  }
}

function evalSelfAssess() {
  stopPrepListening();
  const answer = document.getElementById('prep-answer').value.trim();
  if (!answer) { alert('Record or type an answer first.'); return; }
  const area = document.getElementById('prep-eval-area');
  const wc = answer.split(/\s+/).length;
  const hasSTAR = /situation|task|action|result/i.test(answer);
  const hasNumbers = /\d+%|\d+\s*(team|people|engineers|services|million|billion)/i.test(answer);
  const hasStructure = /first|second|third|additionally|finally/i.test(answer);
  const isBehavioral = /STAR|tell me about|describe a time/i.test(currentPrepQ);
  const tips = [];
  if (wc < 80) tips.push("Too short. Aim for 150-300 words (about 1-2 minutes spoken).");
  if (wc > 500) tips.push("Too long. Tighten to 2-3 minutes max. Be concise.");
  if (isBehavioral && !hasSTAR) tips.push("Use STAR format: Situation → Task → Action → Result.");
  if (!hasNumbers) tips.push("Add metrics: team size, timeline, impact numbers, percentages.");
  if (!hasStructure) tips.push("Add structure: 'First... Second... Finally...'");
  if (!resumeText) tips.push("Upload your resume for personalized feedback.");
  if (tips.length === 0) tips.push("Good structure! Now practice saying it out loud in under 2 minutes.");

  area.innerHTML = `<div class="card" style="border-color:var(--accent3)">
    <h3>📊 Self-Assessment</h3>
    <p style="margin:8px 0;color:var(--muted)">Word count: ${wc} | ${isBehavioral ? (hasSTAR ? '✅ STAR detected' : '❌ Missing STAR') : 'Non-behavioral'} | ${hasNumbers ? '✅ Has metrics' : '⚠️ Add metrics'}</p>
    <h4 style="margin:12px 0 8px">💡 Suggestions</h4>
    <ul>${tips.map(t => `<li>${t}</li>`).join('')}</ul>
    <p style="margin-top:12px;color:var(--muted);font-size:.85rem">For AI-powered evaluation, use <strong>Ollama</strong> or <strong>Copy Prompt</strong> → paste into any free AI.</p>
  </div>`;
}

function copyPromptToClipboard() {
  stopPrepListening();
  const answer = document.getElementById('prep-answer').value.trim();
  if (!answer) { alert('Record or type an answer first.'); return; }
  navigator.clipboard.writeText(buildEvalPrompt()).then(() => {
    const area = document.getElementById('prep-eval-area');
    area.innerHTML = `<div class="card" style="border-color:var(--accent)">
      <h3>📋 Prompt Copied!</h3>
      <p style="color:var(--muted);margin-top:8px">Paste into any of these free AI tools:</p>
      <ul>
        <li><a href="https://aistudio.google.com/" target="_blank" style="color:var(--accent)">Google AI Studio (Gemini)</a> — Best free option</li>
        <li><a href="https://huggingface.co/chat/" target="_blank" style="color:var(--accent)">HuggingChat</a> — Open-source models</li>
        <li><a href="https://chat.mistral.ai/" target="_blank" style="color:var(--accent)">Mistral Le Chat</a> — Free Mistral Large</li>
        <li><a href="https://chatgpt.com/" target="_blank" style="color:var(--accent)">ChatGPT</a> — Free tier available</li>
        <li><a href="https://claude.ai/" target="_blank" style="color:var(--accent)">Claude</a> — Free tier available</li>
      </ul>
    </div>`;
  });
}

// ── Resources Tab ──
const RESOURCES = [
  {cat:"System Design",items:[
    {name:"System Design Primer (GitHub — 280K+ stars)",type:"Free",url:"https://github.com/donnemartin/system-design-primer"},
    {name:"ByteByteGo: System Design 101 (GitHub)",type:"Free",url:"https://github.com/ByteByteGoHq/system-design-101"},
    {name:"ByteByteGo YouTube Channel",type:"YouTube",url:"https://www.youtube.com/c/ByteByteGo"},
    {name:"Gaurav Sen YouTube Channel",type:"YouTube",url:"https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7ber0Q"},
    {name:"NeetCode: System Design Playlist",type:"YouTube",url:"https://www.youtube.com/playlist?list=PLot-Xpze53le35rQuIbRET3YwEtrcJfdt"},
    {name:"HelloInterview: System Design (free)",type:"Free",url:"https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"},
    {name:"AWS Well-Architected Framework",type:"AWS",url:"https://aws.amazon.com/architecture/well-architected/"},
    {name:"AWS Architecture Center",type:"AWS",url:"https://aws.amazon.com/architecture/"},
    {name:"AWS Builders Library (articles)",type:"AWS",url:"https://aws.amazon.com/builders-library/"},
    {name:"AWS Skill Builder (free courses)",type:"AWS",url:"https://explore.skillbuilder.aws/"},
    {name:"AWS Well-Architected Labs (hands-on)",type:"AWS",url:"https://www.wellarchitectedlabs.com/"},
    {name:"Google Cloud Architecture Center",type:"Google",url:"https://cloud.google.com/architecture"}
  ]},
  {cat:"AI Frameworks & Tools",items:[
    {name:"LangChain Docs + Tutorials",type:"Docs",url:"https://python.langchain.com/docs/tutorials/"},
    {name:"LangGraph: Build Agents (tutorials)",type:"Docs",url:"https://langchain-ai.github.io/langgraph/tutorials/"},
    {name:"LlamaIndex: Getting Started",type:"Docs",url:"https://docs.llamaindex.ai/en/stable/getting_started/"},
    {name:"CrewAI: Multi-Agent Quickstart",type:"Docs",url:"https://docs.crewai.com/quickstart"},
    {name:"Ollama: Run LLMs Locally (free)",type:"Free",url:"https://ollama.com/"},
    {name:"HuggingFace: Models & Free Inference",type:"Free",url:"https://huggingface.co/"},
    {name:"Prompt Engineering Guide (free)",type:"Free",url:"https://www.promptingguide.ai/"},
    {name:"Anthropic: Prompt Engineering Docs",type:"Free",url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"},
    {name:"Open WebUI (ChatGPT-like for Ollama)",type:"Free",url:"https://github.com/open-webui/open-webui"},
    {name:"Dify: Open-Source LLM App Platform",type:"Free",url:"https://dify.ai/"}
  ]},
  {cat:"AI / ML / GenAI Courses",items:[
    {name:"DeepLearning.AI: GenAI with LLMs (Coursera)",type:"Course",url:"https://www.coursera.org/learn/generative-ai-with-llms"},
    {name:"Andrew Ng: ML Specialization (Coursera)",type:"Course",url:"https://www.coursera.org/specializations/machine-learning-introduction"},
    {name:"DeepLearning.AI: AI Agents (Coursera, 2025)",type:"Course",url:"https://www.coursera.org/learn/multi-ai-agent-systems-with-crewai"},
    {name:"Google: ML Crash Course (free)",type:"Google",url:"https://developers.google.com/machine-learning/crash-course"},
    {name:"Google: GenAI Learning Path (free)",type:"Google",url:"https://www.cloudskillsboost.google/paths/118"},
    {name:"AWS: GenAI Foundations (Skill Builder, free)",type:"AWS",url:"https://explore.skillbuilder.aws/learn/course/external/view/elearning/17904/generative-ai-foundations"},
    {name:"AWS: Bedrock Workshop (free, hands-on)",type:"AWS",url:"https://catalog.workshops.aws/building-with-amazon-bedrock/en-US"},
    {name:"3Blue1Brown: Neural Networks (YouTube)",type:"YouTube",url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"},
    {name:"Andrej Karpathy: Neural Nets Zero to Hero (YouTube)",type:"YouTube",url:"https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"},
    {name:"AWS: Bedrock Documentation",type:"AWS",url:"https://docs.aws.amazon.com/bedrock/"},
    {name:"AWS: SageMaker Documentation",type:"AWS",url:"https://docs.aws.amazon.com/sagemaker/"}
  ]},
  {cat:"Databricks & Data Engineering",items:[
    {name:"Databricks Lakehouse Fundamentals (Coursera)",type:"Course",url:"https://www.coursera.org/learn/databricks-lakehouse-fundamentals"},
    {name:"Databricks Academy (free courses)",type:"Free",url:"https://www.databricks.com/learn"},
    {name:"Databricks Documentation",type:"Docs",url:"https://docs.databricks.com/"},
    {name:"Delta Lake Documentation",type:"Docs",url:"https://docs.delta.io/latest/index.html"},
    {name:"MLflow Documentation",type:"Docs",url:"https://mlflow.org/docs/latest/index.html"},
    {name:"AWS: Lake Formation Guide",type:"AWS",url:"https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"},
    {name:"Confluent: Kafka 101 (free course)",type:"Free",url:"https://developer.confluent.io/courses/apache-kafka/events/"}
  ]},
  {cat:"TPM / Leadership / Interview",items:[
    {name:"Exponent: TPM Interview Course",type:"Course",url:"https://www.tryexponent.com/courses/tpm"},
    {name:"Exponent: TPM YouTube Playlist (free)",type:"YouTube",url:"https://www.youtube.com/results?search_query=exponent+tpm+interview"},
    {name:"LinkedIn: Technical Program Management Foundations",type:"LinkedIn",url:"https://www.linkedin.com/learning/technical-program-management-foundations"},
    {name:"LinkedIn: Influence Without Authority",type:"LinkedIn",url:"https://www.linkedin.com/learning/influencing-without-authority"},
    {name:"Pramp: Free Mock Interviews",type:"Free",url:"https://www.pramp.com/"},
    {name:"interviewing.io (free practice)",type:"Free",url:"https://interviewing.io/"},
    {name:"HelloInterview: AI Mock Interviews",type:"Free",url:"https://www.hellointerview.com/"},
    {name:"STAR Method Guide (The Muse)",type:"Free",url:"https://www.themuse.com/advice/star-interview-method"},
    {name:"Levels.fyi: TPM Compensation Data",type:"Free",url:"https://www.levels.fyi/?compare=Google,Meta,Microsoft&track=Technical%20Program%20Manager"}
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
    "Build: RAG Chatbot","Build: AI Agent with Tools","Build: Sentiment Pipeline","Build: Multimodal AI","Build: End-to-End AI Product",
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

// ── Per-Topic Completion (localStorage) ──
function isDayComplete(key) {
  return JSON.parse(localStorage.getItem('day-complete') || '{}')[key] || false;
}
function toggleDayComplete(key, cb) {
  const data = JSON.parse(localStorage.getItem('day-complete') || '{}');
  data[key] = !data[key];
  localStorage.setItem('day-complete', JSON.stringify(data));
  if (cb) cb.checked = data[key];
  updateProgressSummary();
}
function updateProgressSummary() {
  const data = JSON.parse(localStorage.getItem('day-complete') || '{}');
  const allWeeks = [WEEK1,WEEK2,WEEK3,WEEK4,WEEK5,WEEK6];
  let total = 0, done = 0;
  allWeeks.forEach(w => w.forEach(d => {
    const dayKey = d.date.replace(/[^a-zA-Z0-9]/g,'');
    (d.blocks||[]).forEach((_,i) => { total++; if(data[dayKey+'_'+i]) done++; });
  }));
  const el = document.getElementById('progress-summary');
  if (el) el.textContent = `${done}/${total} topics completed (${total?Math.round(done/total*100):0}%)`;
}

// ── Global Search ──
function globalSearch(query) {
  const resultsEl = document.getElementById('search-results');
  const countEl = document.getElementById('search-count');
  if (!query || query.length < 2) {
    resultsEl.style.display = 'none';
    countEl.textContent = '';
    return;
  }
  const q = query.toLowerCase();
  const results = [];

  // Search schedule days
  const allWeeks = [
    {n:1,data:WEEK1},{n:2,data:WEEK2},{n:3,data:WEEK3},
    {n:4,data:WEEK4},{n:5,data:WEEK5},{n:6,data:WEEK6}
  ];
  allWeeks.forEach(w => w.data.forEach(d => {
    const text = `${d.title} ${d.blocks.map(b=>b.content).join(' ')} ${(d.questions||[]).join(' ')}`.toLowerCase();
    if (text.includes(q)) results.push({type:'📅 Schedule',title:`Week ${w.n}: ${d.date} — ${d.title}`,
      detail: d.blocks.map(b=>`${b.type} ${b.content}`).join(' | ')});
  }));

  // Search patterns
  if (typeof PATTERNS !== 'undefined') {
    [...PATTERNS.system,...PATTERNS.ai].forEach(p => {
      if (`${p.name} ${p.desc} ${p.when} ${p.interview}`.toLowerCase().includes(q))
        results.push({type:'🧩 Pattern',title:p.name,detail:p.desc});
    });
  }

  // Search interview topics
  if (typeof INTERVIEW_TOPICS !== 'undefined') {
    INTERVIEW_TOPICS.forEach(g => g.topics.forEach(t => {
      const text = `${t.name} ${t.questions.join(' ')}`.toLowerCase();
      if (text.includes(q)) results.push({type:'🎙️ Interview',title:`${t.icon} ${t.name}`,
        detail: t.questions.filter(qq=>qq.toLowerCase().includes(q)).slice(0,2).join(' | ') || t.questions[0]});
    }));
  }

  // Search resources
  if (typeof RESOURCES !== 'undefined') {
    RESOURCES.forEach(cat => cat.items.forEach(r => {
      if (`${r.name} ${cat.cat}`.toLowerCase().includes(q))
        results.push({type:'📚 Resource',title:r.name,detail:`${cat.cat} — <a href="${r.url}" target="_blank" style="color:var(--accent)">Open →</a>`});
    }));
  }

  // Search tips
  if (typeof TIPS !== 'undefined') {
    TIPS.forEach(t => {
      if (t.toLowerCase().includes(q)) results.push({type:'💡 Tip',title:t.substring(0,120),detail:''});
    });
  }

  // Search prep questions
  if (typeof PREP_QUESTIONS !== 'undefined') {
    PREP_QUESTIONS.forEach(cat => cat.questions.forEach(qq => {
      if (qq.toLowerCase().includes(q)) results.push({type:'📄 Prep Q',title:qq,detail:cat.cat});
    }));
  }

  countEl.textContent = `${results.length} results`;
  if (results.length === 0) {
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = '<p style="color:var(--muted);text-align:center">No results found.</p>';
    return;
  }
  resultsEl.style.display = 'block';
  resultsEl.innerHTML = results.slice(0,30).map(r => `
    <div style="padding:10px 12px;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:flex-start">
      <span class="badge badge-blue" style="min-width:90px;text-align:center">${r.type}</span>
      <div><strong style="font-size:.9rem">${highlight(r.title,q)}</strong>
        ${r.detail?`<br><span style="color:var(--muted);font-size:.82rem">${highlight(r.detail,q)}</span>`:''}</div>
    </div>`).join('') + (results.length>30?`<p style="color:var(--muted);text-align:center;padding:8px">Showing 30 of ${results.length} results</p>`:'');
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(59,130,246,.3);color:var(--text);padding:0 2px;border-radius:2px">$1</mark>');
}

document.addEventListener('DOMContentLoaded', init);
