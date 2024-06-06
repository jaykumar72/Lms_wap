/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About Us</h2>
            <p>HOW WE DESIGN LEARNING SOLUTIONS</p>
          </div>
          <div class="row content">
            <div class="col-lg-6">
              <p className="drop-cap">
                With a mission to enhance “Emotional Resilience & Intelligence”
                in our society, our expert consultants design NEUral Codes to
                break the mental barriers and bring out the best version of the
                individuals/organizations. All our learning experiences are
                based on advanced psychology concepts are aimed to build a
                WINNING Mindset of the participants. Therefore, our programs
                have the capacity to transform individuals and organizations
                with the speed you would have never imagined.
              </p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i> NEUROSCIENCE
                </li>
                <li>
                  <i class="ri-check-double-line"></i> BEHAVIORAL PSYCHOLOGY
                </li>
                <li>
                  <i class="ri-check-double-line"></i> SOCIAL PSYCHOLOGY
                </li>
                <li>
                  <i class="ri-check-double-line"></i> ORGANIZATIONAL PSYCHOLOGY
                </li>
                <li>
                  <i class="ri-check-double-line"></i> EMOTIONAL INTELLIGENCE
                </li>
              </ul>
              <p style={{'font-size':'1.1rem'}}>The NeuCode Journey- Igniting Winning Mindsets & Cultures Let us take you on a journey of passion, purpose, and the unwavering belief in human potential.</p>
              <a href="/Services-Info" class="btn-learn-more">
                Learn More
              </a>
            </div>
            <div class="col-lg-6 img-cont">
            {/* <img src="assets/img/Animation.gif" class="img-fluid" alt="" /> */}
            <div className="iframe-outer">
            <iframe src="https://giphy.com/embed/BHNfhgU63qrks" title="gif" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen>
            </iframe>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-video" class="about-video mt-5">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-4 video-box align-self-baseline position-relative"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src="assets/img/about-video.jpg" class="img-fluid" alt="" />
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                class="glightbox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              />
            </div>

            <div
              class="col-lg-8 pt-3 pt-lg-0 content ml-1"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* <ul>
                <li>
                  <i class="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="bx bx-check-double"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bx bx-check-double"></i> Voluptate repellendus
                  pariatur reprehenderit corporis sint.
                </li>
                <li>
                  <i class="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul> */}
              <p className="drop-cap">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;