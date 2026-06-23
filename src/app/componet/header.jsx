"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/aboutus"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Careers", "/career"],
  ["Contact", "/contactus"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="MLA home">
          <Image
            src="/logo.png"
            alt="MLA Group of Companies"
            width={210}
            height={80}
            priority
          />
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/booksitevisit" className="nav-cta">
            <span className="calendar" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2v4M18 2v4M3 9h18" />
                <rect x="3" y="4" width="18" height="17" rx="2" />
              </svg>
            </span>
            <span className="cta-label">Book a Visit</span>
            <span className="cta-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>

          <button
            type="button"
            className={`menu ${open ? "is-open" : ""}`}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <i></i>
            <i></i>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .site-header {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          padding: 16px 0;
          color: #ffffff;
          background: #14265f;
          transition: padding 0.3s ease, box-shadow 0.3s ease;
        }

        .site-header.scrolled {
          padding: 8px 0;
          box-shadow: 0 18px 45px rgba(17, 24, 39, 0.18);
        }

        .site-header .nav-shell {
          width: 100%;
          min-height: 72px;
          margin: 0;
          padding: 8px clamp(24px, 5vw, 80px);
          display: grid;
          grid-template-columns: max-content 1fr max-content;
          align-items: center;
          gap: 28px;
          border-top: 1px solid rgba(251, 191, 36, 0.32);
          border-bottom: 1px solid rgba(251, 191, 36, 0.32);
          background:
            radial-gradient(circle at 8% 22%, rgba(251, 191, 36, 0.18), transparent 30%),
            linear-gradient(105deg, #1a2f73 0%, #14265f 48%, #111827 100%);
          transition: min-height 0.3s ease;
        }

        .site-header.scrolled .nav-shell {
          min-height: 62px;
        }

        .site-header .brand {
          position: relative;
          display: inline-flex;
          align-items: center;
          width: max-content;
          min-height: 58px;
          padding: 8px 20px 8px 14px;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff 0%, #eff6ff 68%, #fff7df 100%);
          border: 1px solid rgba(251, 191, 36, 0.78);
          box-shadow: 7px 7px 0 rgba(251, 191, 36, 0.22);
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
          transition: transform 0.25s ease;
        }

        .site-header .brand::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 100%;
          background: #f59e0b;
        }

        .site-header .brand:hover {
          transform: translateY(-2px);
        }

        .site-header .brand img {
          display: block;
          width: 158px;
          height: auto;
        }

        .site-header.scrolled .brand img {
          width: 150px;
        }

        .site-header .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(18px, 2.2vw, 34px);
        }

        .site-header .nav-links a {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 21px 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.075em;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.25s ease;
        }

        .site-header .nav-links a::before {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 13px;
          height: 3px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          transition: right 0.25s ease;
        }

        .site-header .nav-links a:hover,
        .site-header .nav-links a.active {
          color: #fbbf24;
        }

        .site-header .nav-links a:hover::before,
        .site-header .nav-links a.active::before {
          right: 0;
        }

        .site-header .nav-actions {
          display: flex;
          align-items: center;
          justify-self: end;
          gap: 10px;
          min-width: max-content;
        }

        .site-header .nav-cta {
          position: relative;
          isolation: isolate;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          gap: 9px !important;
          width: 184px !important;
          min-width: 184px !important;
          height: 52px !important;
          min-height: 52px !important;
          padding: 6px 10px 6px 7px !important;
          overflow: hidden;
          color: #111827 !important;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.42) !important;
          border-radius: 999px !important;
          box-shadow:
            0 14px 30px rgba(245, 158, 11, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
          text-decoration: none !important;
          white-space: nowrap !important;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: ctaBreathe 3s ease-in-out infinite;
        }

        .site-header .nav-cta::before {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          width: 45%;
          border-radius: inherit;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
          transform: translateX(-180%) skewX(-18deg);
          animation: ctaShine 3.2s ease-in-out infinite;
          pointer-events: none;
        }

        .site-header .nav-cta:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow:
            0 18px 40px rgba(245, 158, 11, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
        }

        .site-header .nav-cta span {
          position: relative;
          z-index: 2;
        }

        .site-header .calendar,
        .site-header .cta-arrow {
          display: grid !important;
          place-items: center !important;
          border-radius: 999px;
          color: #ffffff;
          background: #111827;
        }

        .site-header .calendar {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
        }

        .site-header .calendar svg {
          display: block;
          width: 18px;
          height: 18px;
        }

        .site-header .cta-label {
          display: inline-flex !important;
          align-items: center !important;
          flex: 0 0 auto !important;
          color: #111827;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.06em;
          line-height: 1;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .site-header .cta-arrow {
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          font-size: 16px;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .site-header .nav-cta:hover .cta-arrow {
          transform: translate(3px, -3px);
        }

        .site-header .menu {
          display: none;
        }

        @keyframes ctaShine {
          0%,
          45% {
            transform: translateX(-180%) skewX(-18deg);
          }
          72%,
          100% {
            transform: translateX(360%) skewX(-18deg);
          }
        }

        @keyframes ctaBreathe {
          0%,
          100% {
            box-shadow:
              0 14px 30px rgba(245, 158, 11, 0.28),
              inset 0 1px 0 rgba(255, 255, 255, 0.55);
          }
          50% {
            box-shadow:
              0 18px 42px rgba(245, 158, 11, 0.45),
              0 0 0 5px rgba(251, 191, 36, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
          }
        }

        @media (max-width: 1100px) {
          .site-header .nav-shell {
            grid-template-columns: 1fr auto;
          }

          .site-header .nav-links {
            position: absolute;
            top: calc(100% + 10px);
            left: 20px;
            right: 20px;
            display: grid;
            gap: 0;
            padding: 18px;
            border: 1px solid rgba(251, 191, 36, 0.25);
            background: rgba(17, 24, 39, 0.98);
            box-shadow: 0 28px 65px rgba(17, 24, 39, 0.32);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-15px);
            transition: opacity 0.25s ease, transform 0.25s ease;
          }

          .site-header .nav-links.open {
            opacity: 1;
            pointer-events: auto;
            transform: none;
          }

          .site-header .nav-links a {
            padding: 14px 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #ffffff;
          }

          .site-header .nav-links a::before {
            left: 0;
            right: auto;
            bottom: 0;
            width: 0;
          }

          .site-header .nav-links a:hover::before,
          .site-header .nav-links a.active::before {
            width: 100%;
          }

          .site-header .nav-cta {
            width: 156px !important;
            min-width: 156px !important;
            height: 46px !important;
            min-height: 46px !important;
            gap: 6px !important;
            padding: 5px 8px 5px 5px !important;
          }

          .site-header .calendar {
            width: 32px;
            height: 32px;
            flex-basis: 32px;
          }

          .site-header .cta-label {
            font-size: 10px;
          }

          .site-header .cta-arrow {
            width: 24px;
            height: 24px;
            flex-basis: 24px;
            font-size: 14px;
          }

          .site-header .menu {
            display: grid;
            place-content: center;
            gap: 7px;
            width: 48px;
            height: 48px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: rgba(17, 24, 39, 0.16);
            color: #ffffff;
            cursor: pointer;
          }

          .site-header .menu i {
            display: block;
            width: 22px;
            height: 2px;
            background: currentColor;
            transition: transform 0.25s ease;
          }

          .site-header .menu.is-open i:first-child {
            transform: translateY(4.5px) rotate(45deg);
          }

          .site-header .menu.is-open i:last-child {
            transform: translateY(-4.5px) rotate(-45deg);
          }
        }

        @media (max-width: 600px) {
          .site-header,
          .site-header.scrolled {
            padding: 8px 0;
          }

          .site-header .nav-shell {
            min-height: 60px;
            padding: 7px 14px;
          }

          .site-header .brand {
            min-height: 50px;
            padding: 6px 14px 6px 9px;
          }

          .site-header .brand img,
          .site-header.scrolled .brand img {
            width: 122px;
          }

          .site-header .nav-links {
            left: 10px;
            right: 10px;
          }

          .site-header .nav-cta {
            width: 44px !important;
            min-width: 44px !important;
            height: 44px !important;
            min-height: 44px !important;
            gap: 0 !important;
            padding: 5px !important;
          }

          .site-header .calendar {
            width: 34px;
            height: 34px;
            flex-basis: 34px;
          }

          .site-header .cta-label,
          .site-header .cta-arrow {
            display: none !important;
          }

          .site-header .menu {
            width: 44px;
            height: 44px;
          }

          .site-header .nav-actions {
            gap: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header .nav-cta,
          .site-header .nav-cta::before {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
