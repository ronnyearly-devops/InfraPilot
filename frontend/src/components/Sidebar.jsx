const modules = [
  "Dashboard",
  "AI Assistant",
  "Log Analysis",
  "Documentation",
  "Automation",
  "Incidents",
  "Settings",
];

function Sidebar({ activeModule, setActiveModule }) {
  return (
    <aside className="sidebar">
      <h3>Operations</h3>

      <nav>
        {modules.map((module) => (
          <p
            key={module}
            className={activeModule === module ? "active" : ""}
            onClick={() => setActiveModule(module)}
          >
            {module}
          </p>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;