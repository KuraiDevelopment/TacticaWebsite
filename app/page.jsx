"use client";

import { useState, useEffect } from "react";

const features = [
  {
    icon: "⚖️",
    title: "Balanced Vanilla+",
    description: "Authentic DayZ experience enhanced with carefully tuned improvements that respect the core survival gameplay.",
  },
  {
    icon: "📦",
    title: "Hacked Crates",
    description: "Discover locked military crates scattered across Chernarus. Crack them open for rare loot and exclusive gear.",
  },
  {
    icon: "🪂",
    title: "Airdrops",
    description: "Compete for supply drops falling from the sky. High risk, high reward encounters that drive player interaction.",
  },
  {
    icon: "📈",
    title: "Loot Progression",
    description: "Thoughtfully balanced loot economy ensuring gear progression feels rewarding from coast to military zones.",
  },
  {
    icon: "👥",
    title: "Advanced Groups",
    description: "Sophisticated group system with shared markers, group chat, and team management for coordinated survival.",
  },
  {
    icon: "🔒",
    title: "Secure Storage",
    description: "Additional storage options to protect your hard-earned loot. Build, hide, and secure your supplies.",
  },
  {
    icon: "🚗",
    title: "Extra Vehicles",
    description: "More vehicles to discover and repair across the map. From off-roaders to trucks, mobility is key to survival.",
  },
  {
    icon: "🗝️",
    title: "Key-rooms",
    description: "Locked rooms throughout Chernarus hiding valuable loot. Find the keys, unlock the secrets.",
  },
];

function GrainOverlay() {
  return (
    <div
      className="grain-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0.4,
        mixBlendMode: "overlay",
      }}
    />
  );
}

