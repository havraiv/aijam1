export function ContactSection() {
  return (
    <section id="kontakt" className="section section-contact">
      <div className="contact-copy">
        <h2>Pojdme spolecne vytvorit neco vyjimecneho</h2>
        <p>Mate vizi, ktera si zaslouzi precizni zpracovani? Napisete nam a probereme moznosti vasi nove identity.</p>
        <p className="contact-meta">iva@krejcovstvi-iva.cz · +420 777 123 456</p>
      </div>

      <form className="contact-form" action="#" method="post">
        <label htmlFor="name">Jmeno a prijmeni</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">E-mailova adresa</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Vase zprava</label>
        <textarea id="message" name="message" rows={4} required />

        <button type="submit" className="btn btn-primary">
          Odeslat poptavku
        </button>
      </form>
    </section>
  );
}
