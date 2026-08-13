import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = [
  {
    id: '01',
    name: 'Frontend',
    type: 'Experience layer',
    detail: 'Turning complex systems into fast, clear, and accessible product experiences.',
    tools: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: '02',
    name: 'Backend',
    type: 'Systems layer',
    detail: 'Designing APIs, data flows, and infrastructure that stay dependable under real use.',
    tools: ['Node.js', 'REST APIs', 'Docker'],
  },
  {
    id: '03',
    name: 'AI Systems',
    type: 'Intelligence layer',
    detail: 'Building context-aware LLM applications that connect models, knowledge, and tools.',
    tools: ['LangChain', 'RAG', 'Claude API'],
  },
  {
    id: '04',
    name: 'AI Agents',
    type: 'Autonomy layer',
    detail: 'Engineering goal-driven agents that plan, use tools, and execute useful workflows.',
    tools: ['Planning', 'Memory', 'Multi-agent'],
  },
  {
    id: '05',
    name: 'Reverse Engineering',
    type: 'Protocol layer',
    detail: 'Studying undocumented devices and protocols, then building the missing integration.',
    tools: ['Bluetooth', 'Input systems', 'Python'],
  },
  {
    id: '06',
    name: 'Evals + Security',
    type: 'Reliability layer',
    detail: 'Testing model behavior, finding failure modes, and securing systems before they ship.',
    tools: ['Evals', 'AppSec', 'Guardrails'],
  },
]

const experience = [
  {
    company: 'Deloitte',
    roles: [
      { role: 'Analyst — AI & Data', date: 'SEP 2025 — PRESENT', duration: 'ACTIVE' },
    ],
    place: 'Bengaluru',
    code: 'ACTIVE',
    logo: '/logos/deloitte.svg',
    logoClass: 'deloitte',
  },
  {
    company: 'BlockSurvey',
    roles: [
      { role: 'Full Stack Developer', date: 'JUN 2024 — AUG 2025', duration: '01Y 03M' },
      { role: 'Full Stack Developer Intern', date: 'MAR 2024 — JUN 2024', duration: '04M' },
    ],
    place: 'Bengaluru, Karnataka',
    code: '01Y 06M',
    logo: '/logos/blocksurvey.svg',
    logoClass: 'blocksurvey',
  },
]

const projects = [
  {
    id: '01',
    name: 'Pixel Pets',
    context: 'AI Bhoomi Hackathon 2026',
    description: 'An AI-powered pixel companion that helps you stay focused on a task, turning concentration into an engaging and supportive experience.',
    stack: ['Python', 'JavaScript', 'Focus companion', 'AI'],
    url: 'https://github.com/abylinjohnson/pixel-pets',
    owner: 'abylinjohnson',
    featured: true,
  },
  {
    id: '02',
    name: 'Hedwig Mailshot',
    context: 'Police Hackathon 2022',
    description: 'A bulk-mailing system created for rapid, structured communication at scale.',
    stack: ['JavaScript', 'Python', 'Automation'],
    url: 'https://github.com/thenightswatch-kits/hedwig-mailshot',
    owner: 'thenightswatch-kits',
  },
  {
    id: '03',
    name: 'Seznik Echo Printer',
    context: 'Reverse engineering / Bluetooth',
    description: 'Reverse-engineered the Seznik Echo printer’s Bluetooth communication and built Python tooling to connect and print without relying on an official integration.',
    stack: ['Python', 'Bluetooth', 'Reverse engineering'],
    url: 'https://github.com/abylinjohnson/seznik-echo-printer',
    owner: 'abylinjohnson',
  },
  {
    id: '04',
    name: 'Anchorage',
    context: 'Container management',
    description: 'A MERN-stack solution for managing Docker containers across multiple users.',
    stack: ['TypeScript', 'MERN', 'Docker'],
    url: 'https://github.com/abylinjohnson/anchorage',
    owner: 'abylinjohnson',
  },
  {
    id: '05',
    name: 'Kreo Hive HE Gamepad',
    context: 'Reverse engineering / Hall effect',
    description: 'Reverse-engineered the Kreo Hive Hall-effect keyboard and implemented a custom gamepad mode from scratch where no official Kreo solution existed.',
    stack: ['Python', 'Hall effect', 'Gamepad mode'],
    url: 'https://github.com/abylinjohnson/kreo-hive-he-gamepad',
    owner: 'abylinjohnson',
  },
]

