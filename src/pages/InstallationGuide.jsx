import { Check, Download, Globe, Smartphone, Wifi } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ButtonLink from "../components/ButtonLink.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import ReferenceGallery from "../components/ReferenceGallery.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import StepCard from "../components/StepCard.jsx";
import installationImage from "../assets/seap-installation-reference.png";

const steps = [
  { icon: Globe, title: "Open the SEAP website", text: "Go to https://spokenenglish.wadhwaniai.org/ in Chrome on your Android device." },
  { icon: Smartphone, title: "Use a supported device", text: "Access the portal using a phone, tablet or computer with a modern web browser." },
  { icon: Wifi, title: "Open the browser menu", text: "On Android Chrome, tap the three-dot menu. The supplied reference shows an “Install and create shortcut” menu item." },
  { icon: Download, title: "Confirm the installation", text: "Select the install option shown for SEAP and confirm “Install” in the browser prompt. Availability and wording may vary by device." },
];

export default function InstallationGuide() {
  return (
    <>
      <PageHero eyebrow="INSTALLATION GUIDE" title="Access SEAP on your device" description="Start with the official website. Any installation or device-specific guidance should come directly from the SEAP portal." >
        <ButtonLink>Open the SEAP website</ButtonLink>
      </PageHero>
      <div className="container page-content" id="page-content">
        <section className="section-block">
          <SectionHeading eyebrow="ACCESS THE PLATFORM" title="A simple, safe way to get started">
            No separate app store link or downloadable installer was provided with the available project materials. Do not install files from unofficial sources.
          </SectionHeading>
          <div className="row g-4 step-grid">
            {steps.map((step, index) => <div className="col-12 col-md-6" key={step.title}><StepCard number={`0${index + 1}`} icon={step.icon} title={step.title}>{step.text}</StepCard></div>)}
          </div>
        </section>
        <section className="install-card">
          <div className="install-card__icon"><Download size={25} /></div>
          <div className="install-card__content">
            <span className="eyebrow">OFFICIAL DESTINATION</span>
            <h2>Use the SEAP web portal</h2>
            <p>The supplied Android screenshots show opening SEAP in Chrome, selecting “Install and create shortcut” from the browser menu, and confirming “Install.” Follow the current browser prompt on your own device.</p>
            <ButtonLink>Go to SEAP</ButtonLink>
          </div>
        </section>
        <ReferenceGallery
          title="Android Chrome installation reference"
          images={[
            { src: installationImage, alt: "Supplied screenshot collage showing the SEAP welcome page on Android, Chrome's install and create shortcut menu, the browser installation confirmation and the installed SEAP app.", caption: "Install SEAP from Android Chrome" },
          ]}
        />
        <div className="tip-box tip-box--warning"><strong>Stay on the official domain</strong><p>The provided images show a browser-based install prompt. This guide does not provide APKs, app-store links, sign-in credentials or any non-official installation package.</p><span><Check size={15} /> spokenenglish.wadhwaniai.org</span></div>
        <PortalNotice />
      </div>
    </>
  );
}
