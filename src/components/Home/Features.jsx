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
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="more-features-content">
            <div className="feature">
              <div className="feature-illustration">
                <img
                  src="./images/Home/icon-brand-recognition.svg"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div className="feature-details">
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-illustration">
                <img
                  src="./images/Home/icon-detailed-records.svg"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div className="feature-details">
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-illustration">
                <img
                  src="./images/Home/icon-fully-customizable.svg"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div className="feature-details">
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
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
