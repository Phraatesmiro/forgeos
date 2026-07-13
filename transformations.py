from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import prompt, models, transformations, simulate

app = FastAPI(title="ForgeOS API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(prompt.router)
app.include_router(models.router)
app.include_router(transformations.router)
app.include_router(simulate.router)

@app.get("/")
async def root():
    return {"message": "ForgeOS API running", "status": "healthy"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
