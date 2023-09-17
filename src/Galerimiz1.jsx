import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import resim from "./resim/resim (11).jpg";
import resim1 from "./resim/resim (13).jpg";
import resim2 from "./resim/resim (9).jpg";
import resim3 from "./resim/resim (8).jpg";
import resim4 from "./resim/resim (7).jpg";
import resim5 from "./resim/resim (6).jpg";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './galeri.css';

export default function Galerimiz1() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>galeri image</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={resim} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim5} />
        </SwiperSlide>
      </Swiper>

    </>
  );
}
