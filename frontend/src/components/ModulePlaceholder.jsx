function ModulePlaceholder({ title, description, features }) {
  return (
    <section className="panel module-placeholder">
      <p className="module-label">Module Roadmap</p>
      <h2>{title}</h2>
      <p className="module-description">{description}</p>

      <h3>Planned Capabilities</h3>

      <ul className="module-feature-list">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}

export default ModulePlaceholder;