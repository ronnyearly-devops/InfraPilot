from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.repository import IncidentRepository
from app.models.ai_response import AIIncidentResponse
from app.services.ai_service import AIService

router = APIRouter(prefix="/chat", tags=["Chat"])

ai_service = AIService()
incident_repository = IncidentRepository()


class ChatRequest(BaseModel):
    message: str


@router.post("/", response_model=AIIncidentResponse)
def chat_with_ai(request: ChatRequest, db: Session = Depends(get_db)):
    ai_response = ai_service.analyze_incident(request.message)

    incident_repository.create_incident(
        db=db,
        incident_description=request.message,
        ai_response=ai_response,
    )

    return ai_response