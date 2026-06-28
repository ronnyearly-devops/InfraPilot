import { useEffect, useState } from "react";
import api from "../api/api";
import "../styles/incidents.css";
import IncidentDetailsModal from "../components/IncidentDetailsModal";

function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    async function fetchIncidents() {
      try {
        const response = await api.get("/incidents/");
        setIncidents(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchIncidents();
  }, []);

  const getSeverityClass = (severity) => {
    return `severity-${severity.toLowerCase()}`;
  };

  const getStatusClass = (status) => {
    return `status-${status.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <div className="panel incidents-container">
      <div className="incidents-header">
        <h2>Incident History</h2>
        <p>Review previous AI-powered infrastructure incident analyses.</p>
      </div>

      <table className="incident-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Incident</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id} onClick={() => setSelectedIncident(incident)}>
              <td>{incident.id}</td>
              <td>{incident.title}</td>
              <td>
                <span className={getSeverityClass(incident.severity)}>
                  {incident.severity}
                </span>
              </td>
              <td>
                <span className={getStatusClass(incident.status)}>
                  {incident.status}
                </span>
              </td>
              <td>{new Date(incident.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <IncidentDetailsModal
        incident={selectedIncident}
        onClose={() => setSelectedIncident(null)}
      />
    </div>
  );
}

export default Incidents;