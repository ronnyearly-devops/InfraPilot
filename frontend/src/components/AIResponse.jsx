function AIResponse({ response }) {
  if (!response) {
    return (
      <div className="panel">
        <h2>AI Analysis Results</h2>
        <div className="analysis-section">
          <h3>Status</h3>
          <p>Waiting for incident analysis...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="panel">
      <h2>AI Analysis Results</h2>

      <div className="analysis-grid">
        <div className="analysis-section">
          <h3>Incident Classification</h3>
          <p>{response.incident_classification}</p>
        </div>

        <div className="analysis-section">
          <h3>Severity Assessment</h3>
          <span className="severity-badge">{response.severity}</span>
        </div>

        <div className="analysis-section">
          <h3>Confidence Score</h3>
          <p>{response.confidence_score}%</p>
        </div>

        <div className="analysis-section">
          <h3>Probable Root Cause</h3>
          <p>{response.probable_root_cause}</p>
        </div>

        <div className="analysis-section">
          <h3>Recommended Actions</h3>
          <ul>
            {response.recommended_actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>

        <div className="analysis-section">
          <h3>Suggested Scripts</h3>
          {response.suggested_scripts.length > 0 ? (
            response.suggested_scripts.map((script, index) => (
              <div key={index}>
                <p>{script.type}</p>
                <pre className="script-box">{script.script}</pre>
              </div>
            ))
          ) : (
            <p>No scripts suggested.</p>
          )}
        </div>

        <div className="analysis-section">
          <h3>Management Summary</h3>
          <p>{response.management_summary}</p>
        </div>
      </div>
    </div>
  );
}

export default AIResponse;