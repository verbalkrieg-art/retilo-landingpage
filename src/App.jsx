import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronDown,
  Code2,
  Fuel,
  Layers3,
  Menu,
  MessageCircle,
  Network,
  PanelTop,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const projects = [
  {
    id: "verbalkrieg",
    eyebrow: "Debatte & Recherche",
    title: "VERBALKRIEG",
    description:
      "Argumente sortieren, Quellen prüfen und komplexe Themen verständlich machen.",
    accent: "blue",
    icon: Search,
    image: "assets/verbalkrieg-card.png",
    alt: "Dunkle Oberfläche für Debatten und Quellenprüfung",
  },
  {
    id: "kidenka",
    eyebrow: "Messenger & Entscheidungshilfe",
    title: "KIDENKA",
    description:
      "Mehrere Perspektiven in einem Gespräch — damit aus Unsicherheit eine gute Entscheidung wird.",
    accent: "cyan",
    icon: MessageCircle,
    image: "assets/kidenka-messenger-card.png",
    alt: "Kidenka Messenger mit mehreren Rollen in einem Chat",
  },
  {
    id: "tankstellen",
    eyebrow: "Personal & Schichtplanung",
    title: "TANKSTELLEN-ORGANISATION",
    description:
      "Mitarbeiter, Schichten, Übergaben und Aufgaben an einem Ort — für einen Betrieb, der läuft.",
    accent: "teal",
    icon: Fuel,
    image: "assets/tankstellen-card.png",
    alt: "Dashboard für Tankstellen-Schichtplanung und Aufgaben",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Verstehen",
    text: "Wir hören zu, stellen die richtigen Fragen und machen das eigentliche Problem sichtbar.",
    icon: Search,
  },
  {
    number: "02",
    title: "Definieren",
    text: "Wir strukturieren Anforderungen, Ziele und Rahmenbedingungen — klar und umsetzbar.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Entwickeln",
    text: "Wir gestalten, bauen und integrieren iterativ — transparent und auf Augenhöhe.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Validieren",
    text: "Wir testen, optimieren und stellen sicher, dass die Lösung im Alltag funktioniert.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Weiterführen",
    text: "Wir begleiten den Betrieb und entwickeln das System anhand echter Nutzung weiter.",
    icon: Network,
  },
];

