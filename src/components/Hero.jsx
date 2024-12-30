import couch from "../assets/images/couch.png";

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 text-center text-lg-start">
            <div className="intro-excerpt">
              <h1>
                Create Your Dream Space with <span className="d-block">Modern Interior Design</span>
              </h1>
              <p className="mb-4">
                Transform your living space with contemporary furniture and thoughtful design that reflects your personality and lifestyle. Discover how we can help you bring your ideas to life.
              </p>
              <p>
                <a href="" className="btn btn-primary me-2">
                  Shop Now
                </a>
                <a href="#" className="btn btn-outline-light">
                  Explore Our Collection
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div className="hero-img-wrap">
              <img src={couch} alt="Modern Couch" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
