from pydantic import BaseModel
from typing import List


class SuggestedScript(BaseModel):
    type: str
    script: str


class AIIncidentResponse(BaseModel):
    incident_classification: str
    severity: str
    confidence_score: int
    probable_root_cause: str
    recommended_actions: List[str]
    suggested_scripts: List[SuggestedScript]
    management_summary: str