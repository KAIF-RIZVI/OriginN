import Hero from '../components/Hero/Hero';
import Philosophy from '../components/Philosophy/Philosophy';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Work from '../components/Work/Work';
import Process from '../components/Process/Process';
import Pricing from '../components/Pricing/Pricing';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div className="home-page-container fade-in-up">
      <Hero />
      <Philosophy />
      <About />
      <Services />
      <Work />
      <Process />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
