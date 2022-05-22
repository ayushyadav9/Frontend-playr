import React from "react";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        {/* <!-- Short URL Feature --> */}
        <div className="url-shorten-feature">
          <form className="url-shorten-form" id="url-shorten-form">
            <div>
              <input
                type="text"
                className="url-input"
                placeholder="Search a Sport or Tournament here..."
                autoComplete="off"
              />
              <span className="alert"></span>
            </div>
            <button type="submit" className="btn btn-lg btn-plus-icon">
              Search!
            </button>
          </form>
          <div className="url-shorten-results"></div>
        </div>
        {/* <!-- Advanced Features --> */}
        <div className="more-features">
          <div className="section-header">
            <h2>Search for the most suitable profiles</h2>
            <p>
              Scouts and agents can save time, money and make better decision to find unknown football talent with authentic data and video analysis
            </p>
          </div>
          <div className="more-features-content">
            <div className="feature">
              <div className="feature-illustration">
                <img
                  src="./img1.png"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div className="feature-details">
                <h3>Player Recognition</h3>
                <p>
                  Identify players fitting your needs and put them under observation. 
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-illustration">
                <img
                  src="./img2.png"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div className="feature-details">
                <h3>Validate players’ quality</h3>
                <p>
                  Watch videos and make sure your selected profiles effectively meet your needs. We simplified the data with info-graphic, rating map and pie charts.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-illustration">
                <img
                  src="./img3.png"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div className="feature-details">
                <h3>Discussions and Alerts</h3>
                <p>
                  Be updated with the latest in the field with Discussions and daily Alerts on upcoming major events and tournaments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
