function IncidentDetailsModal({ incident, onClose }) {
  if (!incident) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <div>
            <h2>Incident Details</h2>
            <p>{incident.title}</p>
          </div>

          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="modal-meta-grid">
          <div>
            <span>Severity</span>
            <strong>{incident.severity}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{incident.status}</strong>
          </div>

          <div>
            <span>Environment</span>
            <strong>{incident.environment}</strong>
          </div>

          <div>
            <span>Confidence</span>
            <strong>{incident.confidence_score}%</strong>
          </div>
        </div>

        <section className="modal-section">
          <h3>Incident Description</h3>
          <p>{incident.incident_description}</p>
        </section>

        <section className="modal-section">
          <h3>Probable Root Cause</h3>
          <p>{incident.probable_root_cause}</p>
        </section>

        <section className="modal-section">
          <h3>Recommended Actions</h3>
          <ul>
            {JSON.parse(incident.recommended_actions || "[]").map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h3>Suggested Scripts</h3>
          {JSON.parse(incident.suggested_scripts || "[]").map((script, index) => (
            <pre key={index} className="script-box">
{script.type}: {script.script}
            </pre>
          ))}
        </section>

        <section className="modal-section">
          <h3>Management Summary</h3>
          <p>{incident.management_summary}</p>
        </section>
      </div>
    </div>
  );
}

export default IncidentDetailsModal;