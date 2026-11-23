import { BookOpenCheck, KeyRound, Laptop, LogIn, UserRoundPlus } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ButtonLink from "../components/ButtonLink.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import ReferenceGallery from "../components/ReferenceGallery.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import StepCard from "../components/StepCard.jsx";
import onboardingImage from "../assets/seap-faculty-onboarding.png";

const steps = [
  { icon: KeyRound, title: "Get your batch code", text: "Ask your SEAP faculty guide for the code for the batch you should join." },
  { icon: Laptop, title: "Open the official SEAP portal", text: "Visit spokenenglish.wadhwaniai.org to begin student registration." },
  { icon: UserRoundPlus, title: "Register and join", text: "Follow the student registration instructions on the portal and enter the batch code provided by your faculty." },
  { icon: LogIn, title: "Sign in to your account", text: "Use the sign-in flow provided by SEAP to return to your learning." },
  { icon: BookOpenCheck, title: "Learn on the platform", text: "Access the available modules and lessons and complete learning activities on SEAP." },
];

export default function StudentGuide() {
  return (
    <>
      <PageHero eyebrow="STUDENT GUIDE" title="Your SEAP learning journey starts here" description="Get your batch code from faculty, register on the official portal, and continue learning there.">
        <ButtonLink>Open student registration</ButtonLink>
      </PageHero>
      <div className="container page-content" id="page-content">
        <PortalNotice />
        <section className="section-block">
          <SectionHeading eyebrow="GET STARTED" title="Join your faculty's batch">
            This guide provides an overview only. Use the current steps and prompts on the official SEAP portal for registration and account access.
          </SectionHeading>
          <div className="row g-4 step-grid">
            {steps.map((step, index) => <div className="col-12 col-md-6 col-lg-4" key={step.title}><StepCard number={`0${index + 1}`} icon={step.icon} title={step.title}>{step.text}</StepCard></div>)}
          </div>
        </section>
        <section className="student-callout">
          <span className="student-callout__icon"><KeyRound size={25} /></span>
          <div><span className="eyebrow">NO BATCH CODE YET?</span><h2>Contact your SEAP faculty guide</h2><p>A batch code is provided by faculty after a batch is created. This site cannot generate or retrieve a batch code.</p></div>
        </section>
        <ReferenceGallery
          title="SEAP entry and faculty onboarding reference"
          images={[
            { src: onboardingImage, alt: "Supplied SEAP onboarding reference including the welcome screen with Student and Instructor choices and the faculty batch creation flow.", caption: "SEAP welcome and batch setup reference" },
          ]}
        />
        <section className="bottom-cta"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>All learning happens on the SEAP platform</h2><p>Register and access the programme on the official portal.</p></div><ButtonLink>Visit SEAP</ButtonLink></section>
      </div>
    </>
  );
}
