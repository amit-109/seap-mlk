import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Layers3, UsersRound, Video } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const pathways = [
  { title: "Faculty Guide", description: "From faculty registration to creating a learning batch.", icon: GraduationCap, to: "/faculty-guide", color: "orange" },
  { title: "Student Guide", description: "Join your faculty’s batch and begin learning on SEAP.", icon: UsersRound, to: "/student-guide", color: "teal" },
  { title: "Video Tutorials", description: "Browse the V1–V5 orientation video sections.", icon: Video, to: "/video-tutorials", color: "blue" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> CAMPUS ORIENTATION · SEAP</span>
            <h1>Build confidence in <span>spoken English.</span></h1>
            <p className="home-hero__lead">A clear, practical guide for MLKPG College faculty and students getting started with the Spoken English and AI Programme.</p>
            <div className="hero-actions">
              <ButtonLink>Visit official SEAP portal</ButtonLink>
              <Link className="btn btn-ghost-light" to="/about-seap">Explore the programme <ArrowRight size={17} /></Link>
            </div>
            <div className="hero-facts">
              <span><Layers3 size={17} /> 5 learning modules</span>
              <span><BookOpen size={17} /> 25 lessons</span>
              <span><ClipboardCheck size={17} /> Guided orientation</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of a learning pathway">
            <div className="hero-art__halo" />
            <div className="hero-art__card hero-art__card--top"><span className="art-icon art-icon--orange"><GraduationCap size={22} /></span><span><strong>Faculty</strong><small>Guide a learning batch</small></span></div>
            <div className="hero-art__book"><span className="book-spine" /><div className="book-content"><span className="book-tag">SEAP JOURNEY</span><strong>Learn.<br />Practice.<br /><em>Progress.</em></strong><div className="book-lines"><i /><i /><i /></div></div></div>
            <div className="hero-art__card hero-art__card--bottom"><span className="art-icon art-icon--teal"><UsersRound size={20} /></span><span><strong>Students</strong><small>Learn at your own pace</small></span></div>
            <span className="hero-art__spark hero-art__spark--one">✳</span>
            <span className="hero-art__spark hero-art__spark--two">+</span>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="orientation-strip">
        <div className="container orientation-strip__inner">
          <span className="orientation-strip__label">YOUR STARTING POINT</span>
          <p>Get oriented here. Complete your programme journey on the official SEAP portal.</p>
          <a href="https://spokenenglish.wadhwaniai.org/" target="_blank" rel="noopener noreferrer">Open SEAP <ArrowRight size={16} /></a>
        </div>
      </section>

      <div className="container page-content" id="page-content">
        <section className="section-block">
          <SectionHeading eyebrow="THE PROGRAMME" title="A guided path to stronger communication">
            SEAP supports spoken English learning through structured modules and lessons. Use this portal to understand the roles and the next steps before you begin.
          </SectionHeading>
          <div className="row g-4 feature-grid">
            <div className="col-12 col-md-4"><FeatureCard icon={Layers3} title="Structured learning" tone="teal">Explore five modules made up of 25 lessons on the SEAP learning portal.</FeatureCard></div>
            <div className="col-12 col-md-4"><FeatureCard icon={UsersRound} title="Faculty-guided batches" tone="orange">Faculty create batches and share the batch code with their students.</FeatureCard></div>
            <div className="col-12 col-md-4"><FeatureCard icon={ClipboardCheck} title="Progress monitoring" tone="blue">Faculty can use the portal dashboard to monitor student learning progress.</FeatureCard></div>
          </div>
        </section>
        <section className="section-block section-block--soft">
          <div className="pathway-header">
            <SectionHeading eyebrow="CHOOSE YOUR PATH" title="Find the guide you need" />
            <Link to="/about-seap" className="text-link">See how SEAP works <ArrowRight size={16} /></Link>
          </div>
          <div className="row g-4">
            {pathways.map(({ title, description, icon: Icon, to, color }) => (
              <div className="col-12 col-md-4" key={to}>
                <Link to={to} className="pathway-card">
                  <span className={`pathway-card__icon pathway-card__icon--${color}`}><Icon size={23} /></span>
                  <h3>{title}</h3><p>{description}</p>
                  <span className="pathway-card__link">Open guide <ArrowRight size={16} /></span>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="section-block quick-start">
          <div className="quick-start__copy">
            <span className="eyebrow">READY TO BEGIN?</span>
            <h2>Continue on the official SEAP portal</h2>
            <p>This orientation site does not register users or host learning activities. Use the official portal for all programme actions.</p>
          </div>
          <ButtonLink>Go to official portal</ButtonLink>
        </section>
        <PortalNotice />
      </div>
    </>
  );
}
