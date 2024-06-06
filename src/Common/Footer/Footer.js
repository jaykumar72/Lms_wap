import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>NeuCode Talent Academy</h3>
                <p>We are looking forward to meeting you!</p>
                <br />
                <p>
                  Bangalore, Delhi,
                  <br />
                  Hyderabad, Pune,
                  <br />
                  Mumbai, Chennai
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 97316 01397
                  <br />
                  <strong>Email:</strong> contact@neucodetalent.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Menu Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Links List</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Event Calendar 2023</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Learning Catalog</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">NeuCode Products</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Blog</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Vlog</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Stay in the loop with our latest updates, exclusive offers,
                  and insightful content.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>

                <div className="social-links text-center text-md-right pt-3 pt-mt-5">
                  <a href="/" className="twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="/" className="facebook">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="/" className="instagram">
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a href="/" className="google-plus">
                    <i className="ri-skype-fill"></i>
                  </a>
                  <a href="/" className="linkedin">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <div id="preloader"></div> */}
      <a href="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
  );
}

export default Footer;
