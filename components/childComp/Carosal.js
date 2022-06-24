import React from "react";
// import Swiper core and required modules
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
const Carosal = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <section className="lg:w-10/12 w-12/12 mx-auto">
        <Swiper
          // install Swiper modules
          modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop={true}
          autoplay={true}
          spaceBetween={10}
          slidesPerView={2}
          scrollbar={{
            draggable: true,
            dragSize: "auto",
            hide: true,
          }}
          //   navigation
        >
          <SwiperSlide>
            <img
              alt="cella center"
              src="./assest/carosal1.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal1.jpg", "_self");
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="cella beauty center"
              src="./assest/carosal2.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal2.jpg", "_self");
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="sallon"
              src="./assest/carosal3.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal3.jpg", "_self");
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="صالون سيلا"
              src="./assest/carosal4.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal4.jpg", "_self");
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="سيلا بيوتي سنتر"
              src="./assest/carosal5.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal5.jpg", "_self");
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="صالون سيلا عمان"
              src="./assest/carosal6.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal6.jpg", "_self");
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="بيوتي سينبر سيلا"
              src="./assest/carosal7.jpg"
              className="block w-full shadow-2xl lg:rounded-lg"
              onClick={() => {
                window.open("./assest/carosal7.jpg", "_self");
              }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Carosal;