function Button({ children, variant = "primary", href = "#kontakt", onClick, type = "button" }) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      onClick={onClick}
      role={type === "button" ? undefined : "button"}
    >
      <span>{children}</span>
      {variant === "text" ? <ArrowUpRight size={16} strokeWidth={1.7} /> : <ArrowRight size={17} strokeWidth={1.8} />}
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="ReTiLo Startseite" onClick={closeMenu}>
          ReTiLo<span className="wordmark-dot">.</span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Hauptnavigation">
          <a href="#projekte" onClick={closeMenu}>Projekte</a>
          <a href="#loesungen" onClick={closeMenu}>Lösungen</a>
          <a href="#prozess" onClick={closeMenu}>Prozess</a>
          <a href="#ueber-uns" onClick={closeMenu}>Über uns</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="#kontakt">Lösung anfragen <ArrowUpRight size={16} /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark">↳</span> Software mit Substanz</p>
            <h1 id="hero-title">Digitale Systeme<br /><span>für reale Probleme.</span></h1>
            <p className="hero-lede">
              ReTiLo entwickelt eigene digitale Produkte und individuelle Softwarelösungen, die Abläufe vereinfachen, Entscheidungen unterstützen und neue Möglichkeiten schaffen.
            </p>
            <div className="hero-actions">
              <Button href="#projekte">Projekte entdecken</Button>
              <Button href="#kontakt" variant="secondary">Lösung anfragen</Button>
            </div>
            <div className="hero-stats" aria-label="ReTiLo Kennzahlen">
              <div><strong>03</strong><span>eigene Produkte</span></div>
              <div><strong>01</strong><span>klarer Anspruch</span></div>
              <div><strong>∞</strong><span>mögliche Systeme</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Aus Ideen werden Systeme">
            <div className="hero-image-frame">
              <img src="assets/retilo-network-hero.png" alt="Leuchtendes Netzwerk aus verbundenen Datenpunkten" />
            </div>
            <div className="hero-output hero-output-products">
              <span className="output-icon"><Boxes size={17} strokeWidth={1.7} /></span>
              <span><small>01</small>Produkte</span>
            </div>
            <div className="hero-output hero-output-platforms">
              <span className="output-icon"><PanelTop size={17} strokeWidth={1.7} /></span>
              <span><small>02</small>Plattformen</span>
            </div>
            <div className="hero-output hero-output-solutions">
              <span className="output-icon"><Code2 size={17} strokeWidth={1.7} /></span>
              <span><small>03</small>Lösungen</span>
            </div>
            <div className="hero-visual-caption"><Sparkles size={14} /> aus einzelnen Punkten wird ein System</div>
          </div>
        </section>

        <section className="intro section-shell section-divider" id="ueber-uns" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark">↳</span> Was ist ReTiLo?</p>
            <h2 id="intro-title">Aus Problemen<br /><span>werden Systeme.</span></h2>
          </div>
          <div className="intro-body">
            <p className="section-kicker">Gute Software beginnt nicht mit Technologie.</p>
            <p>Viele gute Lösungen beginnen mit einer einfachen Frage: Muss das so kompliziert sein?</p>
            <p>ReTiLo übersetzt echte Abläufe in klare digitale Systeme — als eigenes Produkt oder als Lösung, die genau zu einem konkreten Betrieb passt.</p>
            <a className="inline-link" href="#loesungen">Unser Ansatz <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="projects section-shell section-divider" id="projekte" aria-labelledby="projects-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark">↳</span> Unsere Produkte</p>
              <h2 id="projects-title">Eigenständig.<br /><span>Fokussiert. Wirksam.</span></h2>
            </div>
            <p className="section-heading-note">Drei unterschiedliche Systeme, entwickelt aus Erfahrung und gebaut für den Alltag.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card project-${project.accent}`} key={project.id}>
                  <div className="project-visual">
                    <img src={project.image} alt={project.alt} />
                    <div className="project-icon"><Icon size={19} strokeWidth={1.8} /></div>
                  </div>
                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a className="card-link" href="#kontakt">Projekt ansehen <ArrowRight size={16} /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="solutions section-shell section-divider" id="loesungen" aria-labelledby="solutions-title">
          <div className="section-heading-row solutions-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark">↳</span> Individuelle Lösungen</p>
              <h2 id="solutions-title">Von Problem<br /><span>zu System.</span></h2>
            </div>
            <p className="section-heading-note">Nicht der Kunde muss sich der Software anpassen. Die Software wird für den tatsächlichen Prozess entwickelt.</p>
          </div>

          <div className="process-grid" id="prozess">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="process-step" key={step.number}>
                  <div className="process-topline"><span>{step.number}</span>{index < processSteps.length - 1 && <ArrowRight size={15} />}</div>
                  <Icon className="process-icon" size={26} strokeWidth={1.35} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>

          <div className="solution-band">
            <div className="solution-band-icon"><Code2 size={27} strokeWidth={1.35} /></div>
            <div>
              <strong>Kein Projekt von der Stange.</strong>
              <span>Sondern eine Lösung, die zu Ihrem Betrieb passt — heute und morgen.</span>
            </div>
            <Button href="#kontakt" variant="text">Projekt besprechen</Button>
          </div>
        </section>

        <section className="principles section-shell section-divider" aria-labelledby="principles-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark">↳</span> Warum ReTiLo?</p>
              <h2 id="principles-title">Klar denken.<br /><span>Wirksam bauen.</span></h2>
            </div>
            <p className="section-heading-note">Technologie ist Mittel zum Zweck. Entscheidend ist, ob ein System im echten Alltag hilft.</p>
          </div>
          <div className="principles-grid">
            <div><span>01</span><strong>Problem vor Technologie</strong><p>Wir beginnen mit dem, was gelöst werden soll — nicht mit dem, was technisch gerade möglich ist.</p></div>
            <div><span>02</span><strong>Einfach statt kompliziert</strong><p>Ein gutes System nimmt Komplexität weg, anstatt neue zu erzeugen.</p></div>
            <div><span>03</span><strong>Mensch und KI</strong><p>KI erweitert Fähigkeiten. Menschen behalten Verständnis, Kontrolle und Entscheidung.</p></div>
            <div><span>04</span><strong>Praxis statt Theorie</strong><p>Produkte entstehen aus realen Situationen und werden an echter Nutzung weiterentwickelt.</p></div>
          </div>
        </section>

        <section className="about section-shell section-divider" aria-labelledby="about-title">
          <div className="about-quote-mark">“</div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-mark">↳</span> Über ReTiLo</p>
            <h2 id="about-title">Mich interessiert nicht Software<br /><span>um der Software willen.</span></h2>
            <p>Mich interessiert, warum Dinge kompliziert sind — und wie man sie einfacher machen kann. ReTiLo verbindet Erfahrung aus realen Arbeitsabläufen mit Softwareentwicklung, KI und dem Wunsch, bestehende Prozesse grundsätzlich neu zu denken.</p>
            <a className="inline-link" href="#kontakt">ReTiLo kennenlernen <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="contact section-shell" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow"><span className="eyebrow-mark">↳</span> Der nächste Schritt</p>
            <h2 id="contact-title">Eine Idee oder<br /><span>ein Problem?</span></h2>
            <p>Ein unverbindliches Gespräch reicht, um die richtigen Fragen zu stellen. Schreiben Sie uns kurz, worum es geht.</p>
            <div className="contact-note"><ShieldCheck size={17} /><span>Unverbindlich. Vertraulich. Auf Augenhöhe.</span></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success">
                <div className="success-icon"><Check size={21} /></div>
                <h3>Nachricht vorgemerkt.</h3>
                <p>Danke — in einer echten Version würde sich ReTiLo jetzt persönlich bei Ihnen melden.</p>
                <button type="button" className="form-reset" onClick={() => setSubmitted(false)}>Noch eine Nachricht senden</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label><span>Name</span><input required name="name" placeholder="Ihr Name" /></label>
                  <label><span>E-Mail</span><input required type="email" name="email" placeholder="ihre@email.de" /></label>
                </div>
                <div className="form-row">
                  <label><span>Unternehmen <em>optional</em></span><input name="company" placeholder="Unternehmen" /></label>
                  <label><span>Telefon <em>optional</em></span><input name="phone" placeholder="Telefonnummer" /></label>
                </div>
                <label><span>Worum geht es?</span><textarea required name="message" rows="5" placeholder="Beschreiben Sie kurz, wobei ReTiLo helfen könnte …" /></label>
                <button className="submit-button" type="submit"><span>Nachricht senden</span><Send size={17} /></button>
              </>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark" href="#top">ReTiLo<span className="wordmark-dot">.</span></a><p>Digitale Systeme für reale Probleme.</p></div>
          <div className="footer-column"><span>Unternehmen</span><a href="#ueber-uns">Über uns</a><a href="#projekte">Projekte</a><a href="#kontakt">Kontakt</a></div>
          <div className="footer-column"><span>Leistungen</span><a href="#loesungen">Produktentwicklung</a><a href="#loesungen">Individuelle Lösungen</a><a href="#prozess">Prozess</a></div>
          <div className="footer-column"><span>Rechtliches</span><a href="#top">Impressum</a><a href="#top">Datenschutz</a><a href="#top">AGB</a></div>
          <div className="footer-cta"><span>Bereit für Ihr Projekt?</span><a href="#kontakt">Lösung anfragen <ArrowRight size={16} /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 ReTiLo. Alle Rechte vorbehalten.</span><span>Technologie. Handwerk. Haltung.</span></div>
      </footer>
    </div>
  );
}
