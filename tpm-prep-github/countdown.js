// ── Countdown Timer & Tip Renderer ──

const PREP_START = new Date('2026-04-01T00:00:00');
const PREP_END = new Date('2026-05-14T23:59:59');

function renderCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const now = new Date();
  const target = now < PREP_START ? PREP_START : PREP_END;
  const label = now < PREP_START ? 'Prep starts in' : now < PREP_END ? 'Prep ends in' : 'Prep complete! 🎉';
  if (now >= PREP_END) { el.innerHTML = `<span style="color:var(--accent3)">${label}</span>`; return; }
  const diff = target - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  el.innerHTML = `<span style="color:var(--muted);font-size:.85rem">${label}</span>
    <span style="font-size:1.3rem;font-weight:700;color:var(--accent);margin-left:8px">${d}d ${h}h ${m}m ${s}s</span>`;
}

function renderTip() {
  const el = document.getElementById('tip-banner');
  if (!el || typeof TIPS === 'undefined') return;
  const idx = Math.floor(Date.now() / 7200000) % TIPS.length;
  const tip = TIPS[idx];
  el.innerHTML = `<span id="tip-text">${tip}</span>
    <a href="#" onclick="expandTip(event)" style="color:var(--accent);font-weight:600;margin-left:8px;white-space:nowrap">More →</a>
    <div id="tip-detail" style="display:none;margin-top:10px;padding:12px;background:var(--card);border-radius:8px;text-align:left;font-size:.88rem;line-height:1.7;color:var(--muted)"></div>`;
}

async function expandTip(e) {
  e.preventDefault();
  const detail = document.getElementById('tip-detail');
  const tipText = document.getElementById('tip-text').textContent;
  if (detail.style.display !== 'none') { detail.style.display = 'none'; return; }

  detail.style.display = 'block';
  detail.innerHTML = '<em>Loading explanation...</em>';

  const prompt = `Explain this concept in exactly 3-4 sentences for a Principal TPM interview. Be specific and practical, include a real-world example:\n\n${tipText}`;

  // Try Ollama first
  const url = localStorage.getItem('ollama-url') || 'http://localhost:11434';
  const model = localStorage.getItem('ollama-model') || 'llama3.1';
  try {
    const r = await fetch(url + '/api/generate', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({model, prompt, stream: false})
    });
    const data = await r.json();
    detail.innerHTML = data.response;
  } catch(err) {
    // Fallback: Google search with "explain" prefix
    const q = encodeURIComponent(tipText.replace(/^.{2}\s*/, '') + ' explained simply');
    detail.innerHTML = `<p>Ollama not running. Get a quick explanation from:</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <a href="https://www.google.com/search?q=${q}" target="_blank" style="padding:6px 14px;background:var(--accent);border-radius:6px;color:#fff;text-decoration:none;font-size:.82rem">Google</a>
        <a href="https://www.perplexity.ai/search?q=${q}" target="_blank" style="padding:6px 14px;background:var(--accent2);border-radius:6px;color:#fff;text-decoration:none;font-size:.82rem">Perplexity AI</a>
        <a href="https://www.phind.com/search?q=${q}" target="_blank" style="padding:6px 14px;background:var(--accent3);border-radius:6px;color:#fff;text-decoration:none;font-size:.82rem">Phind</a>
      </div>`;
  }
}

renderCountdown();
renderTip();
setInterval(renderCountdown, 1000);
setInterval(renderTip, 60000);
