import person_1 from "../assets/images/person-1.png";

const Testimonials = () => {
  return (
    <div className="testimonial-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          {/* Testimonial Item 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body">
                <blockquote className="blockquote mb-4">
                  <p className="mb-0">
                    "Working with this team was an absolute pleasure. Their attention to detail and dedication to the project exceeded all expectations."
                  </p>
                </blockquote>
                <div className="author-info">
                  <img
                    src={person_1}
                    alt="Maria Jones"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="font-weight-bold">Maria Jones</h5>
                  <small className="text-muted">CEO, Co-Founder, XYZ Inc.</small>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body">
                <blockquote className="blockquote mb-4">
                  <p className="mb-0">
                    "I’ve never felt so confident in a partnership before. The team brought our vision to life in ways we couldn’t have imagined."
                  </p>
                </blockquote>
                <div className="author-info">
                  <img
                    src={person_1}
                    alt="John Doe"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="font-weight-bold">John Doe</h5>
                  <small className="text-muted">Creative Director, ABC Studios</small>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body">
                <blockquote className="blockquote mb-4">
                  <p className="mb-0">
                    "Their professionalism and creativity set them apart. We couldn’t be happier with the results and look forward to working together again."
                  </p>
                </blockquote>
                <div className="author-info">
                  <img
                    src={person_1}
                    alt="Emma Brown"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="font-weight-bold">Emma Brown</h5>
                  <small className="text-muted">Marketing Manager, DEF Corp.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
