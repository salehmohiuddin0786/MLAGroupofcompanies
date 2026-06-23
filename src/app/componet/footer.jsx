"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.7V6.9c0-.9.2-1.4 1.5-1.4h1.9V2.3C16.7 2.2 15.7 2 14.3 2c-3 0-5 1.8-5 5.1v1.6H6v3.6h3.3V22h4v-9.7h3.3l.5-3.6h-3.9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.9 8.8H3.2V22h3.7V8.8ZM5.1 2.2A2.1 2.1 0 1 0 5 6.4a2.1 2.1 0 0 0 .1-4.2ZM22 14.7c0-3.9-2.1-6.2-5.2-6.2-2.4 0-3.4 1.3-4 2.2V8.8H9.1V22h3.7v-6.6c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V22H21v-7.3Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-glow glow-one" aria-hidden="true"></span>
      <span className="footer-glow glow-two" aria-hidden="true"></span>

      <div className="container footer-top">
        <span>Have a plot? Let&apos;s create something remarkable.</span>
        <Link href="/booksitevisit">
          Book a site visit <b>↗</b>
        </Link>
      </div>

      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-logo">
            <Image src="/logo.png" alt="MLA Group" width={240} height={100} />
          </div>
          <p>
            One team for construction, architecture, interiors and building materials.
            Building Hyderabad with clarity, care and lasting quality.
          </p>

          <div className="socials" aria-label="Social links">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <div><Link href="/">Home</Link></div>
          <div><Link href="/aboutus">About us</Link></div>
          <div><Link href="/blog">Insights</Link></div>
          <div><Link href="/career">Careers</Link></div>
          <div><Link href="/contactus">Contact</Link></div>
        </div>

        <div>
          <h4>Expertise</h4>
          <Link href="/services">Residential Construction</Link>
          <Link href="/services">Commercial Projects</Link>
          <Link href="/services">Interior Services</Link>
          <Link href="/services">Design & Planning</Link>
          <Link href="/services">Building Materials</Link>
        </div>

        <div className="contact-column">
          <h4>Talk to us</h4>
          <a className="phone" href="tel:+919700125598">
            +91 97001 25598
          </a>
          <a href="mailto:enquiry@mlagroupofcompanies.com">
            enquiry@mlagroupofcompanies.com
          </a>
          <p>
            Bandlaguda & Hitech City
            <br />
            Hyderabad, Telangana
          </p>
          <span className="availability">
            <i></i> Available 24/7
          </span>
        </div>
      </div>

      <div className="container copyright">
        <span>© {new Date().getFullYear()} MLA Group of Companies</span>
        <span>Construction · Interiors · Building Materials</span>
        <Link href="/contactus">Privacy & Terms</Link>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          color: #d1d5db;
          background:
            linear-gradient(135deg, rgba(26, 47, 115, 0.92), rgba(17, 24, 39, 0.98) 52%),
            #111827;
        }

        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.75), transparent);
          pointer-events: none;
        }

        .footer-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .glow-one {
          width: 520px;
          height: 520px;
          right: -210px;
          top: 70px;
          background: rgba(251, 191, 36, 0.16);
        }

        .glow-two {
          width: 380px;
          height: 380px;
          left: -170px;
          bottom: -160px;
          background: rgba(59, 130, 246, 0.18);
        }

        .footer-top {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 58px 0;
          border-bottom: 1px solid rgba(251, 191, 36, 0.24);
          color: #ffffff;
        }

        .footer-top > span {
          max-width: 750px;
          font-family: var(--font-serif), serif;
          font-size: clamp(30px, 4vw, 54px);
          line-height: 1.05;
        }

        .footer-top a {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex: none;
          overflow: hidden;
          padding: 17px 23px;
          color: #111827;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 999px;
          box-shadow: 0 18px 38px rgba(245, 158, 11, 0.24);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .footer-top a:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 46px rgba(245, 158, 11, 0.34);
        }

        .footer-top b {
          display: grid;
          place-items: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          color: #ffffff;
          background: #111827;
          font-size: 16px;
        }

        .footer-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1.5fr 0.65fr 1fr 1.15fr;
          gap: 55px;
          padding: 75px 0 65px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          padding: 10px 15px;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #ffffff, #fff7df);
          border: 1px solid rgba(251, 191, 36, 0.55);
          box-shadow: 7px 7px 0 rgba(251, 191, 36, 0.16);
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }

        .footer-logo img {
          display: block;
          width: 180px;
          height: auto;
        }

        .footer p {
          max-width: 390px;
          line-height: 1.75;
          font-size: 13px;
        }

        .footer h4 {
          margin: 0 0 26px;
          color: #fbbf24;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .footer-grid a,
        .footer-grid span {
          display: block;
          margin: 0 0 14px;
          color: inherit;
          font-size: 13px;
          line-height: 1.55;
          text-decoration: none;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-grid > div:not(.footer-about) a:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .contact-column .phone {
          color: #ffffff;
          font-family: var(--font-serif), serif;
          font-size: 25px;
        }

        .socials {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 26px;
        }

        .socials a {
          position: relative;
          display: grid !important;
          place-items: center;
          width: 46px;
          height: 46px;
          margin: 0 !important;
          overflow: hidden;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition:
            transform 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .socials a::before {
          content: "";
          position: absolute;
          inset: auto 8px 6px;
          height: 3px;
          border-radius: 999px;
          background: #fbbf24;
          opacity: 0;
          transform: scaleX(0.4);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .socials a:hover {
          color: #111827;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-color: rgba(251, 191, 36, 0.75);
          box-shadow: 0 16px 30px rgba(245, 158, 11, 0.24);
          transform: translateY(-5px) rotate(-2deg);
        }

        .socials a:hover::before {
          opacity: 1;
          transform: scaleX(1);
          background: rgba(17, 24, 39, 0.35);
        }

        .socials svg {
          position: relative;
          z-index: 1;
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .availability {
          display: flex !important;
          align-items: center;
          gap: 10px;
          color: #d1d5db;
        }

        .availability i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.1);
        }

        .copyright {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .copyright span,
        .copyright a {
          margin: 0;
          color: #9ca3af;
          font-size: 10px;
          letter-spacing: 0.05em;
          text-decoration: none;
        }

        .copyright span:nth-child(2) {
          text-align: center;
        }

        .copyright a {
          text-align: right;
        }

        .copyright a:hover {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-top {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .copyright {
            display: block;
          }

          .copyright > * {
            display: block;
            margin: 8px 0 !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}
