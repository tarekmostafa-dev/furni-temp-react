import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductListing from './components/ProductListing';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title={'Create Your Dream Space With Modern Interior Design'}
        content={`Transform your living space with contemporary furniture and thoughtful design that reflects your personality and lifestyle. 
          Discover how we can help you bring your ideas to life.`}
      />
      <ProductListing />
      <About />
      <Services />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
