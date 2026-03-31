const WEEK4 = [
  {
    date:"Apr 24, 2026 (Fri)", title:"Multi-Region & Global Systems",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Global architecture patterns",
       links:[
         {name:"AWS re:Invent: Multi-Region Architecture",url:"https://www.youtube.com/watch?v=2e29I3dA8o4"},
         {name:"ByteByteGo: Design WhatsApp",url:"https://www.youtube.com/watch?v=vvhC64hQZMk"},
         {name:"Gaurav Sen: Geo-Distributed Systems",url:"https://www.youtube.com/watch?v=OtYaN2RYILc"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Global load balancing, data replication, conflict resolution, active-active",
       links:[
         {name:"AWS Route 53 Docs",url:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html"},
         {name:"AWS Global Accelerator",url:"https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html"},
         {name:"DynamoDB Global Tables",url:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a globally distributed chat system (WhatsApp)",
       links:[{name:"AWS: Multi-Region Fundamentals",url:"https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How do you design an active-active multi-region architecture?",
      "What conflict resolution strategies exist for multi-region writes?",
      "How does DynamoDB Global Tables handle replication and conflicts?",
      "Design a chat system that works across 5 regions with <100ms latency.",
      "What is the difference between active-active and active-passive failover?",
      "How do you test multi-region failover? What's your runbook?",
      "As a TPM, how do you coordinate a multi-region migration across teams?"
    ]
  },
  {
    date:"Apr 27, 2026 (Mon)", title:"Real-Time Systems & AI Agents",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Real-time systems & agentic AI",
       links:[
         {name:"ByteByteGo: WebSockets vs SSE vs Polling",url:"https://www.youtube.com/watch?v=6QnTNKOJk5A"},
         {name:"AWS re:Invent: Building AI Agents",url:"https://www.youtube.com/watch?v=jFHdlPnMfkY"},
         {name:"Andrew Ng: Agentic AI Patterns",url:"https://www.youtube.com/watch?v=sal78ACtGTc"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"WebSockets, SSE, CRDTs, AI agent patterns, tool use, Bedrock Agents",
       links:[
         {name:"AWS Bedrock Agents",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"},
         {name:"AWS AppSync (Real-Time)",url:"https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html"},
         {name:"Coursera: Multi-AI Agent Systems",url:"https://www.coursera.org/learn/multi-ai-agent-systems-with-crewai"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design Google Docs real-time collaboration",
       links:[{name:"CRDT Resources",url:"https://crdt.tech/"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare WebSockets, SSE, and long polling. When would you use each?",
      "What are CRDTs and how do they enable conflict-free collaboration?",
      "Design a real-time collaborative editor. How do you handle concurrent edits?",
      "What are agentic AI patterns? Explain reflection, tool use, and planning.",
      "How would you design a multi-agent system for complex task automation?",
      "What is the ReAct pattern in AI agents?",
      "As a TPM, how do you evaluate build vs buy for AI agent capabilities?"
    ]
  },
  {
    date:"Apr 28, 2026 (Tue)", title:"Data-Intensive Apps & AI System Design",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Advanced data systems & end-to-end AI",
       links:[
         {name:"ByteByteGo: Design Spotify",url:"https://www.youtube.com/watch?v=_K-eupuDVEc"},
         {name:"AWS re:Invent: AI-Powered Applications",url:"https://www.youtube.com/watch?v=N0PHKR5oUfc"},
         {name:"Chip Huyen: ML Systems Design",url:"https://www.youtube.com/watch?v=pli1K75PSa8"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Time-series, graph DBs, geospatial, AI customer support with RAG + agents + HITL",
       links:[
         {name:"AWS Timestream",url:"https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html"},
         {name:"AWS Neptune (Graph DB)",url:"https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"},
         {name:"AWS: Human-in-the-Loop ML",url:"https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-use-augmented-ai-a2i-human-review-loops.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design Spotify: streaming, discovery, social features",
       links:[{name:"Spotify Engineering Blog",url:"https://engineering.atspotify.com/"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "When would you use a graph database vs relational? Give examples.",
      "Design an AI-powered customer support system with escalation to humans.",
      "How do you handle time-series data at scale? What storage would you use?",
      "Design Spotify's music recommendation system.",
      "How do you implement human-in-the-loop for AI systems?",
      "What is a feature store and why is it important for ML systems?",
      "Design an end-to-end ML platform for a mid-size company."
    ]
  },
  {
    date:"Apr 29, 2026 (Wed)", title:"Mock Interview & Behavioral Deep Dive",
    blocks:[
      {t:"0:00-1:00",type:"📝 Full Mock",content:"45-min system design + 15-min behavioral. Record yourself.",
       links:[
         {name:"Exponent: System Design Mock",url:"https://www.tryexponent.com/courses/system-design-interview"},
         {name:"Pramp: Free Mock Interviews",url:"https://www.pramp.com/"},
         {name:"interviewing.io",url:"https://interviewing.io/"}
       ]},
      {t:"1:00-2:00",type:"📝 Behavioral",content:"Prepare 8-10 STAR stories covering all key themes",
       links:[
         {name:"Exponent: TPM Behavioral",url:"https://www.tryexponent.com/courses/tpm/tpm-behavioral"},
         {name:"LinkedIn: Behavioral Interview Prep",url:"https://www.linkedin.com/learning/nail-your-behavioral-interview"}
       ]}
    ],
    questions:[
      "Tell me about a time you drove alignment across teams with conflicting priorities. (STAR)",
      "Describe a program that failed. What did you learn? (STAR)",
      "Tell me about a time you had to make a decision with incomplete information. (STAR)",
      "How do you handle a situation where an engineering team disagrees with your technical recommendation?",
      "Describe your most complex cross-functional program. How did you manage it?",
      "Tell me about a time you innovated to solve a customer problem. (STAR)",
      "How do you prioritize when everything is P0?",
      "Describe a time you influenced senior leadership to change direction. (STAR)"
    ]
  },
  {
    date:"Apr 30, 2026 (Thu)", title:"Final Mock & Review",
    blocks:[
      {t:"0:00-1:00",type:"📝 Full Mock",content:"Design a system of your choice (weakest area). Full end-to-end with AWS.",
       links:[
         {name:"System Design Primer (GitHub)",url:"https://github.com/donnemartin/system-design-primer"},
         {name:"ByteByteGo: All System Design Topics",url:"https://www.youtube.com/c/ByteByteGo"},
         {name:"Exponent: Full TPM Course",url:"https://www.tryexponent.com/courses/tpm"}
       ]},
      {t:"1:00-2:00",type:"📖 Review",content:"Consolidate notes, identify gaps, plan continued learning",
       links:[
         {name:"AWS Certification Paths",url:"https://aws.amazon.com/certification/"},
         {name:"Levels.fyi: TPM Compensation",url:"https://www.levels.fyi/?compare=Google,Meta,Microsoft&track=Technical%20Program%20Manager"}
       ]}
    ],
    questions:[
      "Pick any system and design it end-to-end in 35 minutes. Go.",
      "What are your top 3 technical strengths and how do they apply to this role?",
      "How do you stay current with technology trends?",
      "What's your approach to the first 90 days as a Principal TPM at a new company?",
      "How do you measure the success of a technical program?",
      "What questions do you have for us? (Prepare 5-7 thoughtful questions)"
    ]
  }
];
