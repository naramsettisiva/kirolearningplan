import json
import boto3

bedrock = boto3.client("bedrock-runtime", region_name="us-east-1")
MODEL_ID = "anthropic.claude-3-haiku-20240307-v1:0"

SYSTEM = """You are a Principal TPM interview coach and assessor. 
When assessing answers, score each dimension 1-10 and be specific:

**Clarity** (1-10): Is the answer well-articulated and easy to follow?
**Technical Depth** (1-10): Does it show deep understanding of systems/architecture?
**Structure** (1-10): Is it well-organized? For behavioral: does it follow STAR format?
**Relevance** (1-10): Does it directly address the question asked?

**Overall Score**: X/10

**What was good:**
- (specific strengths)

**What to improve:**
- (specific, actionable suggestions)

**Example of a stronger answer snippet:**
- (show how to improve the weakest part)"""

def handler(event, context):
    try:
        body = json.loads(event.get("body", "{}"))
        question = body.get("question", "")
        resp = bedrock.invoke_model(
            modelId=MODEL_ID,
            body=json.dumps({
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": 1500,
                "system": SYSTEM,
                "messages": [{"role": "user", "content": question}]
            }))
        result = json.loads(resp["body"].read())
        answer = result["content"][0]["text"]
        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"answer": answer})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": str(e)})
        }
