import Link from "next/link";
import Reveal from "./componet/reveal";
import HomeMotion from "./componet/home-motion";

const services = [
  ["01", "Residential Construction", "Independent homes built around your family, plot and budget.", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"],
  ["02", "Apartment Construction", "Efficient, durable developments managed from design to handover.", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"],
  ["03", "Villas & Duplex Homes", "Distinctive architecture with thoughtful planning and premium finishes.", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"],
  ["04", "Commercial Construction", "High-performance spaces made for modern businesses and growth.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"],
  ["05", "Interior Services", "Functional, character-rich interiors—from concept to final styling.", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"],
  ["06", "Design & Planning", "Architecture, 3D walkthroughs, permissions and engineering under one roof.", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85"],
];
const features = [
  ["01", "On-time delivery", "If we delay, we pay—accountability is built into our process."],
  ["02", "475+ quality checks", "Detailed checks at every floor and every critical construction stage."],
  ["03", "Complete transparency", "Clear payments, documented progress and no surprise costs."],
  ["04", "Digital site updates", "Follow your project progress through our e-monitoring platform."],
  ["05", "15-year warranty", "Long-term structural assurance for lasting peace of mind."],
  ["06", "Flexible payments", "Practical payment plans with loan-assistance options."],
];
const steps = [
  ["01", "Contact us", "Tell us about your plot, vision and requirements."],
  ["02", "Meet & scope", "Our experts study the site and define the work."],
  ["03", "Select a package", "Choose specifications that fit your priorities."],
  ["04", "Decide the design", "Approve plans, elevations and material selections."],
  ["05", "Build & move in", "Track the build, receive your keys and settle in."],
];

export default function Home() {
  return <HomeMotion>
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=90">
        <source src="https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-blueprint" aria-hidden="true"></div>
      <div className="hero-architecture" aria-hidden="true">
        <div className="building building-one"><i></i><i></i><i></i><i></i></div>
        <div className="building building-two"><i></i><i></i><i></i></div>
        <div className="building building-three"><i></i><i></i><i></i><i></i><i></i></div>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
      </div>
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="eyebrow">Building Hyderabad since 2017</span>
          <h1 className="display">We don&apos;t just build. We deliver certainty.</h1>
          <p>End-to-end construction, architecture, interiors and building materials—managed with uncompromising quality and complete transparency.</p>
          <div className="hero-actions"><Link className="btn btn-primary" href="/booksitevisit">Book a site visit <span className="arrow">↗</span></Link><Link className="btn btn-outline" href="/services">Explore services</Link></div>
        </Reveal>
        <Reveal className="hero-proof" delay={200}><span className="proof-glow"></span><strong>5,000+</strong><span>happy homeowners<br/>and growing</span></Reveal>
      </div>
      <div className="hero-scroll"><span>Explore</span><i></i></div>
    </section>

    <div className="trustbar"><div className="container trustgrid perspective-row">
      <div className="trustitem"><strong>475+</strong><span>quality checks</span></div><div className="trustitem"><strong>15 years</strong><span>structural warranty</span></div><div className="trustitem"><strong>24×7</strong><span>site monitoring</span></div><div className="trustitem"><strong>3 years</strong><span>MEP warranty</span></div>
    </div></div>

    <section className="section color-section color-sunrise"><span className="color-orb orb-blue"></span><div className="container intro-grid">
      <Reveal className="image-stack"><div className="image-main"></div><div className="image-accent"></div><div className="experience"><strong>9+</strong><span>years of trust</span></div></Reveal>
      <Reveal>
        <span className="eyebrow">About MLA Group</span><h2 className="heading">One accountable team. Every detail covered.</h2>
        <p className="lead">MLA Group of Companies brings construction, architecture, interiors, materials and project management together. That means fewer hand-offs, clearer communication and a home built exactly as promised.</p>
        <div className="ticks"><span className="tick">Single-point responsibility</span><span className="tick">Experienced technical team</span><span className="tick">Transparent costing</span><span className="tick">Premium branded materials</span></div>
        <Link className="btn btn-dark" href="/aboutus">Discover our story <span className="arrow">↗</span></Link>
      </Reveal>
    </div></section>

    <section className="section dark-section"><div className="container">
      <Reveal className="section-head"><div><span className="eyebrow">What we do</span><h2 className="heading">Expertise at every stage.</h2></div><p>From the first sketch to the final key handover, specialists across disciplines work as one coordinated team.</p></Reveal>
      <div className="service-grid">{services.map(([num,title,text,img], i) => <Reveal key={title} delay={(i%3)*90}><article className="service-card"><div className="service-image" style={{backgroundImage:`url("${img}")`}} role="img" aria-label={title}></div><div className="service-content"><small>{num}</small><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div>
      <div style={{marginTop: 35}}><Link className="btn btn-primary" href="/services">View all services <span className="arrow">↗</span></Link></div>
    </div></section>

    <section className="section color-section color-sky"><span className="color-orb orb-yellow"></span><div className="container why-grid">
      <Reveal><span className="eyebrow">The MLA promise</span><h2 className="heading">Designed for confidence. Built for life.</h2><p className="lead">Construction should feel exciting—not uncertain. Our systems keep quality measurable, money traceable and progress visible.</p><Link className="btn btn-dark" href="/contactus">Talk to an expert <span className="arrow">↗</span></Link></Reveal>
      <div className="feature-grid">{features.map(([n,t,p],i)=><Reveal key={t} delay={(i%2)*80}><div className="feature"><span className="feature-num">{n}</span><h3>{t}</h3><p>{p}</p></div></Reveal>)}</div>
    </div></section>

    <section className="section process"><div className="container">
      <Reveal><span className="eyebrow">How it works</span><h2 className="heading">From idea to move-in.</h2></Reveal>
      <div className="process-grid">{steps.map(([n,t,p],i)=><Reveal key={t} delay={i*80}><div className="step"><strong>{n}</strong><h3>{t}</h3><p>{p}</p></div></Reveal>)}</div>
    </div></section>

    <section className="cta"><div className="cta-cube" aria-hidden="true"><i></i><i></i><i></i></div><div className="container cta-inner"><h2>Ready to turn your plot into a place you&apos;re proud of?</h2><Link className="btn btn-dark" href="/booksitevisit">Start your project <span className="arrow">↗</span></Link></div></section>
  </HomeMotion>;
}
