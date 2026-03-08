import React from 'react';
import '../index.css';

const testimonials = [
    {
        text: "Zalco completely transformed our platform. Their combination of stellar UI design and scalable backend architecture helped us handle a 10x spike in traffic.",
        name: "Maria Martinez",
        handle: "Founder, Fintech Startup",
        avatar: "https://i.pravatar.cc/150?u=maria"
    },
    {
        text: "Working with the Zalco team has been incredible. They truly understood our vision for our React Native mobile app and brought it to life faster than we imagined.",
        name: "Thomas Weber",
        handle: "CTO, O2O2",
        avatar: "https://i.pravatar.cc/150?u=thomas"
    },
    {
        text: "Our B2B conversion rate improved by 50% thanks to their landing page redesigns and frontend optimizations.",
        name: "Lisa Turner",
        handle: "VP of Sales, Enterprise SaaS",
        avatar: "https://i.pravatar.cc/150?u=lisa"
    },
    {
        text: "Zalco's DevOps engineers audited our AWS infrastructure, reduced our monthly spend by 30%, and automated our entire CI/CD pipeline.",
        name: "Michael Wang",
        handle: "Lead Engineer, TechFlow",
        avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
        text: "They delivered our MVP in under 8 weeks. From wireframes to the final cloud deployment, their full-stack expertise is unmatched.",
        name: "Sarah Evans",
        handle: "CEO, Finova Financial",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        text: "Finding an agency that excels at both highly-creative web design and complex backend development is rare. Zalco is that agency.",
        name: "David Smith",
        handle: "Founder, B2B Innovators",
        avatar: "https://i.pravatar.cc/150?u=david"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="work" className="section-padding container">
            <h2 className="testimonials-heading mb-12">
                <span className="text-gray-400 font-normal">Hear from what my</span><br />
                clients have to say.
            </h2>

            <div className="testimonials-masonry">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-author">
                            <img src={t.avatar} alt={t.name} className="author-avatar" />
                            <div className="author-info">
                                <span className="author-name">{t.name}</span>
                                <span className="author-handle">{t.handle}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
