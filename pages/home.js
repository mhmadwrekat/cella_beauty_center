import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/Footer';
import Link from "next/link";
const home = () => {
  return (
    <>
      <Nav />
      <section className='w-full px-1 bg-gradient-to-r from-white to-fuchsia-100'>
        <section className='grid grid-cols-1 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-3 sm:gap-5'>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="https://elianassalon.com/wp-content/uploads/sites/774/2019/08/wallpaperm.jpg" alt="Hair" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">الشعر</h4>
              </div>
              <p className='px-4 pt-3 font-mono font-bold text-center text-medium text-sky-900'>
                خدماتنا هي وسيلة رائعة للتراجع عن صخب الحياة اليومية في عمان
              </p>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./assest/nails1.jpg" alt="Nails" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">الأظافر</h4>
              </div>
              <p className='px-4 pt-3 font-mono font-bold text-center text-medium text-sky-900'>
                من لحظة دخولك الباب ، ينصب تركيزنا على راحتك التامة
                نحن خبراء في ما نقوم به</p>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./assest/face5.jpg" alt="Face" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">البشرة</h4>
              </div>
              <p className='px-4 pt-3 font-mono font-bold text-center text-medium text-sky-900'>
                لقد ميزنا أنفسنا في كل جانب من جوانب خدماتنا ومنتجاتنا وأجواءنا
              </p>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./assest/masag.jpg" alt="Masag" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">المساج</h4>
              </div>
              <p className='px-4 pt-3 font-mono font-bold text-center text-medium text-sky-900'>
                زورينا لتنالي قسطا من الراحة معنا في سيلا بيوتي سنتر
              </p>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./makeup.jpg" alt="Makeup" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">المكياج</h4>
              </div>
              <p className='px-4 pt-3 font-mono font-bold text-center text-medium text-sky-900'>
                نحن نسعى بكل فخر لتصنيف سيلا بيوتي سنتر كواحد من الأفضل والأنظف والأكثر صحة في المدينة
              </p>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./cella6.jpg" alt="others" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">خدمات اخرى</h4>
              </div>
              <p className='px-4 pt-3 font-mono font-bold text-center text-medium text-sky-900'>
                سيعمل فريقنا المحترف إلى تدليلك
              </p>
            </div>
          </section>
        </section>
        {/* Gallery 1 */}
        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/face.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/face2.jpg" />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/face3.jpg" />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/face4.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/face5.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/face6.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery 2 */}
        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/nails1.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/nails2.jpg" />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./assest/nails3.jpg" />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./makeup.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./nailss.jpg" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="./img1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  )
}
export default home