function FloatingParticle({ delay, duration, left }) {
  return (
    <div
      className="particle"
      style={{
        position: "absolute",
        width: "2px",
        height: "2px",
        background: "rgba(200, 180, 140, 0.6)",
        borderRadius: "50%",
        left: `${left}%`,
        bottom: "-10px",
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        boxShadow: "0 0 6px rgba(200, 180, 140, 0.4)",
      }}
    />
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText("play.tacticavanilla.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Share+Tech+Mono&family=Barlow:wght@300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #0a0b0d;
          --bg-secondary: #12141a;
          --bg-card: #181b22;
          --accent-orange: #d4622a;
          --accent-orange-glow: rgba(212, 98, 42, 0.4);
          --accent-olive: #4a5a3c;
          --accent-olive-light: #6b7a5c;
          --text-primary: #e8e4dc;
          --text-secondary: #9a968e;
          --text-muted: #5c5952;
          --border-color: #2a2d35;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Barlow', sans-serif;
          overflow-x: hidden;
          line-height: 1.6;
        }

        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px var(--accent-orange-glow), inset 0 0 20px rgba(212, 98, 42, 0.1);
          }
          50% {
            box-shadow: 0 0 40px var(--accent-orange-glow), inset 0 0 30px rgba(212, 98, 42, 0.15);
          }
        }

        @keyframes scan-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0%, 90%, 100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 1px);
          }
          94% {
            transform: translate(2px, -1px);
          }
          96% {
            transform: translate(-1px, 2px);
          }
          98% {
            transform: translate(1px, -2px);
          }
        }

        .page-wrapper {
          min-height: 100vh;
          position: relative;
        }

        .scan-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(212, 98, 42, 0.3), transparent);
          animation: scan-line 8s linear infinite;
          pointer-events: none;
          z-index: 100;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(180deg, rgba(10, 11, 13, 0.95) 0%, transparent 100%);
          backdrop-filter: blur(10px);
        }

        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 4px;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          border: 2px solid var(--accent-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          position: relative;
        }

        .logo-icon::before {
          content: '';
          position: absolute;
          top: -4px;
          right: -4px;
          width: 8px;
          height: 8px;
          background: var(--accent-orange);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--accent-orange);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-orange);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 80%, rgba(74, 90, 60, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212, 98, 42, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(42, 45, 53, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42, 45, 53, 0.3) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }

        .hero-content {
          text-align: center;
          z-index: 10;
          padding: 2rem;
        }

        .hero-subtitle {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: var(--accent-orange);
          letter-spacing: 6px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.2s;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 10rem);
          letter-spacing: 8px;
          line-height: 0.9;
          margin-bottom: 0.5rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.4s;
        }

        .hero-title span {
          display: block;
          color: var(--accent-orange);
          font-size: 0.4em;
          letter-spacing: 16px;
          margin-top: 0.5rem;
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 2rem auto;
          font-weight: 300;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.6s;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 3rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.8s;
        }

        .btn-primary {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          padding: 1rem 2.5rem;
          background: var(--accent-orange);
          color: var(--bg-primary);
          border: none;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-primary:hover {
          background: #e8742f;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px var(--accent-orange-glow);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 1px solid var(--accent-orange);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-secondary {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          padding: 1rem 2.5rem;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-secondary:hover {
          border-color: var(--accent-olive-light);
          background: rgba(74, 90, 60, 0.2);
        }

        .server-ip {
          margin-top: 3rem;
          padding: 1rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 1s;
        }

        .server-ip-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 2px;
        }

        .server-ip-value {
          font-family: 'Share Tech Mono', monospace;
          font-size: 1rem;
          color: var(--accent-orange);
          letter-spacing: 1px;
        }

        .copy-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .copy-btn:hover {
          border-color: var(--accent-orange);
          color: var(--accent-orange);
        }

        .copy-btn.copied {
          border-color: var(--accent-olive-light);
          color: var(--accent-olive-light);
        }

        .section {
          padding: 8rem 3rem;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: var(--accent-orange);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: 4px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .feature-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 2.5rem;
          position: relative;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-orange), var(--accent-olive));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-orange);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .feature-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .feature-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-weight: 300;
        }

        .feature-number {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          color: var(--border-color);
          line-height: 1;
        }

        .cta-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: 4px;
          margin-bottom: 1.5rem;
        }

        .cta-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .discord-btn {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .footer {
          padding: 4rem 3rem 2rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 4px;
          margin-bottom: 1rem;
        }

        .footer-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        .particles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .nav {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .section {
            padding: 5rem 1.5rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .server-ip {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <GrainOverlay />
      <div className="scan-line" />

      <div className="page-wrapper">
        <nav className="nav">
          <div className="logo">
            <div className="logo-icon">⚔</div>
            TACTICA
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#join" className="nav-link">Join Server</a>
            <a href="#discord" className="nav-link">Discord</a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="particles-container">
            {mounted && [...Array(15)].map((_, i) => (
              <FloatingParticle 
                key={i} 
                delay={i * 0.8} 
                duration={12 + Math.random() * 8} 
                left={Math.random() * 100} 
              />
            ))}
          </div>
          <div className="hero-content">
            <p className="hero-subtitle">▸ DayZ Community Server</p>
            <h1 className="hero-title">
              TACTICA
              <span>VANILLA+</span>
            </h1>
            <p className="hero-tagline">
              Survive. Explore. Dominate. Experience DayZ the way it was meant to be played — balanced, brutal, and deeply rewarding.
            </p>
            <div className="hero-cta">
              <a href="#join" className="btn-primary">
                <span>▶</span> Join Now
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
            <div className="server-ip">
              <span className="server-ip-label">SERVER IP</span>
              <span className="server-ip-value">play.tacticavanilla.com</span>
              <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyIP}>
                {copied ? '✓ COPIED' : 'COPY'}
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-header">
            <p className="section-tag">◆ What We Offer</p>
            <h2 className="section-title">SERVER FEATURES</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ 
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease ${index * 0.1}s`
                }}
              >
                <span className="feature-number">0{index + 1}</span>
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="join" className="section cta-section">
          <div className="cta-content">
            <p className="section-tag">◆ Ready to Survive?</p>
            <h2 className="cta-title">JOIN THE FIGHT FOR CHERNARUS</h2>
            <p className="cta-text">
              Connect with our growing community of survivors. Our server is running 24/7 with active admins and regular events.
            </p>
            <a href="https://discord.gg/your-invite" className="btn-primary discord-btn" target="_blank" rel="noopener noreferrer">
              <span>◈</span> Join Our Discord
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-logo">TACTICA VANILLA+</div>
          <p className="footer-text">© 2024 Tactica Gaming · DayZ Community Server</p>
        </footer>
      </div>
    </>
  );
}
