"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const benefits = [
  { number: "01", title: "Build brand trust", text: "Give people a clearer way to understand the care behind your commitments." },
  { number: "02", title: "Make progress visible", text: "Turn considered action into a signal your customers can recognise." },
  { number: "03", title: "Create shared standards", text: "Bring your team around a more thoughtful approach to environmental impact." },
  { number: "04", title: "Move with intention", text: "Make sustainability part of the way your brand shows up every day." },
];

const steps = [
  { number: "01", title: "Apply", text: "Tell us about your brand, your work, and the environmental commitments guiding it." },
  { number: "02", title: "Criteria evaluation", text: "Your application is mapped against a clear framework of proposed recognition criteria." },
  { number: "03", title: "Review", text: "The details are reviewed to understand your approach, evidence, and next steps." },
  { number: "04", title: "Receive the mark", text: "Approved applicants can use the recognition mark across relevant brand touchpoints." },
];

const values = [
  { number: "01", title: "Environmental standards", text: "A considered framework for meaningful action." },
  { number: "02", title: "Transparent documentation", text: "Clear information behind every commitment." },
  { number: "03", title: "Accountable metrics", text: "Progress that can be explained and understood." },
  { number: "04", title: "Modern criteria", text: "A framework designed to evolve with the work." },
];

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <div className={footer ? "wordmark wordmark-footer" : "wordmark"} aria-label="Earth Day">
      <span>EARTH</span><span>DAY<span className="wordmark-dot">®</span></span>
    </div>
  );
}

