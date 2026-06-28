function IncidentForm({ message, setMessage, loading, handleAnalyze }) {
  return (
    <div className="panel">
      <h2>Incident Workspace</h2>

      <label>Environment</label>
      <select>
        <option>Windows Server</option>
        <option>Linux</option>
        <option>VMware</option>
        <option>Azure</option>
        <option>AWS</option>
      </select>

      <label>Severity</label>
      <select>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <label>Incident Description</label>
      <textarea
        rows="7"
        placeholder="Example: Domain Controller DC-01 is failing replication after patching."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Incident"}
      </button>
    </div>
  );
}

export default IncidentForm;