import React from "react";

const Footer = () => {
  return (
    <footer class="footer" id="resources">
      <div class="container">
        {/* <!-- Website Logo --> */}
        <div class="playr-logo">
          <a href="/">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        {/* <!-- Quick Links --> */}
        <div class="quick-links">
          <div class="links-group">
            <span>Features</span>
            <div>
              <a href="/">Tournament</a>
              <a href="/">Scouting</a>
              <a href="/">Players</a>
            </div>
          </div>
          <div class="links-group">
            <span>Resources</span>
            <div>
              <a href="/">Blog</a>
              <a href="/">Developers</a>
              <a href="/">Support</a>
            </div>
          </div>
          <div class="links-group">
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
        <div class="social-media">
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
      <div class="attribution">
        Designed and Develped by{" "}
        <a href="/" class="outer-link" target="_blank" rel="noreferrer">
          Team playR
        </a>
      </div>
    </footer>
  );
};

export default Footer;
