import PageHero from "../componet/pagehero";
const posts = [
  [
    "Planning",
    "What to know before building a house in Hyderabad",
    "A practical starting guide to budgets, permissions, teams and timelines.",
  ],
  [
    "Quality",
    "Why construction quality checks matter",
    "The hidden details that make a home safer, stronger and more durable.",
  ],
  [
    "Design",
    "Villa, duplex or independent home?",
    "How to choose the right format for your plot, family and future plans.",
  ],
  [
    "Budgeting",
    "Understanding per-square-foot construction packages",
    "Look beyond the headline rate and compare specifications correctly.",
  ],
  [
    "Interiors",
    "Designing a home that works beautifully",
    "Simple principles for balancing storage, movement, light and character.",
  ],
  [
    "Technology",
    "How digital site monitoring creates transparency",
    "See how regular updates help owners stay informed from anywhere.",
  ],
];
export const metadata = { title: "Blog" };
export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for building better."
        text="Straightforward guidance from people who plan, design and build every day."
      />
      <section className="section color-section color-sunrise">
        <span className="color-orb orb-blue"></span>
        <div className="container">
          <div className="card-grid">
            {posts.map(([tag, title, text], i) => (
              <article className="plain-card" key={title}>
                <span className="eyebrow">{tag}</span>
                <div
                  style={{
                    height: 180,
                    margin: "0 0 24px",
                    background: `url(https://images.unsplash.com/photo-${["1503387762-592deb58ef4e", "1541888946425-d81bb19240f5", "1600585154340-be6161a56a0c", "1454165804606-c3d57bc86b40", "1600210492486-724fe5c67fb0", "1487958449943-2429e8be8625"][i]}?auto=format&fit=crop&w=700&q=80) center/cover`,
                  }}
                ></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span style={{ fontWeight: 800, fontSize: 13 }}>
                  Read article →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
