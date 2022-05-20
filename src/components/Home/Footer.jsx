import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="resources">
      <div className="container">
        {/* <!-- Website Logo --> */}
        <div className="playr-logo">
          <a href="/">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        {/* <!-- Quick Links --> */}
        <div className="quick-links">
          <div className="links-group">
            <span>Features</span>
            <div>
              <a href="/">Tournament</a>
              <a href="/">Scouting</a>
              <a href="/">Players</a>
            </div>
          </div>
          <div className="links-group">
            <span>Resources</span>
            <div>
              <a href="/">Blog</a>
              <a href="/">Developers</a>
              <a href="/">Support</a>
            </div>
          </div>
          <div className="links-group">
            <span>Company</span>
            <div>
              <a href="/">About</a>
              <a href="/">Our Team</a>
              <a href="/">Careers</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
        {/* <!-- Social Media --> */}
        <div className="social-media">
          <a href="/">
            <img src="./images/Home/icon-facebook.svg" alt="Facebook Logo" />
          </a>
          <a href="/">
            <img src="./images/Home/icon-twitter.svg" alt="Twitter Logo" />
          </a>
          <a href="/">
            <img src="./images/Home/icon-pinterest.svg" alt="Pinterest Logo" />
          </a>
          <a href="/">
            <img src="./images/Home/icon-instagram.svg" alt="Instagram Logo" />
          </a>
        </div>
      </div>
      {/* <!-- Made By --> */}
      <div className="attribution">
        Designed and Develped by{" "}
        <a href="/" className="outer-link" target="_blank" rel="noreferrer">
          Team playR
        </a>
      </div>
    </footer>
  );
};

export default Footer;
