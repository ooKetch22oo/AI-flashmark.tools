import os
from fastapi import FastAPI
from anthropic import Anthropic

app = FastAPI()

# Import routes from each tool
from profiler.routes import router as profiler_router
from perception.routes import router as perception_router
from probe.routes import router as probe_router
from personality.routes import router as personality_router

# Include routes for each tool
app.include_router(profiler_router, prefix="/profiler", tags=["profiler"])
app.include_router(perception_router, prefix="/perception", tags=["perception"])
app.include_router(probe_router, prefix="/probe", tags=["probe"])
app.include_router(personality_router, prefix="/personality", tags=["personality"])

@app.get("/")
async def root():
    return {"message": "Welcome to the AI-Powered Design Tool Suite"}

def main():
    client = Anthropic(
        api_key=os.environ.get("ANTHROPIC_API_KEY"),
    )
    
    # TODO: Implement AI-Powered Design Tool Suite functionality

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
