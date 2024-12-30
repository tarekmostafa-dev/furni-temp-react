import truck from "../assets/images/truck.svg";
import bag from "../assets/images/bag.svg";
import support from "../assets/images/support.svg";
import returnImg from "../assets/images/return.svg";
import whyChooseUsImg from "../assets/images/why-choose-us-img.jpg";

const Features = () => {
  return (
    <div className="why-choose-section py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              We offer unique solutions tailored to your needs. Our commitment to quality and customer satisfaction is what sets us apart.
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6 mb-4 mb-md-0">
                <div className="feature text-center">
                  <div className="icon mb-3">
                    <img src={truck} alt="Fast Shipping" className="img-fluid" />
                  </div>
                  <h3>Fast & Free Shipping</h3>
                  <p>
                    Enjoy fast and free shipping on all orders, no matter the size or location. We guarantee quick delivery.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6 mb-4 mb-md-0">
                <div className="feature text-center">
                  <div className="icon mb-3">
                    <img src={bag} alt="Easy to Shop" className="img-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Our intuitive platform makes it easier than ever to browse, select, and buy your favorite products in just a few clicks.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6 mb-4 mb-md-0">
                <div className="feature text-center">
                  <div className="icon mb-3">
                    <img src={support} alt="24/7 Support" className="img-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Our dedicated customer support team is available round the clock to assist you with any questions or issues.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature text-center">
                  <div className="icon mb-3">
                    <img src={returnImg} alt="Hassle Free Returns" className="img-fluid" />
                  </div>
                  <h3>Hassle-Free Returns</h3>
                  <p>
                    If you're not completely satisfied, return your purchase easily with our no-hassle return policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap text-center">
              <img src={whyChooseUsImg} alt="Why Choose Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
