export default function StepCard({ number, icon: Icon, title, children }) {
  return (
    <article className="step-card h-100">
      <div className="step-card__top">
        <span className="step-card__number">{number}</span>
        {Icon && <span className="step-card__icon"><Icon size={20} aria-hidden="true" /></span>}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
