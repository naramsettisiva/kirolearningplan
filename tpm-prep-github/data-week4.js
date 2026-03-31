const WEEK4 = [
  {
    date:"Apr 24, 2026 (Fri)", title:"Multi-Region & Global Systems",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Global architecture",
       links:[
         {name:"ByteByteGo: Design WhatsApp (10 min, 2025)",url:"https://www.youtube.com/watch?v=vvhC64hQZMk"},
         {name:"ByteByteGo: DNS Explained (6 min, 2025)",url:"https://www.youtube.com/watch?v=27r4Bzuj5NQ"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Global load balancing, data replication, conflict resolution, active-active",
       links:[
         {name:"AWS: Multi-Region Fundamentals (2025)",url:"https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html"},
         {name:"AWS: DynamoDB Global Tables (2025)",url:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html"},
         {name:"AWS: Aurora Global Database (2025)",url:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a globally distributed chat system",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How design active-active multi-region architecture?",
      "What conflict resolution strategies for multi-region writes?",
      "How does DynamoDB Global Tables handle replication?",
      "Design a chat system across 5 regions with <100ms latency.",
      "Active-active vs active-passive failover differences?",
      "How test multi-region failover?",
      "As a TPM, how coordinate a multi-region migration?"
    ]
  },
  {
    date:"Apr 27, 2026 (Mon)", title:"Real-Time Systems & AI Agents",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Real-time & agentic AI (latest)",
       links:[
         {name:"Anthropic: Building Effective Agents (blog, Dec 2025)",url:"https://www.anthropic.com/research/building-effective-agents"},
         {name:"Andrew Ng: Agentic AI Patterns (12 min, 2025)",url:"https://www.youtube.com/watch?v=sal78ACtGTc"},
         {name:"AWS re:Invent 2025: Bedrock Agents & Multi-Agent",url:"https://www.youtube.com/results?search_query=aws+reinvent+2025+bedrock+agents+multi+agent"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"AI agents, multi-agent orchestration, tool use, MCP protocol, Bedrock Agents, WebSockets, CRDTs",
       links:[
         {name:"AWS: Bedrock Agents (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"},
         {name:"AWS: Bedrock Multi-Agent Collaboration (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html"},
         {name:"Model Context Protocol (MCP) Spec (2025)",url:"https://modelcontextprotocol.io/"},
         {name:"CRDT Resources (interactive)",url:"https://crdt.tech/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a multi-agent AI system for customer support",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "What are agentic AI patterns? Explain reflection, tool use, planning.",
      "What is MCP (Model Context Protocol) and why does it matter?",
      "How design a multi-agent system with supervisor routing?",
      "What is the ReAct pattern in AI agents?",
      "Compare single-agent vs multi-agent architectures. Trade-offs?",
      "How do you evaluate and test AI agents in production?",
      "As a TPM, how evaluate build vs buy for AI agent capabilities?"
    ]
  },
  {
    date:"Apr 28, 2026 (Tue)", title:"Data-Intensive Apps & End-to-End AI Systems",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Advanced data & AI systems",
       links:[
         {name:"ByteByteGo: Design Spotify (10 min, 2025)",url:"https://www.youtube.com/watch?v=_K-eupuDVEc"},
         {name:"ByteByteGo: How ChatGPT Works (8 min, 2025)",url:"https://www.youtube.com/watch?v=bSvTVREwSNw"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Time-series, graph DBs, geospatial, AI customer support with RAG + agents + HITL",
       links:[
         {name:"AWS: Neptune Analytics (Graph, 2025)",url:"https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html"},
         {name:"AWS: Timestream for InfluxDB (2025)",url:"https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html"},
         {name:"AWS: Bedrock Flows (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design Spotify: streaming, AI-powered discovery, social",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "When use a graph database vs relational?",
      "Design AI-powered customer support with human escalation using Bedrock Flows.",
      "How handle time-series data at scale?",
      "Design Spotify's music recommendation using GenAI.",
      "How implement human-in-the-loop for AI systems?",
      "What is a feature store and why important?",
      "Design an end-to-end AI platform for a mid-size company."
    ]
  },
  {
    date:"Apr 29, 2026 (Wed)", title:"Mock Interview & Behavioral Deep Dive",
    blocks:[
      {t:"0:00-1:00",type:"📝 Full Mock",content:"45-min system design + 15-min behavioral. Record yourself.",
       links:[
         {name:"Pramp: Free Mock Interviews",url:"https://www.pramp.com/"},
         {name:"interviewing.io",url:"https://interviewing.io/"},
         {name:"HelloInterview: AI Mock Interviews (2025)",url:"https://www.hellointerview.com/"}
       ]},
      {t:"1:00-2:00",type:"📝 Behavioral",content:"Prepare 8-10 STAR stories covering all key themes",
       links:[{name:"Exponent: TPM Behavioral (2025)",url:"https://www.tryexponent.com/courses/tpm/tpm-behavioral"}]}
    ],
    questions:[
      "Tell me about driving alignment across teams with conflicting priorities. (STAR)",
      "Describe a program that failed. What did you learn? (STAR)",
      "Tell me about deciding with incomplete information. (STAR)",
      "How handle when engineering disagrees with your recommendation?",
      "Describe your most complex cross-functional program.",
      "Tell me about innovating to solve a customer problem. (STAR)",
      "How do you prioritize when everything is P0?",
      "Describe influencing senior leadership to change direction. (STAR)"
    ]
  },
  {
    date:"Apr 30, 2026 (Thu)", title:"Final Mock & Review",
    blocks:[
      {t:"0:00-1:00",type:"📝 Full Mock",content:"Design a system of your choice (weakest area). Full end-to-end.",
       links:[
         {name:"System Design Primer (GitHub, updated 2025)",url:"https://github.com/donnemartin/system-design-primer"},
         {name:"ByteByteGo YouTube (2025-2026)",url:"https://www.youtube.com/c/ByteByteGo"},
         {name:"HelloInterview: System Design (2025)",url:"https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"}
       ]},
      {t:"1:00-2:00",type:"📖 Review",content:"Consolidate notes, identify gaps, plan continued learning",
       links:[
         {name:"AWS Certification Paths (2025)",url:"https://aws.amazon.com/certification/"},
         {name:"Levels.fyi: TPM Compensation (2026)",url:"https://www.levels.fyi/?compare=Google,Meta,Microsoft&track=Technical%20Program%20Manager"}
       ]}
    ],
    questions:[
      "Pick any system and design it end-to-end in 35 minutes.",
      "What are your top 3 technical strengths for this role?",
      "How do you stay current with technology trends?",
      "Your approach to the first 90 days as a Principal TPM?",
      "How do you measure success of a technical program?",
      "What questions do you have for us? (Prepare 5-7)"
    ]
  }
];
