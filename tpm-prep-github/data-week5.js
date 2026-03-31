const WEEK5 = [
  {
    date:"May 1, 2026 (Fri)", title:"Databricks & Lakehouse Fundamentals",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Lakehouse architecture",
       links:[
         {name:"Databricks: Lakehouse Architecture (8 min, 2025)",url:"https://www.youtube.com/results?search_query=databricks+lakehouse+architecture+2025"},
         {name:"ByteByteGo: Data Lake vs Warehouse vs Lakehouse (6 min, 2025)",url:"https://www.youtube.com/watch?v=3Ri4PCnDzJg"},
         {name:"Databricks: Delta Lake 4.0 (2025)",url:"https://www.youtube.com/results?search_query=databricks+delta+lake+4.0+2025"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Lakehouse architecture, Delta Lake, UniForm, medallion architecture, liquid clustering",
       links:[
         {name:"Databricks: Lakehouse Docs (2025)",url:"https://docs.databricks.com/en/lakehouse/index.html"},
         {name:"Delta Lake: UniForm (2025)",url:"https://docs.databricks.com/en/delta/uniform.html"},
         {name:"AWS: Lake Formation Guide (2025)",url:"https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a data lakehouse on AWS with Delta Lake",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "What is lakehouse architecture? How combine lakes and warehouses?",
      "Explain Delta Lake. How bring ACID to data lakes?",
      "What is UniForm and how does it solve the open table format problem?",
      "What is medallion architecture (bronze/silver/gold)?",
      "Compare Databricks Lakehouse vs Snowflake vs Redshift in 2026.",
      "As a TPM, how plan a migration from warehouse to lakehouse?",
      "What is liquid clustering and how does it replace partitioning?"
    ]
  },
  {
    date:"May 4, 2026 (Mon)", title:"Spark, ETL & Data Engineering",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Spark & Databricks workflows",
       links:[
         {name:"Databricks: Spark Connect (10 min, 2025)",url:"https://www.youtube.com/results?search_query=databricks+spark+connect+2025"},
         {name:"Databricks: Unity Catalog Deep Dive (8 min, 2025)",url:"https://www.youtube.com/results?search_query=databricks+unity+catalog+2025"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Spark architecture, Photon engine, Unity Catalog, data governance, serverless compute",
       links:[
         {name:"Databricks: Serverless Compute (2025)",url:"https://docs.databricks.com/en/compute/serverless.html"},
         {name:"Databricks: Unity Catalog (2025)",url:"https://docs.databricks.com/en/data-governance/unity-catalog/index.html"},
         {name:"Databricks: Photon Engine (2025)",url:"https://docs.databricks.com/en/compute/photon.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design an ETL pipeline with Databricks + S3 + Delta Lake",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain Spark architecture: driver, executors, partitions.",
      "What is Photon engine and how does it accelerate queries?",
      "What is Unity Catalog and why is data governance critical?",
      "How optimize a slow Spark job? Common bottlenecks?",
      "Compare AWS Glue vs Databricks for ETL in 2026.",
      "Design a pipeline ingesting 10TB/day from multiple sources.",
      "How handle data quality checks in medallion architecture?"
    ]
  },
  {
    date:"May 5, 2026 (Tue)", title:"Streaming, Real-Time Analytics & ML on Databricks",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Streaming & MLflow",
       links:[
         {name:"Databricks: Structured Streaming (10 min, 2025)",url:"https://www.youtube.com/results?search_query=databricks+structured+streaming+2025"},
         {name:"MLflow: What's New in MLflow 2.x (8 min, 2025)",url:"https://www.youtube.com/results?search_query=mlflow+2025+whats+new"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Structured Streaming, Auto Loader, MLflow, Feature Store, Mosaic AI, model serving",
       links:[
         {name:"Databricks: Mosaic AI (2025)",url:"https://docs.databricks.com/en/machine-learning/index.html"},
         {name:"MLflow Documentation (2025)",url:"https://mlflow.org/docs/latest/index.html"},
         {name:"Databricks: Model Serving (2025)",url:"https://docs.databricks.com/en/machine-learning/model-serving/index.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a real-time ML scoring pipeline on Databricks",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How does Structured Streaming differ from batch?",
      "What is Mosaic AI and how does it unify ML on Databricks?",
      "Explain Auto Loader for incremental ingestion.",
      "Design real-time fraud detection using Structured Streaming.",
      "What is a Feature Store? How bridge data eng and ML?",
      "How serve ML models at low latency on Databricks?",
      "As a TPM, how manage a data platform migration to Databricks?"
    ]
  },
  {
    date:"May 6, 2026 (Wed)", title:"Data Lake Security, Cost & Governance",
    blocks:[
      {t:"0:00-0:10",type:"🎬 Watch",content:"Data governance & security",
       links:[
         {name:"Databricks: Unity Catalog Governance (10 min, 2025)",url:"https://www.youtube.com/results?search_query=databricks+unity+catalog+governance+2025"},
         {name:"AWS: Lake Formation + Databricks (8 min, 2025)",url:"https://www.youtube.com/results?search_query=aws+lake+formation+databricks+2025"}
       ]},
      {t:"0:10-0:45",type:"📖 Study",content:"Row/column security, data masking, audit logging, cost optimization, serverless",
       links:[
         {name:"Databricks: Security Best Practices (2025)",url:"https://docs.databricks.com/en/security/index.html"},
         {name:"Databricks: Cost Management (2025)",url:"https://docs.databricks.com/en/administration-guide/account-settings/usage.html"},
         {name:"Databricks: System Tables for Observability (2025)",url:"https://docs.databricks.com/en/administration-guide/system-tables/index.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a governed data platform with RBAC and PII handling",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How implement fine-grained access control on a data lake?",
      "What is data masking? Dynamic vs static?",
      "How handle PII in a lakehouse? GDPR right-to-be-forgotten?",
      "How use Databricks System Tables for cost observability?",
      "Serverless vs classic compute — cost trade-offs?",
      "How audit data access across a multi-team platform?",
      "As a TPM, how drive data governance adoption across an org?"
    ]
  },
  {
    date:"May 7, 2026 (Thu)", title:"Week 5 Mock: Design a Data Platform",
    blocks:[
      {t:"0:00-0:30",type:"🎬 Review",content:"Review week + data platform design",
       links:[
         {name:"Databricks: Reference Architecture (2025)",url:"https://docs.databricks.com/en/getting-started/overview.html"},
         {name:"AWS: Modern Data Architecture (2025)",url:"https://aws.amazon.com/big-data/datalakes-and-analytics/modern-data-architecture/"}
       ]},
      {t:"0:30-1:15",type:"📝 Full Mock",content:"Design enterprise data platform: ingestion, processing, governance, GenAI, serving",links:[]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Design an enterprise data platform from scratch in 2026.",
      "How handle data from 50+ sources with different formats and SLAs?",
      "Compare Databricks-centric vs AWS-native data platform.",
      "How integrate GenAI capabilities into a data platform?",
      "Design the data platform team structure. What roles needed?",
      "How measure ROI of a data platform investment?",
      "As a Principal TPM, how create a 2-year data platform roadmap?"
    ]
  }
];
