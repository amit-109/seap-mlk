import { ExternalLink, Info } from "lucide-react";
import { OFFICIAL_PORTAL_URL } from "./ButtonLink.jsx";

export default function PortalNotice({ children = "Registration, learning activities and assessments take place on the official SEAP portal." }) {
  return (
    <div className="portal-notice">
      <Info size={19} aria-hidden="true" />
      <p>{children}</p>
      <a href={OFFICIAL_PORTAL_URL} target="_blank" rel="noopener noreferrer" aria-label="Open official SEAP portal in a new tab">
        Official portal <ExternalLink size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
