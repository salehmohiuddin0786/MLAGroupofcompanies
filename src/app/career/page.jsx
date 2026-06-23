import PageHero from "../componet/pagehero";
export const metadata = { title: "Careers" };
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career by building well."
        text="Join a team of architects, engineers, designers and project professionals raising the standard of construction in Hyderabad."
      />
      <section className="section color-section color-sky">
        <span className="color-orb orb-yellow"></span>
        <div className="container">
          <span className="eyebrow">Open opportunities</span>
          <h2 className="heading">Find your place at MLA.</h2>
          <div className="card-grid">
            {[
              "Site Engineer",
              "Project Manager",
              "Architect / Designer",
              "Sales Consultant",
              "Quantity Surveyor",
              "Interior Designer",
            ].map((x, i) => (
              <div className="plain-card" key={x}>
                <span className="eyebrow">
                  {i < 3 ? "On site" : "Office / Hybrid"}
                </span>
                <h3>{x}</h3>
                <p>Hyderabad · Full time</p>
                <a
                  className="btn btn-dark"
                  href="mailto:enquiry@mlagroupofcompanies.com?subject=Career at MLA"
                >
                  Apply now ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
