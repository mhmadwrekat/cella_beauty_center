import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Slide from "react-awesome-reveal";
const makeup = () => {
    return (
        <>
          <Nav/>
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
{/* S 1 */}
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
{/* S 2 */}
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
{/* S 3 */}
<Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
src="./assestmakeup/make12.jpg"
onClick={() => { window.open('./assestmakeup/make10.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
src="./assestmakeup/make13.jpg"
onClick={() => { window.open('./assestmakeup/make9.jpg', '_self') }} />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
src="./assestmakeup/make11.jpg"
onClick={() => { window.open('./assestmakeup/make8.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
src="./assestmakeup/make16.jpg"
onClick={() => { window.open('./assestmakeup/make6.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
src="./assestmakeup/make14.jpg"
onClick={() => { window.open('./assestmakeup/make7.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
src="./assestmakeup/make15.jpg"
onClick={() => { window.open('./assestmakeup/make5.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
{/*
1,2,,,,5,6,7,8,9,10
11,12,13,14,15,16,

*/}
<Footer/>  
          </section>
        </>
    )
}
export default makeup