function ArrowLink({ children, href = "#apply" }: { children: React.ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={15} strokeWidth={1.8} /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroTrackRef = useRef<HTMLElement | null>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const track = heroTrackRef.current;
    if (!track) return;
    const scene = track.querySelector<HTMLElement>(".hero-scene");
    const copy = track.querySelector<HTMLElement>(".hero-copy");
    const header = track.querySelector<HTMLElement>(".site-header");
    const bottom = track.querySelector<HTMLElement>(".hero-bottom");
    if (!scene) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      scene.style.setProperty("--scene-progress", "0");
      return;
    }
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = track.getBoundingClientRect();
        const distance = Math.max(1, track.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / distance));
        scene.style.setProperty("--scene-progress", String(progress));
        const fade = Math.min(1, Math.max(0, 1 - progress * 5.2));
        if (copy) {
          copy.style.opacity = String(fade);
          copy.style.transform = `translate3d(0, 0, ${-Math.min(260, progress * 520)}px)`;
          copy.style.pointerEvents = progress > 0.16 ? "none" : "auto";
        }
        if (header) {
          header.style.opacity = String(Math.min(1, Math.max(0, 1 - progress * 3.8)));
          header.style.transform = `translate3d(0, 0, ${-Math.min(100, progress * 220)}px)`;
        }
        if (bottom) {
          bottom.style.opacity = String(fade);
          bottom.style.transform = `translate3d(0, 0, ${-Math.min(120, progress * 260)}px)`;
        }
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".intro-main, .benefit-card, .object-photo, .object-copy, .process-heading, .step-row, .standards h2, .standards-intro, .value-card, .community-grid, .footer-cta");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-scroll-track" ref={heroTrackRef}>
          <div className="hero-scene">
            <div className="hero-frame hero-frame-one" aria-hidden="true" />
            <div className="hero-frame hero-frame-two" aria-hidden="true" />
            <div className="hero-frame hero-frame-three" aria-hidden="true" />
            <div className="hero-frame hero-frame-four" aria-hidden="true" />
            <div className="hero-shade" aria-hidden="true" />
            <header className="site-header">
              <a className="brand" href="#top" aria-label="Earth Day home"><span className="brand-symbol">e.</span><span>EARTH DAY</span></a>
              <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
              <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#insights" onClick={closeMenu}>Insights</a>
                <a href="#criteria" onClick={closeMenu}>Criteria</a>
                <a href="#community" onClick={closeMenu}>Community</a>
                <a href="#brand" onClick={closeMenu}>Brand</a>
                <a className="nav-apply" href="#apply" onClick={closeMenu}>Apply now <ArrowUpRight size={14} /></a>
              </nav>
            </header>
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> A recognition platform for a changing world</p>
              <h1>A trusted mark for brands building with <em>greater care.</em></h1>
              <p className="hero-description">A considered approach to sustainability recognition, helping thoughtful brands make their environmental commitments easier to see, understand, and trust.</p>
              <div className="hero-actions">
                <a className="button button-sage" href="#apply">Explore application <ArrowUpRight size={16} /></a>
                <a className="button button-outline-light" href="#criteria">See the criteria <ArrowDownRight size={16} /></a>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-caption"><span className="caption-line" /> <span>For brands choosing a more considered future</span></div>
              <span className="hero-index">SCROLL TO EXPLORE ↓</span>
            </div>
            <div className="hero-scene-progress" aria-hidden="true"><span /></div>
          </div>
        </div>
        <div className="hero-branding">
          <Wordmark />
          <div className="partner-strip">
            <span className="partner-label">A better standard, shared</span>
            <div className="partner-logos" aria-label="Illustrative partner categories">
              <span className="partner-logo partner-serif">common<span>ground</span></span>
              <span className="partner-logo partner-spaced">FORM / FIELD</span>
              <span className="partner-logo partner-serif partner-italic">everwell</span>
              <span className="partner-logo partner-heavy">NORTH<span>®</span></span>
              <span className="partner-logo partner-spaced">KIN & CO.</span>
            </div>
            <span className="concept-note">Concept identities for presentation only</span>
          </div>
        </div>
      </section>

      <section className="intro section-light" id="about">
        <div className="section-kicker"><span>01</span><span>WHY IT MATTERS</span></div>
        <div className="intro-main">
          <p className="eyebrow"><span className="eyebrow-dot" /> Recognition with intention</p>
          <h2>Good work deserves<br />to be <em>understood.</em></h2>
          <p className="intro-description">Sustainability should be more than a statement. Earth Day is a concept for a clearer, more thoughtful way for brands to communicate the work behind their values.</p>
        </div>
        <div className="benefit-grid" id="insights">
          {benefits.map((item) => (
            <article className="benefit-card" key={item.number}>
              <span className="number-tag">[ {item.number} ]</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <span className="card-arrow"><ArrowUpRight size={17} /></span>
            </article>
          ))}
        </div>
        <div className="intro-foot"><span>Less noise. More meaning.</span><span>Designed for the long view <ArrowRight size={14} /></span></div>
      </section>

      <section className="object-section" id="brand">
        <div className="object-photo" role="img" aria-label="A minimal forest-green recognition box resting on a moss-covered log in a quiet forest">
          <div className="photo-label"><span>EARTH DAY</span><span>RECOGNITION / 001</span></div>
          <div className="recognition-box"><span className="box-small">A MARK FOR</span><span className="box-large">GOOD<br />INTENTIONS.</span><span className="box-bottom">EARTH DAY® <span>EST. 2025</span></span></div>
          <span className="photo-index">OBJECT STUDY — 001</span>
        </div>
        <div className="object-copy">
          <div className="section-kicker section-kicker-light"><span>02</span><span>THE MARK, IN CONTEXT</span></div>
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Made to move with your brand</p>
          <h2>Designed to live across the <em>modern brand world.</em></h2>
          <p>A considered identity should feel at home wherever your brand meets the world. From packaging and digital storefronts to annual reports and everyday communication.</p>
          <ArrowLink href="#community">Explore the approach</ArrowLink>
          <div className="object-meta"><span>01 / A versatile identity</span><span>02 / Built for clarity</span><span>03 / Made to be understood</span></div>
        </div>
      </section>

      <section className="process section-light" id="apply">
        <div className="section-kicker"><span>03</span><span>HOW IT WORKS</span></div>
        <div className="process-heading">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> A clear path forward</p><h2>A simple process.<br /><em>A considered outcome.</em></h2></div>
          <p className="process-intro">A structured journey built to make expectations clear, from the first conversation to the recognition mark.</p>
        </div>
        <div className="steps-list">
          {steps.map((step, i) => (
            <article className="step-row" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="step-symbol">{i === 3 ? <ArrowUpRight size={20} /> : <ArrowRight size={20} />}</span>
            </article>
          ))}
        </div>
        <p className="process-disclaimer">Illustrative process for this design concept. Final eligibility, review stages, and approval requirements would need to be defined by the platform.</p>
      </section>

      <section className="standards" id="criteria">
        <div className="standards-landscape" aria-hidden="true" />
        <div className="standards-content">
          <div className="section-kicker section-kicker-light"><span>04</span><span>THE FOUNDATION</span></div>
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Clear by design</p>
          <h2>Grounded in<br /><em>clearer standards.</em></h2>
          <p className="standards-intro">Trust begins with knowing what a mark means. Our proposed framework puts clarity, evidence, and accountability at the centre of recognition.</p>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p>
              </article>
            ))}
          </div>
          <div className="standards-note"><span className="note-mark">i</span><p>Earth Day is presented here as a website concept. No certification, endorsement, or environmental performance claim is implied.</p></div>
        </div>
      </section>

      <section className="community section-light" id="community">
        <div className="community-top"><span>05 / A SHARED DIRECTION</span><span>For people building with care <ArrowDownRight size={14} /></span></div>
        <div className="community-grid">
          <h2>Progress is a practice.<br /><em>Not a claim.</em></h2>
          <p>We believe the most meaningful change starts with clear intentions, honest communication, and the willingness to keep improving.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-cta">
          <p className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> The next step starts here</p>
          <h2>Ready to make your values <em>more visible?</em></h2>
          <p>Start a conversation about what thoughtful recognition could look like for your brand.</p>
          <div className="footer-actions"><a className="button button-dark" href="mailto:hello@earthday.example?subject=Earth%20Day%20platform%20enquiry">Start a conversation <ArrowUpRight size={16} /></a><a className="button button-outline-dark" href="#criteria">Review the framework <ArrowDownRight size={16} /></a></div>
        </div>
        <Wordmark footer />
        <div className="footer-bottom"><a className="brand brand-footer" href="#top"><span className="brand-symbol">e.</span><span>EARTH DAY</span></a><span>© 2026 EARTH DAY CONCEPT</span><div><a href="#about">About</a><a href="#criteria">Criteria</a><a href="mailto:hello@earthday.example">Contact</a></div><span className="footer-location">A concept for a more considered world.</span></div>
      </footer>
    </main>
  );
}
