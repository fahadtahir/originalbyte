'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'glass' : ''} style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 50, 
      transition: 'all 0.3s ease',
      padding: scrolled ? '1rem 0' : '1.5rem 0' 
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '700' }}>
          <Code2 color="var(--primary)" size={28} />
          <span>Original<span className="text-gradient">Byte</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#contact" className="btn btn-primary">Contact Me</Link>
        </nav>

        {/* Mobile Menu Toggle (hidden on desktop) */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-color)', cursor: 'pointer', display: 'none' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="glass" style={{
          position: 'absolute', top: '100%', left: 0, width: '100%', 
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderTop: '1px solid var(--glass-border)', textAlign: 'center'
        }}>
          <Link href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
          <Link href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Contact Me</Link>
        </div>
      )}

    </header>
  );
}
