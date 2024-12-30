import imgGrid1 from "../assets/images/img-grid-1.jpg";
import imgGrid2 from "../assets/images/img-grid-2.jpg";
import imgGrid3 from "../assets/images/img-grid-3.jpg";

const Mission = () => {
  return (
    <div className="we-help-section py-5">
      <div className="container">
        <div className="row">
          {/* Image Grid Section */}
          <div className="col-lg-6 d-flex flex-wrap align-items-center">
            <div className="row g-3">
              <div className="col-12">
                <img
                  src={imgGrid1}
                  alt="Interior Design 1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src={imgGrid2}
                  alt="Interior Design 2"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src={imgGrid3}
                  alt="Interior Design 3"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada.
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Aliquam vulputate velit imperdiet dolor tempor tristique</li>
              <li>Pellentesque habitant morbi tristique senectus</li>
              <li>Nullam ac aliquet velit imperdiet dolor</li>
            </ul>

            <p>
              <a href="#" className="btn btn-primary">
                Explore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
