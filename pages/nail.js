import React from 'react';
import PageNav from '../components/page/PageNav';
import Footer from '../components/page/Footer';
import Slide from "react-awesome-reveal";
import Carosal from '../components/childComp/Carosal';
const nail = () => {
  return (
    <>
      <PageNav />
      <section className='pt-16 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>
        <div>
          <img src='./assestnail/nailhero.jpg' class="w-full" />
          <div className='hidden sm:flex'>
            <h4 className='absolute float-right px-5 py-5 text-2xl font-semibold text-right bg-white opacity-75 rounded-2xl text-sky-900 w-96 top-40 left-32'>
              أناقة أظافرك دلالة على اهتمامكِ بنفسكِ ,
              اجعلي أظافركِ جذابه ومختلفة و تميزي بأنامل ناعمة وذات مظهر جميل وملفت

              مع سيلا بيوتي سنتر حيث النظافة واللمعان والأناقة لأظافركِ
              <br></br>
              احجزي واتدللي
            </h4>
          </div>
        </div>
        <section className='absolute w-full text-center sm:hidden top-24'>
          <section className='relative'>
            <div class="relative sm:hidden overflow-hidden rounded-lg cursor-pointer">
              <h4 class="mb-3 text-sm font-semibold text-center tracking-tight bg-white opacity-75 text-sky-900 px-1 py-1">
                <h4 className='px-1 font-semibold text-center text-sky-900'>
                  أناقة أظافرك دلالة على اهتمامكِ بنفسكِ ,
                  اجعلي أظافركِ جذابه ومختلفة وذات مظهر جميل وملفت
                  احجزي واتدللي
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
                      src="./assestnail/nail40.jpg"
                      onClick={() => { window.open('./assestnail/nail40.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail41.jpg"
                      onClick={() => { window.open('./assestnail/nail41.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail42.jpg"
                      onClick={() => { window.open('./assestnail/nail42.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail45.jpg"
                      onClick={() => { window.open('./assestnail/nail45.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail44.jpg"
                      onClick={() => { window.open('./assestnail/nail44.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail43.jpg"
                      onClick={() => { window.open('./assestnail/nail43.jpg', '_self') }}
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
                      src="./assestnail/nail8.jpg"
                      onClick={() => { window.open('./assestnail/nail8.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail9.jpg"
                      onClick={() => { window.open('./assestnail/nail9.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail10.jpg"
                      onClick={() => { window.open('./assestnail/nail10.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail11.jpg"
                      onClick={() => { window.open('./assestnail/nail11.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail12.jpg"
                      onClick={() => { window.open('./assestnail/nail12.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail13.jpg"
                      onClick={() => { window.open('./assestnail/nail13.jpg', '_self') }}
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
                      src="./assestnail/nail14.jpg"
                      onClick={() => { window.open('./assestnail/nail14.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail15.jpg"
                      onClick={() => { window.open('./assestnail/nail15.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail16.jpg"
                      onClick={() => { window.open('./assestnail/nail16.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail17.jpg"
                      onClick={() => { window.open('./assestnail/nail17.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail18.jpg"
                      onClick={() => { window.open('./assestnail/nail18.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail19.jpg"
                      onClick={() => { window.open('./assestnail/nail19.jpg', '_self') }}
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
                      src="./assestnail/nail20.jpg"
                      onClick={() => { window.open('./assestnail/nail20.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail27.jpg"
                      onClick={() => { window.open('./assestnail/nail27.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail22.jpg"
                      onClick={() => { window.open('./assestnail/nail22.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail25.jpg"
                      onClick={() => { window.open('./assestnail/nail25.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail24.jpg"
                      onClick={() => { window.open('./assestnail/nail24.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail26.jpg"
                      onClick={() => { window.open('./assestnail/nail26.jpg', '_self') }}
                    />
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
                      src="./assestnail/nail28.jpg"
                      onClick={() => { window.open('./assestnail/nail28.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail29.jpg"
                      onClick={() => { window.open('./assestnail/nail29.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail30.jpg"
                      onClick={() => { window.open('./assestnail/nail30.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail33.jpg"
                      onClick={() => { window.open('./assestnail/nail33.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail32.jpg"
                      onClick={() => { window.open('./assestnail/nail32.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail31.jpg"
                      onClick={() => { window.open('./assestnail/nail31.jpg', '_self') }}
                    />
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
                      src="./assestnail/nail37.jpg"
                      onClick={() => { window.open('./assestnail/nail37.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail38.jpg"
                      onClick={() => { window.open('./assestnail/nail38.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail36.jpg"
                      onClick={() => { window.open('./assestnail/nail36.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail39.jpg"
                      onClick={() => { window.open('./assestnail/nail39.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail35.jpg"
                      onClick={() => { window.open('./assestnail/nail35.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail34.jpg"
                      onClick={() => { window.open('./assestnail/nail34.jpg', '_self') }}
                    />
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
                      src="./assestnail/nail1.jpg"
                      onClick={() => { window.open('./assestnail/nail1.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail7.jpg"
                      onClick={() => { window.open('./assestnail/nail7.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail3.jpg"
                      onClick={() => { window.open('./assestnail/nail3.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail2.jpg"
                      onClick={() => { window.open('./assestnail/nail2.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail5.jpg"
                      onClick={() => { window.open('./assestnail/nail5.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail6.jpg"
                      onClick={() => { window.open('./assestnail/nail6.jpg', '_self') }}
                    />
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
                      src="./assestnail/nail46.jpg"
                      onClick={() => { window.open('./assestnail/nail46.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail47.jpg"
                      onClick={() => { window.open('./assestnail/nail47.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail52.jpg"
                      onClick={() => { window.open('./assestnail/nail52.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail54.jpg"
                      onClick={() => { window.open('./assestnail/nail54.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail50.jpg"
                      onClick={() => { window.open('./assestnail/nail50.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail49.jpg"
                      onClick={() => { window.open('./assestnail/nail49.jpg', '_self') }}
                    />
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
                      src="./assestnail/nail55.jpg"
                      onClick={() => { window.open('./assestnail/nail55.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail56.jpg"
                      onClick={() => { window.open('./assestnail/nail56.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail51.jpg"
                      onClick={() => { window.open('./assestnail/nail51.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail57.jpg"
                      onClick={() => { window.open('./assestnail/nail57.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail58.jpg"
                      onClick={() => { window.open('./assestnail/nail58.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail59.jpg"
                      onClick={() => { window.open('./assestnail/nail59.jpg', '_self') }}
                    />
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
                      src="./assestnail/nail4.jpg"
                      onClick={() => { window.open('./assestnail/nail4.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail21.jpg"
                      onClick={() => { window.open('./assestnail/nail21.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail23.jpg"
                      onClick={() => { window.open('./assestnail/nail23.jpg', '_self') }}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail48.jpg"
                      onClick={() => { window.open('./assestnail/nail48.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail53.jpg"
                      onClick={() => { window.open('./assestnail/nail53.jpg', '_self') }}
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestnail/nail60.jpg"
                      onClick={() => { window.open('./assestnail/nail60.jpg', '_self') }}
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
export default nail