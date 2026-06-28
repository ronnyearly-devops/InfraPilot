import { useState } from "react";
import api from "../api/api";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import IncidentForm from "../components/IncidentForm";
import AIResponse from "../components/AIResponse";
import "../styles/dashboard.css";

import Incidents from "./Incidents";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeModule, setActiveModule] = useState("Dashboard");

  const handleAnalyze = async () => {
    setLoading(true);
    setAiResponse(null);

    try {
      const response = await api.post("/chat/", {
        message,
      });

      setAiResponse(response.data);
    } catch (error) {
      console.error(error);
      setAiResponse({
        incident_classification: "Connection Error",
        severity: "High",
        confidence_score: 0,
        probable_root_cause: "The frontend could not connect to the backend API.",
        recommended_actions: [
          "Verify the FastAPI backend is running.",
          "Confirm the backend is available at http://127.0.0.1:8000.",
          "Check the browser console for network errors."
        ],
        suggested_scripts: [],
        management_summary: "InfraPilot could not complete the analysis because the backend API was unavailable."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <Header />

      <div className="layout">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />

        <main className="main-content">
          {activeModule === "Dashboard" && (
              <>
                  <section className="cards">
                      <DashboardCard label="Critical Incidents" value="3" />
                      <DashboardCard label="AI Analyses" value="12" />
                      <DashboardCard label="Automation Ready" value="5" />
                  </section>

                  <section className="workspace">
                      <IncidentForm
                          message={message}
                          setMessage={setMessage}
                          loading={loading}
                          handleAnalyze={handleAnalyze}
                      />

                      <AIResponse response={aiResponse} />
                  </section>
              </>
          )}

          {activeModule === "Incidents" && <Incidents />}

          {activeModule !== "Dashboard" &&
          activeModule !== "Incidents" && (
              <section className="panel">
                  <h2>{activeModule}</h2>
                  <p>This module is part of the InfraPilot roadmap and will be built in a future sprint.</p>
              </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;