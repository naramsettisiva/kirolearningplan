const WEEK6 = [
  {
    date:"May 8, 2026 (Fri)", title:"Build: RAG Chatbot with LangChain + Ollama",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"LangChain RAG tutorial",
       links:[
         {name:"LangChain: RAG from Scratch (12 min, 2025)",url:"https://www.youtube.com/results?search_query=langchain+rag+from+scratch+2025"},
         {name:"Ollama: Run LLMs Locally (5 min, 2025)",url:"https://www.youtube.com/results?search_query=ollama+tutorial+getting+started+2025"}
       ]},
      {t:"0:10-0:45",type:"🛠️ Build",content:"Build a document Q&A chatbot: Ollama (free local LLM) + LangChain + ChromaDB (free vector store)",
       links:[
         {name:"LangChain: RAG Tutorial (free, 2025)",url:"https://python.langchain.com/docs/tutorials/rag/"},
         {name:"Ollama: Download & Run (free)",url:"https://ollama.com/"},
         {name:"ChromaDB: Open-Source Vector DB (free)",url:"https://www.trychroma.com/"},
         {name:"LlamaIndex: RAG Starter (free, 2025)",url:"https://docs.llamaindex.ai/en/stable/getting_started/starter_example/"},
         {name:"AWS: Bedrock Knowledge Bases (if using AWS)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Design",content:"Draw architecture, identify bottlenecks, plan for production",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through the RAG architecture. What are the components?",
      "Compare LangChain vs LlamaIndex for RAG. When use each?",
      "How would you scale this to 10K concurrent users?",
      "What chunking strategy did you use? Why?",
      "How evaluate answer quality? What metrics (faithfulness, relevance)?",
      "How handle documents that update frequently?",
      "Compare Ollama vs Bedrock vs OpenAI API for production. Trade-offs?"
    ]
  },
  {
    date:"May 11, 2026 (Mon)", title:"Build: AI Agent with LangGraph + Tools",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"LangGraph agent tutorial",
       links:[
         {name:"LangChain: LangGraph Agents (10 min, 2025)",url:"https://www.youtube.com/results?search_query=langgraph+agent+tutorial+2025"},
         {name:"CrewAI: Multi-Agent Tutorial (10 min, 2025)",url:"https://www.youtube.com/results?search_query=crewai+multi+agent+tutorial+2025"}
       ]},
      {t:"0:10-0:45",type:"🛠️ Build",content:"Build a ReAct agent with LangGraph: web search + calculator + DB query tools",
       links:[
         {name:"LangGraph: Build an Agent (free, 2025)",url:"https://langchain-ai.github.io/langgraph/tutorials/introduction/"},
         {name:"CrewAI: Getting Started (free, 2025)",url:"https://docs.crewai.com/quickstart"},
         {name:"OpenAI: Function Calling (free tier)",url:"https://platform.openai.com/docs/guides/function-calling"},
         {name:"Google AI Studio: Gemini (free tier)",url:"https://aistudio.google.com/"},
         {name:"Anthropic: Tool Use Docs (2025)",url:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use"}
       ]},
      {t:"0:45-1:15",type:"📝 Design",content:"Design multi-agent system with CrewAI: researcher + writer + reviewer agents",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the ReAct loop. How does the agent decide which tool to call?",
      "Compare LangGraph vs CrewAI vs AutoGen. When use each?",
      "How handle tool failures gracefully in an agent?",
      "What is the difference between LangChain chains vs LangGraph graphs?",
      "How add memory/conversation history to your agent?",
      "How prevent the agent from taking harmful actions?",
      "Design a multi-agent customer support system with escalation."
    ]
  },
  {
    date:"May 12, 2026 (Tue)", title:"Build: Streaming AI Pipeline + LlamaIndex",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"LlamaIndex & streaming AI",
       links:[
         {name:"LlamaIndex: Advanced RAG Techniques (10 min, 2025)",url:"https://www.youtube.com/results?search_query=llamaindex+advanced+rag+2025"},
         {name:"HuggingFace: Open-Source AI Models (8 min, 2025)",url:"https://www.youtube.com/results?search_query=huggingface+open+source+models+2025"}
       ]},
      {t:"0:10-0:45",type:"🛠️ Build",content:"Build: LlamaIndex advanced RAG (re-ranking, hybrid search) + HuggingFace models (free)",
       links:[
         {name:"LlamaIndex: Advanced RAG (free, 2025)",url:"https://docs.llamaindex.ai/en/stable/optimizing/production_rag/"},
         {name:"HuggingFace: Free Inference API",url:"https://huggingface.co/inference-api"},
         {name:"HuggingFace: Open LLM Leaderboard (2025)",url:"https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard"},
         {name:"Streamlit: Build AI Dashboards (free)",url:"https://streamlit.io/"},
         {name:"Gradio: Build ML Demos (free)",url:"https://www.gradio.app/"}
       ]},
      {t:"0:45-1:15",type:"📝 Design",content:"Design a production RAG system with re-ranking, hybrid search, and evaluation",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "What is hybrid search (keyword + semantic)? Why better than pure vector?",
      "Explain re-ranking in RAG. How does it improve retrieval quality?",
      "Compare LlamaIndex vs LangChain for document processing.",
      "How evaluate RAG quality? Explain RAGAS metrics.",
      "How handle multi-format documents (PDF, HTML, tables)?",
      "Design a RAG system that handles 1M documents with sub-second latency.",
      "What open-source models would you choose for production RAG in 2026?"
    ]
  },
  {
    date:"May 13, 2026 (Wed)", title:"Build: Multimodal AI + Prompt Engineering Lab",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Multimodal AI & prompt engineering",
       links:[
         {name:"Google: Gemini Multimodal Tutorial (8 min, 2025)",url:"https://www.youtube.com/results?search_query=gemini+multimodal+tutorial+2025"},
         {name:"Prompt Engineering Guide (10 min, 2025)",url:"https://www.youtube.com/results?search_query=prompt+engineering+advanced+techniques+2025"}
       ]},
      {t:"0:10-0:45",type:"🛠️ Build",content:"Build: Image analysis app with Gemini (free) + advanced prompt engineering patterns",
       links:[
         {name:"Google AI Studio: Gemini (free tier)",url:"https://aistudio.google.com/"},
         {name:"Prompt Engineering Guide (free, 2025)",url:"https://www.promptingguide.ai/"},
         {name:"Anthropic: Prompt Engineering (free, 2025)",url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"},
         {name:"Replicate: Run Open-Source Models (free tier)",url:"https://replicate.com/"},
         {name:"Together AI: Open-Source Models (free tier)",url:"https://www.together.ai/"}
       ]},
      {t:"0:45-1:15",type:"📝 Design",content:"Design a content moderation system using multimodal AI",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare chain-of-thought vs tree-of-thought prompting.",
      "How do you structure prompts for consistent JSON output?",
      "Design a content moderation pipeline for a social platform.",
      "What are the latency considerations for real-time image analysis?",
      "How handle prompt injection attacks in production?",
      "Compare Gemini vs Claude vs GPT-4 for multimodal tasks.",
      "What privacy considerations exist for image/video AI?"
    ]
  },
  {
    date:"May 14, 2026 (Thu)", title:"Build: End-to-End AI Product + Final Mock",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Full-stack AI architecture",
       links:[
         {name:"Chip Huyen: Real-World AI Systems (10 min, 2025)",url:"https://www.youtube.com/results?search_query=chip+huyen+ai+engineering+2025"},
         {name:"AI Engineer: Building AI Products (10 min, 2025)",url:"https://www.youtube.com/results?search_query=ai+engineer+summit+building+products+2025"}
       ]},
      {t:"0:10-0:45",type:"🛠️ Build",content:"Combine: LangGraph agent + LlamaIndex RAG + Streamlit UI into one AI product",
       links:[
         {name:"LangChain: Full-Stack AI App (free)",url:"https://python.langchain.com/docs/tutorials/"},
         {name:"Vercel AI SDK (free, 2025)",url:"https://sdk.vercel.ai/docs"},
         {name:"Ollama: Run LLMs Locally (free)",url:"https://ollama.com/"},
         {name:"Open WebUI: ChatGPT-like UI for Ollama (free)",url:"https://github.com/open-webui/open-webui"},
         {name:"Dify: Open-Source LLM App Platform (free)",url:"https://dify.ai/"}
       ]},
      {t:"0:45-1:15",type:"📝 Full Mock",content:"Design an AI-powered product from scratch — full system design interview",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Final assessment"}
    ],
    questions:[
      "Design an AI-powered product of your choice end-to-end.",
      "How handle model versioning and rollback in production?",
      "What monitoring strategy for AI systems? What metrics?",
      "Compare LangChain vs LlamaIndex vs direct API calls. When use each?",
      "Design a feedback loop to continuously improve your AI system.",
      "What's your cost optimization strategy for LLM inference at scale?",
      "As a Principal TPM, present a 6-month roadmap for this AI product."
    ]
  }
];
