# Principal TPM Interview Prep — Requirements Document

## Project Overview
A self-hosted, static HTML interview prep site for Principal TPM roles outside Amazon.
6-week intensive schedule, 2 hours/day, with AI-powered interview simulation.

---

## Core Requirements

### 1. Schedule (6 Weeks, Apr 1 – May 14, 2026)
- 2 hours/day, weekdays only
- Daily structure: 10 min video → 35 min study → 30 min practice → 45 min Q&A
- Videos must be short (5-12 min), not hour-long lectures
- Content must be recent: GenAI last 6 months, System Design last 1 year, other topics latest available
- No books — only online content: YouTube, Coursera, AWS, Google, LinkedIn, free tools
- Each day has curated links to relevant courses and interview questions

### 2. Weekly Topics
- **Week 1:** Foundations — Scalability, Database Design, Distributed Systems, APIs, AWS Core
- **Week 2:** Advanced — Event-Driven, Data Pipelines, AI/ML, GenAI/LLMs, Search & Observability
- **Week 3:** TPM Skills — Program Management, Leadership, Security, Cost Optimization
- **Week 4:** Advanced — Multi-Region, AI Agents, Data-Intensive Apps, Mock Interviews
- **Week 5:** Databricks & Data Lakes — Lakehouse, Spark/ETL, Streaming/MLflow, Governance
- **Week 6:** Hands-On AI Labs — RAG with LangChain, Agents with LangGraph, LlamaIndex, Multimodal, End-to-End AI Product

### 3. Design Patterns Reference
- 20 System Design patterns (Load Balancer, Circuit Breaker, CQRS, Saga, Sharding, etc.)
- 23 AI/GenAI patterns (RAG, Agentic RAG, ReAct, LangChain/LangGraph, LlamaIndex, CrewAI, MCP, Guardrails, etc.)
- Each pattern shows: what it does, when to use, which interview questions it applies to

### 4. AI Interviewer (Multi-Turn, Ollama-Powered)
- Simulates a real interview with follow-up questions (not just Q&A)
- Interviewer asks 3-5 probing follow-ups per topic before moving on
- Follow-ups dig into: specifics, trade-offs, scale, failure modes, alternatives, metrics
- Chat-style UI with conversation bubbles
- Voice input via browser Speech Recognition (Chrome/Edge)
- Text-to-speech reads questions aloud
- Topics organized by week/group (Scalability, Database Design, etc.)
- End-of-interview evaluation covering:
  - Technical: Depth, Problem Solving, Breadth
  - Soft Skills: Clarity, Structure, Confidence, Conciseness, Stakeholder Awareness
  - Verdict: Strong Hire / Hire / Borderline / No Hire
  - Improvement plan with concrete steps
- 3 modes: Ollama (local, free), Copy-Paste (any free AI), Scripted fallback (offline)
- No Bedrock/cloud dependency — uses open-source Ollama by default

### 5. Resume & Prep Agent
- Upload/paste resume text (saved to localStorage, never sent externally)
- 25+ common interview questions across 4 categories:
  - General: "Tell me about yourself", "Walk me through your resume", etc.
  - Leadership & Behavioral: STAR-format questions
  - Technical / System Design
  - AI / GenAI Specific
- Voice recording for answers (Speech Recognition)
- 3 evaluation modes:
  - Ollama (local, free, private)
  - Copy Prompt (for any free AI: Gemini, HuggingChat, ChatGPT, Claude, Mistral)
  - Self-Assess (offline, instant)
- Evaluation includes scoring on Clarity, Relevance, Depth, STAR format

### 6. Resources (Online Only, No Books)
- 60+ curated resources across 6 categories
- Sources: YouTube, Coursera, AWS (Skill Builder, Workshops, Docs), Google (ML Crash Course, GenAI Path), LinkedIn Learning, GitHub repos, free tools
- AI Frameworks: LangChain, LangGraph, LlamaIndex, CrewAI, Ollama, HuggingFace, Dify
- All content must be high-quality, reviewed, and freely accessible

### 7. Progress Tracker
- 33 topics with checkbox tracking
- localStorage persistence across sessions
- Overall completion percentage with progress bar

### 8. Popular AI Topics Covered
- LangChain / LangGraph (agent chains, stateful graphs)
- LlamaIndex (RAG, document processing, advanced retrieval)
- CrewAI / AutoGen (multi-agent orchestration)
- Ollama / vLLM (local LLM serving)
- MCP (Model Context Protocol)
- RAG, Agentic RAG, Multimodal AI
- Prompt Engineering (chain-of-thought, few-shot, JSON mode)
- Guardrails, HITL, Evaluation Pipelines
- Bedrock Agents, Bedrock Flows, Bedrock Knowledge Bases

---

## Technical Requirements

### Hosting
- Pure static HTML/CSS/JS — no build step, no backend, no dependencies
- Hostable on GitHub Pages, S3, or any static file server
- Package as zip for manual GitHub upload

### AI Backend
- Primary: Ollama (localhost:11434) — free, local, private
- Fallback: Copy-paste prompt to any free AI
- Fallback: Self-assessment (offline)
- Optional: AWS Bedrock via local proxy (for those with AWS access)

### Browser Requirements
- Speech Recognition: Chrome or Edge (Web Speech API)
- Text-to-Speech: All modern browsers
- localStorage for persistence

### AWS Account Access (for hands-on labs)
- Amazon Retail/SDO employees: Use Conduit + Burner Accounts (not Isengard)
  - Conduit: https://conduit.security.a2z.com/
  - Burner Accounts: https://conduit.security.a2z.com/burner-accounts
  - $1000/month cap, 1-week lifetime, instant provisioning, no approval needed
- AWS employees: Use Isengard personal accounts

---

## File Structure
```
index.html              — Main HTML page
styles.css              — All styles
app.js                  — Core app logic (schedule, patterns, resources, tracker, prep agent)
interviewer-engine.js   — Multi-turn AI interviewer with Ollama
data-week1.js           — Week 1: Foundations & System Design
data-week2.js           — Week 2: Advanced Design & AI
data-week3.js           — Week 3: TPM & Leadership
data-week4.js           — Week 4: Advanced Topics & Mocks
data-week5.js           — Week 5: Databricks & Data Lakes
data-week6.js           — Week 6: Hands-On AI Labs
data-patterns.js        — 43 Design Patterns (System + AI)
README.md               — GitHub Pages deployment instructions
```

---

## Deployment
1. Download zip from `/workspace/tpm-prep-github.zip`
2. Create new GitHub repo (public)
3. Upload all files via GitHub web UI
4. Settings → Pages → Source: main → / (root) → Save
5. Live at: `https://<username>.github.io/<repo>/`
