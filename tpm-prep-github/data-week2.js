const WEEK2 = [
  {
    date:"Apr 9, 2026 (Thu)", title:"Event-Driven Architecture",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Event-driven patterns",
       links:[
         {name:"ByteByteGo: Event-Driven Architecture (8 min, 2025)",url:"https://www.youtube.com/watch?v=ogoztX51-Xg"},
         {name:"ByteByteGo: Kafka vs RabbitMQ vs SQS (7 min, 2025)",url:"https://www.youtube.com/watch?v=_5mu7lZz5X4"},
         {name:"AWS re:Invent 2025: Event-Driven Patterns",url:"https://www.youtube.com/results?search_query=aws+reinvent+2025+event+driven+architecture"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Event sourcing, CQRS, Kafka/Kinesis, saga pattern, choreography vs orchestration",
       links:[
         {name:"AWS: EventBridge User Guide (2025)",url:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"},
         {name:"AWS: Step Functions Workflow Studio (2025)",url:"https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-workflow-studio.html"},
         {name:"Confluent: Kafka 101 (free course, 2025)",url:"https://developer.confluent.io/courses/apache-kafka/events/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design an event-driven e-commerce order system",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare choreography vs orchestration. When use each?",
      "What is event sourcing and how does it differ from CRUD?",
      "Explain the saga pattern. How handle compensating transactions?",
      "How ensure ordering guarantees in an event-driven system?",
      "What is CQRS and when is it worth the complexity?",
      "Design an order pipeline using EventBridge and Step Functions.",
      "How handle poison messages in an event queue?"
    ]
  },
  {
    date:"Apr 10, 2026 (Fri)", title:"Data Pipelines & Stream Processing",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Batch vs stream processing",
       links:[
         {name:"ByteByteGo: Data Pipeline Architecture (8 min, 2025)",url:"https://www.youtube.com/watch?v=ZLAhJgpMhwI"},
         {name:"ByteByteGo: Batch vs Stream Processing (6 min, 2025)",url:"https://www.youtube.com/watch?v=A3Mvy8WMk04"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"ETL/ELT, data lake vs warehouse, Lambda vs Kappa architecture",
       links:[
         {name:"AWS: Kinesis Developer Guide (2025)",url:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html"},
         {name:"AWS: Glue Getting Started (2025)",url:"https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html"},
         {name:"AWS: Analytics Reference Architecture (2025)",url:"https://aws.amazon.com/architecture/analytics-big-data/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a real-time analytics dashboard",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare Lambda architecture vs Kappa architecture.",
      "When use Kinesis vs Kafka vs SQS?",
      "Explain ETL vs ELT. When is ELT preferred?",
      "Design a pipeline processing 1TB/hour.",
      "What is backpressure in streaming and how handle it?",
      "Design a real-time fraud detection pipeline on AWS.",
      "How ensure exactly-once processing in a streaming pipeline?"
    ]
  },
  {
    date:"Apr 13, 2026 (Mon)", title:"AI/ML Fundamentals & AWS AI Stack",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"ML pipeline overview",
       links:[
         {name:"AWS re:Invent 2025: AI/ML on AWS (10 min)",url:"https://www.youtube.com/results?search_query=aws+reinvent+2025+ai+ml+overview"},
         {name:"ByteByteGo: ML System Design 101 (10 min, 2025)",url:"https://www.youtube.com/watch?v=UxEDLczera8"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"ML lifecycle, SageMaker, Bedrock, Comprehend, Rekognition, Textract",
       links:[
         {name:"AWS: Bedrock User Guide (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},
         {name:"AWS: SageMaker Overview (2025)",url:"https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html"},
         {name:"Google: ML Crash Course (free, updated 2025)",url:"https://developers.google.com/machine-learning/crash-course"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a recommendation engine architecture",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the ML lifecycle from data collection to production.",
      "When use SageMaker vs Bedrock vs a third-party API?",
      "Design a recommendation system for e-commerce.",
      "What is the cold start problem and how solve it?",
      "Explain precision vs recall. When optimize for each?",
      "As a TPM, how manage an ML project differently?",
      "What metrics track for an ML model in production?"
    ]
  },
  {
    date:"Apr 14, 2026 (Tue)", title:"GenAI & LLM Architecture",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Latest GenAI patterns",
       links:[
         {name:"AWS re:Invent 2025: GenAI Architecture Patterns (10 min)",url:"https://www.youtube.com/results?search_query=aws+reinvent+2025+genai+architecture+patterns"},
         {name:"Anthropic: Building Effective Agents (blog, Dec 2025)",url:"https://www.anthropic.com/research/building-effective-agents"},
         {name:"ByteByteGo: RAG vs Fine-Tuning (8 min, 2025)",url:"https://www.youtube.com/watch?v=T-D1OfcDW1M"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"RAG 2.0, agentic RAG, fine-tuning vs prompt engineering, vector DBs, guardrails",
       links:[
         {name:"AWS: Bedrock Knowledge Bases (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},
         {name:"AWS: Bedrock Guardrails (2026)",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"},
         {name:"AWS: RAG Prescriptive Guidance (2025)",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation/"},
         {name:"DeepLearning.AI: GenAI with LLMs (2025)",url:"https://www.coursera.org/learn/generative-ai-with-llms"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a semantic search engine using agentic RAG",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain RAG. Why preferred over fine-tuning for many use cases?",
      "What is agentic RAG and how does it differ from basic RAG?",
      "How choose chunk size and overlap for document processing?",
      "Compare fine-tuning vs prompt engineering vs RAG.",
      "How evaluate RAG system quality? What metrics?",
      "Design an AI customer support chatbot using Bedrock + Guardrails.",
      "What are hallucinations and how mitigate them in production?"
    ]
  },
  {
    date:"Apr 15, 2026 (Wed)", title:"Search & Observability",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Search systems & observability",
       links:[
         {name:"ByteByteGo: Elasticsearch Explained (7 min, 2025)",url:"https://www.youtube.com/watch?v=ZP0NmfyfsoM"},
         {name:"ByteByteGo: Top Monitoring Strategies (8 min, 2025)",url:"https://www.youtube.com/watch?v=YyOXt2MEkv4"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Inverted index, OpenSearch, SLOs/SLIs/SLAs, distributed tracing, OpenTelemetry",
       links:[
         {name:"AWS: OpenSearch Serverless (2025)",url:"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless.html"},
         {name:"AWS: CloudWatch Application Signals (2025)",url:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html"},
         {name:"AWS: X-Ray + OpenTelemetry (2025)",url:"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a monitoring & alerting platform",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How does an inverted index work? How build typeahead?",
      "Define SLO, SLI, and SLA. How set appropriate SLOs?",
      "What is distributed tracing and why critical in microservices?",
      "Design an alerting system that minimizes alert fatigue.",
      "What is OpenTelemetry and why is it becoming the standard?",
      "Compare CloudWatch vs Datadog vs Grafana Cloud.",
      "As a TPM, how drive reliability improvements across teams?"
    ]
  },
  {
    date:"Apr 16, 2026 (Thu)", title:"Week 2 Mock: Design YouTube",
    blocks:[
      {t:"0:00-0:30",type:"🎬 Review",content:"Review week + YouTube design",
       links:[
         {name:"ByteByteGo: Design YouTube (12 min, 2025)",url:"https://www.youtube.com/watch?v=jPKTo1iGQiE"},
         {name:"ByteByteGo: How Netflix Encodes Video (8 min, 2025)",url:"https://www.youtube.com/watch?v=O-NeJRrgoTI"}
       ]},
      {t:"0:30-1:15",type:"📝 Full Mock",content:"Design YouTube: upload, transcoding, streaming, AI recommendations",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through YouTube architecture from upload to playback.",
      "How design the video transcoding pipeline?",
      "Design the recommendation algorithm using ML/GenAI.",
      "How serve video globally with minimal latency?",
      "What storage strategy for billions of videos?",
      "How handle live streaming vs on-demand?",
      "As a TPM, how prioritize features for a video platform launch?"
    ]
  }
];
