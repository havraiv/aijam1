import type { PortfolioItem } from '../content';

type PortfolioSectionProps = {
  items: PortfolioItem[];
};

export function PortfolioSection({ items }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="section section-portfolio">
      <div className="section-head">
        <p className="eyebrow">02 / Portfolio</p>
        <h2>Vybrana tvorba</h2>
      </div>

      <div className="atelier-carousel" aria-label="Ukazky projektu">
        {items.map((item) => (
          <article key={item.title} className="project-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="project-meta">
              <p>{item.category}</p>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
