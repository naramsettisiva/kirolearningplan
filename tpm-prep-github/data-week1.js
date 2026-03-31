const WEEK1 = [
  {
    date:"Apr 1, 2026 (Wed)", title:"Scalability Fundamentals",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Short focused videos on scaling",
       links:[
         {name:"ByteByteGo: How to Scale a System (8 min, 2025)",url:"https://www.youtube.com/watch?v=dvRFHG2-uYs"},
         {name:"ByteByteGo: Top Caching Strategies (8 min, 2025)",url:"https://www.youtube.com/watch?v=dGAgxozNWFE"},
         {name:"ByteByteGo: Load Balancing Algorithms (7 min, 2025)",url:"https://www.youtube.com/watch?v=dBmxNsS3BGE"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Load balancing, horizontal vs vertical scaling, CDNs, caching (Redis/Memcached/Valkey)",
       links:[
         {name:"AWS: ElastiCache Best Practices (2025)",url:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/BestPractices.html"},
         {name:"AWS: ELB Overview (2025)",url:"https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html"},
         {name:"ByteByteGo: System Design 101 (GitHub, updated 2025)",url:"https://github.com/ByteByteGoHq/system-design-101"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a URL shortener (like bit.ly)",
       links:[{name:"NeetCode: URL Shortener Design (12 min, 2025)",url:"https://www.youtube.com/watch?v=lBBkUFZ3O0s"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain horizontal vs vertical scaling. When would you choose each?",
      "How does a CDN improve performance? Describe the request flow with cache miss.",
      "Compare cache-aside, write-through, and write-behind strategies.",
      "You're designing for 10K req/sec. Walk me through your scaling strategy.",
      "What is cache invalidation and why is it hard?",
      "How would you design load balancing for a globally distributed app?",
      "Explain consistent hashing and why it matters for distributed caches."
    ]
  },
  {
    date:"Apr 2, 2026 (Thu)", title:"Database Design & Trade-offs",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Database fundamentals",
       links:[
         {name:"ByteByteGo: How to Choose the Right Database (8 min, 2025)",url:"https://www.youtube.com/watch?v=kkeFE6iRfMM"},
         {name:"ByteByteGo: Database Indexing Explained (7 min, 2025)",url:"https://www.youtube.com/watch?v=BIwAEL-nBSg"},
         {name:"ByteByteGo: Database Sharding (8 min, 2025)",url:"https://www.youtube.com/watch?v=hdxdhCpgYo8"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"SQL vs NoSQL, CAP theorem, ACID, eventual consistency, partitioning, sharding",
       links:[
         {name:"AWS: DynamoDB Core Concepts (2025)",url:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"},
         {name:"AWS: Aurora Serverless v2 Guide (2025)",url:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html"},
         {name:"ByteByteGo: System Design 101 - Databases (2025)",url:"https://github.com/ByteByteGoHq/system-design-101#database"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a database schema for an e-commerce platform",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain CAP theorem. Give a real-world CP system and AP system example.",
      "When would you choose DynamoDB over Aurora PostgreSQL?",
      "Explain database sharding strategies. How do you handle cross-shard queries?",
      "What is eventual consistency? How explain to a non-technical stakeholder?",
      "Design the data model for a social media feed. What database and why?",
      "How do you handle schema migrations with zero downtime?",
      "What are the trade-offs between normalization and denormalization?"
    ]
  },
  {
    date:"Apr 3, 2026 (Fri)", title:"Distributed Systems Concepts",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Distributed systems essentials",
       links:[
         {name:"ByteByteGo: Top 6 Distributed System Patterns (10 min, 2025)",url:"https://www.youtube.com/watch?v=nH4qjmP2KEE"},
         {name:"ByteByteGo: Consistency Patterns (8 min, 2025)",url:"https://www.youtube.com/watch?v=l4BuXCHo1fY"},
         {name:"Raft Consensus Visualization (interactive)",url:"https://raft.github.io/"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Consensus (Raft/Paxos), replication, fault tolerance, idempotency",
       links:[
         {name:"AWS Builders Library: Challenges of Distributed Systems (2025)",url:"https://aws.amazon.com/builders-library/challenges-with-distributed-systems/"},
         {name:"AWS Builders Library: Avoiding Fallback (2025)",url:"https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/"},
         {name:"AWS Builders Library: Retries & Backoff (2025)",url:"https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a distributed task queue (like SQS)",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain Raft consensus at a high level. Why preferred over Paxos?",
      "What is a split-brain problem and how do you prevent it?",
      "How does idempotency help? Give an example of making an API idempotent.",
      "Compare leader-based vs leaderless replication. Trade-offs?",
      "What happens during a network partition? How do you handle it?",
      "Design a distributed lock service. What are the failure modes?",
      "Explain at-most-once, at-least-once, and exactly-once delivery."
    ]
  },
  {
    date:"Apr 6, 2026 (Mon)", title:"API Design & Microservices",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"API patterns & microservices",
       links:[
         {name:"ByteByteGo: Top 5 API Architectural Styles (8 min, 2025)",url:"https://www.youtube.com/watch?v=4vLxWqE94l4"},
         {name:"ByteByteGo: API Gateway Explained (6 min, 2025)",url:"https://www.youtube.com/watch?v=6ULyxuHKxg8"},
         {name:"ByteByteGo: Circuit Breaker Pattern (5 min, 2025)",url:"https://www.youtube.com/watch?v=ADHcBxEXvFA"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"REST vs gRPC vs GraphQL, API gateway, service mesh, circuit breakers",
       links:[
         {name:"AWS: API Gateway Developer Guide (2025)",url:"https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"},
         {name:"AWS: Microservices Whitepaper (2025)",url:"https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/microservices-on-aws.html"},
         {name:"ByteByteGo: API Architecture Styles (blog, 2025)",url:"https://blog.bytebytego.com/p/api-architecture-styles"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design an API rate limiter",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare REST, gRPC, and GraphQL. When would you use each?",
      "What is the circuit breaker pattern? How prevent cascading failures?",
      "How do you handle API versioning in microservices?",
      "Explain the strangler fig pattern for monolith migration.",
      "What is a service mesh and when would you introduce one?",
      "Design rate limiting across multiple service instances.",
      "How do you handle distributed transactions across microservices?"
    ]
  },
  {
    date:"Apr 7, 2026 (Tue)", title:"AWS Core Services Deep Dive",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"AWS architecture essentials",
       links:[
         {name:"AWS re:Invent 2025: Architecture Best Practices (10 min)",url:"https://www.youtube.com/results?search_query=aws+reinvent+2025+architecture+best+practices"},
         {name:"ByteByteGo: AWS Services Cheat Sheet (10 min, 2025)",url:"https://www.youtube.com/watch?v=JIbIYCM48to"},
         {name:"AWS: Serverless in 2025 (8 min)",url:"https://www.youtube.com/results?search_query=aws+serverless+2025+overview"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"EC2, S3, RDS, DynamoDB, VPC, IAM, ECS/EKS, Lambda, Step Functions",
       links:[
         {name:"AWS Well-Architected Labs (hands-on, 2025)",url:"https://www.wellarchitectedlabs.com/"},
         {name:"AWS Skill Builder: Cloud Practitioner (free, 2025)",url:"https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials"},
         {name:"AWS Architecture Center (2025)",url:"https://aws.amazon.com/architecture/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Hands-on: Deploy a 3-tier web app on AWS",
       links:[{name:"AWS CDK Workshop (hands-on, 2025)",url:"https://cdkworkshop.com/"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through a highly available 3-tier architecture on AWS.",
      "When would you use DynamoDB vs Aurora? Neptune? Timestream?",
      "Explain VPC design for a multi-account enterprise setup.",
      "How does IAM work? Roles, policies, least privilege.",
      "Compare ECS Fargate vs EKS. When choose each?",
      "How design for 99.99% availability on AWS?",
      "Explain S3 storage classes and when to use each."
    ]
  },
  {
    date:"Apr 8, 2026 (Wed)", title:"Week 1 Mock: Design Twitter/X",
    blocks:[
      {t:"0:00-0:30",type:"🎬 Review",content:"Review week + design walkthrough",
       links:[
         {name:"ByteByteGo: Design Twitter (12 min, 2025)",url:"https://www.youtube.com/watch?v=o5n85GRKuzk"},
         {name:"System Design Primer (GitHub, updated 2025)",url:"https://github.com/donnemartin/system-design-primer"}
       ]},
      {t:"0:30-1:15",type:"📝 Full Mock",content:"Design Twitter/X end-to-end: feed, notifications, search, trending",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through the complete architecture of Twitter/X.",
      "How design the home timeline? Fan-out on write vs read?",
      "How handle celebrity users with millions of followers?",
      "Design search functionality. How index posts in real-time?",
      "How implement trending topics?",
      "What caching strategy for the timeline?",
      "How handle 500K posts/sec during a major event?",
      "As a TPM, how break this into phases and manage the roadmap?"
    ]
  }
];
