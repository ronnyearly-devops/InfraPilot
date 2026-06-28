# 🚀 InfraPilot

### Enterprise AI Copilot for Infrastructure Operations

InfraPilot is an AI-powered infrastructure operations platform designed to help Systems Administrators, Infrastructure Engineers, DevOps Engineers, and IT Operations teams troubleshoot incidents, analyze environments, generate remediation steps, and automate operational workflows.

The long-term vision is to provide a unified AI assistant capable of supporting Windows Server, VMware, Linux, Azure, AWS, Kubernetes, networking, scripting, documentation, and enterprise automation from a single interface.

---

# ✨ Current Features (Sprint 1)

## 🤖 AI Incident Analysis

* Analyze infrastructure incidents using OpenAI
* Structured AI responses
* Root Cause Analysis
* Severity Assessment
* Recommended Actions
* Suggested Scripts
* Executive Management Summary

## 📚 Incident Management

* Save AI analyses to SQLite
* Incident History dashboard
* Clickable Incident Details modal
* Severity badges
* Status badges
* Professional enterprise UI

---

# 🏗 Architecture

```text
                 React + Vite
                      │
                      ▼
               FastAPI Backend
                      │
                      ▼
             AI Service Layer
                      │
      ┌───────────────┴───────────────┐
      ▼                               ▼
 OpenAI API                    SQLite Database
```

---

# 💻 Technology Stack

## Frontend

* React
* Vite
* Axios
* CSS

## Backend

* FastAPI
* SQLAlchemy
* SQLite
* OpenAI API
* Pydantic

## Planned Technologies

* PostgreSQL
* Docker
* Kubernetes
* Azure
* AWS
* Microsoft Graph
* Retrieval-Augmented Generation (RAG)
* MCP Servers

---

# 📁 Project Structure

```text
InfraPilot/
│
├── backend/
│   ├── api/
│   ├── database/
│   ├── models/
│   ├── prompts/
│   ├── services/
│   └── main.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── api/
│
├── docs/
│
├── portfolio-assets/
│
├── README.md
└── .gitignore
```

---

# 🚀 Sprint Roadmap

## ✅ Sprint 1 — Foundation

* React Frontend
* FastAPI Backend
* OpenAI Integration
* SQLite Database
* Repository Pattern
* AI Incident Analysis
* Incident History
* Incident Details Modal

## 🚧 Sprint 2 — AI Operations

* Log Upload & Analysis
* Knowledge Base (RAG)
* AI Script Generator
* Environment Detection

## 📋 Sprint 3 — Automation

* PowerShell Generation
* Bash Generation
* Automation Workflows
* Runbook Builder

## ☁ Sprint 4 — Enterprise Integrations

* VMware
* Active Directory
* Azure
* AWS
* Kubernetes
* Microsoft Graph

---

# 📸 Screenshots

Application screenshots are located in:

```text
portfolio-assets/screenshots/
```

Future releases will showcase:

* Dashboard
* Incident History
* AI Analysis
* Log Analysis
* Automation Console

---

# 🎯 Project Goals

InfraPilot is being developed as a modern AI-native infrastructure operations platform focused on:

* Reducing incident resolution time
* Standardizing troubleshooting workflows
* Assisting infrastructure engineers with AI-powered recommendations
* Providing enterprise-ready automation
* Becoming a centralized operational copilot for modern IT environments

---

# 📄 License

This project is licensed under the MIT License.
