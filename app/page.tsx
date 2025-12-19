import Image from "next/image";

export default function Page() {
  return (
    <main className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-content">
          <a href="#" className="header-logo">
            <Image src="/logo.png" alt="D1F" width={90} height={36} />
          </a>
          <nav className="header-nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#scale" className="nav-link">Scale</a>
            <a href="#blueprints" className="nav-link">Blueprints</a>
            <a href="#optimization" className="nav-link">Process</a>
            <a href="#stack" className="nav-link">Tech</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="bg-circuit absolute inset-0 z-0"></div>
        <div className="hero-glow"></div>

        <div className="hero-content section-container">
          <div className="hero-text-col">
            <h1 className="hero-title">
              D1F — Marketing
              <br />
              &amp; AI Automation
            </h1>

            <p className="hero-sub">
              Scaling growth through intelligent automation and high-velocity
              creative workflows.
            </p>

            <div className="hero-tags">
              <span className="tag-pill">AI Agents</span>
              <span className="tag-pill">Automation</span>
              <span className="tag-pill">Performance</span>
            </div>

            <a href="#scale" className="hero-cta">
              Explore
            </a>
          </div>

          <div className="hero-visual-container">
            <img
              src="/hero-chip.png"
              alt="AI Chip Merging with Digital Brain"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* HOW WE SCALE - Hexagonal Grid */}
      <section id="scale" className="hex-section">
        <header className="section-header">
          <h2 className="section-heading">How We Scale</h2>
          <p className="section-sub">
            The core engines that power D1F&apos;s marketing workflow.
          </p>
        </header>

        <div className="hex-grid">
          {/* Row 1 - 2 hexagons */}
          <div className="hex-row">
            <div className="hex-card">
              <img src="/icons/hex-creative.png" alt="" className="hex-icon" />
              <h3 className="hex-title">Automated Creative Production</h3>
            </div>
            <div className="hex-card">
              <img src="/icons/hex-testing.png" alt="" className="hex-icon" />
              <h3 className="hex-title">High-Velocity Testing Engine</h3>
            </div>
          </div>

          {/* Row 2 - 3 hexagons (offset) */}
          <div className="hex-row">
            <div className="hex-card">
              <img src="/icons/hex-analytics.png" alt="" className="hex-icon" />
              <h3 className="hex-title">Predictive Analytics</h3>
            </div>
            <div className="hex-card">
              <img src="/icons/hex-campaign.png" alt="" className="hex-icon" />
              <h3 className="hex-title">Autonomous Campaign Ops</h3>
            </div>
            <div className="hex-card">
              <img src="/icons/hex-retention.png" alt="" className="hex-icon" />
              <h3 className="hex-title">AI-Driven Retention</h3>
            </div>
          </div>

          {/* Row 3 - 1 hexagon (centered) */}
          <div className="hex-row">
            <div className="hex-card">
              <img src="/icons/hex-agents.png" alt="" className="hex-icon" />
              <h3 className="hex-title">Custom Agent Infrastructure</h3>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL BLUEPRINTS (formerly Artifacts) */}
      <section id="blueprints" className="section-container border-t border-[var(--border-subtle)]">
        <header className="section-header">
          <h2 className="section-heading">Operational Blueprints</h2>
          <p className="section-sub">
            Real internal assets that show how the systems actually run.
          </p>
        </header>
        <div className="blueprints-grid">
          {/* Blueprint 1 - Workflow */}
          <div className="blueprint-card group">
            <span className="blueprint-badge">DOC</span>
            <div className="blueprint-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 12h6M9 16h6" />
              </svg>
            </div>
            <h3 className="blueprint-title">Creative Throughput Workflow</h3>
            <p className="blueprint-desc">End-to-end automation pipeline for ad assets.</p>
          </div>

          {/* Blueprint 2 - Agent/Code */}
          <div className="blueprint-card group">
            <span className="blueprint-badge">SPEC</span>
            <div className="blueprint-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 20l4-16M18 8l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="blueprint-title">Agent Spec: Copy Generator</h3>
            <p className="blueprint-desc">Technical architecture for autonomous copy generation.</p>
          </div>

          {/* Blueprint 3 - Data/Chart */}
          <div className="blueprint-card group">
            <span className="blueprint-badge">DATA</span>
            <div className="blueprint-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" />
                <path d="M7 16l4-4 4 4 5-6" />
              </svg>
            </div>
            <h3 className="blueprint-title">Experiment Taxonomy</h3>
            <p className="blueprint-desc">Standardized data structure for rapid testing.</p>
          </div>
        </div>
      </section>

      {/* PERFORMANCE OBSERVABILITY */}
      <section id="observability" className="section-container border-t border-[var(--border-subtle)]">
        <header className="section-header">
          <h2 className="section-heading">Performance Observability</h2>
          <p className="section-sub">
            Real-time dashboards tracking creative velocity and campaign efficiency.
          </p>
        </header>
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-value">94%</span>
            <span className="metric-label">Automation Throughput</span>
            <div className="metric-bar"></div>
          </div>
          <div className="metric-card">
            <span className="metric-value">4.2x</span>
            <span className="metric-label">Testing Velocity</span>
            <div className="metric-bar"></div>
          </div>
          <div className="metric-card">
            <span className="metric-value">0ms</span>
            <span className="metric-label">Operational Latency</span>
            <div className="metric-bar"></div>
          </div>
        </div>
      </section>


      {/* CONTINUOUS OPTIMIZATION CYCLE */}
      <section id="optimization" className="section-container border-t border-[var(--border-subtle)]">
        <header className="section-header">
          <h2 className="section-heading">Continuous Optimization Cycle</h2>
          <p className="section-sub">
            The iterative process that compounds performance gains over time.
          </p>
        </header>
        <div className="cycle-container">
          <div className="cycle-step">
            <div className="step-circle">
              <span className="step-number">01</span>
            </div>
            <h3 className="step-title">Analyze</h3>
            <p className="step-desc">Data collection &amp; pattern recognition</p>
          </div>
          <div className="cycle-connector"></div>
          <div className="cycle-step">
            <div className="step-circle">
              <span className="step-number">02</span>
            </div>
            <h3 className="step-title">Hypothesize</h3>
            <p className="step-desc">AI-generated test variations</p>
          </div>
          <div className="cycle-connector"></div>
          <div className="cycle-step">
            <div className="step-circle">
              <span className="step-number">03</span>
            </div>
            <h3 className="step-title">Execute</h3>
            <p className="step-desc">Automated deployment &amp; A/B testing</p>
          </div>
          <div className="cycle-connector"></div>
          <div className="cycle-step">
            <div className="step-circle">
              <span className="step-number">04</span>
            </div>
            <h3 className="step-title">Learn</h3>
            <p className="step-desc">Performance feedback loop</p>
          </div>
        </div>
      </section>

      {/* AI GOVERNANCE & SAFETY */}
      <section id="governance" className="section-container border-t border-[var(--border-subtle)]">
        <header className="section-header">
          <h2 className="section-heading">AI Governance &amp; Safety</h2>
          <p className="section-sub">
            Guardrails for deploying autonomous systems responsibly.
          </p>
        </header>
        <div className="governance-grid">
          <div className="governance-card">
            <h3 className="governance-title">Minimal Data Exposure</h3>
            <p className="governance-desc">Privacy by design. Only essential data enters the context window.</p>
          </div>
          <div className="governance-card">
            <h3 className="governance-title">Scoped Agent Authority</h3>
            <p className="governance-desc">Agents have narrow, defined permissions. No &quot;black box&quot; execution.</p>
          </div>
          <div className="governance-card">
            <h3 className="governance-title">Human-in-the-Loop</h3>
            <p className="governance-desc">Strategic oversight at critical decision points. AI proposes, humans approve.</p>
          </div>
          <div className="governance-card">
            <h3 className="governance-title">Full Observability</h3>
            <p className="governance-desc">Comprehensive logging and version control for every automated action.</p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE STACK */}
      <section id="stack" className="section-container border-t border-[var(--border-subtle)]">
        <header className="section-header">
          <h2 className="section-heading">Infrastructure Stack</h2>
          <p className="section-sub">
            The integrated technology layer powering D1F.
          </p>
        </header>
        <div className="stack-grid">
          <div className="stack-card">
            <h3 className="stack-title">Foundation Models</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/openai.png" alt="" className="stack-icon" />
                <span>OpenAI (GPT-4o)</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/anthropic.png" alt="" className="stack-icon" />
                <span>Anthropic (Claude 3.5 Sonnet)</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/google.png" alt="" className="stack-icon" />
                <span>Google (Gemini 1.5 Pro)</span>
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <h3 className="stack-title">Orchestration</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/make.png" alt="" className="stack-icon" />
                <span>Make / Zapier</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/webhooks.png" alt="" className="stack-icon" />
                <span>Custom Webhooks</span>
              </li>
              <li className="stack-item">
                <svg className="stack-icon p-1.5 bg-white/5 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
                </svg>
                <span>Python / Node.js Scripts</span>
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <h3 className="stack-title">Growth & Analytics</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/meta.png" alt="" className="stack-icon" />
                <span>Meta Ads Manager</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/analytics.png" alt="" className="stack-icon" />
                <span>Google Analytics 4</span>
              </li>
              <li className="stack-item">
                <svg className="stack-icon p-1.5 bg-white/5 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Shopify / CRM</span>
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <h3 className="stack-title">Knowledge Base</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/playbooks.png" alt="" className="stack-icon" />
                <span>Operational Playbooks</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/specs.png" alt="" className="stack-icon" />
                <span>Agent Specifications</span>
              </li>
              <li className="stack-item">
                <svg className="stack-icon p-1.5 bg-white/5 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>SOPs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section id="about" className="section-container border-t border-[var(--border-subtle)]">
        <div className="about-content">
          {/* About D1F */}
          <div className="about-block">
            <h3 className="about-subtitle">About D1F</h3>
            <p>
              D1F stands for &quot;Daria um Filme&quot; — Portuguese for &quot;It would make a movie.&quot;
              It&apos;s a phrase you hear among immigrants whose lives have taken so many unexpected turns,
              faced so many challenges, and achieved things they never imagined, that their story could fill a screenplay.
            </p>
            <p>
              This isn&apos;t just a brand name. It&apos;s a philosophy: behind every business is a story worth documenting,
              and behind every system is the thinking that made it possible.
            </p>
          </div>

          {/* Photo */}
          <div className="about-photo-placeholder">
            <img src="/renan.jpg" alt="Renan Jesus" />
          </div>

          {/* About Renan */}
          <div className="about-block">
            <h3 className="about-subtitle">About Renan</h3>
            <p>
              I started studying IT at 17 in Brazil. What began as curiosity about how systems work
              became a foundation I&apos;d carry across countries and careers.
            </p>
            <p>
              Over the years, I&apos;ve lived in Brazil, Italy, the UK, and now the US — each move adding
              new perspectives, new challenges, and new ways of thinking about problems.
              The constant through all of it: a drive to build things that work.
            </p>
            <p>
              Today, I work at the intersection of digital marketing, automation, and artificial intelligence.
              My background in IT gave me the technical lens; years of hands-on experience gave me the practical one.
              Now I design the internal engines that power D1F&apos;s operations — systems that turn complexity into clarity
              and manual work into automated workflows.
            </p>
            <p className="about-quote">
              &quot;I believe the best marketing isn&apos;t just creative. It&apos;s intelligent.&quot;
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title">contact.sh</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cmd">whoami</span>
            </div>
            <div className="terminal-output">D1F — Marketing &amp; AI Automation</div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cmd">cat contact.txt</span>
            </div>
            <div className="terminal-output">
              Name: Renan Jesus<br />
              Email: <a href="mailto:info@d1fmarketing.com">info@d1fmarketing.com</a><br />
              Phone: <a href="tel:+15104470929">+1 510 447 0929</a>
            </div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cmd">echo &quot;Let&apos;s build something&quot;</span>
            </div>
            <div className="terminal-output terminal-cursor">Let&apos;s build something</div>
          </div>
        </div>

        <nav className="footer-nav">
          <a href="#scale" className="footer-link">Scale</a>
          <a href="#blueprints" className="footer-link">Blueprints</a>
          <a href="#optimization" className="footer-link">Process</a>
          <a href="#stack" className="footer-link">Tech</a>
          <a href="#about" className="footer-link">About</a>
        </nav>
        <p className="footer-copy">&copy; 2024 D1F. All rights reserved.</p>
      </footer>
    </main>
  );
}
