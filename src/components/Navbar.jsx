import cart from "../assets/images/cart.svg";
import user from "../assets/images/user.svg";

const Navbar = () => {
  return (
    <>
      <nav
        className=" sticky-top custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="index">
            Furni<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="index">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="shop">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="about">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link" href="services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="contact">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src={user} alt="user image" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <img src={cart} alt="cart image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
		
      </nav>
    </>
  );
};

export default Navbar;
