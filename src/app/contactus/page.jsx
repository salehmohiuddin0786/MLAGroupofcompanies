import PageHero from "../componet/pagehero";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something lasting."
        text="Tell us what you have in mind. Our construction experts will help you understand the next practical step."
      />
      <section className="section color-section color-sunrise">
        <span className="color-orb orb-blue"></span>
        <div className="container content-grid">
          <div>
            <span className="eyebrow">Contact information</span>
            <h2 className="heading">We&apos;re easy to reach.</h2>
            <div
              className="card-grid"
              style={{ gridTemplateColumns: "1fr", marginTop: 35 }}
            >
              <div className="plain-card">
                <h3>Call us</h3>
                <a href="tel:+919700125598" className="lead">
                  +91 97001 25598
                </a>
              </div>
              <div className="plain-card">
                <h3>Email us</h3>
                <a
                  href="mailto:enquiry@mlagroupofcompanies.com"
                  className="lead"
                >
                  enquiry@mlagroupofcompanies.com
                </a>
              </div>
              <div className="plain-card">
                <h3>Visit our offices</h3>
                <p>
                  Bandlaguda, Hyderabad – 500005
                  <br />
                  Silpa Hitech City, near iLabs Centre, Hyderabad – 500081
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
function ContactForm() {
  return (
    <form className="form">
      <span className="eyebrow">Send an enquiry</span>
      <h2 style={{ margin: 0 }}>Talk to our expert</h2>
      <input required placeholder="Your name" />
      <input required type="email" placeholder="Email address" />
      <input required type="tel" placeholder="10-digit mobile number" />
      <select required defaultValue="">
        <option value="" disabled>
          Select a service
        </option>
        <option>Residential Construction</option>
        <option>Villa / Farmhouse</option>
        <option>Apartment Construction</option>
        <option>Commercial Construction</option>
        <option>Interior Services</option>
      </select>
      <textarea placeholder="Tell us about your project"></textarea>
      <button className="btn btn-primary" type="submit">
        Get a free quote ↗
      </button>
    </form>
  );
}
