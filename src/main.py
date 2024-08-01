import os
from fastapi import FastAPI
from anthropic import Anthropic

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

def main():
    client = Anthropic(
        api_key=os.environ.get("ANTHROPIC_API_KEY"),
    )
    
    # TODO: Implement AI-Powered Design Tool Suite functionality

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
