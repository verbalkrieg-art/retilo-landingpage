import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileCheck2,
  Fuel,
  Gavel,
  Layers3,
  Menu,
  MessageCircle,
  MessageSquareText,
  Network,
  PanelTop,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Users,
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
    differentiator:
      "Mehrere KIs prüfen Argumente, Quellen und Gegenpositionen — mit echter Gegenprüfung.",
    benefits: [
      "Behauptungen, Fakten und Vermutungen sauber trennen",
      "Mehrere KI-Perspektiven gegeneinander prüfen",
      "Aus der Prüfung klare nächste Schritte ableiten",
    ],
    detail:
      "Verbalkrieg ist kein einfacher Chatbot. Das System zerlegt Aussagen, fordert Belege an und lässt unterschiedliche KI-Rollen prüfen, widersprechen und einordnen.",
    accent: "blue",
    icon: Search,
    image: "assets/verbalkrieg-card.png",
    alt: "Dunkle Oberfläche für Debatten und Quellenprüfung",
    projectUrl: "https://app.verbalkrieg.de/",
  },
  {
    id: "kidenka",
    eyebrow: "Messenger & Entscheidungshilfe",
    title: "KIDENKA",
    description:
      "Mehrere Perspektiven in einem Gespräch — damit aus Unsicherheit eine gute Entscheidung wird.",
    differentiator:
      "Ein KI-Messenger, in dem mehrere Rollen gemeinsam beraten und unterschiedliche Perspektiven sichtbar machen.",
    benefits: [
      "Einzelgespräche und Team-Chats mit mehreren Rollen",
      "Fachwissen, Erfahrung und Charaktere kombinieren",
      "Entscheidungen verständlicher und belastbarer machen",
    ],
    detail:
      "KIDENKA bringt mehrere KI-Perspektiven in einen Messenger. Statt eine Antwort ungeprüft zu übernehmen, kannst du ein ganzes Team auf dieselbe Frage ansetzen.",
    accent: "cyan",
    icon: MessageCircle,
    image: "assets/kidenka-messenger-card.png",
    alt: "Kidenka Messenger mit mehreren Rollen in einem Chat",
    projectUrl: "https://app.kidenka.de/",
  },
  {
    id: "tankstellen",
    eyebrow: "Personal & Schichtplanung",
    title: "TANKSTELLEN-ORGANISATION",
    description:
      "Mitarbeiter, Schichten, Übergaben und Aufgaben an einem Ort — für einen Betrieb, der läuft.",
    differentiator:
      "JARVIS organisiert den Betrieb eigenständig: Verfügbarkeiten, Dienstpläne, Konflikte, Tausch und Ersatz.",
    benefits: [
      "JARVIS fragt Mitarbeiter nach ihren Möglichkeiten",
      "Dienstpläne automatisch entwerfen und Konflikte erkennen",
      "Bei Ausfällen Ersatz suchen und Beteiligte informieren",
    ],
    detail:
      "Die Tankstellen-Organisation ist mehr als ein Dienstplan. JARVIS übernimmt die laufende Koordination und macht aus vielen Einzelinformationen einen belastbaren Plan.",
    accent: "teal",
    icon: Fuel,
    image: "assets/tankstellen-card.png",
    alt: "Dashboard für Tankstellen-Schichtplanung und Aufgaben",
    projectUrl: null,
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

function ProjectDemo({ project }) {
  const [demoState, setDemoState] = useState("idle");
  const [perspective, setPerspective] = useState("team");

  const resetDemo = () => setDemoState("idle");

  return (
    <div className={`demo-panel demo-${project.id}`}>
      <div className="demo-header">
        <div>
          <span className="demo-kicker"><Sparkles size={13} /> Interaktive Demo</span>
          <strong>So funktioniert es im Kern</strong>
        </div>
        <span className="demo-badge">Beispiel</span>
      </div>

      {project.id === "verbalkrieg" && (
        <>
          <div className="demo-claim-card">
            <span className="demo-label">Beispielbehauptung</span>
            <p>„Diese Lösung ist automatisch die beste, weil sie am meisten Funktionen hat.“</p>
          </div>
          <div className="demo-check-list">
            <div><FileCheck2 size={16} /><span>Behauptung erkannt</span><em>prüfbar</em></div>
            <div><Gavel size={16} /><span>Gegenposition wird erstellt</span><em>aktiv</em></div>
            <div><Search size={16} /><span>Quellenbedarf markiert</span><em>offen</em></div>
          </div>
          {demoState === "checked" ? (
            <div className="demo-result demo-result-blue">
              <CheckCircle2 size={18} />
              <div><strong>Prüfung abgeschlossen</strong><span>Die Aussage ist nicht automatisch belegt. Entscheidend sind Kriterien, Quellen und der konkrete Anwendungsfall.</span></div>
            </div>
          ) : (
            <button className="demo-action" type="button" onClick={() => setDemoState("checked")}>
              Prüfung simulieren <ArrowRight size={16} />
            </button>
          )}
        </>
      )}

      {project.id === "kidenka" && (
        <>
          <div className="demo-chat-window">
            <div className="demo-chat-topline"><MessageSquareText size={15} /><span>Teamchat · 3 Perspektiven</span></div>
            <div className="demo-bubble demo-bubble-user">Welche Option passt besser zu meinem Problem?</div>
            <div className="demo-bubble demo-bubble-ai">
              <span className="demo-avatar-stack"><span>F</span><span>E</span><span>O</span></span>
              <p>{perspective === "team" ? "Wir betrachten die Frage gemeinsam: fachlich, praktisch und aus Sicht deiner persönlichen Situation." : perspective === "fachlich" ? "Aus fachlicher Sicht sind vor allem die Anforderungen, Risiken und überprüfbaren Kriterien entscheidend." : "Aus Alltagssicht sollte die Lösung verständlich bleiben und dir konkret Arbeit abnehmen."}</p>
            </div>
          </div>
          <div className="demo-perspectives" aria-label="Perspektive auswählen">
            <button className={perspective === "team" ? "is-selected" : ""} type="button" onClick={() => setPerspective("team")}><Users size={14} /> Team</button>
            <button className={perspective === "fachlich" ? "is-selected" : ""} type="button" onClick={() => setPerspective("fachlich")}><ShieldCheck size={14} /> Fachlich</button>
            <button className={perspective === "alltag" ? "is-selected" : ""} type="button" onClick={() => setPerspective("alltag")}><MessageCircle size={14} /> Alltag</button>
          </div>
        </>
      )}

      {project.id === "tankstellen" && (
        <>
          <div className="demo-schedule">
            <div className="demo-schedule-head"><span>JARVIS · Planentwurf</span><span>KW 34</span></div>
            <div className="demo-shift"><span>Mo · Frühschicht</span><strong>{demoState === "planned" ? "2 Mitarbeitende" : "noch offen"}</strong><i className={demoState === "planned" ? "is-done" : ""}>{demoState === "planned" ? "besetzt" : "wartet auf Verfügbarkeiten"}</i></div>
            <div className="demo-shift"><span>Mo · Spätschicht</span><strong>{demoState === "planned" ? "2 Mitarbeitende" : "Konflikt erkannt"}</strong><i className={demoState === "planned" ? "is-done" : "needs-action"}>{demoState === "planned" ? "geprüft" : "Ersatz wird gesucht"}</i></div>
            <div className="demo-shift"><span>Di · Übergabe</span><strong>{demoState === "planned" ? "Aufgabe erstellt" : "nicht zugeordnet"}</strong><i className={demoState === "planned" ? "is-done" : ""}>{demoState === "planned" ? "informiert" : "offen"}</i></div>
          </div>
          {demoState === "planned" ? (
            <div className="demo-result demo-result-teal">
              <CheckCircle2 size={18} />
              <div><strong>JARVIS hat den Entwurf erstellt</strong><span>Verfügbarkeiten geprüft, einen Konflikt markiert und eine Ersatzsuche vorbereitet.</span></div>
              <button className="demo-reset" type="button" onClick={resetDemo} aria-label="Demo zurücksetzen"><RotateCcw size={15} /></button>
            </div>
          ) : (
            <button className="demo-action demo-action-teal" type="button" onClick={() => setDemoState("planned")}>
              JARVIS planen lassen <Bot size={16} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null;

  useEffect(() => {
    if (activeProjectId) {
      document.getElementById("projekt-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeProjectId]);

  const openProject = (projectId) => setActiveProjectId(projectId);

  const handleProjectKeyDown = (event, projectId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(projectId);
    }
  };

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
              const isActive = project.id === activeProjectId;
              return (
                <article
                  className={`project-card project-${project.accent} ${isActive ? "is-active" : ""}`}
                  key={project.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-controls="projekt-detail"
                  onClick={() => openProject(project.id)}
                  onKeyDown={(event) => handleProjectKeyDown(event, project.id)}
                >
                  <div className="project-visual">
                    <img src={project.image} alt={project.alt} />
                    <div className="project-icon"><Icon size={19} strokeWidth={1.8} /></div>
                  </div>
                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="project-differentiator">{project.differentiator}</p>
                    <span className="card-link">Details & Demo <ArrowRight size={16} /></span>
                  </div>
                </article>
              );
            })}
          </div>

          {activeProject && (
            <section className={`project-detail project-${activeProject.accent}`} id="projekt-detail" aria-labelledby="project-detail-title">
              <div className="project-detail-heading">
                <div>
                  <p className="eyebrow"><span className="eyebrow-mark">↳</span> Projekt im Fokus</p>
                  <h3 id="project-detail-title">{activeProject.title}</h3>
                </div>
                <button className="project-detail-close" type="button" onClick={() => setActiveProjectId(null)} aria-label="Projektansicht schließen"><X size={18} /></button>
              </div>
              <div className="project-detail-grid">
                <div className="project-detail-copy">
                  <p className="project-detail-lede">{activeProject.detail}</p>
                  <div className="project-benefits">
                    {activeProject.benefits.map((benefit) => <div key={benefit}><CheckCircle2 size={16} /><span>{benefit}</span></div>)}
                  </div>
                  <div className="project-detail-actions">
                    {activeProject.projectUrl ? <a className="button button-primary" href={activeProject.projectUrl} target="_blank" rel="noreferrer"><span>Zum Projekt</span><ArrowUpRight size={16} /></a> : <Button href="#kontakt">Projekt besprechen</Button>}
                    <button className="button button-secondary" type="button" onClick={() => document.getElementById("projekt-detail")?.scrollIntoView({ behavior: "smooth", block: "start" })}><span>Demo ansehen</span><ChevronDown size={16} /></button>
                  </div>
                </div>
                <ProjectDemo project={activeProject} />
              </div>
            </section>
          )}
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
