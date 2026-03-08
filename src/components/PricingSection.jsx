import React from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

export default function PricingSection() {
    return (
        <section id="pricing" className="pricing-section-wrapper">
            <div className="section-padding container">
                <div className="pricing-header">
                    <div>
                        <h2>
                            <span className="text-gray-400 font-normal">Simple pricing.</span><br />
                            Standout designs.
                        </h2>
                    </div>
                    <div className="pricing-description">
                        <p className="font-semibold text-primary">Clear costs. High impact.</p>
                        <p>Select from an ongoing development retainer or individual project terms.</p>
                    </div>
                </div>

                <div className="pricing-features">
                    <div className="pricing-feature">
                        <div className="feature-icon"><Icon icon="solar:chat-round-check-bold-duotone" /></div>
                        <h4>Dedicated Team</h4>
                        <p>Direct communication with the designers, developers, and DevOps engineers doing the work.</p>
                    </div>
                    <div className="pricing-feature">
                        <div className="feature-icon"><Icon icon="solar:pen-bold-duotone" /></div>
                        <h4>End-to-end Solutions</h4>
                        <p>From UI/UX strategy to highly scalable cloud deployments and mobile applications.</p>
                    </div>
                    <div className="pricing-feature">
                        <div className="feature-icon"><Icon icon="solar:rocket-bold-duotone" /></div>
                        <h4>Startup Speed</h4>
                        <p>We work in agile sprints to deliver production-ready features fast.</p>
                    </div>
                </div>

                <div className="pricing-cards">
                    {/* Subscription Card */}
                    <div className="pricing-card-subscription">
                        <div className="subscription-visual">
                            <div className="subscription-badge">Most Popular for Startups</div>
                            <h3>Retainer services<br />for scalable growth.</h3>
                            <div className="availability-badge">
                                <span className="status-dot"></span>
                                Hire us today
                            </div>
                            <p className="visual-desc">We use simple, transparent pricing to give you peace of mind.</p>
                        </div>

                        <div className="subscription-details">
                            <div className="details-header">
                                <h4>Full Stack Retainer</h4>
                                <p>One flat monthly rate for continuous design, development, and DevOps support.</p>
                            </div>
                            <div className="price-block">
                                <span className="price">$5,000</span>
                                <span className="period">/ month</span>
                            </div>
                            <hr className="pricing-divider" />
                            <ul className="pricing-checklist">
                                <li><Icon icon="solar:check-circle-bold-duotone" /> 2 Senior Frontend & Backend Engineering</li>
                                <li><Icon icon="solar:check-circle-bold-duotone" /> 1 Senior UI/UX Mobile & Web Design</li>
                                <li><Icon icon="solar:check-circle-bold-duotone" /> 1 Senior DevOps & Cloud Architecture</li>
                                <li><Icon icon="solar:check-circle-bold-duotone" /> Unlimited revisions</li>
                                <li><Icon icon="solar:check-circle-bold-duotone" /> Direct slack channel</li>
                            </ul>
                            <div className="pricing-actions">
                                <button className="brutalist-button brutalist-button--dark">Get started</button>
                                <span className="payment-note">Powered by Paypal</span>
                            </div>
                        </div>
                    </div>

                    {/* Single Project Card */}
                    <div className="pricing-card-single">
                        <div className="single-content">
                            <h3>Fixed Scope Project</h3>
                            <p>Comprehensive agency services for major launches. Custom quotes from product strategy to robust multi-platform site builds.</p>
                        </div>
                        <ul className="pricing-checklist pricing-checklist--light">
                            <li><Icon icon="solar:check-circle-bold-duotone" /> Priority delivery & scope</li>
                            <li><Icon icon="solar:check-circle-bold-duotone" /> Dedicated account</li>
                            <li><Icon icon="solar:check-circle-bold-duotone" /> Flexible iteration</li>
                            <li><Icon icon="solar:check-circle-bold-duotone" /> Milestone payments</li>
                        </ul>
                        <button className="brutalist-button brutalist-button--white">Get quote</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
