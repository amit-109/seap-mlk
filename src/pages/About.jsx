import { BookOpen, CheckCircle2, Languages } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import ReferenceGallery from "../components/ReferenceGallery.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import onboardingImage from "../assets/seap-faculty-onboarding.png";
import dashboardImage from "../assets/seap-faculty-dashboard.png";

const modules = [
  { n: "01", title: "Module 01" },
  { n: "02", title: "Module 02" },
  { n: "03", title: "Module 03" },
  { n: "04", title: "Module 04" },
  { n: "05", title: "Module 05" },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT THE PROGRAMME" title="What is SEAP?" description="An orientation to the Spoken English and AI Programme—and to where your actual learning journey takes place." />
      <div className="container page-content" id="page-content">
        <section className="intro-callout">
          <div className="intro-callout__mark"><Languages size={26} /></div>
          <div><span className="eyebrow">SPOKEN ENGLISH AND AI PROGRAMME</span><h2>A structured learning journey, hosted on the official portal.</h2><p>SEAP provides English learning content through a digital platform. This college orientation portal explains how faculty and students get started; all registration, lessons and assessments happen on the official SEAP portal.</p></div>
        </section>
        <section className="section-block">
          <SectionHeading eyebrow="LEARNING OVERVIEW" title="Five modules. Twenty-five lessons.">
            The programme is organised into five modules with 25 lessons. The official portal is the source of truth for module names, lesson content and completion requirements.
          </SectionHeading>
          <div className="module-list">
            {modules.map(({ n, title }) => (
              <article className="module-row" key={n}>
                <span className="module-row__number">{n}</span>
                <span className="module-row__icon"><BookOpen size={21} /></span>
                <div className="module-row__content"><h3>{title}</h3><p>See the official SEAP portal for this module’s title and lesson details.</p></div>
                <span className="module-row__status"><CheckCircle2 size={17} /> On SEAP</span>
              </article>
            ))}
          </div>
          <p className="fine-print">The project materials available here did not include the two reference PDFs. To avoid guessing, module titles and the distribution of the 25 lessons are not reproduced here.</p>
        </section>
        <ReferenceGallery
          title="SEAP faculty onboarding and dashboard"
          images={[
            { src: onboardingImage, alt: "Supplied SEAP instructor onboarding flow showing institution code verification, OTP verification, profile completion and batch creation.", caption: "Faculty onboarding flow" },
            { src: dashboardImage, alt: "Supplied SEAP faculty dashboard reference showing dashboard indicators, a student list, batches and profile navigation.", caption: "Faculty dashboard overview" },
          ]}
        />
        <section className="section-block about-two-col">
          <div><span className="eyebrow">WHERE TO LEARN</span><h2>Learn on the official SEAP portal</h2><p>Go to the SEAP website to register, access learning materials, complete assessments and use any programme features available to your account.</p></div>
          <div className="about-domain"><span className="domain-chip">OFFICIAL PORTAL</span><strong>spokenenglish.<br />wadhwaniai.org</strong><a href="https://spokenenglish.wadhwaniai.org/" target="_blank" rel="noopener noreferrer">Open portal ↗</a></div>
        </section>
        <PortalNotice />
      </div>
    </>
  );
}
