export default function FeatureCard({ icon: Icon, title, children, tone = "teal" }) {
  return (
    <article className="feature-card h-100">
      <span className={`feature-card__icon feature-card__icon--${tone}`}>
        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
