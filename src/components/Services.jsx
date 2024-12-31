import imgGrid1 from '../assets/images/img-grid-1.jpg';
import imgGrid2 from '../assets/images/img-grid-2.jpg';
import imgGrid3 from '../assets/images/img-grid-3.jpg';

const Services = () => {
  return (
    <div className='we-help-section py-5'>
      <div className='container'>
        <div className='row'>
          {/* Image Grid Section */}
          <div className='col-lg-6 d-flex flex-wrap align-items-center'>
            <div className='row g-3'>
              <div className='col-12'>
                <img
                  src={imgGrid1}
                  alt='Interior Design 1'
                  className='img-fluid rounded'
                />
              </div>
              <div className='col-6'>
                <img
                  src={imgGrid2}
                  alt='Interior Design 2'
                  className='img-fluid rounded'
                />
              </div>
              <div className='col-6'>
                <img
                  src={imgGrid3}
                  alt='Interior Design 3'
                  className='img-fluid rounded'
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className='col-lg-6 ps-lg-5'>
            <h2 className='section-title mb-4'>
              Transform Your Spaces with Modern Interior Design
            </h2>
            <p>
              Discover how our expertise can bring your dream interiors to life.
              From creative concepts to practical execution, we deliver designs
              that blend functionality with aesthetics. Let us guide you in
              creating a space that truly reflects your style.
            </p>

            <ul className='list-unstyled custom-list my-4'>
              <li>Expert guidance in achieving modern designs</li>
              <li>Innovative solutions tailored to your needs</li>
              <li>Unparalleled attention to detail and quality</li>
              <li>Seamless integration of style and functionality</li>
            </ul>
            {/* </div> */}

            <p>
              <a
                href='#'
                className='btn btn-primary'
              >
                Explore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
