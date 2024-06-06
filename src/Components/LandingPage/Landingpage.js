// import React, { useState, useEffect } from "react";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import HeroSection from "../../Common/Hero/HeroSection";
import ClientsSlider from "../../Common/ClientsSlider/ClientsSlider";

import AboutUs from "../../Common/AboutUs/AboutUs";
import Counts from "../../Common/Counter/Counts";
import Testimonial from "../../Common/Testimonial/Testimonial";
import "./landingpage.css";

function Landingpage() {

  
  return (
    <div>
      <Header />
      <HeroSection/>
      <ClientsSlider/>
   
      <AboutUs/>
      <Counts/>
      <Testimonial/>
      <Footer />
    </div>
  );
}
export default Landingpage;
