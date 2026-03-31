const WEEK5 = [
  {
    date:"May 1, 2026 (Fri)", title:"Databricks & Lakehouse Fundamentals",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Databricks & Lakehouse architecture",
       links:[
         {name:"Databricks: What is a Lakehouse?",url:"https://www.youtube.com/watch?v=bMGxrklwJWg"},
         {name:"Databricks: Delta Lake Explained",url:"https://www.youtube.com/watch?v=LJtShrQqYZY"},
         {name:"ByteByteGo: Data Lake vs Warehouse",url:"https://www.youtube.com/watch?v=3Ri4PCnDzJg"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Lakehouse architecture, Delta Lake, ACID on data lakes, medallion architecture (bronze/silver/gold)",
       links:[
         {name:"Databricks Lakehouse Documentation",url:"https://docs.databricks.com/en/lakehouse/index.html"},
         {name:"Delta Lake Documentation",url:"https://docs.delta.io/latest/index.html"},
         {name:"AWS Lake Formation",url:"https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"},
         {name:"Coursera: Databricks Lakehouse Fundamentals",url:"https://www.coursera.org/learn/databricks-lakehouse-fundamentals"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a data lakehouse on AWS with Delta Lake",
       links:[{name:"Databricks on AWS Architecture",url:"https://docs.databricks.com/en/getting-started/overview.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "What is the lakehouse architecture and how does it combine the best of data lakes and warehouses?",
      "Explain Delta Lake. How does it bring ACID transactions to data lakes?",
      "What is the medallion architecture (bronze/silver/gold)? Why is it useful?",
      "Compare Databricks Lakehouse vs Snowflake vs AWS Redshift. Trade-offs?",
      "How does time travel work in Delta Lake? What are practical use cases?",
      "As a TPM, how would you plan a migration from a traditional data warehouse to a lakehouse?",
      "What is schema evolution and how does Delta Lake handle it?"
    ]
  },
  {
    date:"May 4, 2026 (Mon)", title:"Spark, ETL & Data Engineering on Databricks",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Apache Spark & Databricks workflows",
       links:[
         {name:"Databricks: Apache Spark Explained",url:"https://www.youtube.com/watch?v=znBa13Earms"},
         {name:"FreeCodeCamp: PySpark Full Course",url:"https://www.youtube.com/watch?v=_C8kWso4ne4"},
         {name:"Databricks: Unity Catalog Overview",url:"https://www.youtube.com/watch?v=VDqFAqSa7eo"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Spark architecture, DataFrames, Spark SQL, Databricks Jobs, Unity Catalog, data governance",
       links:[
         {name:"Databricks: Spark Guide",url:"https://docs.databricks.com/en/spark/index.html"},
         {name:"Databricks: Unity Catalog",url:"https://docs.databricks.com/en/data-governance/unity-catalog/index.html"},
         {name:"AWS Glue vs Databricks",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-etl-databricks-to-glue/overview.html"},
         {name:"Coursera: ETL & Data Pipelines with Shell, Airflow, Kafka",url:"https://www.coursera.org/learn/etl-and-data-pipelines-shell-airflow-kafka"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design an ETL pipeline with Databricks + AWS S3 + Delta Lake",
       links:[{name:"Databricks: ETL Best Practices",url:"https://docs.databricks.com/en/delta/best-practices.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Explain Spark's architecture: driver, executors, partitions. How does lazy evaluation work?",
      "What is Unity Catalog and why is data governance critical for a lakehouse?",
      "How would you optimize a slow Spark job? What are common performance bottlenecks?",
      "Compare AWS Glue vs Databricks for ETL. When would you choose each?",
      "What is data lineage and why does it matter for compliance?",
      "Design a data pipeline that ingests 10TB/day from multiple sources into a lakehouse.",
      "How do you handle data quality checks in a medallion architecture pipeline?"
    ]
  },
  {
    date:"May 5, 2026 (Tue)", title:"Streaming, Real-Time Analytics & ML on Databricks",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Structured Streaming & MLflow",
       links:[
         {name:"Databricks: Structured Streaming",url:"https://www.youtube.com/watch?v=rl8dIzTpxrI"},
         {name:"Databricks: MLflow Introduction",url:"https://www.youtube.com/watch?v=859OxXrt_TI"},
         {name:"AWS re:Invent: Real-Time Analytics",url:"https://www.youtube.com/watch?v=jKPlGznbfZ0"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Structured Streaming, Auto Loader, MLflow, Feature Store, model serving on Databricks",
       links:[
         {name:"Databricks: Structured Streaming Guide",url:"https://docs.databricks.com/en/structured-streaming/index.html"},
         {name:"MLflow Documentation",url:"https://mlflow.org/docs/latest/index.html"},
         {name:"Databricks: Feature Store",url:"https://docs.databricks.com/en/machine-learning/feature-store/index.html"},
         {name:"Coursera: Databricks ML Associate",url:"https://www.coursera.org/professional-certificates/databricks-machine-learning"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a real-time ML scoring pipeline on Databricks",
       links:[{name:"Databricks: Model Serving",url:"https://docs.databricks.com/en/machine-learning/model-serving/index.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How does Structured Streaming differ from Spark batch processing?",
      "What is MLflow and how does it solve the ML experiment tracking problem?",
      "Explain Auto Loader. How does it handle incremental data ingestion?",
      "Design a real-time fraud detection system using Databricks Structured Streaming.",
      "What is a Feature Store? How does it bridge the gap between data engineering and ML?",
      "How would you serve ML models at low latency using Databricks?",
      "As a TPM, how do you manage a data platform migration to Databricks across multiple teams?"
    ]
  },
  {
    date:"May 6, 2026 (Wed)", title:"Data Lake Security, Cost & Governance",
    blocks:[
      {t:"0:00-0:15",type:"🎬 Watch",content:"Data governance & security",
       links:[
         {name:"Databricks: Data Governance with Unity Catalog",url:"https://www.youtube.com/watch?v=VDqFAqSa7eo"},
         {name:"AWS re:Invent: Data Lake Security",url:"https://www.youtube.com/watch?v=v5u7IVB3lrk"},
         {name:"ByteByteGo: Data Governance",url:"https://www.youtube.com/watch?v=3Ri4PCnDzJg"}
       ]},
      {t:"0:15-0:45",type:"📖 Study",content:"Row/column security, data masking, audit logging, cost optimization, cluster policies",
       links:[
         {name:"Databricks: Security Best Practices",url:"https://docs.databricks.com/en/security/index.html"},
         {name:"AWS Lake Formation Security",url:"https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html"},
         {name:"Databricks: Cost Management",url:"https://docs.databricks.com/en/administration-guide/account-settings/usage.html"}
       ]},
      {t:"0:45-1:15",type:"📝 Practice",content:"Design a governed data platform with RBAC, PII handling, and cost controls",
       links:[{name:"Databricks: Admin Guide",url:"https://docs.databricks.com/en/administration-guide/index.html"}]},
      {t:"1:15-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "How do you implement fine-grained access control on a data lake?",
      "What is data masking and when would you use dynamic vs static masking?",
      "How do you handle PII in a data lakehouse? What about GDPR right-to-be-forgotten?",
      "Design a cost optimization strategy for Databricks clusters.",
      "What is the difference between workspace-level and account-level governance?",
      "How do you audit data access across a multi-team data platform?",
      "As a TPM, how would you drive adoption of data governance across an organization?"
    ]
  },
  {
    date:"May 7, 2026 (Thu)", title:"Week 5 Mock: Design a Data Platform",
    blocks:[
      {t:"0:00-0:45",type:"🎬 Watch + Review",content:"End-to-end data platform design",
       links:[
         {name:"Databricks: Reference Architecture",url:"https://docs.databricks.com/en/getting-started/overview.html"},
         {name:"ByteByteGo: Design Data Pipeline",url:"https://www.youtube.com/watch?v=ZLAhJgpMhwI"},
         {name:"AWS: Modern Data Architecture",url:"https://aws.amazon.com/big-data/datalakes-and-analytics/modern-data-architecture/"}
       ]},
      {t:"0:45-1:30",type:"📝 Full Mock",content:"Design an enterprise data platform: ingestion, processing, governance, ML, serving",
       links:[{name:"Databricks: Lakehouse Architecture",url:"https://www.databricks.com/product/data-lakehouse"}]},
      {t:"1:30-2:00",type:"🤖 Agent Q&A",content:"Self-assess with these questions"}
    ],
    questions:[
      "Design an enterprise data platform from scratch. Walk me through the architecture.",
      "How do you handle data from 50+ sources with different formats and SLAs?",
      "Compare a Databricks-centric vs AWS-native data platform. Trade-offs?",
      "How do you ensure data quality at scale? What tools and processes?",
      "Design the data platform team structure. What roles do you need?",
      "How do you measure the ROI of a data platform investment?",
      "As a Principal TPM, how do you create a 2-year roadmap for a data platform?"
    ]
  }
];
