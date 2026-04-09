import type { ServiceItem } from '../content';

type ServicesSectionProps = {
  items: ServiceItem[];
};

export function ServicesSection({ items }: ServicesSectionProps) {
  return (
    <section id="sluzby" className="section section-services">
      <div className="section-head">
        <p className="eyebrow">01 / Services</p>
        <h2>Disciplini remesla</h2>
        <p>Vysledkem je jasny rukopis: klidna kompozice, peclive materialy a atmosfera, ktera pusobi nadcasove.</p>
      </div>

      <div className="service-grid">
        {items.map((item) => (
          <article key={item.name} className="service-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
