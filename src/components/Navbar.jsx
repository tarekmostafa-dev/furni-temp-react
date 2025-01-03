import { Link } from 'react-router-dom';
import cart from '../assets/images/cart.svg';
import user from '../assets/images/user.svg';

const Navbar = () => {
  return (
    <>
      <nav
        className=' sticky-top custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark'
        arial-label='Furni navigation bar'
      >
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Furni<span>.</span>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsFurni'
            aria-controls='navbarsFurni'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarsFurni'>
            <ul className='custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/cart'>
                  Shop
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/about'>
                  About us
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/services'>
                  Services
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/blogs'>
                  Blog
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/contact'>
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className='custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5'>
              <li>
                <Link className='nav-link' to='login'>
                  <img src={user} alt='user image' />
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/cart'>
                  <img src={cart} alt='cart image' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
