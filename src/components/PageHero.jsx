import { ArrowDown } from "lucide-react";

export default function PageHero({ eyebrow, title, description, children, compact = false }) {
  return (
    <section className={`page-hero ${compact ? "page-hero--compact" : ""}`}>
      <div className="container page-hero__inner">
        <div className="page-hero__copy">
          {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
          <h1>{title}</h1>
          <p>{description}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
        <a className="hero-scroll" href="#page-content" aria-label="Scroll to page content">
          Explore <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
