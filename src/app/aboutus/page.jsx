import Link from "next/link";
import PageHero from "../componet/pagehero";
import Reveal from "../componet/reveal";
export const metadata = { title: "About Us" };

const timeline = [
  {
    year: "2017",
    label: "The foundation",
    title: "A better way to build begins.",
    text: "MLA started in Hyderabad with a clear belief: homeowners deserve dependable engineering, honest communication and one team that takes responsibility from day one.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2019",
    label: "Growing expertise",
    title: "Design and construction come together.",
    text: "Architecture, structural planning and project execution were brought under one roof, reducing hand-offs and turning ambitious ideas into buildable, cost-aware plans.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2021",
    label: "A complete ecosystem",
    title: "From structure to finished spaces.",
    text: "Interiors, approvals, materials and specialist services joined the MLA ecosystem so clients could move through every stage with one accountable partner.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "2023",
    label: "Visible progress",
    title: "Technology makes trust measurable.",
    text: "Digital site monitoring and documented quality checks gave homeowners a clearer view of progress, decisions and workmanship—even when they were away.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=85",
  },
  {
    year: "Today",
    label: "Building forward",
    title: "One team. Thousands of possibilities.",
    text: "MLA continues to create homes, villas, apartments and commercial spaces around Hyderabad, combining human care with disciplined systems and lasting quality.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85",
  },
];

export default function About() { return <>
  <PageHero eyebrow="About us" title="Built on responsibility." text="A multidisciplinary Hyderabad team committed to making quality construction more transparent, organised and dependable." />
  <section className="section about-intro color-section color-sunrise"><span className="color-orb orb-blue"></span><div className="container content-grid"><Reveal><span className="eyebrow">Our company</span><h2 className="heading">More than a contractor. Your construction partner.</h2></Reveal><Reveal><p className="lead">MLA Group brings construction, architecture, interiors, approvals and building materials into one coordinated journey. Every decision is documented, every milestone is visible and every space is made to last.</p><Link href="/booksitevisit" className="btn btn-dark">Meet our team <span className="arrow">↗</span></Link></Reveal></div></section>

  <section className="section about-journey"><div className="container">
    <Reveal className="timeline-heading"><span className="eyebrow">Our journey</span><h2 className="heading">Built step by step.<br/>Growing with purpose.</h2><p className="lead">The story behind the systems, people and standards that shape MLA today.</p></Reveal>
    <div className="timeline">
      {timeline.map((item, index) => <Reveal className={`timeline-item ${index % 2 ? "timeline-left" : "timeline-right"}`} key={item.year} delay={80}>
        <div className="timeline-image" style={{"--timeline-image": `url("${item.image}")`}} role="img" aria-label={item.title}><span>{item.year}</span></div>
        <div className="timeline-dot"><i></i></div>
        <article className="timeline-copy"><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p></article>
      </Reveal>)}
    </div>
  </div></section>

  <section className="section process color-section color-sky"><span className="color-orb orb-yellow"></span><div className="container"><span className="eyebrow">What guides us</span><h2 className="heading">Clear values. Better buildings.</h2><div className="card-grid">{[["01","Quality","Defined checkpoints, experienced supervision and materials selected to perform for years."],["02","Transparency","Clear costs, documented decisions and progress you can understand at every stage."],["03","Accountability","Every promise has an owner, a deadline and an outcome that can be measured."]].map(([n,t,p])=><div className="plain-card value-card" key={t}><strong>{n}</strong><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
</> }
