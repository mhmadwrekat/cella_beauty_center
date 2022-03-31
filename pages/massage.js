import React from 'react';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import Slide from "react-awesome-reveal";
import Carosal from '../components/Carosal';
const massage = () => {
  return (
    <>
      <PageNav />
      <section className='pt-16 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>
        <div>
          <img src='./assestmain/main21.jpg' class="w-full" />
          <div className='hidden sm:flex'>
            <h4 className='absolute float-right px-6 py-6 text-3xl font-semibold text-right bg-white opacity-75 rounded-2xl text-sky-900 w-96 top-60 right-36'>
              من اهم
              فوائد المساج يزيد من نشاط الدورة الدموية
              والتخلص من الأرق
              و
              يحسّن من لون البشرة، إذ يساعد على التخلص من خلايا البشرة الميّتة، ويجدد الأنسجة
              ما تترددي واحجزي لتدللي حالك
            </h4>
          </div>
        </div>
        <section className='absolute py-2 text-center bg-white opacity-75 w-6/6 sm:hidden rounded-2xl top-32'>
          <section className='relative'>
            <div class="relative sm:hidden overflow-hidden rounded-lg  cursor-pointer">
              <h4 class="mb-3 text-sm font-semibold text-center tracking-tight text-sky-900">
                <h4 className='px-1 font-semibold text-center text-sky-900'>
                  من اهم
                  فوائد المساج يزيد من نشاط الدورة الدموية
                  والتخلص من الأرق
                  و
                  يحسّن من لون البشرة، إذ يساعد على التخلص من خلايا البشرة الميّتة، ويجدد الأنسجة
                  ما تترددي واحجزي لتدللي حالك
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
                      src="./assestmassage/massage11.jpg"
                      onClick={() => { window.open('./assestmassage/massage11.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage21.jpg"
                      onClick={() => { window.open('./assestmassage/massage21.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage20.jpg"
                      onClick={() => { window.open('./assestmassage/massage20.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage24.jpg"
                      onClick={() => { window.open('./assestmassage/massage24.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage13.jpg"
                      onClick={() => { window.open('./assestmassage/massage13.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage19.jpg"
                      onClick={() => { window.open('./assestmassage/massage19.jpg', '_self') }}
                    />
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
                      src="./assestmassage/massage4.jpg"
                      onClick={() => { window.open('./assestmassage/massage4.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage7.jpg"
                      onClick={() => { window.open('./assestmassage/massage7.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage15.jpg"
                      onClick={() => { window.open('./assestmassage/massage15.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage16.jpg"
                      onClick={() => { window.open('./assestmassage/massage16.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage8.jpg"
                      onClick={() => { window.open('./assestmassage/massage8.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage10.jpg"
                      onClick={() => { window.open('./assestmassage/massage10.jpg', '_self') }}
                    />
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
                      src="./assestmassage/massage1.jpg"
                      onClick={() => { window.open('./assestmassage/massage1.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage18.jpg"
                      onClick={() => { window.open('./assestmassage/massage18.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage6.jpg"
                      onClick={() => { window.open('./assestmassage/massage6.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage9.jpg"
                      onClick={() => { window.open('./assestmassage/massage9.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage5.jpg"
                      onClick={() => { window.open('./assestmassage/massage5.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage3.jpg"
                      onClick={() => { window.open('./assestmassage/massage3.jpg', '_self') }}
                    />
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
                      src="./assestmassage/massage17.jpg"
                      onClick={() => { window.open('./assestmassage/massage17.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage2.jpg"
                      onClick={() => { window.open('./assestmassage/massage2.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage22.jpg"
                      onClick={() => { window.open('./assestmassage/massage22.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage12.jpg"
                      onClick={() => { window.open('./assestmassage/massage12.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage23.jpg"
                      onClick={() => { window.open('./assestmassage/massage23.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmassage/massage14.jpg"
                      onClick={() => { window.open('./assestmassage/massage14.jpg', '_self') }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        <div id='Form'></div>
        <Footer />
      </section>
    </>
  )
}
export default massage
