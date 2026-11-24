import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ButtonLink, { OFFICIAL_PORTAL_URL } from "../components/ButtonLink.jsx";
import PortalNotice from "../components/PortalNotice.jsx";

const faqs = [
  { q: "What is SEAP?", a: "SEAP is the Spoken English and AI Programme. This site is an orientation guide for MLKPG College, Balrampur; it is not the learning platform." },
  { q: "Where do I register or complete lessons?", a: `Register, learn and complete assessments on the official SEAP portal: ${OFFICIAL_PORTAL_URL}` },
  { q: "How does faculty registration work?", a: "Faculty registration uses an institution code, OTP verification and profile completion on the official SEAP portal. Obtain the institution code through your institution's official SEAP coordination." },
  { q: "How do students join a batch?", a: "A faculty member creates a batch and shares its batch code. Students use the faculty-provided code while registering or joining through the official SEAP portal." },
  { q: "Can this site issue or recover my batch code?", a: "No. Batch codes are created and managed on SEAP by faculty. Ask your faculty guide for the correct code." },
  { q: "How many modules and lessons does the programme include?", a: "SEAP includes five modules and 25 lessons. Check the official portal for the current module names, lesson content and completion requirements." },
  { q: "Can I see student progress here?", a: "No. Student progress is available only through the faculty dashboard on the official portal. This orientation guide does not connect to live SEAP data." },
  { q: "Where are the video tutorials?", a: "The Video Tutorials page has separate Faculty and Student orientation videos." },
  { q: "Do I need to install an app?", a: "The available materials do not confirm a separate app or installer. Start at the official SEAP website and follow any device or installation guidance shown there." },
  { q: "Who should I contact if I cannot register?", a: "Follow the help or support information shown on the official portal, or contact your institution's SEAP coordinator. No unverified contact details are listed on this site." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <PageHero eyebrow="HELP & ANSWERS" title="Frequently asked questions" description="Quick guidance for faculty and students getting oriented to SEAP." />
      <div className="container page-content" id="page-content">
        <section className="faq-wrap">
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-answer-${index}`;
              return (
                <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
                  <h2><button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>{item.q}<ChevronDown size={19} aria-hidden="true" /></button></h2>
                  <div className="faq-answer" id={panelId} hidden={!isOpen}><p>{item.a}</p></div>
                </article>
              );
            })}
          </div>
          <aside className="faq-aside">
            <span className="faq-aside__icon"><span>?</span></span>
            <span className="eyebrow">STILL NEED HELP?</span>
            <h2>Start with the official source</h2>
            <p>Check the instructions and support options available on the SEAP portal.</p>
            <ButtonLink>Visit SEAP</ButtonLink>
          </aside>
        </section>
        <PortalNotice />
      </div>
    </>
  );
}
