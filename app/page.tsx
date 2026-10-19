"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Evidence before language",
    description: "Environmental statements should be connected to information that can be explained, reviewed, and kept current.",
    note: "SHOW THE WORK",
  },
  {
    number: "02",
    title: "Progress over perfection",
    description: "A useful framework should make room for honest progress, not reward the loudest promise or the cleanest campaign.",
    note: "MAKE ROOM TO IMPROVE",
    spotlight: true,
  },
  {
    number: "03",
    title: "Clarity for everyone",
    description: "People should be able to understand what a recognition mark means, what it does not mean, and why it was awarded.",
    note: "MAKE IT UNDERSTANDABLE",
  },
];

const stages = [
  { number: "01", title: "Share the picture", detail: "Describe your work, your current commitments, and the areas where you are making changes." },
  { number: "02", title: "Gather the evidence", detail: "Connect each proposed claim to supporting information, with gaps made visible rather than hidden." },
  { number: "03", title: "Review the details", detail: "Assess the material against published criteria and make the reasoning clear to the applicant." },
  { number: "04", title: "Communicate the outcome", detail: "Explain the decision, its scope, and any next steps in language people can understand." },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Earth Day concept home">
          <BrandMark />
          <span>EARTH DAY<span className="brand-period">.</span></span>
        </a>
        <p className="masthead-note">A proposed recognition framework</p>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
          <a href="#principles" onClick={closeMenu}>Principles</a>
          <a href="#method" onClick={closeMenu}>Method</a>
          <a href="#framework" onClick={closeMenu}>Framework</a>
          <a className="nav-link" href="#concept-note" onClick={closeMenu}>About this concept <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span><i className="status-dot" /> FIELD NOTE 001 / ENVIRONMENT</span>
          <span>CLARITY IS A FORM OF CARE</span>
        </div>
        <div className="hero-layout" id="main-content">
          <div className="hero-copy">
            <p className="eyebrow">A better way to talk about environmental work</p>
            <h1 id="hero-title">Make the work<br />behind the promise<br /><em>easier to see.</em></h1>
            <p className="hero-description">A concept for a sustainability recognition platform built around clear criteria, meaningful evidence, and honest communication.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#method">Explore the proposed method <ArrowDown size={16} /></a>
              <a className="text-link" href="#principles">What should count? <ArrowUpRight size={15} /></a>
            </div>
          </div>

          <aside className="standard-sheet" aria-label="Illustrative recognition mark, not a real certification">
            <div className="sheet-top"><span>EARTH DAY / STANDARD</span><span>ED–01</span></div>
            <div className="seal-wrap">
              <div className="seal-ring seal-ring-outer" />
              <div className="seal-ring seal-ring-inner" />
              <div className="seal-cross seal-cross-horizontal" />
              <div className="seal-cross seal-cross-vertical" />
              <div className="seal-center"><BrandMark /><span>EARTH<br />DAY</span></div>
              <span className="seal-orbit seal-orbit-one">EVIDENCE</span>
              <span className="seal-orbit seal-orbit-two">ACCOUNTABILITY</span>
            </div>
            <div className="sheet-bottom">
              <div><span className="sheet-label">INTENT</span><strong>Make claims clearer.</strong></div>
              <div><span className="sheet-label">STATUS</span><strong>Concept study</strong></div>
            </div>
            <span className="sheet-watermark" aria-hidden="true">ED</span>
          </aside>
        </div>
        <div className="hero-foot">
          <span>01 / A FRAMEWORK FOR BETTER QUESTIONS</span>
          <span className="hero-foot-note">Not a live certification service</span>
        </div>
      </section>

      <section className="opening-note" aria-labelledby="opening-title">
        <div className="section-label"><span>THE STARTING POINT</span><span>01 — 03</span></div>
        <div className="opening-grid">
          <p className="margin-note">A mark only means something when people understand what sits behind it.</p>
          <div className="opening-copy">
            <h2 id="opening-title">Good intentions are a start.<br /><em>Clear evidence is better.</em></h2>
            <p>Environmental language is easy to publish and harder to evaluate. This concept explores a more useful alternative: a recognition system that explains its expectations, makes room for evidence, and communicates its limits.</p>
          </div>
        </div>
        <div className="annotation-line"><span /> LESS PROMISE. MORE CONTEXT.</div>
      </section>

      <section className="principles-section" id="principles" aria-labelledby="principles-title">
        <div className="section-label"><span>WHAT SHOULD COUNT</span><span>02 — 03</span></div>
        <div className="principles-heading">
          <p className="eyebrow">Three proposed principles</p>
          <h2 id="principles-title">A useful standard<br />starts with <em>better questions.</em></h2>
          <p className="principles-intro">Not a checklist for looking sustainable. A starting point for explaining the work clearly.</p>
        </div>
        <div className="principle-list">
          {principles.map((item) => (
            <article className={item.spotlight ? "principle-row principle-row-spotlight" : "principle-row"} key={item.number}>
              <span className="principle-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="principle-note">{item.note}</span>
            </article>
          ))}
        </div>
        <p className="section-footnote"><span>NOTE 01</span> These are proposed design principles, not published or independently validated certification criteria.</p>
      </section>

      <section className="method-section" id="method" aria-labelledby="method-title">
        <div className="method-header">
          <div className="section-label section-label-light"><span>HOW IT COULD WORK</span><span>03 — 03</span></div>
          <div className="method-title-row">
            <h2 id="method-title">From claim<br />to <em>context.</em></h2>
            <p>A transparent process should show what is being reviewed, how decisions are made, and what recognition does and does not represent.</p>
          </div>
        </div>
        <div className="method-body">
          <div className="method-aside">
            <span className="method-index">PROPOSED PATH / 04 STAGES</span>
            <div className="mini-stamp"><BrandMark /><span>EARTH DAY<br />FRAMEWORK STUDY</span></div>
          </div>
          <div className="stage-list">
            {stages.map((stage, index) => (
              <article className="stage-row" key={stage.number}>
                <span className="stage-number">{stage.number}</span>
                <div className="stage-main"><h3>{stage.title}</h3><p>{stage.detail}</p></div>
                <span className="stage-arrow" aria-hidden="true">{index === stages.length - 1 ? <ArrowUpRight size={20} /> : <ArrowRight size={20} />}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="method-caveat"><span>IMPORTANT</span><p>This is an illustrative process for a portfolio concept. Actual assessment rules, eligibility, governance, and approval procedures would need to be established before launch.</p></div>
      </section>

      <section className="framework-section" id="framework" aria-labelledby="framework-title">
        <div className="framework-top"><span>THE TEST IS NOT HOW IT LOOKS.</span><span>IT IS WHAT IT CAN EXPLAIN.</span></div>
        <div className="framework-grid">
          <div className="framework-heading">
            <p className="eyebrow">The credibility question</p>
            <h2 id="framework-title">What does the mark <em>actually mean?</em></h2>
          </div>
          <div className="framework-copy">
            <p>A credible recognition system should make its scope easy to find. People should be able to understand the criteria, the evidence considered, the decision process, and the limitations.</p>
            <ul className="checklist">
              <li><span>01</span> Published criteria, written in plain language</li>
              <li><span>02</span> Evidence connected to each relevant claim</li>
              <li><span>03</span> Clear scope and limitations</li>
              <li><span>04</span> A review process that can be explained</li>
            </ul>
          </div>
        </div>
        <div className="concept-note" id="concept-note">
          <span className="concept-note-mark">i</span>
          <p><strong>Portfolio concept only.</strong> Earth Day is not presented here as an operating certification body. The mark, principles, and process are illustrative. No certification, endorsement, partner relationship, or environmental performance claim is implied.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-topline"><span>EARTH DAY / CONCEPT 001</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
        <div className="footer-main">
          <p className="eyebrow">A clearer conversation starts here</p>
          <h2>Make the promise<br /><em>mean something.</em></h2>
          <a className="button button-light" href="#concept-note">Read the concept note <ArrowUpRight size={16} /></a>
        </div>
        <div className="footer-bottom">
          <a className="brand brand-footer" href="#top"><BrandMark /><span>EARTH DAY<span className="brand-period">.</span></span></a>
          <span>INDEPENDENT WEBSITE CONCEPT / 2026</span>
          <span>DESIGNED AROUND CLARITY, NOT CLAIMS.</span>
        </div>
      </footer>
    </main>
  );
}
