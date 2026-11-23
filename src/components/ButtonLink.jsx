import { ArrowUpRight } from "lucide-react";

export const OFFICIAL_PORTAL_URL = "https://spokenenglish.wadhwaniai.org/";

export default function ButtonLink({ children = "Visit official SEAP portal", className = "" }) {
  return (
    <a
      className={`btn btn-primary-custom ${className}`.trim()}
      href={OFFICIAL_PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
