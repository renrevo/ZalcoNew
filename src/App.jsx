import React, { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import './index.css';

import heroImg from './assets/illustrations/hero.png';
import teamImg from './assets/illustrations/team.png';
import servicesImg from './assets/illustrations/services.png';
import processImg from './assets/illustrations/process.png';
import project1Img from './assets/illustrations/project1.png';
import project2Img from './assets/illustrations/project2.png';

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = '+', label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let current = 0;
                    const step = Math.max(1, Math.floor(target / 60));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(current);
                        }
                    }, 20);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div className="stat-item" ref={ref}>
            <span className="stat-number">{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

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

/* ─── FAQ Accordion Item ─── */
function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
            <button
                className="faq-question"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <div className="faq-q-text">
                    <Icon icon="solar:chat-round-bold" className="faq-q-icon" />
                    <span>{question}</span>
                </div>
                <Icon icon={open ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'} />
            </button>
            <div className="faq-answer" aria-hidden={!open}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

/* ─── Highlight Pill Component ─── */
function HighlightPill({ children, color = 'blue' }) {
    return <span className={`text-highlight text-highlight-${color}`}>{children}</span>;
}

/* ─── Main App ─── */
function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, []);

    const marqueeItems = [
        '✦ Product Design', '✦ Design Systems', '✦ UX Writing', '✦ Interaction Design', '✦ Prototyping', '✦ Front-end UI', '✦ User Strategy',
        '✦ Product Design', '✦ Design Systems', '✦ UX Writing', '✦ Interaction Design', '✦ Prototyping', '✦ Front-end UI', '✦ User Strategy',
    ];

    const services = [
        {
            icon: 'solar:pen-bold-duotone',
            title: 'Interface Design',
            desc: 'Clean, conversion-optimized interfaces that balance brutalist aesthetics with deep usability.',
        },
        {
            icon: 'solar:code-square-bold-duotone',
            title: 'Design Engineering',
            desc: 'Bridging the gap between Figma and code with production-ready components and responsive layouts.',
        },
        {
            icon: 'solar:smartphone-bold-duotone',
            title: 'Native Mobile',
            desc: 'iOS and Android applications designed with native mental models and fluid gesture interactions.',
        },
        {
            icon: 'solar:star-fall-bold-duotone',
            title: 'Brand Systems',
            desc: 'Distinctive visual identities, scalable typography grids, and comprehensive design tokens.',
        },
        {
            icon: 'solar:video-frame-play-horizontal-bold-duotone',
            title: 'Micro-interactions',
            desc: 'Purposeful, physics-based micro-animations that provide feedback and elevate the user journey.',
        },
        {
            icon: 'solar:rocket-2-bold-duotone',
            title: 'UX Strategy',
            desc: 'Data-driven user research, competitive audits, and rapid wireframing to validate product decisions.',
        },
    ];

    const benefits = [
        {
            icon: 'solar:clock-circle-bold-duotone',
            title: 'Zero Bureaucracy',
            desc: 'Request designs asynchronously via our portal. We process them sequentially with rapid turnaround times.',
        },
        {
            icon: 'solar:medal-star-circle-bold-duotone',
            title: 'Top 1% Talent',
            desc: 'Your product is handled exclusively by senior designers with a track record at high-growth tech companies.',
        },
        {
            icon: 'solar:refresh-circle-bold-duotone',
            title: 'Infinite Iteration',
            desc: "We pause, pivot, or polish on demand. You have unlimited revisions until the output is absolutely perfect.",
        }
    ];

    const faqs = [
        {
            q: 'How does the design subscription model operate?',
            a: 'You pay a flat monthly rate and get access to a dedicated Trello board. Submit as many requests as you want, and we deliver high-fidelity outputs sequentially, usually within 48 hours.',
        },
        {
            q: 'Is there a limit to how many requests I can make?',
            a: 'No limits on requests or revisions. We maintain a continuous pipeline, tackling your backlog one active task at a time (or two, on our Velocity plan).',
        },
        {
            q: 'Why wouldn\'t I just hire an in-house designer?',
            a: 'A senior product designer costs upwards of $120k/yr, plus benefits, equity, and hiring friction. We give you instant access to that same caliber of talent, but you can pause or cancel the subscription anytime.',
        },
        {
            q: 'What stack do you design for?',
            a: 'We design entirely in Figma, heavily utilizing auto-layout, variables, and components to ensure handoffs to React, Next.js, or mobile engineering teams are mathematically flawless.',
        },
        {
            q: 'What if the design isn\'t exactly what we need?',
            a: "We iterate until it is. We don't bill hourly, so there's no friction in requesting tweaks. We refine the pixels until they align perfectly with your vision.",
        },
    ];

    const testimonials = [
        {
            quote: "Zalco bypasses the usual agency fluff. They dropped into our Slack, immediately understood our complex technical domain, and shipped UI that dramatically lowered our churn rate.",
            name: "Sarah Jenkins",
            role: "Founder, TechFlow"
        },
        {
            quote: "We treated them as our core product team for six months. They built a design system from scratch that allowed our front-end engineers to move twice as fast.",
            name: "David Chen",
            role: "VP Product, Nexus"
        },
        {
            quote: "Bold, uncompromising, and incredibly fast. The conversion metrics on our redesigned onboarding flow validated the investment in the very first week.",
            name: "Elena Rodriguez",
            role: "CEO, CommerceOS"
        }
    ];

    return (
        <>
            {/* ─── Header ─── */}
            <header role="banner" className="global-header">
                <div className="container header-inner">
                    <div className="logo">ZALCO.</div>
                    <nav aria-label="Primary Navigation" className="primary-nav">
                        <a href="#services">Services</a>
                        <a href="#work">Work</a>
                        <a href="#pricing">Pricing</a>
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? <Icon icon="solar:sun-bold-duotone" /> : <Icon icon="solar:moon-bold-duotone" />}
                        </button>
                        <button className="brutalist-button brutalist-button--accent">Book a Call</button>
                    </nav>
                </div>
            </header>

            <main id="main-content" role="main">
                {/* ─── Hero ─── */}
                <section aria-labelledby="hero-heading" className="hero-section section-padding">
                    <div className="container hero-inner hero-inner--centered">
                        <div className="hero-content hero-content--centered">
                            <FadeSection delay={100}>
                                <h1 id="hero-heading">
                                    <HighlightPill color="blue">Unfair</HighlightPill> advantage{'\n'}for your product
                                </h1>
                            </FadeSection>
                            <FadeSection delay={200}>
                                <p className="hero-subtext">
                                    We embed senior product designers into your workflow. Get high-fidelity interfaces, design systems, and conversion-focused UX shipped in days, not months.
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

                {/* ─── Services ─── */}
                <section id="services" aria-labelledby="services-heading" className="services-section section-padding">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2 id="services-heading">
                                    Our core <HighlightPill color="red">capabilities</HighlightPill>
                                </h2>
                                <p className="section-desc mx-auto">
                                    We bring specialized expertise to every facet of product design, ensuring seamless execution from strategy to deployment.
                                </p>
                            </div>
                        </FadeSection>
                        <div className="service-grid">
                            {services.map((s, i) => (
                                <FadeSection key={i} delay={i * 80}>
                                    <article className="service-card">
                                        <div className="service-icon-ring">
                                            <Icon icon={s.icon} className="service-icon" />
                                        </div>
                                        <div>
                                            <h3>{s.title}</h3>
                                            <p>{s.desc}</p>
                                        </div>
                                    </article>
                                </FadeSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Team Extension ─── */}
                <section className="team-section section-padding">
                    <div className="container team-inner">
                        <div className="team-content">
                            <FadeSection>
                                <h2>A bolt-on <HighlightPill color="yellow">design</HighlightPill> team</h2>
                            </FadeSection>
                            <FadeSection delay={100}>
                                <p>
                                    Skip the six-month hiring cycle. We drop into your Slack workspace and ship production-ready design work from day one. Pure output, zero administrative drag.
                                </p>
                            </FadeSection>
                            <FadeSection delay={200}>
                                <button className="brutalist-button brutalist-button--dark">Start a project →</button>
                            </FadeSection>
                            <FadeSection delay={300}>
                                <div className="stats-row">
                                    <AnimatedCounter target={500} label="Projects Delivered" />
                                    <AnimatedCounter target={200} label="Happy Clients" />
                                </div>
                            </FadeSection>
                        </div>
                        <FadeSection className="team-visual" delay={150}>
                            <img src={teamImg} alt="Team collaborating on design projects" loading="lazy" />
                        </FadeSection>
                    </div>
                </section>

                {/* ─── Recent Projects (Dark Bento Grid) ─── */}
                <section id="work" aria-labelledby="work-heading" className="projects-section section-padding dark-section">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2 id="work-heading" className="text-white">Our <HighlightPill color="blue">featured</HighlightPill> work</h2>
                                <p className="section-desc mx-auto text-gray-400">
                                    A curated selection of interfaces we've engineered for industry-leading startups.
                                </p>
                            </div>
                        </FadeSection>
                        <div className="bento-project-grid">
                            <FadeSection className="bento-item main-project">
                                <div className="project-image-wrapper">
                                    <img src={project1Img} alt="Dashboard UI" />
                                </div>
                            </FadeSection>
                            <FadeSection delay={100} className="bento-item project-sm-1">
                                <div className="project-image-wrapper">
                                    <img src={project2Img} alt="Mobile UI concept" />
                                </div>
                            </FadeSection>
                            <FadeSection delay={150} className="bento-item project-sm-2">
                                <div className="project-color-block bg-blue flex-center">
                                    <Icon icon="solar:programming-bold-duotone" className="project-huge-icon" />
                                </div>
                            </FadeSection>
                            <FadeSection delay={200} className="bento-item project-sm-3">
                                <div className="project-color-block bg-orange flex-center">
                                    <Icon icon="solar:box-minimalistic-bold-duotone" className="project-huge-icon" />
                                </div>
                            </FadeSection>
                            <FadeSection delay={250} className="bento-item project-sm-4">
                                <div className="project-image-wrapper">
                                    <img src={servicesImg} alt="System UI concept" />
                                </div>
                            </FadeSection>
                        </div>
                        <FadeSection delay={350} className="mt-8 flex justify-center">
                            <button className="brutalist-button brutalist-button--white">See more work <Icon icon="solar:arrow-right-up-linear" /></button>
                        </FadeSection>
                    </div>
                </section>

                {/* ─── Design Process (Vertical Timeline) ─── */}
                <section className="process-section section-padding">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2>How we <HighlightPill color="red">operate</HighlightPill></h2>
                                <p className="section-desc mx-auto">
                                    A transparent, milestone-driven framework that guarantees premium quality and rapid velocity at every phase.
                                </p>
                            </div>
                        </FadeSection>
                        <div className="process-timeline">
                            <div className="timeline-line"></div>
                            {[
                                { title: 'Product Architecture', desc: 'Auditing technical constraints and mapping core user flows before a single pixel is pushed.', icon: 'solar:target-bold-duotone' },
                                { title: 'System Setup', desc: 'Constructing flexible design tokens and component libraries to ensure long-term scalability.', icon: 'solar:pen-bold-duotone' },
                                { title: 'High-Fidelity Execution', desc: 'Designing premium interfaces with a rigorous obsession for layout, typography, and contrast.', icon: 'solar:palette-bold-duotone' },
                                { title: 'Developer Handoff', desc: 'Exporting flawless redlines, interactive prototypes, and modular assets for seamless engineering.', icon: 'solar:rocket-bold-duotone' }
                            ].map((step, i) => (
                                <FadeSection key={i} delay={i * 150} className="timeline-item">
                                    <div className="timeline-number">{i + 1}</div>
                                    <div className="timeline-card">
                                        <div className="timeline-icon"><Icon icon={step.icon} /></div>
                                        <div className="timeline-text">
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                </FadeSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Testimonials ─── */}
                <section className="testimonials-section section-padding">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2>What our <HighlightPill color="yellow">partners</HighlightPill> say</h2>
                                <p className="section-desc mx-auto">
                                    We measure our success by the growth and tangible outcomes we drive for our clients.
                                </p>
                            </div>
                        </FadeSection>
                        <div className="testimonials-grid">
                            {testimonials.map((test, i) => (
                                <FadeSection key={i} delay={i * 100}>
                                    <article className="testimonial-card">
                                        <Icon icon="solar:quote-left-bold-duotone" className="quote-icon text-accent" />
                                        <p className="quote-text">"{test.quote}"</p>
                                        <div className="quote-author">
                                            <div className="author-avatar"><Icon icon="solar:user-bold-duotone" /></div>
                                            <div className="author-info">
                                                <strong>{test.name}</strong>
                                                <span>{test.role}</span>
                                            </div>
                                        </div>
                                    </article>
                                </FadeSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Benefits ─── */}
                <section className="benefits-section section-padding">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2>The Zalco <HighlightPill color="blue">advantage</HighlightPill></h2>
                                <p className="section-desc mx-auto">Why top-tier startups trust us over traditional global agencies and fragmented freelance talent.</p>
                            </div>
                        </FadeSection>
                        <div className="benefits-grid">
                            {benefits.map((b, i) => (
                                <FadeSection key={i} delay={i * 100}>
                                    <article className="benefit-card">
                                        <div className="benefit-icon">
                                            <Icon icon={b.icon} />
                                        </div>
                                        <h3>{b.title}</h3>
                                        <p>{b.desc}</p>
                                    </article>
                                </FadeSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── CTA Dark (New Hand Illustration Design) ─── */}
                <section className="cta-section section-padding dark-section">
                    <div className="container flex-center">
                        <div className="cta-card">
                            <h2>Building something <HighlightPill color="red">ambitious?</HighlightPill><br />Let's engage.</h2>
                            <button className="brutalist-button brutalist-button--white cta-massive-btn">
                                Book a Strategy Call <Icon icon="solar:arrow-right-up-linear" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ─── Pricing ─── */}
                <section id="pricing" className="pricing-section section-padding">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2><HighlightPill color="yellow">Transparent</HighlightPill> pricing</h2>
                                <p className="section-desc mx-auto">Predictable, flat-rate subscriptions to scale your product design without the overhead.</p>
                            </div>
                        </FadeSection>
                        <div className="pricing-grid">
                            <FadeSection delay={0}>
                                <article className="pricing-card pricing-card--dark">
                                    <span className="pricing-tier">Ascend</span>
                                    <div className="pricing-amount">
                                        <span className="pricing-currency">$</span>
                                        <span className="pricing-value">3,500</span>
                                        <span className="pricing-period">/mo</span>
                                    </div>
                                    <button className="brutalist-button brutalist-button--white pricing-btn">Select Plan</button>
                                    <div className="pricing-features-wrap">
                                        <h4>What's included in this plan?</h4>
                                        <p>Standard pipeline for continuous functional design updates.</p>
                                        <ul className="pricing-features">
                                            <li><Icon icon="solar:check-circle-bold" /> 1 active request</li>
                                            <li><Icon icon="solar:check-circle-bold" /> Unlimited revisions</li>
                                            <li><Icon icon="solar:check-circle-bold" /> 48-hour avg delivery</li>
                                            <li><Icon icon="solar:check-circle-bold" /> Figma source files</li>
                                            <li><Icon icon="solar:check-circle-bold" /> Pause or cancel anytime</li>
                                        </ul>
                                    </div>
                                </article>
                            </FadeSection>
                            <FadeSection delay={100}>
                                <article className="pricing-card pricing-card--purple">
                                    <span className="pricing-tier">Velocity</span>
                                    <div className="pricing-amount">
                                        <span className="pricing-currency">$</span>
                                        <span className="pricing-value">6,000</span>
                                        <span className="pricing-period">/mo</span>
                                    </div>
                                    <button className="brutalist-button brutalist-button--dark pricing-btn">Select Plan</button>
                                    <div className="pricing-features-wrap">
                                        <h4>What's included in this plan?</h4>
                                        <p>Double bandwidth for aggressive growth stages and complex builds.</p>
                                        <ul className="pricing-features">
                                            <li><Icon icon="solar:check-circle-bold" /> 2 active requests</li>
                                            <li><Icon icon="solar:check-circle-bold" /> Unlimited revisions</li>
                                            <li><Icon icon="solar:check-circle-bold" /> 24-hour avg delivery</li>
                                            <li><Icon icon="solar:check-circle-bold" /> Figma + code handoff</li>
                                            <li><Icon icon="solar:check-circle-bold" /> Dedicated design lead</li>
                                        </ul>
                                    </div>
                                </article>
                            </FadeSection>
                        </div>
                    </div>
                </section>

                {/* ─── FAQ ─── */}
                <section className="faq-section section-padding">
                    <div className="container">
                        <FadeSection>
                            <div className="section-header section-header--center">
                                <h2><HighlightPill color="red">Common</HighlightPill><br />inquiries</h2>
                            </div>
                        </FadeSection>
                        <div className="faq-list">
                            {faqs.map((faq, i) => (
                                <FadeSection key={i} delay={i * 60}>
                                    <FAQItem question={faq.q} answer={faq.a} />
                                </FadeSection>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* ─── Footer (unchanged) ─── */}
            <footer role="contentinfo" className="bento-footer">
                <div className="bento-footer-inner">
                    <div className="bento-footer-top">
                        <div className="bento-brand">
                            <div className="bento-logo">
                                <div className="logo-icon-wrapper">
                                    <Icon icon="solar:programming-bold-duotone" />
                                </div>
                                <h2 className="logo-text">Zalco</h2>
                            </div>
                            <p>These tools are for product design and engineering, not for legal advice.</p>
                        </div>
                        <div className="bento-newsletter">
                            <h3>Request a Demo</h3>
                            <form className="bento-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email" aria-label="Email address" required />
                                <button type="submit" className="brutalist-button brutalist-button--accent">Get Started</button>
                            </form>
                        </div>
                    </div>

                    <div className="bento-footer-links">
                        <div className="bento-link-col">
                            <h4>Company</h4>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Service</a>
                            <a href="#">Testimonials</a>
                            <a href="#">Pricing</a>
                            <a href="#">Career</a>
                        </div>
                        <div className="bento-link-col">
                            <h4>Explore</h4>
                            <a href="#">What We Offer</a>
                            <a href="#">Case Studies</a>
                            <a href="#">Blog &amp; Insights</a>
                            <a href="#">Resources</a>
                            <a href="#">FAQs</a>
                        </div>
                        <div className="bento-link-col">
                            <h4>Legal Links</h4>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Disclaimer</a>
                            <a href="#">Copyright</a>
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
