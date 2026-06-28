import json

from sqlalchemy.orm import Session

from app.database.models import Incident


class IncidentRepository:

    def create_incident(
        self,
        db: Session,
        incident_description: str,
        ai_response,
    ):

        incident = Incident(
            title=ai_response.incident_classification,
            environment="Unknown",
            severity=ai_response.severity,
            incident_description=incident_description,
            incident_classification=ai_response.incident_classification,
            confidence_score=ai_response.confidence_score,
            probable_root_cause=ai_response.probable_root_cause,
            recommended_actions=json.dumps(
                ai_response.recommended_actions
            ),
            suggested_scripts=json.dumps(
                [script.model_dump() for script in ai_response.suggested_scripts]
            ),
            management_summary=ai_response.management_summary,
        )

        db.add(incident)
        db.commit()
        db.refresh(incident)

        return incident