const articles = [
  {
    id: '01',
    title: 'How I Prepared for the Claude Developer Foundations Certification',
    date: 'AUG 10, 2026',
    topic: 'AI DEVELOPMENT',
    tags: ['Claude', 'Certification', 'AI'],
    url: 'https://abylin.medium.com/how-i-prepared-for-the-claude-developer-foundations-certification-403bc3e8ff96',
  },
  {
    id: '02',
    title: 'Cyber Security Lab on a Budget: Raspberry Pi, Docker, and Portainer',
    date: 'JUN 02, 2023',
    topic: 'HOMELAB SECURITY',
    tags: ['Raspberry Pi', 'Docker', 'Portainer'],
    url: 'https://medium.com/@abylin/cyber-security-lab-on-a-budget-raspberry-pi-docker-and-portainer-3ce8110d989e',
  },
  {
    id: '03',
    title: 'Efficient Node.js Hosting: Running Multiple Sites on Ubuntu Server using PM2 and Node.js',
    date: 'MAY 01, 2023',
    topic: 'SERVER ENGINEERING',
    tags: ['Node.js', 'PM2', 'Nginx'],
    url: 'https://medium.com/@abylin/efficient-node-js-hosting-running-multiple-sites-on-ubuntu-server-using-pm2-and-node-js-c9018ad108c8',
  },
]

const certifications = [
  { name: 'Claude Certified Developer — Foundations', issuer: 'Anthropic' },
  { name: 'Cloud Application Development Foundations', issuer: 'Cloud credential' },
  { name: 'LFS101x: Introduction to Linux', issuer: 'Linux Foundation' },
  { name: 'IoT Fundamentals: Connecting Things', issuer: 'Cisco Networking Academy' },
  { name: 'Grade 3 Drum Kit', issuer: 'Music qualification' },
]

const education = [
  {
    school: 'Karunya Institute of Technology and Sciences',
    course: 'Bachelor of Technology — Computer Engineering',
    date: '2020 — 2024',
  },
  {
    school: 'Comorin International School',
    course: 'ISC — Computer Science',
    date: '2018 — 2020',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  )
}

function Header() {
  const [isCompact, setIsCompact] = React.useState(false)

  React.useEffect(() => {
    let animationFrame

    const updateNavigation = () => {
      setIsCompact(window.scrollY > 48)
      animationFrame = undefined
    }

    const handleScroll = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateNavigation)
      }
    }

    updateNavigation()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <header
      className={`site-header${isCompact ? ' is-scrolled' : ''}`}
      id="top"
    >
      <a className="wordmark" href="#top" aria-label="Abylin Johnson, home">
        <span className="wordmark-mark">AJ</span>
        <span className="wordmark-text"><span>ABYLIN</span><span>JOHNSON</span></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#writing">Writing</a>
        <a href="#credentials">Credentials</a>
      </nav>
      <a className="signal-link" href="mailto:abylinjohnson2002@gmail.com">
        <span className="pulse" aria-hidden="true" />
        <span className="signal-label signal-label-full">Open channel</span>
        <span className="signal-label signal-label-compact">Contact</span>
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-kicker reveal reveal-1">
        <span>FULL-STACK ENGINEER</span>
        <span>BENGALURU / IN</span>
      </div>

      <div className="hero-copy">
        <p className="eyebrow reveal reveal-2">HELLO, I’M</p>
        <h1 id="hero-title" className="reveal reveal-3">
          <span>ABYLIN</span>
          <span className="outline-text">JOHNSON</span>
        </h1>
        <p className="hero-statement reveal reveal-3">BUILDING ACROSS <em>EVERY LAYER.</em></p>
        <div className="hero-bottom reveal reveal-4">
          <p>
            I build from first principles—AI agents, secure full-stack products,
            and reverse-engineered hardware integrations that make closed systems useful.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore trajectory <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      <aside className="identity-panel reveal reveal-4" aria-label="Abylin Johnson's current role">
        <div className="identity-visual" aria-hidden="true">
          <div className="identity-label">
            <span>PROFILE_001</span>
            <span>BLR / IN</span>
          </div>
          <div className="role-stack">
            <span>FULL STACK</span>
            <strong>AI</strong>
            <span>ENGINEER</span>
          </div>
          <div className="system-tags">
            <span>AGENTS</span>
            <span>APPSEC</span>
            <span>REVERSE</span>
            <span>FULL STACK</span>
          </div>
        </div>
        <div className="status-readout">
          <span>NOW OPERATING</span>
          <strong>DELOITTE</strong>
          <small>ANALYST / AI &amp; DATA</small>
        </div>
        <div className="coordinates" aria-hidden="true">
          <span>12.9716° N</span><span>77.5946° E</span>
        </div>
      </aside>
    </section>
  )
}

function SignalMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>AI AGENTS</span><i>✦</i><span>SECURE SYSTEMS</span><i>✦</i>
        <span>REVERSE ENGINEERING</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i>
        <span>HARDWARE PROTOCOLS</span><i>✦</i><span>MODEL EVALUATION</span><i>✦</i>
        <span>AI AGENTS</span><i>✦</i><span>SECURE SYSTEMS</span><i>✦</i>
        <span>REVERSE ENGINEERING</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i>
        <span>HARDWARE PROTOCOLS</span><i>✦</i><span>MODEL EVALUATION</span><i>✦</i>
      </div>
    </div>
  )
}

function Expertise() {
  return (
    <section className="section expertise" id="expertise" aria-labelledby="expertise-title">
      <div className="section-heading">
        <div>
          <span className="section-index">01 / CORE CAPABILITIES</span>
          <h2 id="expertise-title">Across the<br />whole system.</h2>
        </div>
        <p>
          I move comfortably between abstraction layers—from interfaces and APIs
          to LLM orchestration, security, device protocols, and the hardware edge.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.id}>
            <div className="corner corner-tl" aria-hidden="true" />
            <div className="corner corner-br" aria-hidden="true" />
            <span className="skill-id">SYS_{skill.id}</span>
            <span className="skill-type">{skill.type}</span>
            <h3>{skill.name}</h3>
            <p className="skill-detail">{skill.detail}</p>
            <div className="skill-tools" aria-label={`${skill.name} technologies`}>
              {skill.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="skill-footer">
              <span>CAPABILITY ONLINE</span>
              <span className="mini-bars" aria-hidden="true"><i /><i /><i /><i /></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="experience-intro">
        <span className="section-index">02 / FLIGHT LOG</span>
        <h2 id="experience-title">Career<br /><span>trajectory.</span></h2>
        <p>A career shaped by one instinct: understand the entire system, then make it work better.</p>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className={`timeline-item${item.roles.length > 1 ? ' timeline-item-grouped' : ''}`} key={item.company}>
            <div className="timeline-marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="timeline-main">
              <div className="timeline-company">
                <strong>{item.company}</strong>
                {item.roles.length > 1 && <span>ROLE PROGRESSION / {item.code} TOTAL</span>}
              </div>
              <div className="role-history">
                {item.roles.map((entry) => (
                  <div className="role-entry" key={entry.role}>
                    <div className="role-copy">
                      <span className="timeline-date">{entry.date}</span>
                      <h3>{entry.role}</h3>
                    </div>
                    <small>{entry.duration}</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="timeline-side">
              <div className={`company-plate ${item.logoClass}`}>
                <span className="company-plate-label">ORG_ID / {item.company.toUpperCase()}</span>
                <img src={item.logo} alt={`${item.company} logo`} />
                <span className="company-plate-status"><i aria-hidden="true" /> IDENTITY VERIFIED</span>
              </div>
              <div className="timeline-meta">
                <span>{item.code}</span>
                <small>{item.place}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <div>
          <span className="section-index">03 / BUILT FROM CURIOSITY</span>
          <h2 id="projects-title">Proof through<br /><span>building.</span></h2>
        </div>
        <div className="projects-heading-note">
          <span>05 PUBLIC REPOSITORIES</span>
          <p>Projects where curiosity became working software—from AI hackathons to undocumented hardware and multi-user infrastructure.</p>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            className={`project-card${project.featured ? ' project-featured' : ''}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            aria-label={`View ${project.name} on GitHub`}
          >
            <div className="project-card-top">
              <span>MISSION_{project.id}</span>
              <span className="project-link">GITHUB <ArrowIcon /></span>
            </div>
            <div className="project-signal" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="project-copy">
              <span className="project-context">{project.context}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-footer">
              <div className="project-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <span className="project-owner">/{project.owner}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section className="section writing" id="writing" aria-labelledby="writing-title">
      <div className="writing-heading">
        <div>
          <span className="section-index">04 / FIELD NOTES</span>
          <h2 id="writing-title">Ideas,<br /><span>decoded.</span></h2>
        </div>
        <div className="writing-intro">
          <p>I document what I learn while building—from LLM systems and frontend engineering to security and personal technology.</p>
          <a href="https://medium.com/@abylin" target="_blank" rel="noreferrer">
            Read all on Medium <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="article-list">
        {articles.map((article) => (
          <a
            className="article-row"
            href={article.url}
            target="_blank"
            rel="noreferrer"
            key={article.id}
            aria-label={`Read ${article.title} on Medium`}
          >
            <div className="article-index">
              <span>NOTE_{article.id}</span>
              <small>{article.date}</small>
            </div>
            <div className="article-copy">
              <span>{article.topic}</span>
              <h3>{article.title}</h3>
              <div className="article-tags">
                {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <span className="article-arrow"><ArrowIcon /></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="section credentials" id="credentials" aria-labelledby="credentials-title">
      <div className="credentials-header">
        <span className="section-index">05 / FOUNDATIONS + CONTINUOUS LEARNING</span>
        <h2 id="credentials-title">Credentials<br />&amp; education.</h2>
      </div>
      <div className="credentials-layout">
        <div className="cert-list">
          <p className="panel-label">CERTIFICATIONS / 05 RECORDS</p>
          <ol>
            {certifications.map((cert, index) => (
              <li key={cert.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div className="credential-copy">
                  <strong>{cert.name}</strong>
                  <small>{cert.issuer}</small>
                </div>
                <span className="cert-status">VERIFIED</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="education-panel">
          <p className="panel-label">EDUCATION / 02 RECORDS</p>
          {education.map((item) => (
            <article key={item.school}>
              <div className="education-copy">
                <span>{item.date}</span>
                <h3>{item.school}</h3>
                <p>{item.course}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-topline">
        <span>06 / ESTABLISH CONNECTION</span>
        <span>AVAILABLE ON THE NETWORK</span>
      </div>
      <div className="contact-content">
        <p>Have a hard problem, an ambitious product, or an undocumented system?</p>
        <h2>LET’S BUILD<br /><span>BEYOND.</span></h2>
        <a className="contact-orb" href="mailto:abylinjohnson2002@gmail.com" aria-label="Email Abylin Johnson">
          <span>TRANSMIT</span>
          <ArrowIcon />
        </a>
      </div>
      <div className="footer-links">
        <a href="mailto:abylinjohnson2002@gmail.com">abylinjohnson2002@gmail.com</a>
        <a href="https://www.linkedin.com/in/abylinjohnson" target="_blank" rel="noreferrer">
          LinkedIn <ArrowIcon />
        </a>
        <a href="https://medium.com/@abylin" target="_blank" rel="noreferrer">
          Medium <ArrowIcon />
        </a>
        <span>© 2026 ABYLIN JOHNSON</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scanlines" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <SignalMarquee />
        <Expertise />
        <Experience />
        <Projects />
        <Writing />
        <Credentials />
      </main>
      <Contact />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
