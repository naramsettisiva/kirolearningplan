const WEEK1 = [
  {
    date:"Apr 1, 2026 (Wed)", title:"Scalability Fundamentals",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Scalability & System Design for Developers",
       links:[
         {name:"MIT: Scalability Lecture (YouTube)",url:"https://www.youtube.com/watch?v=-W9F__D3oY4"},
         {name:"Gaurav Sen: System Design Basics",url:"https://www.youtube.com/watch?v=xpDnVSmNFX0"},
         {name:"ByteByteGo: Scaling to Millions",url:"https://www.youtube.com/watch?v=Y-Gl4HEyeUQ"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Load balancing, horizontal vs vertical scaling, CDNs, caching (Redis/Memcached)",
       links:[
         {name:"AWS: Elasticity & Scalability",url:"https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-04.html"},
         {name:"AWS ElastiCache Guide",url:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html"},
         {name:"Coursera: Cloud Computing Concepts",url:"https://www.coursera.org/learn/cloud-computing"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a URL shortener (like bit.ly)",
       links:[
         {name:"Alex Xu: URL Shortener Design",url:"https://www.youtube.com/watch?v=fMZMm_0ZhK4"},
         {name:"NeetCode: URL Shortener",url:"https://www.youtube.com/watch?v=lBBkUFZ3O0s"}
       ]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the difference between horizontal and vertical scaling. When would you choose one over the other?",
      "How does a CDN improve application performance? Describe the request flow.",
      "Compare cache-aside, write-through, and write-behind caching strategies. Trade-offs of each?",
      "You're designing a system that gets 10K requests/sec. Walk me through your scaling strategy.",
      "What is cache invalidation and why is it considered one of the hardest problems in CS?",
      "How would you design a load balancing strategy for a globally distributed application?",
      "Explain consistent hashing and why it matters for distributed caches."
    ]
  },
  {
    date:"Apr 2, 2026 (Thu)", title:"Database Design & Trade-offs",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Database fundamentals & CAP theorem",
       links:[
         {name:"Gaurav Sen: SQL vs NoSQL",url:"https://www.youtube.com/watch?v=t0GlGbtMTio"},
         {name:"ByteByteGo: CAP Theorem",url:"https://www.youtube.com/watch?v=BHqjEjzAicA"},
         {name:"Hussein Nasser: ACID Explained",url:"https://www.youtube.com/watch?v=pomxJOFVcQs"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"SQL vs NoSQL, CAP theorem, ACID, eventual consistency, partitioning, sharding",
       links:[
         {name:"AWS DynamoDB Developer Guide",url:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"},
         {name:"AWS RDS Documentation",url:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"},
         {name:"DDIA Chapter 5-6 Summary (GitHub)",url:"https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a database schema for an e-commerce platform",
       links:[
         {name:"Alex Xu: Database Sharding",url:"https://www.youtube.com/watch?v=d67CBfCnhiU"},
         {name:"LinkedIn Learning: Database Design",url:"https://www.linkedin.com/learning/programming-foundations-databases-2"}
       ]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the CAP theorem. Give a real-world example of a CP system and an AP system.",
      "When would you choose DynamoDB over Aurora PostgreSQL? What are the trade-offs?",
      "Explain database sharding strategies. How do you handle cross-shard queries?",
      "What is eventual consistency? How would you explain it to a non-technical stakeholder?",
      "Design the data model for a social media feed. What database would you choose and why?",
      "How do you handle schema migrations in a zero-downtime production environment?",
      "What are the trade-offs between normalization and denormalization?"
    ]
  },
  {
    date:"Apr 3, 2026 (Fri)", title:"Distributed Systems Concepts",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Distributed systems fundamentals",
       links:[
         {name:"Martin Kleppmann: Distributed Systems (Cambridge)",url:"https://www.youtube.com/watch?v=UEAMfLPZZhE&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB"},
         {name:"Gaurav Sen: Distributed Consensus",url:"https://www.youtube.com/watch?v=uNxl3BFcKSA"},
         {name:"ByteByteGo: Distributed Systems Patterns",url:"https://www.youtube.com/watch?v=geNjTJnGYl0"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Consensus (Raft/Paxos), replication, fault tolerance, idempotency",
       links:[
         {name:"Raft Visualization",url:"https://raft.github.io/"},
         {name:"AWS: Building Distributed Systems",url:"https://aws.amazon.com/builders-library/"},
         {name:"Coursera: Cloud Computing Concepts Part 2",url:"https://www.coursera.org/learn/cloud-computing-2"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a distributed task queue (like SQS)",
       links:[
         {name:"AWS SQS Architecture",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html"},
         {name:"System Design: Message Queue",url:"https://www.youtube.com/watch?v=J6CBdSCB_fY"}
       ]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the Raft consensus algorithm at a high level. Why is it preferred over Paxos?",
      "What is a split-brain problem and how do you prevent it?",
      "How does idempotency help in distributed systems? Give an example of making an API idempotent.",
      "Compare leader-based vs leaderless replication. Trade-offs?",
      "What happens when a network partition occurs in your system? How do you handle it?",
      "Design a distributed lock service. What are the failure modes?",
      "Explain the difference between at-most-once, at-least-once, and exactly-once delivery."
    ]
  },
  {
    date:"Apr 6, 2026 (Mon)", title:"API Design & Microservices",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"API design patterns & microservices",
       links:[
         {name:"ByteByteGo: REST vs gRPC vs GraphQL",url:"https://www.youtube.com/watch?v=hkXzsB8D_mo"},
         {name:"AWS re:Invent: Microservices Decomposition",url:"https://www.youtube.com/watch?v=Ijs55IA8DIk"},
         {name:"Sam Newman: Microservices (GOTO Talk)",url:"https://www.youtube.com/watch?v=GBTdnfD6s5Q"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"REST vs gRPC vs GraphQL, API gateway, service mesh, circuit breakers",
       links:[
         {name:"AWS API Gateway Docs",url:"https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"},
         {name:"AWS App Mesh",url:"https://docs.aws.amazon.com/app-mesh/latest/userguide/what-is-app-mesh.html"},
         {name:"LinkedIn: Microservices Foundations",url:"https://www.linkedin.com/learning/microservices-foundations"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design an API rate limiter",
       links:[
         {name:"Alex Xu: Rate Limiter Design",url:"https://www.youtube.com/watch?v=FU4WlwfS3G0"},
         {name:"AWS: Throttling with API Gateway",url:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html"}
       ]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare REST, gRPC, and GraphQL. When would you use each?",
      "What is the circuit breaker pattern? How does it prevent cascading failures?",
      "How do you handle API versioning in a microservices architecture?",
      "Explain the strangler fig pattern for migrating from monolith to microservices.",
      "What is a service mesh and when would you introduce one?",
      "Design a rate limiting system that works across multiple service instances.",
      "How do you handle distributed transactions across microservices?"
    ]
  },
  {
    date:"Apr 7, 2026 (Tue)", title:"AWS Core Services Deep Dive",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"AWS architecture fundamentals",
       links:[
         {name:"AWS re:Invent: Architecture Patterns",url:"https://www.youtube.com/watch?v=f5EpcWp0THw"},
         {name:"FreeCodeCamp: AWS Certified Solutions Architect",url:"https://www.youtube.com/watch?v=Ia-UEYYR44s"},
         {name:"ByteByteGo: AWS Services Overview",url:"https://www.youtube.com/watch?v=JIbIYCM48to"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"EC2, S3, RDS, DynamoDB, VPC, IAM, ECS/EKS",
       links:[
         {name:"AWS Well-Architected Labs",url:"https://www.wellarchitectedlabs.com/"},
         {name:"AWS Architecture Center",url:"https://aws.amazon.com/architecture/"},
         {name:"AWS Skill Builder (Free)",url:"https://skillbuilder.aws/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Hands-on: Deploy a 3-tier web app on AWS",
       links:[
         {name:"AWS: 3-Tier Architecture Tutorial",url:"https://docs.aws.amazon.com/whitepapers/latest/serverless-multi-tier-architectures-api-gateway-lambda/three-tier-architecture-overview.html"},
         {name:"AWS CDK Workshop",url:"https://cdkworkshop.com/"}
       ]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through designing a highly available 3-tier architecture on AWS.",
      "When would you use DynamoDB vs Aurora? What about Neptune or Timestream?",
      "Explain VPC design for a multi-account enterprise setup.",
      "How does IAM work? Explain roles, policies, and the principle of least privilege.",
      "Compare ECS Fargate vs EKS. When would you choose one over the other?",
      "How would you design for 99.99% availability on AWS?",
      "Explain S3 storage classes and when to use each."
    ]
  },
  {
    date:"Apr 8, 2026 (Wed)", title:"Week 1 Mock: Design Twitter/X",
    blocks:[
      {t:"0:00-0:45",type:"🎬 Watch + Review",content:"Review the week's topics, watch a full design walkthrough",
       links:[
         {name:"Alex Xu: Design Twitter",url:"https://www.youtube.com/watch?v=o5n85GRKuzk"},
         {name:"Gaurav Sen: Design Twitter",url:"https://www.youtube.com/watch?v=KmAyPUv9gOY"},
         {name:"System Design Interview: Twitter",url:"https://www.youtube.com/watch?v=wYk0xPP_P_8"}
       ]},
      {t:"0:45-1:30",type:"📝 Full Mock",content:"Design Twitter end-to-end: feed generation, real-time notifications, search, trending",
       links:[
         {name:"Twitter System Design (GitHub)",url:"https://github.com/donnemartin/system-design-primer#design-the-twitter-timeline-and-search"},
         {name:"System Design Primer",url:"https://github.com/donnemartin/system-design-primer"}
       ]},
      {t:"1:30-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through the complete architecture of Twitter. Start with requirements.",
      "How would you design the home timeline? Fan-out on write vs fan-out on read?",
      "How do you handle celebrity users with millions of followers?",
      "Design the search functionality. How do you index tweets in real-time?",
      "How would you implement trending topics? What algorithm would you use?",
      "What caching strategy would you use for the timeline?",
      "How do you handle 500K tweets per second during a major event?",
      "As a TPM, how would you break this project into phases and manage the roadmap?"
    ]
  }
];
