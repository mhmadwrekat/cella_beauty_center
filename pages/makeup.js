import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Slide from "react-awesome-reveal";
import Carosal from '../components/Carosal';
const makeup = () => {
  return (
    <>
      <Nav />
      <section className='pt-16 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>
        <div>
          <img src='./assestmakeup/make1.png' class="w-full hidden sm:flex" />
          <img src='./assestmakeup/make2.jpg' class="w-full flex sm:hidden" />
          <div className='hidden sm:flex'>
            <h4 className='absolute px-6 text-3xl font-semibold text-right bg-white opacity-75 py-7 rounded-2xl text-sky-900 w-96 top-60 left-36'>
              الميك اب، التجميل، والألوان
              هي عناصر كفيلٌة أن تغيّر من الشكل والإطلالة وحتى المزاج في غضون دقائق
              <br></br>
              هي الأمور التي تتمم كل شيء
            </h4>
          </div>
        </div>
        <section className='absolute w-3/6 py-0.5 text-center bg-white opacity-75 sm:hidden rounded-2xl top-20 right-1'>
          <section className='relative'>
            <div class="relative sm:hidden overflow-hidden rounded-lg  cursor-pointer">
              <h4 class="mb-3 text-sm font-semibold text-center tracking-tight text-sky-900">
                <h4 className='px-0.5 font-semibold text-center text-sky-900'>
                  الميك اب، التجميل،
                  هي عناصر كفيلٌة أن تغيّر من الشكل والإطلالة وحتى المزاج في غضون دقائق
                  <br></br>
                  هي الأمور التي تتمم كل شيء
                </h4></h4>
            </div>
          </section>
        </section>
        <div className='pt-4'></div>
        <Carosal />
        <div className='pt-3'></div>
        {/* S 1 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make12.jpg"
                      onClick={() => { window.open('./assestmakeup/make12.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make13.jpg"
                      onClick={() => { window.open('./assestmakeup/make13.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make11.jpg"
                      onClick={() => { window.open('./assestmakeup/make11.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make16.jpg"
                      onClick={() => { window.open('./assestmakeup/make16.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make14.jpg"
                      onClick={() => { window.open('./assestmakeup/make14.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make15.jpg"
                      onClick={() => { window.open('./assestmakeup/make15.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>

        {/* S 2 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make10.jpg"
                      onClick={() => { window.open('./assestmakeup/make10.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make9.jpg"
                      onClick={() => { window.open('./assestmakeup/make9.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make8.jpg"
                      onClick={() => { window.open('./assestmakeup/make8.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make6.jpg"
                      onClick={() => { window.open('./assestmakeup/make6.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make7.jpg"
                      onClick={() => { window.open('./assestmakeup/make7.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make5.jpg"
                      onClick={() => { window.open('./assestmakeup/make5.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 3 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make17.jpg"
                      onClick={() => { window.open('./assestmakeup/make17.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make19.jpg"
                      onClick={() => { window.open('./assestmakeup/make19.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make18.jpg"
                      onClick={() => { window.open('./assestmakeup/make18.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make24.jpg"
                      onClick={() => { window.open('./assestmakeup/make24.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make26.jpg"
                      onClick={() => { window.open('./assestmakeup/make26.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make27.jpg"
                      onClick={() => { window.open('./assestmakeup/make27.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 4 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make30.jpg"
                      onClick={() => { window.open('./assestmakeup/make30.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make29.jpg"
                      onClick={() => { window.open('./assestmakeup/make29.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make28.jpg"
                      onClick={() => { window.open('./assestmakeup/make28.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make31.jpg"
                      onClick={() => { window.open('./assestmakeup/make31.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make32.jpg"
                      onClick={() => { window.open('./assestmakeup/make32.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make33.jpg"
                      onClick={() => { window.open('./assestmakeup/make33.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 5 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make34.jpg"
                      onClick={() => { window.open('./assestmakeup/make34.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make38.jpg"
                      onClick={() => { window.open('./assestmakeup/make38.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make40.jpg"
                      onClick={() => { window.open('./assestmakeup/make40.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make37.jpg"
                      onClick={() => { window.open('./assestmakeup/make37.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make35.jpg"
                      onClick={() => { window.open('./assestmakeup/make35.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make39.jpg"
                      onClick={() => { window.open('./assestmakeup/make39.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 6 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make42.jpg"
                      onClick={() => { window.open('./assestmakeup/make42.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make44.jpg"
                      onClick={() => { window.open('./assestmakeup/make44.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make43.jpg"
                      onClick={() => { window.open('./assestmakeup/make43.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make48.jpg"
                      onClick={() => { window.open('./assestmakeup/make48.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make47.jpg"
                      onClick={() => { window.open('./assestmakeup/make47.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make46.jpg"
                      onClick={() => { window.open('./assestmakeup/make46.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 7 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make51.jpg"
                      onClick={() => { window.open('./assestmakeup/make51.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make53.jpg"
                      onClick={() => { window.open('./assestmakeup/make53.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make52.jpg"
                      onClick={() => { window.open('./assestmakeup/make52.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make57.jpg"
                      onClick={() => { window.open('./assestmakeup/make57.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make56.jpg"
                      onClick={() => { window.open('./assestmakeup/make56.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make55.jpg"
                      onClick={() => { window.open('./assestmakeup/make55.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 8 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make62.jpg"
                      onClick={() => { window.open('./assestmakeup/make62.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make63.jpg"
                      onClick={() => { window.open('./assestmakeup/make63.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make64.jpg"
                      onClick={() => { window.open('./assestmakeup/make64.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make77.jpg"
                      onClick={() => { window.open('./assestmakeup/make77.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make75.jpg"
                      onClick={() => { window.open('./assestmakeup/make75.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make76.jpg"
                      onClick={() => { window.open('./assestmakeup/make76.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 9 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make72.jpg"
                      onClick={() => { window.open('./assestmakeup/make72.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make74.jpg"
                      onClick={() => { window.open('./assestmakeup/make74.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make73.jpg"
                      onClick={() => { window.open('./assestmakeup/make73.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make79.jpg"
                      onClick={() => { window.open('./assestmakeup/make79.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make78.jpg"
                      onClick={() => { window.open('./assestmakeup/make78.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make80.jpg"
                      onClick={() => { window.open('./assestmakeup/make80.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 10 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make65.jpg"
                      onClick={() => { window.open('./assestmakeup/make65.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make61.jpg"
                      onClick={() => { window.open('./assestmakeup/make61.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make60.jpg"
                      onClick={() => { window.open('./assestmakeup/make60.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make71.jpg"
                      onClick={() => { window.open('./assestmakeup/make71.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make67.jpg"
                      onClick={() => { window.open('./assestmakeup/make67.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make68.jpg"
                      onClick={() => { window.open('./assestmakeup/make68.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 11 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make21.jpg"
                      onClick={() => { window.open('./assestmakeup/make21.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make22.jpg"
                      onClick={() => { window.open('./assestmakeup/make22.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make69.jpg"
                      onClick={() => { window.open('./assestmakeup/make69.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make36.jpg"
                      onClick={() => { window.open('./assestmakeup/make36.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make41.jpg"
                      onClick={() => { window.open('./assestmakeup/make41.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make45.jpg"
                      onClick={() => { window.open('./assestmakeup/make45.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 12 */}
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make20.jpg"
                      onClick={() => { window.open('./assestmakeup/make20.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make50.jpg"
                      onClick={() => { window.open('./assestmakeup/make50.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make25.jpg"
                      onClick={() => { window.open('./assestmakeup/make25.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make70.jpg"
                      onClick={() => { window.open('./assestmakeup/make70.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make54.jpg"
                      onClick={() => { window.open('./assestmakeup/make54.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmakeup/make58.jpg"
                      onClick={() => { window.open('./assestmakeup/make58.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        <Footer />
      </section>
    </>
  )
}
export default makeup