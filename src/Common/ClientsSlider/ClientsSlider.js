import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ClientsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const ClientsSlider = () => {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <h2 className="title">Our Clients</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide >
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-1.png"
                className="img-fluid"
                alt="Client 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-2.png"
                className="img-fluid"
                alt="Client 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-3.png"
                className="img-fluid"
                alt="Client 3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-4.png"
                className="img-fluid"
                alt="Client 4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-5.png"
                className="img-fluid"
                alt="Client 5"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-6.png"
                className="img-fluid"
                alt="Client 6"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;
