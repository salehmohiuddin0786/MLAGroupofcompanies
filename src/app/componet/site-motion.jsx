"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SiteMotion({ children }) {
  const scope = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
    hero
      .from(".page-hero .eyebrow, .hero-copy .eyebrow", { y: 24, opacity: 0, duration: .65 })
      .from(".page-hero .display, .hero-copy .display", { y: 70, opacity: 0, rotateX: -10, transformOrigin: "50% 100%", duration: 1 }, "-=.4")
      .from(".page-hero p, .hero-copy p, .breadcrumbs, .hero-actions", { y: 28, opacity: 0, duration: .7, stagger: .1 }, "-=.55");

    gsap.utils.toArray(".section").forEach((section) => {
      const heading = section.querySelector(".heading");
      if (heading) {
        gsap.from(heading, {
          scrollTrigger: { trigger: heading, start: "top 86%", once: true },
          y: 45,
          opacity: 0,
          duration: .85,
          ease: "power3.out",
        });
      }
    });

    gsap.utils.toArray(".plain-card, .service-card, .feature, .step, .trustitem").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 92%", once: true },
        y: 45,
        opacity: 0,
        rotateX: 7,
        duration: .7,
        delay: (index % 3) * .06,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".timeline-item").forEach((item) => {
      const image = item.querySelector(".timeline-image");
      const copy = item.querySelector(".timeline-copy");
      const imageOnRight = item.classList.contains("timeline-right");

      gsap.from(image, {
        scrollTrigger: { trigger: item, start: "top 78%", once: true },
        x: imageOnRight ? 110 : -110,
        opacity: 0,
        rotateY: imageOnRight ? -8 : 8,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(copy, {
        scrollTrigger: { trigger: item, start: "top 78%", once: true },
        x: imageOnRight ? -110 : 110,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray(".color-orb").forEach((orb, index) => {
      gsap.to(orb, {
        x: index % 2 ? -70 : 70,
        y: index % 2 ? 90 : -70,
        rotation: index % 2 ? -25 : 25,
        scrollTrigger: {
          trigger: orb.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    ScrollTrigger.refresh();
  }, { scope, dependencies: [pathname], revertOnUpdate: true });

  return <div ref={scope} className="site-motion">{children}</div>;
}
