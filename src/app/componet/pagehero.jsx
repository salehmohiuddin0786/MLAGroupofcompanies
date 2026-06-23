import Link from "next/link";
const images = {
  "About us": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90",
  Services: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=90",
  Contact: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
  "Book a site visit": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
  Careers: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=90",
  Insights: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90",
};
export default function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero" style={{ "--page-image": `url("${images[eyebrow]}")` }}>
    <div className="page-hero-shape"></div><div className="container page-hero-content"><span className="eyebrow">{eyebrow}</span><h1 className="display">{title}</h1>{text && <p className="lead">{text}</p>}<div className="breadcrumbs"><Link href="/">Home</Link><span>—</span>{eyebrow}</div></div><span className="scroll-cue">Scroll <i></i></span>
  </section>;
}
