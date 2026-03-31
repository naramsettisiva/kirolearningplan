#!/usr/bin/env python3
"""Local Bedrock proxy — no AWS deployment needed. Just run this alongside the prep site."""
from http.server import HTTPServer, BaseHTTPRequestHandler
import json, boto3

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

class Handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_POST(self):
        body = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        try:
            resp = bedrock.invoke_model(
                modelId=MODEL_ID,
                body=json.dumps({
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": 1500,
                    "system": SYSTEM,
                    "messages": [{"role": "user", "content": body.get("question", "")}]
                }))
            result = json.loads(resp["body"].read())
            answer = result["content"][0]["text"]
            self._respond(200, {"answer": answer})
        except Exception as e:
            self._respond(500, {"error": str(e)})

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _respond(self, code, data):
        self.send_response(code)
        self._cors()
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def log_message(self, fmt, *args):
        print(f"[Bedrock Proxy] {args[0]}")

if __name__ == "__main__":
    print("🤖 Bedrock Assessment Proxy running on http://localhost:8081/assess")
    print("   Paste this URL into the prep site's API endpoint field.")
    HTTPServer(("", 8081), Handler).serve_forever()
