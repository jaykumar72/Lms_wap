import React from "react";
import { PureIncrement } from "pure_counter";
import "./Counts.css";

const Counts = () => {
  return (
    <div>
      <section id="counts" class="counts section-bg ">
        <div class="container">
          <div class="row justify-content-end  ">
            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <PureIncrement
                  start={0}
                  end={65}
                  duration={2}
                  className="purecounter "
                />
                <p>Happy Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <PureIncrement
                  start={0}
                  end={85}
                  duration={2}
                  className="purecounter "
                />
                <p>Projects</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <PureIncrement
                  start={0}
                  end={30}
                  duration={2}
                  className="purecounter "
                />

                <p>Years of experience</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <PureIncrement
                  start={0}
                  end={20}
                  duration={2}
                  className="purecounter "
                />
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counts;
