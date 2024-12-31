import truck from '../assets/images/truck.svg';
import bag from '../assets/images/bag.svg';
import support from '../assets/images/support.svg';
import returnImg from '../assets/images/return.svg';
import whyChooseUsImg from '../assets/images/why-choose-us-img.jpg';
import person_1 from '../assets/images/person_1.jpg';
import person_2 from '../assets/images/person_2.jpg';
import person_3 from '../assets/images/person_3.jpg';
import person_4 from '../assets/images/person_4.jpg';

const About = () => {
  return (
    <>
      <div className='why-choose-section py-5'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-6'>
              <h2 className='section-title'>Why Choose Us</h2>
              <p>
                We offer unique solutions tailored to your needs. Our commitment
                to quality and customer satisfaction is what sets us apart.
              </p>

              <div className='row my-5'>
                <div className='col-6 col-md-6 mb-4 mb-md-0'>
                  <div className='feature text-center'>
                    <div className='icon mb-3'>
                      <img
                        src={truck}
                        alt='Fast Shipping'
                        className='img-fluid'
                      />
                    </div>
                    <h3>Fast & Free Shipping</h3>
                    <p>
                      Enjoy fast and free shipping on all orders, no matter the
                      size or location. We guarantee quick delivery.
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-6 mb-4 mb-md-0'>
                  <div className='feature text-center'>
                    <div className='icon mb-3'>
                      <img
                        src={bag}
                        alt='Easy to Shop'
                        className='img-fluid'
                      />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Our intuitive platform makes it easier than ever to
                      browse, select, and buy your favorite products in just a
                      few clicks.
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-6 mb-4 mb-md-0'>
                  <div className='feature text-center'>
                    <div className='icon mb-3'>
                      <img
                        src={support}
                        alt='24/7 Support'
                        className='img-fluid'
                      />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Our dedicated customer support team is available round the
                      clock to assist you with any questions or issues.
                    </p>
                  </div>
                </div>

                <div className='col-6 col-md-6'>
                  <div className='feature text-center'>
                    <div className='icon mb-3'>
                      <img
                        src={returnImg}
                        alt='Hassle Free Returns'
                        className='img-fluid'
                      />
                    </div>
                    <h3>Hassle-Free Returns</h3>
                    <p>
                      If you're not completely satisfied, return your purchase
                      easily with our no-hassle return policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-5'>
              <div className='img-wrap text-center'>
                <img
                  src={whyChooseUsImg}
                  alt='Why Choose Us'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='untree_co-section'>
          <div className='container'>
            <div className='row mb-5'>
              <div className='col-lg-5 mx-auto text-center'>
                <h2 className='section-title'>Our Team</h2>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 col-md-6 col-lg-3 mb-5 mb-md-0'>
                <img
                  src={person_1}
                  className='img-fluid mb-5'
                />
                <h3 clas>
                  <a href='#'>
                    <span className=''>Lawson</span> Arnold
                  </a>
                </h3>
                <span className='d-block position mb-4'>
                  CEO, Founder, Atty.
                </span>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className='mb-0'>
                  <a
                    href='#'
                    className='more dark'
                  >
                    Learn More <span className='icon-arrow_forward'></span>
                  </a>
                </p>
              </div>

              <div className='col-12 col-md-6 col-lg-3 mb-5 mb-md-0'>
                <img
                  src={person_2}
                  className='img-fluid mb-5'
                />

                <h3 clas>
                  <a href='#'>
                    <span className=''>Jeremy</span> Walker
                  </a>
                </h3>
                <span className='d-block position mb-4'>
                  CEO, Founder, Atty.
                </span>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className='mb-0'>
                  <a
                    href='#'
                    className='more dark'
                  >
                    Learn More <span className='icon-arrow_forward'></span>
                  </a>
                </p>
              </div>

              <div className='col-12 col-md-6 col-lg-3 mb-5 mb-md-0'>
                <img
                  src={person_3}
                  className='img-fluid mb-5'
                />
                <h3 clas>
                  <a href='#'>
                    <span className=''>Patrik</span> White
                  </a>
                </h3>
                <span className='d-block position mb-4'>
                  CEO, Founder, Atty.
                </span>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className='mb-0'>
                  <a
                    href='#'
                    className='more dark'
                  >
                    Learn More <span className='icon-arrow_forward'></span>
                  </a>
                </p>
              </div>

              <div className='col-12 col-md-6 col-lg-3 mb-5 mb-md-0'>
                <img
                  src={person_4}
                  className='img-fluid mb-5'
                />

                <h3 clas>
                  <a href='#'>
                    <span className=''>Kathryn</span> Ryan
                  </a>
                </h3>
                <span className='d-block position mb-4'>
                  CEO, Founder, Atty.
                </span>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className='mb-0'>
                  <a
                    href='#'
                    className='more dark'
                  >
                    Learn More <span className='icon-arrow_forward'></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
