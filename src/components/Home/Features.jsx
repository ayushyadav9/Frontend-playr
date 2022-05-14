import React from "react";

const Features = () => {
  return (
    <section class="features" id="features">
      <div class="container">
        {/* <!-- Short URL Feature --> */}
        <div class="url-shorten-feature">
          <form class="url-shorten-form" id="url-shorten-form">
            <div>
              <input
                type="text"
                class="url-input"
                placeholder="Search a Sport or Tournament here..."
                autocomplete="off"
              />
              <span class="alert"></span>
            </div>
            <button type="submit" class="btn btn-lg btn-plus-icon">
              Search!
            </button>
          </form>
          <div class="url-shorten-results"></div>
        </div>
        {/* <!-- Advanced Features --> */}
        <div class="more-features">
          <div class="section-header">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div class="more-features-content">
            <div class="feature">
              <div class="feature-illustration">
                <img
                  src="./images/Home/icon-brand-recognition.svg"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div class="feature-details">
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-illustration">
                <img
                  src="./images/Home/icon-detailed-records.svg"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div class="feature-details">
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-illustration">
                <img
                  src="./images/Home/icon-fully-customizable.svg"
                  alt="Feature Illustration Icon"
                />
              </div>
              <div class="feature-details">
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
