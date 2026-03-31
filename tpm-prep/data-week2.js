const WEEK2 = [
  {
    date:"Apr 9, 2026 (Thu)", title:"Event-Driven Architecture",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Event-driven patterns",
       links:[
         {name:"ByteByteGo: Event-Driven Architecture",url:"https://www.youtube.com/watch?v=ogoztX51-Xg"},
         {name:"AWS re:Invent: Event-Driven Architectures",url:"https://www.youtube.com/watch?v=STKCRSUsyP0"},
         {name:"Martin Fowler: Event Sourcing",url:"https://www.youtube.com/watch?v=aweV9FLTZkU"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Event sourcing, CQRS, Kafka/Kinesis, saga pattern, choreography vs orchestration",
       links:[
         {name:"AWS EventBridge Guide",url:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"},
         {name:"AWS Step Functions",url:"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"},
         {name:"Confluent: Kafka Fundamentals",url:"https://www.confluent.io/learn/kafka-tutorial/"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design an event-driven e-commerce order system",
       links:[{name:"AWS: Saga Pattern with Step Functions",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/implement-the-serverless-saga-pattern-by-using-aws-step-functions.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare choreography vs orchestration in microservices. When would you use each?",
      "What is event sourcing and how does it differ from traditional CRUD?",
      "Explain the saga pattern. How do you handle compensating transactions?",
      "How would you ensure ordering guarantees in an event-driven system?",
      "What is CQRS and when is it worth the added complexity?",
      "Design an order processing pipeline using AWS EventBridge and Step Functions.",
      "How do you handle poison messages in an event queue?"
    ]
  },
  {
    date:"Apr 10, 2026 (Fri)", title:"Data Pipelines & Stream Processing",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Batch vs stream processing",
       links:[
         {name:"ByteByteGo: Data Pipeline Architecture",url:"https://www.youtube.com/watch?v=ZLAhJgpMhwI"},
         {name:"AWS re:Invent: Real-Time Streaming",url:"https://www.youtube.com/watch?v=jKPlGznbfZ0"},
         {name:"Confluent: Stream Processing Fundamentals",url:"https://www.youtube.com/watch?v=HBSTegKoC8c"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"ETL/ELT, data lake vs warehouse, Lambda architecture, Kappa architecture",
       links:[
         {name:"AWS Kinesis Developer Guide",url:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html"},
         {name:"AWS Glue Documentation",url:"https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html"},
         {name:"Coursera: Big Data Specialization",url:"https://www.coursera.org/specializations/big-data"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a real-time analytics dashboard",
       links:[{name:"AWS: Real-Time Analytics Reference",url:"https://aws.amazon.com/architecture/analytics-big-data/"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Compare Lambda architecture vs Kappa architecture. Trade-offs?",
      "When would you use Kinesis vs Kafka vs SQS?",
      "Explain the difference between ETL and ELT. When is ELT preferred?",
      "How would you design a pipeline processing 1TB of data per hour?",
      "What is backpressure in stream processing and how do you handle it?",
      "Design a real-time fraud detection data pipeline on AWS.",
      "How do you ensure exactly-once processing in a streaming pipeline?"
    ]
  },
  {
    date:"Apr 13, 2026 (Mon)", title:"AI/ML Fundamentals & AWS AI Stack",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"ML pipeline overview",
       links:[
         {name:"Google: ML Crash Course",url:"https://developers.google.com/machine-learning/crash-course"},
         {name:"AWS re:Invent: ML on AWS Overview",url:"https://www.youtube.com/watch?v=Ac5IjXMYg-E"},
         {name:"StatQuest: ML Fundamentals",url:"https://www.youtube.com/watch?v=Gv9_4yMHFhI"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Supervised vs unsupervised, common algorithms, SageMaker, Bedrock, Comprehend, Rekognition",
       links:[
         {name:"AWS SageMaker Docs",url:"https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html"},
         {name:"AWS Bedrock User Guide",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},
         {name:"Coursera: Andrew Ng ML Specialization",url:"https://www.coursera.org/specializations/machine-learning-introduction"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a recommendation engine architecture",
       links:[{name:"AWS: Build a Recommendation Engine",url:"https://aws.amazon.com/personalize/"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the ML lifecycle from data collection to production deployment.",
      "When would you use SageMaker vs Bedrock vs a third-party API?",
      "How would you design a recommendation system for an e-commerce site?",
      "What is the cold start problem and how do you solve it?",
      "Explain precision vs recall. When would you optimize for each?",
      "As a TPM, how would you manage an ML project differently from a traditional software project?",
      "What metrics would you track for an ML model in production?"
    ]
  },
  {
    date:"Apr 14, 2026 (Tue)", title:"GenAI & LLM Architecture",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Transformers, RAG, and LLM patterns",
       links:[
         {name:"3Blue1Brown: Transformers Explained",url:"https://www.youtube.com/watch?v=wjZofJX0v4M"},
         {name:"AWS re:Invent: Building with GenAI",url:"https://www.youtube.com/watch?v=ab1mbj0acDo"},
         {name:"ByteByteGo: RAG Explained",url:"https://www.youtube.com/watch?v=T-D1OfcDW1M"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Transformer architecture, RAG, fine-tuning vs prompt engineering, vector databases",
       links:[
         {name:"AWS: RAG with Bedrock",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},
         {name:"OpenAI Cookbook: RAG",url:"https://cookbook.openai.com/examples/question_answering_using_embeddings"},
         {name:"Coursera: GenAI with LLMs",url:"https://www.coursera.org/learn/generative-ai-with-llms"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a semantic search engine using RAG",
       links:[{name:"AWS: Bedrock Knowledge Bases",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain the RAG pattern. Why is it preferred over fine-tuning for many use cases?",
      "How do you choose chunk size and overlap for document processing in RAG?",
      "What are embeddings? How does similarity search work with vector databases?",
      "Compare fine-tuning vs prompt engineering vs RAG. When would you use each?",
      "How would you evaluate the quality of a RAG system?",
      "Design an AI-powered customer support chatbot using AWS Bedrock.",
      "What are hallucinations in LLMs and how do you mitigate them?"
    ]
  },
  {
    date:"Apr 15, 2026 (Wed)", title:"Search & Observability",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Search systems & observability",
       links:[
         {name:"ByteByteGo: Design a Search Engine",url:"https://www.youtube.com/watch?v=CeGtqouT8eA"},
         {name:"AWS re:Invent: Observability Best Practices",url:"https://www.youtube.com/watch?v=IuBrbjnOIZM"},
         {name:"Honeycomb: Observability 101",url:"https://www.youtube.com/watch?v=bvVgP4tw_Hc"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Inverted index, Elasticsearch, SLOs/SLIs/SLAs, distributed tracing",
       links:[
         {name:"AWS OpenSearch Docs",url:"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html"},
         {name:"AWS X-Ray Docs",url:"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"},
         {name:"AWS CloudWatch Docs",url:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a monitoring & alerting platform",
       links:[{name:"AWS: Monitoring Best Practices",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/implementing-logging-monitoring-cloudwatch/introduction.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How does an inverted index work? How would you build typeahead search?",
      "Define SLO, SLI, and SLA. How do you set appropriate SLOs for a service?",
      "What is distributed tracing and why is it critical in microservices?",
      "Design an alerting system that minimizes alert fatigue.",
      "How would you implement a search ranking algorithm?",
      "Compare CloudWatch, Datadog, and Prometheus/Grafana for observability.",
      "As a TPM, how do you drive reliability improvements across teams?"
    ]
  },
  {
    date:"Apr 16, 2026 (Thu)", title:"Week 2 Mock: Design YouTube",
    blocks:[
      {t:"0:00-0:45",type:"🎬 Watch + Review",content:"Full YouTube design walkthrough",
       links:[
         {name:"Alex Xu: Design YouTube",url:"https://www.youtube.com/watch?v=jPKTo1iGQiE"},
         {name:"Gaurav Sen: Design Netflix/YouTube",url:"https://www.youtube.com/watch?v=psQzyFfsUGU"},
         {name:"System Design Primer: YouTube",url:"https://github.com/donnemartin/system-design-primer"}
       ]},
      {t:"0:45-1:30",type:"📝 Full Mock",content:"Design YouTube: upload, transcoding, streaming, recommendations, comments",
       links:[{name:"AWS Media Services",url:"https://aws.amazon.com/media-services/"}]},
      {t:"1:30-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Walk me through the complete architecture of YouTube from upload to playback.",
      "How would you design the video transcoding pipeline? What about adaptive bitrate?",
      "Design the recommendation algorithm. How do you balance relevance and discovery?",
      "How do you serve video content globally with minimal latency?",
      "What storage strategy would you use for billions of videos?",
      "How would you handle live streaming vs on-demand video?",
      "As a TPM, how would you prioritize features for a video platform launch?"
    ]
  }
];
