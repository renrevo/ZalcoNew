import React from 'react';
import { Icon } from '@iconify/react';
import '../index.css';

export default function LogoCloud() {
    const logos = [
        { icon: "solar:moon-fog-bold-duotone", name: "Luminary" },
        { name: "21 45 Degrees*" },
        { icon: "solar:command-bold-duotone", name: "Codecraft_." },
        { icon: "solar:layers-minimalistic-bold-duotone", name: "frequencil" }
    ];

    // Duplicate array multiple times so the scroll is perfectly seamless 
    const marqueeItems = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="logo-cloud-section border-y border-border py-8 overflow-hidden w-full">
            <span className="logo-cloud-label text-sm font-medium text-gray-500 text-center">
                Trusted by many
            </span>

            <div className="logo-marquee-container w-full overflow-hidden">
                <div className="logo-marquee-track flex gap-12 items-center text-gray-500">
                    {marqueeItems.map((logo, idx) => (
                        <div key={idx} className="logo-item flex items-center gap-2 font-semibold">
                            {logo.icon && <Icon icon={logo.icon} className="text-xl" />}
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
