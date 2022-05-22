import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-text">
        <h1>Find Best In Every Player</h1>
        <p>
          A Unified Platform for Players, Scouts and Sports Agencies to Level Up Their
          Performance and Discover Sports Talent
        </p>
        <a href="/register" className="btn btn-lg">
          Get Started
        </a>
      </div>
      <div className="landing-image">
        <img src="./images/Home/illustration-working.svg" alt="Working Illustration" />
      </div>
    </section>
  );
};

export default Landing;
