import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";

const Blogs = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-md-6">
          <h2>Recent Blog</h2>
        </div>
        <div className="col-md-6 text-end">
          <a href="#">View All Posts</a>
        </div>
      </div>

      <div className="row">
        {/* Blog 1 */}
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card h-100">
            <a href="#">
              <img src={post1} alt="Image" className="card-img-top" />
            </a>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">First Time Home Owner Ideas</a>
              </h5>
              <p className="card-text">
                by <a href="#">Kristin Watson</a> on <a href="#">Dec 19, 2021</a>
              </p>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card h-100">
            <a href="#">
              <img src={post2} alt="Image" className="card-img-top" />
            </a>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">How To Keep Your Furniture Clean</a>
              </h5>
              <p className="card-text">
                by <a href="#">Robert Fox</a> on <a href="#">Dec 15, 2021</a>
              </p>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card h-100">
            <a href="#">
              <img src={post3} alt="Image" className="card-img-top" />
            </a>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">Small Space Furniture Apartment Ideas</a>
              </h5>
              <p className="card-text">
                by <a href="#">Kristin Watson</a> on <a href="#">Dec 12, 2021</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
