import React from "react";
import "./Tournament.css"

const Tournament = () => {
  return (
    <>
      <section class="title container">
        <div class="row">
          <div class="col-md-12">
            <h1>Blog Layout</h1>
            <div class="seperator"></div>
            <p>Blocks with hover effects</p>
          </div>
        </div>
      </section>

      {/* // <!-- Start Blog Layout --> */}
      <div class="container">
        <div class="row">
          <div class="col-md-6 item">
            <div class="item-in">
              <h4>Some Kind of Title</h4>
              <div class="seperator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                expedita eveniet consectetur, voluptates voluptatum, sit
                excepturi earum. Veniam eius amet, accusantium, deserunt
                officia, quos qui debitis laboriosam velit quis autem!
              </p>
              <a href="/">
                Read More
                <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 item">
            <div class="item-in">
              <h4>Some Kind of Title</h4>
              <div class="seperator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                expedita eveniet consectetur, voluptates voluptatum, sit
                excepturi earum. Veniam eius amet, accusantium, deserunt
                officia, quos qui debitis laboriosam velit quis autem!
              </p>
              <a href="/">
                Read More
                <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          With Icons <em>(hover over icons)</em>
        </p>
        {/* <!-- With Icons --> */}
        <div class="row">
          <div class="col-md-6 item">
            <div class="item-in">
              <div class="icon">
                <a href="/">
                  
                  <div class="icon-topic">Work Topic</div>
                </a>
              </div>
              <h4>Some Kind of Title</h4>
              <div class="seperator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                expedita eveniet consectetur, voluptates voluptatum, sit
                excepturi earum. Veniam eius amet, accusantium, deserunt
                officia, quos qui debitis laboriosam velit quis autem!
              </p>
              <a href="/">
                Read More
                <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 item">
            <div class="item-in">
              <div class="icon">
                <a href="/">
                  
                  <div class="icon-topic">Another Category or Post Type</div>
                </a>
              </div>
              <h4>Some Kind of Title</h4>
              <div class="seperator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                expedita eveniet consectetur, voluptates voluptatum, sit
                excepturi earum. Veniam eius amet, accusantium, deserunt
                officia, quos qui debitis laboriosam velit quis autem!
              </p>
              <a href="/">
                Read More
                <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tournament;
