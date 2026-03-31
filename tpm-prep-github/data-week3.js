const WEEK3 = [
  {
    date:"Apr 17, 2026 (Fri)", title:"Program Management & Technical Decisions",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"TPM frameworks",
       links:[
         {name:"Exponent: Principal TPM Interview (12 min, 2025)",url:"https://www.youtube.com/results?search_query=exponent+principal+tpm+interview+2025"},
         {name:"Exponent: TPM System Design (10 min, 2025)",url:"https://www.youtube.com/results?search_query=exponent+tpm+system+design+interview+2025"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Agile at scale (SAFe 6.0), OKRs, RFC writing, build vs buy, tech debt",
       links:[
         {name:"Scaled Agile Framework (SAFe 6.0, 2025)",url:"https://scaledagileframework.com/"},
         {name:"Google: Design Docs at Google (blog)",url:"https://www.industrialempathy.com/posts/design-docs-at-google/"},
         {name:"LinkedIn: Technical Program Management (2025)",url:"https://www.linkedin.com/learning/technical-program-management-foundations"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Write a 1-page design doc for monolith to microservices migration",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How write an effective RFC/design doc? Essential sections?",
      "Describe your approach to managing technical debt.",
      "How make build vs buy decisions? Your framework?",
      "As a Principal TPM, how influence without authority?",
      "How set and track OKRs for a platform team?",
      "Describe a difficult technical trade-off. How did you decide?",
      "How manage dependencies across 5+ teams?"
    ]
  },
  {
    date:"Apr 20, 2026 (Mon)", title:"Cross-Functional Leadership & AI Ethics",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Leadership & responsible AI",
       links:[
         {name:"Exponent: TPM Behavioral Interview (10 min, 2025)",url:"https://www.youtube.com/results?search_query=exponent+tpm+behavioral+interview+2025"},
         {name:"AWS: Responsible AI with Bedrock Guardrails (8 min, 2025)",url:"https://www.youtube.com/results?search_query=aws+responsible+ai+bedrock+guardrails+2025"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Stakeholder management, conflict resolution, AI governance, EU AI Act, bias detection",
       links:[
         {name:"AWS: Responsible AI (2025)",url:"https://aws.amazon.com/machine-learning/responsible-ai/"},
         {name:"AWS: Bedrock Guardrails (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"},
         {name:"EU AI Act Summary (2025)",url:"https://artificialintelligenceact.eu/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Prepare STAR stories: leading ambiguous cross-team programs",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Tell me about leading a program with significant ambiguity. (STAR)",
      "How handle conflicting priorities between engineering and product?",
      "What is your framework for executive-level communication?",
      "How would you implement AI governance considering the EU AI Act?",
      "Describe delivering bad news to leadership. (STAR)",
      "How build trust with engineering teams as a TPM?",
      "What ethical considerations for launching an AI product in 2026?"
    ]
  },
  {
    date:"Apr 21, 2026 (Tue)", title:"Security & Compliance Architecture",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Security architecture",
       links:[
         {name:"ByteByteGo: Top Auth Mechanisms (8 min, 2025)",url:"https://www.youtube.com/watch?v=GhrvZ5nUWNg"},
         {name:"ByteByteGo: Session vs JWT vs Token (7 min, 2025)",url:"https://www.youtube.com/watch?v=fyTxwIa-1U0"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Zero trust, OAuth2/OIDC, passkeys, encryption, SOC2, GDPR, AWS security",
       links:[
         {name:"AWS: Security Hub Guide (2025)",url:"https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"},
         {name:"AWS: Verified Access (Zero Trust, 2025)",url:"https://docs.aws.amazon.com/verified-access/latest/ug/what-is-verified-access.html"},
         {name:"AWS: SaaS Lens Well-Architected (2025)",url:"https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/saas-lens.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a secure multi-tenant SaaS platform",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain zero trust architecture. How implement on AWS?",
      "Walk me through OAuth2 authorization code flow with PKCE.",
      "How design tenant isolation in multi-tenant SaaS?",
      "What is AWS Verified Access and how does it enable zero trust?",
      "How handle encryption at rest and in transit? Key rotation?",
      "As a TPM, how balance security with delivery speed?",
      "Design a compliance monitoring system for SOC2 on AWS."
    ]
  },
  {
    date:"Apr 22, 2026 (Wed)", title:"Cost Optimization & AI Products",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Cloud cost & AI product strategy",
       links:[
         {name:"ByteByteGo: Reduce Cloud Costs (8 min, 2025)",url:"https://www.youtube.com/watch?v=_OeKzNJBDOQ"},
         {name:"AWS re:Invent 2025: Cost Optimization",url:"https://www.youtube.com/results?search_query=aws+reinvent+2025+cost+optimization"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"FinOps, savings plans, spot, Graviton, auto-scaling, AI product metrics, LLM cost management",
       links:[
         {name:"AWS: Cost Optimization Pillar (2025)",url:"https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html"},
         {name:"AWS: Graviton Processors (2025)",url:"https://aws.amazon.com/ec2/graviton/"},
         {name:"AWS: Bedrock Pricing & Token Optimization (2026)",url:"https://aws.amazon.com/bedrock/pricing/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"STAR stories: driving cost optimization & AI product strategy",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How reduce AWS costs by 30% without impacting performance?",
      "What is FinOps and how does it change cloud cost management?",
      "How optimize LLM inference costs in production?",
      "Compare Graviton vs x86 for cost optimization.",
      "How handle auto-scaling for unpredictable AI workloads?",
      "As a TPM, how drive cost accountability across teams?",
      "Design a cost allocation and chargeback system."
    ]
  },
  {
    date:"Apr 23, 2026 (Thu)", title:"Week 3 Mock: Design Uber",
    blocks:[
      {t:"0:00-0:30",type:"🎬 Review",content:"Review week + Uber design",
       links:[
         {name:"ByteByteGo: Proximity Service Design (10 min, 2025)",url:"https://www.youtube.com/watch?v=M4lR_Va97cQ"},
         {name:"ByteByteGo: Design Uber (12 min, 2025)",url:"https://www.youtube.com/watch?v=lsKU38RKQSo"}
       ]},
      {t:"0:30-1:15",type:"📝 Full Mock",content:"Design Uber: matching, pricing, tracking, surge, payments",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Design Uber's ride matching system. How find nearest driver?",
      "How implement surge pricing? What data needed?",
      "Design real-time location tracking. What protocol?",
      "How handle payment processing and split payments?",
      "What geospatial indexing strategy (geohash, quadtree, H3)?",
      "How ensure the system works during peak hours?",
      "As a TPM, how manage Uber launch in a new country?"
    ]
  }
];
