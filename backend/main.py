from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.chat import router as chat_router
from app.api.incidents import router as incidents_router
from app.database.database import Base, engine
from app.database import models

app = FastAPI(
    title="AI Enterprise Operations Platform",
    description="AI-powered platform for enterprise IT operations, log analysis, documentation search, and incident automation.",
    version="0.1.0",
)

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)
app.include_router(incidents_router)


@app.get("/")
def read_root():
    return {
        "message": "AI Enterprise Operations Platform API is running",
        "status": "healthy"
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }