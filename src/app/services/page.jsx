import PageHero from "../componet/pagehero";
const list = [
  "Residential Construction",
  "Apartment Construction",
  "Villa & Farmhouse Construction",
  "Duplex Houses",
  "Commercial Construction",
  "Interior Services",
  "3D Walkthroughs",
  "Design & Planning",
  "Construction Permissions",
  "Demolition Services",
  "Geological & Borewell Services",
  "Elevator Services",
  "Legal Services",
  "Project Management",
  "E-Monitoring Portal",
  "Building Materials",
];
export const metadata = { title: "Services" };
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your project needs."
        text="Specialists, systems and materials coordinated under one roof—from feasibility to final handover."
      />
      <section className="section color-section color-sky">
        <span className="color-orb orb-yellow"></span>
        <div className="container">
          <span className="eyebrow">Our capabilities</span>
          <h2 className="heading">End-to-end expertise.</h2>
          <div className="card-grid colorful-cards">
            {list.map((x, i) => (
              <article className="plain-card" key={x}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{x}</h3>
                <p>
                  Professional planning, transparent execution and
                  quality-focused delivery by MLA&apos;s experienced team.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
