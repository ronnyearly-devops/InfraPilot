from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy.sql import func

from app.database.database import Base


class Incident(Base):
    __tablename__ = "incidents"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)
    environment = Column(String(100), nullable=False)
    severity = Column(String(50), nullable=False)
    status = Column(String(50), default="Open")

    incident_description = Column(Text, nullable=False)

    incident_classification = Column(String(255))
    confidence_score = Column(Integer)
    probable_root_cause = Column(Text)
    recommended_actions = Column(Text)
    suggested_scripts = Column(Text)
    management_summary = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())