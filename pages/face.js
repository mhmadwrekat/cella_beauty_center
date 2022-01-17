import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Slide from "react-awesome-reveal";
const face = () => {
  return (
    <>
      <Nav />
      <section translate='no' className='pt-16 bg-gradient-to-r from-white to-fuchsia-100'>
        <div>
          <img src='http://roopmantra.com/blog/wp-content/uploads/2020/10/removes-makeup.jpg' class="w-full" />
          <div className='hidden sm:flex'>
            <h4 className='absolute float-right px-4 py-4 text-3xl font-semibold text-right bg-white opacity-75 text-sky-900 w-96 top-60 rounded-2xl left-24'>
              الاهتمام بالبشرة هو ما يعطي الانطباع الرئيسي بالحيويه والشباب بغض النظر عن العمر الحقيقي
              تميّزي عن الجميع
            </h4>
          </div>
        </div>
        <section className='absolute w-full text-center sm:hidden top-20'>
          <section className='relative'>
            <div class="relative py-5 sm:hidden overflow-hidden rounded-lg  cursor-pointer">
              <h4 class="mb-3 text-sm font-semibold text-center tracking-tight text-sky-900">
                <h4 className='px-4 py-3 font-semibold text-center bg-white opacity-75 text-sky-900'>
                  الاهتمام بالبشرة هو ما يعطي الانطباع الرئيسي بالحيويه والشباب بغض النظر عن العمر الحقيقي
                  <br></br>
                  تميّزي عن الجميع
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
                      src="./assestface/face3.jpg"
                      onClick={() => { window.open('./assestface/face3.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face6.jpg"
                      onClick={() => { window.open('./assestface/face6.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face4.jpg"
                      onClick={() => { window.open('./assestface/face4.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face5.jpg"
                      onClick={() => { window.open('./assestface/face5.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face2.jpg"
                      onClick={() => { window.open('./assestface/face2.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face1.jpg"
                      onClick={() => { window.open('./assestface/face1.jpg', '_self') }}
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
export default face