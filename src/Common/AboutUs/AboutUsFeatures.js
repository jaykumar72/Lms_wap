/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './AboutUsFeatures.css';
import { FaHistory, FaEye, FaUsers, FaBook, FaTrophy, FaImages } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const AboutUsFeatures = () => {
  const [activeTab, setActiveTab] = useState('History');

  const openLink = (animName) => {
    setActiveTab(animName);
  };




  return (
    <div>
      <Header/>
    
    <div id='about-us  ' className="about-us-features-container ">

      <section className="row  vh-100 ">
        <section id="list-example" className="list-group col-lg-4 col-md-4 ">
          <a className={`list-group-item list-group-item-action tablink ${activeTab === 'History' ? 'w3-red' : ''}`} onClick={() => openLink('History')}>
            <FaHistory className='list-icon' /> History
          </a>
          <a className={`list-group-item list-group-item-action tablink ${activeTab === 'Our Vision and Values' ? 'w3-red' : ''}`} onClick={() => openLink('Our Vision and Values')}>
            <FaEye className='list-icon' /> Our Vision and Values
          </a>
          <a className={`list-group-item list-group-item-action tablink ${activeTab === 'Advisory board' ? 'w3-red' : ''}`} onClick={() => openLink('Advisory board')}>
            <FaUsers className='list-icon' />Team
          </a>
          <a className={`list-group-item list-group-item-action tablink ${activeTab === 'Case studies' ? 'w3-red' : ''}`} onClick={() => openLink('Case studies')}>
            <FaBook className='list-icon' /> Case studies
          </a> <a className={`list-group-item list-group-item-action tablink ${activeTab === 'Awards' ? 'w3-red' : ''}`} onClick={() => openLink('Awards')}>
            <FaTrophy className='list-icon' /> Awards
          </a>
          <a className={`list-group-item list-group-item-action tablink ${activeTab === 'Event gallery' ? 'w3-red' : ''}`} onClick={() => openLink('Event gallery')}>
            <FaImages className='list-icon' /> Event gallery
          </a>
        </section>
        <section className="scrollspy-example col-lg-8 col-md-8">

          {activeTab === 'History' && (
            <div id="list-item-1" data-aos="fade-right">
              <h4>History</h4>
              <div className="content-section">
                <p>The NeuCode Journey – Igniting Winning Mindsets & Cultures</p>
                <p>Let us take you on a journey of passion, purpose, and the unwavering belief in human potential.</p>
                <p>Ever wonder how NeuCode Talent Academy became the vibrant learning community it is today?</p>
                <p>A Decade of Passion Transforms into a Mission</p>
                <p>The NeuCode Talent Academy story began over a decade ago when our founder, Bindu Bhatia, immersed herself in the dynamic world of learning and development.</p>
                <p>For years, Bindu honed her skills and expertise, driven by a deep-seated desire to empower others. Seven years ago, that passion ignited into a bold new venture. Bindu's leap of faith marked the birth of NeuCode Talent Academy, a company founded on the principles of growth, transformation, and the relentless pursuit of excellence.</p>
                <p>Why the name NEUCODE?</p>
                <p><strong>NeuCode:</strong> The Power of the Mind, Unleashed. The name "NeuCode" holds a special meaning.</p>
                <p>Well, it represents our belief in the power of the human brain and its ability to learn and adapt.</p>
                <p>"NEU" symbolizes the brain's neural connections, while "CODE" represents the skills and knowledge we provide to program and unlock those connections.</p>
                <p>From a Passion Project to a Thriving Community</p>
                <p>What started as just a passion project 7 years ago in learning and development, has now grown into a vibrant team and a thriving community of talented trainers.</p>
              </div>
            </div>
          )}
          {activeTab === 'Our Vision and Values' && (
            <div id="list-item-2" data-aos="fade-right">
              <h4>Our vision and values</h4>
              <div className="content-section ">
                <h5>Our Values: It Starts with YOU</h5>
                <p>At NeuCode Talent Academy, we believe that the most powerful tool for success lies within you. We're all about unlocking your unique potential, fostering your talents, and helping you discover the winning mindset that's already inside.</p>
                <h5>Our Mission: Building Winners, One Mindset at a Time</h5>
                <p>At NeuCode Talent Academy, we're on a mission to empower individuals and organizations with the emotional resilience and intelligence needed to thrive in today's complex world. We believe that by strengthening these core capacities, we can unlock extraordinary potential and create lasting positive change. We do this through:</p>
                <ul>
                  <li><strong>Experience-Driven Learning:</strong> We believe learning should be exciting, engaging, and relevant to real-world challenges. That's why our programs are designed to immerse you in practical experiences that ignite your passion and spark lasting change.</li>
                  <li><strong>A Focus on YOU:</strong> Your goals, your aspirations, your unique journey – these are at the heart of everything we do. We tailor our approach to meet your specific needs, providing personalized support and guidance every step of the way.</li>
                  <li><strong>A Culture of Growth:</strong> We foster an environment where learning is a lifelong adventure. We encourage you to embrace challenges, celebrate successes, and continuously push your boundaries to achieve new heights.</li>
                </ul>
                <h5>Learning Experiences Rooted in Advanced Psychology</h5>
                <p>All of our programs are grounded in the latest research on emotional intelligence, resilience, and positive psychology. This allows us to develop targeted interventions that address the specific challenges individuals and organizations face.</p>
                <h5>Experience the NeuCode Difference</h5>
                <p>By combining science-backed techniques with personalized coaching and support, we deliver results that are both significant and sustainable.</p>
                <h5>The NeuCode Promise</h5>
                <p>When you partner with NeuCode Talent Academy, you're not just getting a training program – you're joining a community of passionate learners, dedicated mentors, and like-minded individuals who are committed to your success. We're here to inspire you, challenge you, and support you on your journey to becoming the best version of yourself.</p>
              </div>
            </div>
          )}
          {activeTab === 'Advisory board' && (
            <div id="list-item-3" data-aos="fade-right" >
              <h4>Advisory board</h4>
              <div className="content-section">
                <h5>Meet Our Advisory Board: Meet the Minds Behind NeuCode: Our Trusted Advisor</h5>
                <p>The Visionaries Guiding NeuCode's Path to Excellence</p>
                <h6>Decades of Experience, One Shared Vision: Get to Know Our Advisor</h6>
                <h5>Our Founder</h5>
                <p>The Passion and Expertise Behind NeuCode's Mission</p>
                <p>Bindu Bhatia: The heart and soul of NeuCode, Bindu Bhatia, has been championing learning and development for over a decade. She's passionate about helping people reach their full potential and is the driving force behind our mission to build winning mindsets.</p>
                <h5>Our Advisors</h5>
                <p>Harish Bhatia: With years of experience as a business consultant and executive coach, Harish Bhatia is a master at helping organizations thrive. His insights and guidance are invaluable as we create programs that empower both individuals and teams.</p>
                <p>Kavisha Manwani: As our Strategic Head of Operations, Kavisha Manwani is the maestro behind the scenes, ensuring that everything runs smoothly and efficiently. Her strategic vision is instrumental in delivering a seamless and impactful learning experience.</p>
                <p>Padmini Bhasin: Padmini Bhasin is the creative mind behind our engaging and informative content. As our Content Curator and Developer, she crafts learning materials that not only educate but also inspire and motivate.</p>
                <p>Each member of the NeuCode team brings a unique set of skills and perspectives to the table. We're a friendly bunch on a mission to help YOU unlock your hidden talents and reach your full potential.</p>
                <p>We believe that everyone has the power to achieve extraordinary things. We're here to help you discover your hidden talents, develop your skills, and unlock your full potential.</p>
              </div>
            </div>
          )}
          {activeTab === 'Case studies' && (
            <div id="list-item-4" data-aos="fade-right">
              <h4>Case studies</h4>
              <div className="content-section">
                <h5>NeuCode in Action - A Collection of Case Studies Demonstrating the Impact of Our Programs</h5>
                <p>Real Results, Real Stories - Witness the Power of NeuCode's Transformative Learning Experiences</p>
                <p>Client Success Stories - How NeuCode is Helping Organizations Build Winning Mindsets and Cultures</p>
                <p>Challenges Met, Goals Achieved - Discover How NeuCode's Customized Solutions Drive Measurable Results</p>
                <h5>NeuCode in Action - A Collection of Case Studies Demonstrating the Impact of Our Programs</h5>
                <p>Real Results, Real Stories - Witness the Power of NeuCode's Transformative Learning Experiences</p>
                <p>Client Success Stories - How NeuCode is Helping Organizations Build Winning Mindsets and Cultures</p>
                <p>Challenges Met, Goals Achieved - Discover How NeuCode's Customized Solutions Drive Measurable Results</p>

              </div>
            </div>
          )}
          {activeTab === 'Awards' && (
            <div id="list-item-5" data-aos="fade-right" >
              <h4>Awards</h4>
              <div className="content-section">
                <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
              </div>
            </div>
          )}
          {activeTab === 'Event gallery' && (
            <div id="list-item-6"data-aos="fade-right"  >
              <h4>Event gallery</h4>
              <div className="content-section">
                <p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
              </div>
            </div>
          )}
          {/* ... other content sections ... */}
        </section>
      </section>
    </div>
<Footer/>

</div>
  );
};

export default AboutUsFeatures;
