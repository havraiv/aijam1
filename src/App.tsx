import './App.css';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { portfolio, services } from './content';

function App() {
  return (
    <main className="atelier-page">
      <HeroSection />
      <ServicesSection items={services} />
      <PortfolioSection items={portfolio} />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

export default App;
