import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

const faqs = [
    {
        q: "Do you only do design, or development too?",
        a: "We do both! Zalco is a full-scale digital product agency. We have senior UI/UX designers, frontend and backend developers, and DevOps engineers all working under one roof."
    },
    {
        q: "What types of apps do you build?",
        a: "We specialize in modern web applications (React, Next.js), native and cross-platform mobile apps, and high-converting marketing landing pages."
    },
    {
        q: "What does your DevOps service cover?",
        a: "Our DevOps engineers can help set up scalable cloud architectures (AWS, GCP, Azure), optimize server costs, implement CI/CD pipelines, and ensure your infrastructure is secure and highly available."
    },
    {
        q: "Do you work with early-stage startups?",
        a: "Absolutely. We love partnering with founders to take ideas from zero to one. We can help scope your MVP, design the brand, and deploy the entire product."
    },
    {
        q: "How does the monthly retainer work?",
        a: "Instead of scoping individual projects, a retainer integrates our designers and devs directly into your team. You prioritize the backlog, and we continuously ship updates and improvements."
    }
];

export default function FAQSection() {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="faq-section-wrapper">
            <div className="section-padding container">
                <div className="faq-grid">
                    <div className="faq-left">
                        <h2 className="faq-heading mb-8">
                            Your questions<br />
                            <span className="text-gray-400 font-normal">answered.</span>
                        </h2>

                        <div className="faq-accordion">
                            {faqs.map((faq, idx) => {
                                const isOpen = idx === openIdx;
                                return (
                                    <div
                                        key={idx}
                                        className={`faq-item ${isOpen ? 'is-open' : ''}`}
                                        onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                                    >
                                        <div className="faq-question">
                                            <span className="q-icon">Q.</span>
                                            <h4>{faq.q}</h4>
                                            <Icon
                                                icon={isOpen ? "solar:minus-circle-linear" : "solar:add-circle-linear"}
                                                className="faq-toggle-icon"
                                            />
                                        </div>
                                        <div className="faq-answer-wrapper" style={{ height: isOpen ? 'auto' : 0 }}>
                                            <div className="faq-answer">
                                                <p>{faq.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="faq-right">
                        <div className="cta-card">
                            <img
                                src="https://i.pravatar.cc/150?img=11"
                                alt="Profile"
                                className="cta-avatar"
                            />
                            <h3 className="cta-title">Still not sure?</h3>
                            <h3 className="cta-subtitle">Book a free discovery call.</h3>
                            <p className="cta-desc">
                                Give me a shout if you need specific advice or have more questions.
                            </p>
                            <button className="brutalist-button brutalist-button--dark w-full cta-button">
                                <Icon icon="solar:calendar-bold-duotone" /> Schedule Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
