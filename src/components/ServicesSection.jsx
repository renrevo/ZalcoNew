import React from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

export default function ServicesSection() {
    const services = [
        { name: 'Web Design (Landing Pages)', icon: 'solar:document-text-bold-duotone' },
        { name: 'Web App Design', icon: 'solar:monitor-smartphone-bold-duotone' },
        { name: 'Mobile App Design', icon: 'solar:smartphone-bold-duotone' },
        { name: 'Web App Development', icon: 'solar:programming-bold-duotone' },
        { name: 'Mobile App Development', icon: 'solar:iphone-bold-duotone' },
        { name: 'DevOps Services', icon: 'solar:server-square-bold-duotone' },
        { name: 'UI/UX Consultation', icon: 'solar:chat-round-line-bold-duotone' },
    ];

    const techStack = [
        'logos:figma', 'logos:webflow', 'logos:framer', 'logos:react', 'logos:nodejs-icon', 'logos:typescript-icon', 'logos:aws', 'logos:google-cloud', 'logos:docker-icon', 'logos:kubernetes', 'logos:terraform-icon', 'logos:openai-icon', 'logos:google-gemini', 'logos:anthropic-icon'
    ];

    return (
        <section id="services" className="section-padding container">
            <div className="services-grid">
                {/* Left Column: Heading & Tech Stack */}
                <div className="services-left">
                    <h2 className="services-heading">
                        <span className="text-gray-400 font-normal">Services that</span><br />
                        supercharge your<br />
                        business.
                    </h2>

                    <div className="tech-stack-container">
                        <p className="tech-stack-label">Our tech stack</p>
                        <div className="tech-stack-icons">
                            {techStack.map((icon, index) => (
                                <div key={index} className="tech-stack-icon-wrapper">
                                    <Icon icon={icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Services List */}
                <div className="services-right">
                    <ul className="services-list">
                        {services.map((service, index) => (
                            <li key={index} className="service-item">
                                <span className="service-icon">
                                    <Icon icon={service.icon} />
                                </span>
                                <span className="service-name">{service.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
