import sofa from '../assets/images/sofa.png';
import { Envelope, Send, Facebook, Twitter, Instagram, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        {/* Sofa Image and Subscribe Section in Two Columns */}
        <div className="row align-items-center">
          {/* Subscribe Section Column */}
          <div className="col-md-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <Envelope size={20} />
                </span>
                <span>Subscribe to Our Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sofa Image Column (Smaller and Right-aligned) */}
          <div className="col-md-4">
            <img src={sofa} alt="Sofa Image" className="img-fluid" />
          </div>
        </div>

        {/* Description Section */}
        <div className="row g-5 mb-5 mt-5">
          <div className="col-lg-12">
            <p className="text-center">
              Furni is a modern interior design studio dedicated to creating stylish and functional furniture pieces for every space. Our team of designers strives to blend form and function in every piece, ensuring quality, comfort, and timeless appeal for your home.
            </p>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-12 text-center">
            <ul className="list-unstyled custom-social d-flex justify-content-center">
              <li className="mx-3">
                <a href="#" className="text-dark">
                  <Facebook size={30} />
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-dark">
                  <Twitter size={30} />
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-dark">
                  <Instagram size={30} />
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-dark">
                  <Linkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="row g-5 mb-5">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">Support</a></li>
              <li><a href="#">Knowledge Base</a></li>
              <li><a href="#">Live Chat</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#">Nordic Chair</a></li>
              <li><a href="#">Kruzo Aero</a></li>
              <li><a href="#">Ergonomic Chair</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section - Full Width */}
        <div className="copyright-section bg-dark text-white py-4 w-100">
          <div className="container text-center">
            <p className="mb-0">
              &copy; 2024 Furni. All Rights Reserved. Designed with love by
              <a href="https://untree.co" target="_blank" rel="noopener noreferrer" className="text-white"> Untree.co</a> 
              Distributed By <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" className="text-white">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
