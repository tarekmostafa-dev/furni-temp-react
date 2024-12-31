import sofa from '../assets/images/sofa.png';
import {
  Envelope,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='footer-section bg-light'>
      <div className='container py-5'>
        {/* Newsletter Section */}
        <div className='row align-items-center mb-5'>
          <div className='col-md-9'>
            <h3 className='d-flex align-items-center mb-3'>
              <Envelope
                className='me-2'
                size={20}
              />
              Subscribe to Our Newsletter
            </h3>
            <form className='row g-2'>
              <div className='col-auto flex-grow-1'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Your Name'
                />
              </div>
              <div className='col-auto flex-grow-1'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Your Email'
                />
              </div>
              <div className='col-auto'>
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-3 text-end'>
            <img
              src={sofa}
              alt='Sofa'
              className='img-fluid'
            />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className='row mb-4'>
          {/* First Column */}
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-dark'
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Vertical Social Links */}
          <div className='col-md-4'>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a
                  href='#'
                  className='text-dark d-flex align-items-center'
                >
                  <Facebook
                    className='me-2'
                    size={25}
                  />{' '}
                  Facebook
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href='#'
                  className='text-dark d-flex align-items-center'
                >
                  <Twitter
                    className='me-2'
                    size={25}
                  />{' '}
                  Twitter
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href='#'
                  className='text-dark d-flex align-items-center'
                >
                  <Instagram
                    className='me-2'
                    size={25}
                  />{' '}
                  Instagram
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href='#'
                  className='text-dark d-flex align-items-center'
                >
                  <Linkedin
                    className='me-2'
                    size={25}
                  />{' '}
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='bg-dark text-white py-3'>
          <div className='text-center'>
            <p className='mb-0'>
              &copy; 2024 Furni. All Rights Reserved. Designed by
              <a
                href='https://untree.co'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white ms-1'
              >
                Untree.co
              </a>
              . Distributed by
              <a
                href='https://themewagon.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white ms-1'
              >
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
