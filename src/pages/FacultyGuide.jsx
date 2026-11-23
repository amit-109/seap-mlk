import { ArrowDownToLine, BarChart3, ClipboardList, KeyRound, Share2, UserRoundCheck, UsersRound } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ButtonLink from "../components/ButtonLink.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import ReferenceGallery from "../components/ReferenceGallery.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import StepCard from "../components/StepCard.jsx";
import onboardingImage from "../assets/seap-faculty-onboarding.png";
import dashboardImage from "../assets/seap-faculty-dashboard.png";

const steps = [
  { icon: UserRoundCheck, title: "Open the official portal", text: "Visit the SEAP portal and begin faculty registration using the institution code provided through your institution's official SEAP coordination." },
  { icon: KeyRound, title: "Verify with OTP", text: "Complete OTP verification as prompted on the official portal. The OTP delivery channel is not specified in this guide." },
  { icon: ClipboardList, title: "Complete your profile", text: "Sign in and fill in the requested faculty profile information on the official portal." },
  { icon: UsersRound, title: "Create a batch", text: "Use the faculty portal to create a student batch. Follow the current on-screen instructions." },
  { icon: Share2, title: "Share the batch code", text: "Share the batch code generated for your batch with the students who should join it." },
];

export default function FacultyGuide() {
  return (
    <>
      <PageHero eyebrow="FACULTY GUIDE" title="Guide your students through SEAP" description="A high-level orientation to faculty onboarding, batch creation and student progress monitoring." >
        <ButtonLink>Faculty registration on SEAP</ButtonLink>
      </PageHero>
      <div className="container page-content" id="page-content">
        <PortalNotice />
        <section className="section-block">
          <SectionHeading eyebrow="FACULTY ONBOARDING" title="From registration to a learning batch">
            Registration steps must be completed on the official SEAP portal. Follow the prompts currently shown there, as interface details may change.
          </SectionHeading>
          <div className="row g-4 step-grid">
            {steps.map((step, index) => <div className="col-12 col-md-6 col-lg-4" key={step.title}><StepCard number={`0${index + 1}`} icon={step.icon} title={step.title}>{step.text}</StepCard></div>)}
          </div>
        </section>
        <section className="dashboard-panel">
          <div className="dashboard-panel__icon"><BarChart3 size={25} /></div>
          <div className="dashboard-panel__copy">
            <span className="eyebrow">FACULTY DASHBOARD</span>
            <h2>Monitor learning progress on SEAP</h2>
            <p>The supplied reference screenshot shows registered-student count, average lessons completed, average total score and overall scores for Pronunciation, Vocabulary, Listening and Grammar. It also shows batch-code access, student and batch views, and profile navigation. These are reference labels only; current indicators and real student details appear only in your signed-in SEAP portal. This guide does not display live dashboard data.</p>
            <ul className="check-list">
              <li><ArrowDownToLine size={17} /> Use the dashboard to review student and batch learning progress.</li>
              <li><ArrowDownToLine size={17} /> Review the available lesson and score indicators shown by SEAP.</li>
              <li><ArrowDownToLine size={17} /> Refer to the current portal for indicator values and definitions.</li>
            </ul>
          </div>
        </section>
        <ReferenceGallery
          title="Faculty registration and dashboard screens"
          images={[
            { src: onboardingImage, alt: "Supplied SEAP onboarding flow showing instructor selection, institution-code verification, OTP verification, profile completion and a create-batch screen.", caption: "Faculty onboarding and batch setup" },
            { src: dashboardImage, alt: "Supplied faculty dashboard reference showing registered-student, lesson-completion and score indicators, along with student and batch navigation.", caption: "Faculty dashboard and student monitoring" },
          ]}
        />
        <div className="tip-box"><strong>Keep the batch code private to the intended learners.</strong><p>Share each batch code through your usual college communication channel. This orientation guide does not issue or store batch codes.</p></div>
        <section className="bottom-cta"><div><span className="eyebrow">NEXT STEP</span><h2>Continue faculty setup on SEAP</h2><p>Have your institution-provided code ready before you begin.</p></div><ButtonLink>Open official portal</ButtonLink></section>
      </div>
    </>
  );
}
