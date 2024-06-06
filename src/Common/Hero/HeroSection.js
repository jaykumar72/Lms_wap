import React from "react";
import "./HeroSection.css";
import { FaUniversity } from 'react-icons/fa';
import { MdEmojiEvents } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";


const HeroSection = () => {


  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>Empowering Minds, Transforming Cultures</h1>
              <h2>
                Explore cutting-edge, gamified learning programs & customized
                solutions based on Neuroscience, EI, TA and psychology To create
                an IMPACT
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 text-center">
              <div className="text-center" >
                <a href='/Services-Info'   className="btn-get-started scrollto">
                  For Organizations
                </a>
              </div>
              <div className="text">
                <p>Ignite your People’s Spark</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-center">
              <div className="text-center">
                <a href="#about" className="btn-get-started scrollto">
                  Individuals
                </a>
              </div>
              <div className="text">
                <p>Growth Never Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="floating-links">
        <div className="float-container">
          <a href="/home" className="icon one"><i><MdEmojiEvents /></i>
            Upcoming event list Register now 12th May : NLP 29th June : Coaching
          </a>
          <a href="/home" className="icon two"><i><FaUniversity /></i>
            Check out what’s new at NeuVersity!
          </a>
          <a href="/home" className="icon three"><i><GiTrophyCup /></i>
            Free Download Claim your reward
          </a>
          <a href="/home" className="icon four"><i><ImNewspaper /></i>
            Did you check out our NeuFriday Newsletter?
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
