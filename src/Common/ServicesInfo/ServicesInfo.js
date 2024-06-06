import React from "react";
import "./ServicesInfo.css";

const ServicesInfo = () => {
  return (
    <div id="services-info" className="container">
      <section class="d-flex align-items-center">
        <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
          <div class="row icon-boxes">
            <div
              class="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="ri-stack-line"></i>
                </div>
                <h4 class="title">
                  <a href="/">Leadership & Professional Skills</a>
                </h4>
                <p class="description">
                  Our focus? Equipping your leaders with the skills and knowledge to:
                  Craft a clear vision and inspire teams.
                  Foster a culture of empowerment and innovation.
                  Drive employee engagement and unlock potential.
                  Master communication strategies for a connected workforce.
                  Embrace change and navigate challenges with agility.

                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="ri-palette-line"></i>
                </div>
                <h4 class="title">
                  <a href="/">Well-Being & Resilience</a>
                </h4>
                <p class="description">
                  With the growing uncertainties and complexities at work and in
                  personal lives, it is important that people learn some path
                  breaking self-healing and transformation techniques. Check out
                  this set of courses based on EI, NLP, TA and other powerful
                  behavioral/social psychology concepts.
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="ri-command-line"></i>
                </div>
                <h4 class="title">
                  <a href="/">Diversity & Inclusion</a>
                </h4>
                <p class="description">
                  A very fresh, practical and new approach to the subject of
                  Diversity & Inclusion. This is an in-depth view where mindsets
                  are challenged and we work with you to build open and
                  inclusive culture.
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="ri-fingerprint-line"></i>
                </div>
                <h4 class="title">
                  <a href="/">Journey Programs</a>
                </h4>
                <p class="description">
                  Our cutting-edge learning and development programs are designed to bridge the gaps that hold organizations back, empowering both leaders and employees to thrive.
                  Our innovative approach combines industry-leading methodologies, practical experience, and a deep understanding of the latest trends in leadership and talent development.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-content  border shadow  p-3 mt-5 " data-aos="zoom-in"
        data-aos-delay="500">
        <h2>Is your organization grappling with:</h2>
        <p>Ineffective communication between management and employees?</p>
        <p>Lack of motivation and engagement among team members?</p>
        <p>Inability to foster a culture of innovation and continuous learning?</p>
      </section>

      <section className="services-content  border p-5 mt-5  w-100 shadow" data-aos="zoom-in"
        data-aos-delay="500">
        <p>
          At NeuCode Talent Academy, we have the solutions you need to break through these barriers.
          Our cutting-edge learning and development programs are designed to bridge the gaps that hold organizations back, empowering both leaders and employees to thrive.
          Our innovative approach combines industry-leading methodologies, practical experience, and a deep understanding of the latest trends in leadership and talent development.
          We specialize in transforming teams and organizations. We offer fun, engaging programs that address your specific needs. We create customized solutions that fit your unique challenges. Invest in your people and watch your business transform.
          Contact Neucode Talent Academy today and discover how we can help you build a high-performing team that drives results.
        </p>
      </section>
    </div>
  );
};

export default ServicesInfo;