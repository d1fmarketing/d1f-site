import Image from "next/image";

export default function Page() {
  return (
    <main className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-content">
          <a href="#" className="header-logo">D1F</a>
          <nav className="header-nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#scale" className="nav-link">Capabilities</a>
            <a href="#blueprints" className="nav-link">Examples</a>
            <a href="#optimization" className="nav-link">Process</a>
            <a href="#stack" className="nav-link">Tech</a>
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
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl font-bold mb-4">How We Scale</h2>
          <p className="section-sub text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            The core engines that power D1F&apos;s marketing workflow.
          </p>
        </div>

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
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl font-bold mb-4">Operational Blueprints</h2>
          <p className="section-sub text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real internal assets that show how the systems actually run.
          </p>
        </div>
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

      {/* CONTINUOUS OPTIMIZATION CYCLE */}
      <section id="optimization" className="section-container border-t border-[var(--border-subtle)]">
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl font-bold mb-4">Continuous Optimization Cycle</h2>
          <p className="section-sub text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            The iterative process that compounds performance gains over time.
          </p>
        </div>
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
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl font-bold mb-4">AI Governance &amp; Safety</h2>
          <p className="section-sub text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Guardrails for deploying autonomous systems responsibly.
          </p>
        </div>
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
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl font-bold mb-4">Infrastructure Stack</h2>
          <p className="section-sub text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            The integrated technology layer powering D1F.
          </p>
        </div>
        <div className="stack-grid">
          <div className="stack-card">
            <h3 className="stack-title">Models</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/openai.png" alt="" className="stack-icon" />
                <span>OpenAI</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/anthropic.png" alt="" className="stack-icon" />
                <span>Anthropic</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/google.png" alt="" className="stack-icon" />
                <span>Google</span>
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <h3 className="stack-title">Automation</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/make.png" alt="" className="stack-icon" />
                <span>Make</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/zapier.png" alt="" className="stack-icon" />
                <span>Zapier</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/webhooks.png" alt="" className="stack-icon" />
                <span>Webhooks</span>
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <h3 className="stack-title">Marketing</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/meta.png" alt="" className="stack-icon" />
                <span>Meta Ads</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/analytics.png" alt="" className="stack-icon" />
                <span>Analytics</span>
              </li>
            </ul>
          </div>
          <div className="stack-card">
            <h3 className="stack-title">Docs</h3>
            <ul className="stack-list">
              <li className="stack-item">
                <img src="/icons/stack/playbooks.png" alt="" className="stack-icon" />
                <span>Playbooks</span>
              </li>
              <li className="stack-item">
                <img src="/icons/stack/specs.png" alt="" className="stack-icon" />
                <span>Specs</span>
              </li>
            </ul>
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
          <a href="#scale" className="footer-link">Capabilities</a>
          <a href="#blueprints" className="footer-link">Examples</a>
          <a href="#optimization" className="footer-link">Process</a>
          <a href="#stack" className="footer-link">Tech</a>
        </nav>
        <p className="footer-copy">&copy; 2024 D1F. All rights reserved.</p>
      </footer>
    </main>
  );
}
