const WEEK3 = [
  {
    date:"Apr 17, 2026 (Fri)", title:"Program Management & Technical Decisions",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"TPM frameworks & decision-making",
       links:[
         {name:"Exponent: What Does a TPM Do?",url:"https://www.youtube.com/watch?v=Hn3UGm0uH7s"},
         {name:"Lenny's Podcast: Staff+ Engineering",url:"https://www.youtube.com/watch?v=c3mM6WBR31Y"},
         {name:"AWS re:Invent: Writing Good Design Docs",url:"https://www.youtube.com/watch?v=LGkMhSGwahk"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Agile at scale (SAFe, LeSS), OKRs, RFC writing, build vs buy, tech debt",
       links:[
         {name:"Scaled Agile Framework (SAFe)",url:"https://scaledagileframework.com/"},
         {name:"Google: Design Docs at Google",url:"https://www.industrialempathy.com/posts/design-docs-at-google/"},
         {name:"LinkedIn: Technical Program Management",url:"https://www.linkedin.com/learning/technical-program-management-foundations"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Write a 1-page design doc for monolith to microservices migration",
       links:[{name:"AWS: Microservices Migration Guide",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-migration/welcome.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How do you write an effective RFC/design doc? What sections are essential?",
      "Describe your approach to managing technical debt. How do you prioritize it?",
      "How do you make build vs buy decisions? Walk me through your framework.",
      "As a Principal TPM, how do you influence engineering teams without direct authority?",
      "How do you set and track OKRs for a platform team?",
      "Describe a time you had to make a difficult technical trade-off. How did you decide?",
      "How do you manage dependencies across 5+ teams with different priorities?"
    ]
  },
  {
    date:"Apr 20, 2026 (Mon)", title:"Cross-Functional Leadership & AI Ethics",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Leadership & responsible AI",
       links:[
         {name:"Harvard: Influence Without Authority",url:"https://www.youtube.com/watch?v=1BCXJ3yC0Bc"},
         {name:"AWS re:Invent: Responsible AI",url:"https://www.youtube.com/watch?v=OaGpGNMYOIc"},
         {name:"Exponent: TPM Behavioral Interview",url:"https://www.youtube.com/watch?v=3a1egt9Bt4E"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Stakeholder management, conflict resolution, AI governance, bias detection",
       links:[
         {name:"AWS: Responsible AI",url:"https://aws.amazon.com/machine-learning/responsible-ai/"},
         {name:"Coursera: AI Ethics",url:"https://www.coursera.org/learn/ai-ethics"},
         {name:"Google: Responsible AI Practices",url:"https://ai.google/responsibility/responsible-ai-practices/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Prepare STAR stories: leading ambiguous cross-team programs",
       links:[{name:"Exponent: STAR Method for TPMs",url:"https://www.tryexponent.com/courses/tpm/tpm-behavioral"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Tell me about a time you led a program with significant ambiguity. (STAR)",
      "How do you handle conflicting priorities between engineering and product teams?",
      "What is your framework for stakeholder communication at the executive level?",
      "How would you implement AI governance in an organization?",
      "Describe a time you had to deliver bad news to leadership. How did you handle it?",
      "How do you build trust with engineering teams as a TPM?",
      "What ethical considerations should a TPM raise when launching an AI product?"
    ]
  },
  {
    date:"Apr 21, 2026 (Tue)", title:"Security & Compliance Architecture",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Security architecture patterns",
       links:[
         {name:"ByteByteGo: System Design Security",url:"https://www.youtube.com/watch?v=I0IbRFHj5ZI"},
         {name:"AWS re:Invent: Zero Trust on AWS",url:"https://www.youtube.com/watch?v=vCaHmk6YL-0"},
         {name:"Hussein Nasser: OAuth 2.0 Explained",url:"https://www.youtube.com/watch?v=t18YB3xDfXI"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Zero trust, OAuth2/OIDC, encryption, SOC2, GDPR, AWS security services",
       links:[
         {name:"AWS Security Hub",url:"https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"},
         {name:"AWS KMS Developer Guide",url:"https://docs.aws.amazon.com/kms/latest/developerguide/overview.html"},
         {name:"AWS WAF Documentation",url:"https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a secure multi-tenant SaaS platform",
       links:[{name:"AWS: SaaS Architecture Guide",url:"https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/saas-lens.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain zero trust architecture. How would you implement it on AWS?",
      "Walk me through OAuth2 authorization code flow with PKCE.",
      "How do you design tenant isolation in a multi-tenant SaaS application?",
      "What is the shared responsibility model in AWS?",
      "How do you handle encryption at rest and in transit? Key rotation strategy?",
      "As a TPM, how do you balance security requirements with delivery speed?",
      "Design a compliance monitoring system for SOC2 on AWS."
    ]
  },
  {
    date:"Apr 22, 2026 (Wed)", title:"Cost Optimization & AI Products",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Cloud cost optimization & AI product strategy",
       links:[
         {name:"AWS re:Invent: Cost Optimization",url:"https://www.youtube.com/watch?v=Ks0pbol_EWI"},
         {name:"ByteByteGo: Reduce Cloud Costs",url:"https://www.youtube.com/watch?v=_OeKzNJBDOQ"},
         {name:"Lenny's Podcast: AI Product Strategy",url:"https://www.youtube.com/watch?v=aR4BQJB3jKM"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Cloud cost modeling, reserved/spot/on-demand, auto-scaling, AI product metrics",
       links:[
         {name:"AWS Cost Explorer",url:"https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html"},
         {name:"AWS Compute Optimizer",url:"https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html"},
         {name:"AWS: Prompt Engineering Guide",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"STAR stories: driving cost optimization & technical strategy",
       links:[{name:"AWS Well-Architected: Cost Optimization",url:"https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How would you reduce AWS costs by 30% without impacting performance?",
      "Compare reserved instances, savings plans, and spot instances. When to use each?",
      "How do you build a business case for a cloud migration?",
      "What metrics would you use to measure the success of an AI product?",
      "How do you handle auto-scaling for unpredictable workloads?",
      "As a TPM, how do you drive cost accountability across engineering teams?",
      "Design a cost allocation and chargeback system for a multi-team organization."
    ]
  },
  {
    date:"Apr 23, 2026 (Thu)", title:"Week 3 Mock: Design Uber",
    blocks:[
      {t:"0:00-0:45",type:"🎬 Watch + Review",content:"Uber system design walkthrough",
       links:[
         {name:"Gaurav Sen: Design Uber",url:"https://www.youtube.com/watch?v=umWABit-wbk"},
         {name:"Alex Xu: Design Uber",url:"https://www.youtube.com/watch?v=lsKU38RKQSo"},
         {name:"ByteByteGo: Proximity Service",url:"https://www.youtube.com/watch?v=M4lR_Va97cQ"}
       ]},
      {t:"0:45-1:30",type:"📝 Full Mock",content:"Design Uber: matching, pricing, real-time tracking, surge pricing, payments",
       links:[{name:"Uber Engineering Blog",url:"https://www.uber.com/en-US/blog/engineering/"}]},
      {t:"1:30-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Design Uber's ride matching system. How do you find the nearest driver?",
      "How would you implement surge pricing? What data do you need?",
      "Design the real-time location tracking system. What protocol would you use?",
      "How do you handle payment processing and split payments?",
      "What geospatial indexing strategy would you use (geohash, quadtree, etc.)?",
      "How do you ensure the system works during peak hours (NYE, concerts)?",
      "As a TPM, how would you manage the launch of Uber in a new country?"
    ]
  }
];
