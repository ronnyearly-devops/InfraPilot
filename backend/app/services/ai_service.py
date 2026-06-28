import json

from app.core.openai_client import client
from app.models.ai_response import AIIncidentResponse
from app.utils.prompt_loader import load_prompt


class AIService:

    def analyze_incident(self, incident: str) -> AIIncidentResponse:
        system_prompt = load_prompt("incident_analysis.txt")

        completion = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": incident},
            ],
            temperature=0.2,
        )

        content = completion.choices[0].message.content

        parsed_response = json.loads(content)

        return AIIncidentResponse(**parsed_response)