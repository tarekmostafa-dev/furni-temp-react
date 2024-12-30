import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";

const Populars = () => {
  return (
    <div className="popular-product py-5">
      <div className="container">
        <div className="row">
          {/* Product Item 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img src={product1} alt="Nordic Chair" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Nordic Chair</h5>
                <p className="card-text">
                  A sleek and modern chair designed for comfort and style.
                </p>
                <a href="#" className="btn btn-link text-primary p-0">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Product Item 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={product2}
                alt="Kruzo Aero Chair"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Kruzo Aero Chair</h5>
                <p className="card-text">
                  Experience unmatched comfort and style with this premium chair.
                </p>
                <a href="#" className="btn btn-link text-primary p-0">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Product Item 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={product3}
                alt="Ergonomic Chair"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Ergonomic Chair</h5>
                <p className="card-text">
                  Designed for productivity and comfort during long work hours.
                </p>
                <a href="#" className="btn btn-link text-primary p-0">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Populars;
