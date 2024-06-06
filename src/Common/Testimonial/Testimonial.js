import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Testimonial.css";

const Testimonial = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 768) {
      setSlidesPerView(1);
    } else if (width >= 768 && width < 992) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }, [width]);

  return (
    <div>
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Testimonials</h2>
            <p>
              At Neucode Talent Academy, we're passionate about empowering
              individuals and teams to reach their full potential. But don't
              just take our word for it
              <b>
                – hear from real people who have experienced the transformative
                impact of our programs.
              </b>
            </p>
            <p>
              <b>
                <i>Ready to write your own success story? </i>
              </b>
            </p>
          </div>

          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>I have
                  known n worked with Bindu for over a decade now. Have seen the
                  surge of NeuCode Talent Academy first hand. She is a person
                  with multiple talents. And as we say, a sustainably successful
                  person in corporate world is one who can work in all roles (
                  Peon to President ) seamlessly. In initial days she
                  facilitated some of the best team building n leadership
                  programs I have come across, brought in her infectious energy
                  to the training room n stayed available for the participants
                  post progra. Now with the size increasing, n she employing
                  more people n empaneling more coaches n facilitators, she has
                  has switched roles, cognitivly designs the contents n
                  carefully deputes the facilitators, ensures that her signature
                  energy, learning n fun is felt in the workshop. She has
                  continuously upped the game with customized workbooks, online
                  followup, case study n coaching. Everytime we have thrown a
                  new problem, we have got a more engaging solution. I wish her
                  all the best to maintain this innate ability of innovating n
                  implementing it everytime, n yet maintaining the personal
                  touch with increase in size.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/default.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>BHANU SHARMA</h3>
                <h4>
                  President and Global Head of HRPresident and Global Head of HR
                  Tega Industries
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item active">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Bindu has been instrumental in helping us at Simplotel -
                  crystallize our mission, vision and values and has helped us
                  get our values inculcated throughout the organization. She has
                  conducted a series of Learning and Development programs for
                  the budding leaders at Simplotel and has greatly improved the
                  overall effectiveness of our team. She has also set up a
                  talent acquisition strategy. Most importantly she has been a
                  person coach to me and has made me personally more effective.
                  She has really helped move the needle on our human resources -
                  which for us is the most important asset of our company.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/Tarun.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Tarun Goyal</h3>
                <h4>CEO & Founder Simplotel</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  We are pleased to recommend NeuCode Talent Academy for their
                  commendable training services. Throughout our 3+ years of
                  partnership, they have consistently demonstrated their
                  expertise through their tailored approach, expert trainers,
                  and commitment to client satisfaction. NeuCode has effectively
                  customized training programs to address our organization's
                  specific needs, delivering engaging sessions that resonate
                  well with our employees. Their flexibility in adapting to
                  changing requirements and their notable customer service
                  further underscore their value as a training partner. Feedback
                  from participants has been positive, highlighting the quality
                  of materials, trainer expertise, and practical applicability
                  of the skills learned.In summary, I highly endorse NeuCode
                  Talent Academy as a reliable provider of excellent training
                  solutions. Please feel free to reach out for more details or
                  references.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/default.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Rashmi Kullu</h3>
                <h4>Head of learning and development - Tega Industries</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  NCTA programs are definitely up the league. Given the pedigree
                  of the consultants, I’m not surprised with the innovative ways
                  they design and facilitate learning programs. Grounded and
                  authentic facilitators are ompletely focused on making an
                  impact in the organizations and individuals. Once on the
                  project, they don’t bother about time and efforts. I’ve
                  attended multiple programs through NCTA and have seen
                  participants gaining much more than they expected. A complete
                  power house to accelerate your career is how I will define
                  NCTA programs. Most recommended training partner!
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/default.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Vishakha Dutta</h3>
                <h4> Director - D&I, Publicis Sapient</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>I have
                  attended many open certifications and workshops with NCTA like
                  NLP Practitioner & Life coach program, Art of storytelling
                  etc. It brought in great positive difference in me and I would
                  highly recommend NCTA for corporate learning partner. Based on
                  the vast experience as learning consultants in the corporate
                  world, they bring in a very different and unique experience in
                  their learning interventions.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/amitabh.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Amitabh Saxena</h3>
                <h4>CEO, Annexas Europe, MBB</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  NCTA programs are definitely up the league. Given the pedigree
                  of the consultants, I’m not surprised with the innovative ways
                  they design and facilitate learning programs. Grounded and
                  authentic facilitators are completely focused on making an
                  impact in the organizations and individuals. Once on the
                  project, they don’t bother about time and efforts. I’ve
                  attended multiple programs through NCTA and have seen
                  participants gaining much more than they expected. A complete
                  power house to accelerate your career is how I will define
                  NCTA programs. Most recommended training partner!
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/vishakha.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Vishakha Dutta</h3>
                <h4>Director - D&I, Publicis Sapient</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  It has been my absolute privilege to consider Bindu my life
                  coach for the last four years. Entirely my responsibility that
                  my commitment has seen some ups and downs, but Bindu has been
                  there for me every time, any time, and in every possible way
                  as my coach and sounding board.
                  <br /> Bindu is one of those unique coaches who have the
                  ability to help you find your answers, unravel your thinking,
                  arrive at a better understanding of a situation from multiple
                  perspectives. Like a good coach, she is a great listener,
                  offers you tools to find your unique and personal solution,
                  provides alternate angles to approach a situation, encourages
                  you along the journey with a growth mindset. She has always
                  been open to feedback in the most gentle and gracious way.
                  <br />
                  Writing this with tremendous gratitude to you, Bindu. Please
                  continue to guide and inspire others, and stay blessed!.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/default.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>DR. Rohini Srivathsa</h3>
                <h4>CTO Microsoft india and south asia</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  I was part of a social group called the Ismaili Professional
                  Network (IPN), here in we requested Bindu to conduct a session
                  on NLP (pro bono) and she was kind enough to accept. The best
                  part is that the session was conducted with so much passion
                  and the learnings were tremendous for the entire IPN group.
                  This session was the most viewed and the highest rated session
                  that we did for IPN in that year. The current IPN teams still
                  remember that session and are constantly requesting for Bindu
                  to do a few more.
                  <br />
                  Bindu thanks for doing this Pro Bono and thanks for doing it
                  with passion and with the true intent to teach and share. 
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/default.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Aqueel Merchant</h3>
                <h4>
                  Managing Director - Accenture Enterprise Enablement, India &
                  Philippines
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            class="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
