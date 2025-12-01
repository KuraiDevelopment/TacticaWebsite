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
  {
    icon: "⭐",
    title: "XP Skill Tree",
    description: "Earn experience and unlock powerful skills. Customize your survivor with a progression system that rewards your playstyle.",
  },
];

function FloatingParticle({ delay, duration, left }) {
  return (
    <div
      className="particle"
      style={{
        left: `${left}%`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
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
      <div className="grain-overlay" />
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
