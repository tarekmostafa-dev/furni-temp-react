import Hero from '../Hero';
import ProductListing from '../ProductListing';
import About from '../About';
import Services from '../Services';
import Testimonials from '../Testimonials';
import Blogs from '../Blogs';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
