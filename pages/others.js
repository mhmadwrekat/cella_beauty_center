import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Slide from "react-awesome-reveal";
const others = () => {
  return (
    <>
      <Nav />
      <section className='pt-16 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>
        <div>
          <img src='./assestother/otherhero.jpg' class="w-full" />
        </div>
        {/* S 1 */}
        <Slide triggerOnce>
          <section class="pt-12 overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class=" w-1/2 pt-5">
                  <div class="w-2/2 p-1 md:p-2">
                    <p className='text-xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>مايكروبيلدنج</p>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2 pt-6">
                  <div class="w-full p-1 md:p-2">
                    <p className='text-xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>LVL</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other1.jpg"
                      onClick={() => { window.open('./assestother/other1.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other2.jpg"
                      onClick={() => { window.open('./assestother/other2.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other3.jpg"
                      onClick={() => { window.open('./assestother/other3.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other6.jpg"
                      onClick={() => { window.open('./assestother/other6.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other5.jpg"
                      onClick={() => { window.open('./assestother/other5.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other4.jpg"
                      onClick={() => { window.open('./assestother/other4.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 2 */}
        <Slide triggerOnce>
          <section class="pt-12 overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class=" w-1/2 pt-5">
                  <div class="w-2/2 p-1 md:p-2">
                    <p className='text-xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>برافين</p>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2 pt-5">
                  <div class="w-full p-1 md:p-2">
                    <p className='text-xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>تنظيف حواجب</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other7.jpg"
                      onClick={() => { window.open('./assestother/other7.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other8.jpg"
                      onClick={() => { window.open('./assestother/other8.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other9.jpg"
                      onClick={() => { window.open('./assestother/other9.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other10.jpg"
                      onClick={() => { window.open('./assestother/other10.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other11.jpg"
                      onClick={() => { window.open('./assestother/other11.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other12.jpg"
                      onClick={() => { window.open('./assestother/other12.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
        {/* S 3 */}
        <p className='pt-12 pb-1 text-xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>سكر - واكس </p>
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other13.jpg"
                      onClick={() => { window.open('./assestother/other13.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other14.jpg"
                      onClick={() => { window.open('./assestother/other14.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other15.jpg"
                      onClick={() => { window.open('./assestother/other15.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other16.jpg"
                      onClick={() => { window.open('./assestother/other16.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other17.jpg"
                      onClick={() => { window.open('./assestother/other17.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestother/other18.jpg"
                      onClick={() => { window.open('./assestother/other18.jpg', '_self') }}
                    />
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
export default others