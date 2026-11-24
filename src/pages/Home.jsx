import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Layers3, UsersRound, Video } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

const pathways = [
  { title: "Faculty Guide", description: "From faculty registration to creating a learning batch.", icon: GraduationCap, to: "/faculty-guide", color: "orange" },
  { title: "Student Guide", description: "Join your faculty’s batch and begin learning on SEAP.", icon: UsersRound, to: "/student-guide", color: "teal" },
  { title: "Video Tutorials", description: "Browse the V1–V5 orientation video sections.", icon: Video, to: "/video-tutorials", color: "blue" },
];

export default function Home() {
  const { language } = useLanguage();
  const hindi = language === "hi";
  const roleCards = hindi
    ? [
        { title: "मैं छात्र हूं", description: "बैच कोड लें और SEAP में रजिस्टर करें।", icon: UsersRound, to: "/student-guide", color: "teal" },
        { title: "मैं शिक्षक हूं", description: "बैच बनाएं और छात्रों का progress देखें।", icon: GraduationCap, to: "/faculty-guide", color: "orange" },
      ]
    : [
        { title: "I am a student", description: "Get your batch code and register on SEAP.", icon: UsersRound, to: "/student-guide", color: "teal" },
        { title: "I am faculty", description: "Create a batch and monitor student progress.", icon: GraduationCap, to: "/faculty-guide", color: "orange" },
      ];

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> {hindi ? "कॉलेज परिचय · SEAP" : "CAMPUS ORIENTATION · SEAP"}</span>
            <h1>{hindi ? <>अच्छी अंग्रेज़ी बोलने का <span>आत्मविश्वास बनाएं।</span></> : <>Build confidence in <span>spoken English.</span></>}</h1>
            <p className="home-hero__lead">{hindi ? "MLKPG College के छात्र और शिक्षक SEAP पोर्टल का उपयोग करने के लिए आसान चरण-दर-चरण गाइड।" : "A clear, practical guide for MLKPG College faculty and students getting started with the Spoken English and AI Programme."}</p>
            <div className="hero-actions">
              <ButtonLink>{hindi ? "SEAP पोर्टल खोलें" : "Visit official SEAP portal"}</ButtonLink>
              <Link className="btn btn-ghost-light" to="/about-seap">{hindi ? "कार्यक्रम समझें" : "Explore the programme"} <ArrowRight size={17} /></Link>
            </div>
            <div className="hero-facts">
              <span><Layers3 size={17} /> {hindi ? "5 सीखने के मॉड्यूल" : "5 learning modules"}</span>
              <span><BookOpen size={17} /> {hindi ? "25 पाठ" : "25 lessons"}</span>
              <span><ClipboardCheck size={17} /> {hindi ? "चरण-दर-चरण गाइड" : "Guided orientation"}</span>
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
          <span className="orientation-strip__label">{hindi ? "यहां से शुरू करें" : "YOUR STARTING POINT"}</span>
          <p>{hindi ? "पहले गाइड पढ़ें। फिर रजिस्ट्रेशन और पढ़ाई आधिकारिक SEAP पोर्टल पर करें।" : "Get oriented here. Complete your programme journey on the official SEAP portal."}</p>
          <a href="https://spokenenglish.wadhwaniai.org/" target="_blank" rel="noopener noreferrer">{hindi ? "SEAP खोलें" : "Open SEAP"} <ArrowRight size={16} /></a>
        </div>
      </section>

      <div className="container page-content" id="page-content">
        <section className="section-block">
          <SectionHeading eyebrow={hindi ? "कार्यक्रम" : "THE PROGRAMME"} title={hindi ? "बेहतर संवाद की आसान राह" : "A guided path to stronger communication"}>
            {hindi ? "SEAP 5 मॉड्यूल और 25 पाठों से अंग्रेज़ी बोलना सीखने में मदद करता है। शुरू करने से पहले इस गाइड से अपने अगले कदम समझें।" : "SEAP supports spoken English learning through structured modules and lessons. Use this portal to understand the roles and the next steps before you begin."}
          </SectionHeading>
          <div className="row g-4 feature-grid">
            <div className="col-12 col-md-4"><FeatureCard icon={Layers3} title={hindi ? "क्रमबद्ध पढ़ाई" : "Structured learning"} tone="teal">{hindi ? "SEAP पोर्टल पर 5 मॉड्यूल में 25 पाठ उपलब्ध हैं।" : "Explore five modules made up of 25 lessons on the SEAP learning portal."}</FeatureCard></div>
            <div className="col-12 col-md-4"><FeatureCard icon={UsersRound} title={hindi ? "शिक्षक का बैच" : "Faculty-guided batches"} tone="orange">{hindi ? "शिक्षक बैच बनाकर छात्रों को बैच कोड देते हैं।" : "Faculty create batches and share the batch code with their students."}</FeatureCard></div>
            <div className="col-12 col-md-4"><FeatureCard icon={ClipboardCheck} title={hindi ? "प्रगति देखना" : "Progress monitoring"} tone="blue">{hindi ? "शिक्षक अपने पोर्टल से छात्रों की पढ़ाई की प्रगति देख सकते हैं।" : "Faculty can use the portal dashboard to monitor student learning progress."}</FeatureCard></div>
          </div>
        </section>
        <section className="section-block section-block--soft">
          <div className="pathway-header">
            <SectionHeading eyebrow={hindi ? "अपना काम चुनें" : "CHOOSE YOUR PATH"} title={hindi ? "आप कौन हैं?" : "What do you need?"} />
            <Link to="/about-seap" className="text-link">{hindi ? "SEAP कैसे काम करता है" : "See how SEAP works"} <ArrowRight size={16} /></Link>
          </div>
          <div className="row g-4">
            {roleCards.map(({ title, description, icon: Icon, to, color }) => (
              <div className="col-12 col-md-4" key={to}>
                <Link to={to} className="pathway-card">
                  <span className={`pathway-card__icon pathway-card__icon--${color}`}><Icon size={23} /></span>
                  <h3>{title}</h3><p>{description}</p>
                  <span className="pathway-card__link">{hindi ? "गाइड खोलें" : "Open guide"} <ArrowRight size={16} /></span>
                </Link>
              </div>
            ))}
            <div className="col-12 col-md-4">
              <Link to="/video-tutorials" className="pathway-card">
                <span className="pathway-card__icon pathway-card__icon--blue"><Video size={23} /></span>
                <h3>{hindi ? "वीडियो से सीखें" : "Learn with videos"}</h3>
                <p>{hindi ? "V1 से V5 तक आसान वीडियो मार्गदर्शिका देखें।" : "Browse the V1–V5 orientation video sections."}</p>
                <span className="pathway-card__link">{hindi ? "वीडियो देखें" : "Open videos"} <ArrowRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>
        <section className="section-block quick-start">
          <div className="quick-start__copy">
            <span className="eyebrow">{hindi ? "शुरू करने के लिए तैयार?" : "READY TO BEGIN?"}</span>
            <h2>{hindi ? "आधिकारिक SEAP पोर्टल पर जाएं" : "Continue on the official SEAP portal"}</h2>
            <p>{hindi ? "यह गाइड रजिस्ट्रेशन नहीं करता। रजिस्ट्रेशन, पढ़ाई और परीक्षा के लिए आधिकारिक पोर्टल उपयोग करें।" : "This orientation site does not register users or host learning activities. Use the official portal for all programme actions."}</p>
          </div>
          <ButtonLink>{hindi ? "पोर्टल खोलें" : "Go to official portal"}</ButtonLink>
        </section>
        <PortalNotice />
      </div>
    </>
  );
}
