export function HeroSection() {
  return (
    <header className="hero">
      <nav className="hero-nav" aria-label="Hlavni navigace">
        <span className="brand">Krejcovstvi Iva</span>
        <div className="hero-links">
          <a href="#sluzby">Sluzby</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">Est. 1994 - Handmade Quality</p>
        <h1>Kreativni studio s durazem na detail</h1>
        <p className="hero-copy">Propojujeme tradicni hodnoty s modernim vizualnim jazykem. Kazdy projekt je unikatem, ktery vyzaduje individualni strih.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#portfolio">
            Objevit portfolio
          </a>
          <a className="btn btn-secondary" href="#sluzby">
            Nase sluzby
          </a>
        </div>
      </div>
    </header>
  );
}
