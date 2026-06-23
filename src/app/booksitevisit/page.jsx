import PageHero from "../componet/pagehero";
export const metadata = { title: "Book a Site Visit" };
export default function Visit() {
  return (
    <>
      <PageHero
        eyebrow="Book a site visit"
        title="Let's meet at your plot."
        text="A site visit helps us understand access, ground conditions, surroundings and the best way to bring your vision to life."
      />
      <section className="section color-section color-sky">
        <span className="color-orb orb-yellow"></span>
        <div className="container content-grid">
          <div>
            <span className="eyebrow">What to expect</span>
            <h2 className="heading">Practical advice, right from the start.</h2>
            <p className="lead">
              An MLA expert will visit your site, discuss your requirements,
              take initial observations and guide you on planning, approvals,
              timeline and package options.
            </p>
            <div className="ticks">
              <span className="tick">Plot assessment</span>
              <span className="tick">Requirement discussion</span>
              <span className="tick">Budget guidance</span>
              <span className="tick">Clear next steps</span>
            </div>
          </div>
          <form className="form">
            <h2 style={{ margin: 0 }}>Choose a convenient time</h2>
            <input required placeholder="Full name" />
            <input required type="tel" placeholder="Mobile number" />
            <input required type="email" placeholder="Email address" />
            <input required placeholder="Site location" />
            <input required type="date" />
            <textarea placeholder="Anything we should know?"></textarea>
            <button className="btn btn-primary">Request site visit ↗</button>
          </form>
        </div>
      </section>
    </>
  );
}
