import React from 'react';
// import Swiper core and required modules
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
const Carosal = () => {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <section className='p-3 lg:p-36'>
                <Swiper
                    // install Swiper modules
                    modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
                    effect='fade'
                    fadeEffect={{
                        crossFade: true
                    }}
                    loop={true}
                    autoplay={true}
                    spaceBetween={10}
                    slidesPerView={2}
                    scrollbar={{
                        draggable: true,
                        dragSize: 'auto',
                        hide: true
                    }}
                    navigation
                >
                    <SwiperSlide>
                        <img src="./assest/carosal1.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                            onClick={() => { window.open('./assest/carosal1.jpg', '_self') }}
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal2.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                      onClick={() => { window.open('./assest/carosal2.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal3.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                      onClick={() => { window.open('./assest/carosal3.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal4.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                      onClick={() => { window.open('./assest/carosal4.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal5.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                      onClick={() => { window.open('./assest/carosal5.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal6.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                      onClick={() => { window.open('./assest/carosal6.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal7.jpg"
                            className="block w-full shadow-2xl rounded-2xl" 
                      onClick={() => { window.open('./assest/carosal7.jpg', '_self') }}
                      />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Carosal