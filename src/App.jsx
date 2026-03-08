import React, { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import RippleGrid from './components/RippleGrid';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import LogoCloud from './components/LogoCloud';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import './index.css';

import ZalcoLogo from './assets/logos/ZalcoLogo.svg';
import ZalcoIcon from './assets/logos/ZalcoIcon.svg';


/* ─── Fade In on Scroll ─── */
function FadeSection({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-section ${visible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}


/* ─── Highlight Pill Component ─── */
function HighlightPill({ children, color = 'blue' }) {
    return <span className={`text-highlight text-highlight-${color}`}>{children}</span>;
}

/* ─── Main App ─── */
function App() {
    const [theme, setTheme] = useState(() => {
        // 1. Check local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // 2. Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        // 3. Default to light
        return 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);

        // Listen for system theme changes if user hasn't overridden
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.body.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const marqueeItems = [
        '✦ Web Design', '✦ Web App Development', '✦ Mobile App Design', '✦ Mobile App Development', '✦ DevOps Services',
        '✦ Web Design', '✦ Web App Development', '✦ Mobile App Design', '✦ Mobile App Development', '✦ DevOps Services',
    ];
    return (
        <>
            {/* ─── Header ─── */}
            <header role="banner" className="global-header">
                <div className="container header-inner">
                    <a href="#" className="header-logo">
                        <img src={ZalcoLogo} alt="Zalco" style={{ height: '3rem', width: 'auto' }} />
                        <h1 className="logo-text">Zalco</h1>
                    </a>
                    <nav aria-label="Primary Navigation" className="primary-nav">
                        <a href="#services">Services</a>
                        <a href="#work">Work</a>
                        <a href="#pricing">Pricing</a>
                    </nav>
                    <div className="header-actions">
                        <button className="brutalist-button brutalist-button--dark header-contact-btn">Contact</button>
                    </div>
                </div>
            </header>

            <main id="main-content" role="main">
                {/* ─── Hero ─── */}
                <section aria-labelledby="hero-heading" className="hero-section section-padding">
                    <RippleGrid />
                    <div className="container hero-inner hero-inner--centered">
                        <div className="hero-content hero-content--centered">
                            <FadeSection delay={100}>
                                <h1 id="hero-heading">
                                    <HighlightPill color="blue">Unfair</HighlightPill> advantage{'\n'}for your product
                                </h1>
                            </FadeSection>
                            <FadeSection delay={200}>
                                <p className="hero-subtext">
                                    A tight-knit team of designers, developers, and DevOps engineers building powerful digital products for startups and individuals.
                                </p>
                            </FadeSection>
                            <FadeSection delay={300}>
                                <div className="hero-actions">
                                    <button className="brutalist-button brutalist-button--dark">View Portfolio</button>
                                    <a href="#services" className="text-link">
                                        Explore Capabilities <Icon icon="solar:arrow-right-up-linear" />
                                    </a>
                                </div>
                            </FadeSection>
                        </div>
                    </div>
                </section>

                {/* ─── Marquee ─── */}
                <div className="marquee-strip" aria-hidden="true">
                    <div className="marquee-track">
                        {marqueeItems.map((item, i) => (
                            <span key={i} className="marquee-item">{item}</span>
                        ))}
                    </div>
                </div>

                <ServicesSection />
                <PricingSection />
                <TestimonialsSection />
                <LogoCloud />
                <FAQSection />

            </main>

            {/* ─── Footer (unchanged) ─── */}
            <footer role="contentinfo" className="bento-footer">
                <div className="bento-footer-inner">
                    <RippleGrid interactive={false} />
                    <div className="bento-brand">
                        <div className="bento-logo">
                            <div className="logo-icon-wrapper" style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent' }}>
                                <img src={ZalcoIcon} alt="Zalco Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <h2 className="logo-text">Zalco Technologies</h2>
                        </div>
                        <p className='logo-subtext'>Crafting digital experiences from design to deployment for startups and individuals.</p>
                        <button
                            className="theme-switch"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            role="switch"
                            aria-checked={theme === 'dark'}
                        >
                            <span className="icon-wrapper sun-icon">
                                <Icon icon="solar:sun-bold-duotone" />
                            </span>
                            <span className="icon-wrapper moon-icon">
                                <Icon icon="solar:moon-bold-duotone" />
                            </span>
                        </button>
                    </div>
                    <div className="bento-footer-links">
                        <div className="bento-link-col">
                            <h4>Company</h4>
                            <a href="#">Home</a>
                            <a href="#">Service</a>
                            <a href="#">About</a>
                        </div>
                        <div className="bento-link-col bento-social-col">
                            <h4>Social</h4>
                            <a href="mailto:support@zalco.com">admin@zalco.io</a>
                            <a href="tel:+1023722742444">+91 841 784 2117</a>
                            <div className="bento-social-icons">
                                <a href="#" aria-label="LinkedIn"><Icon icon="solar:linkedin-bold-duotone" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="bento-copyright-pill">
                        © Zalco Technologies Pvt. Ltd. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
