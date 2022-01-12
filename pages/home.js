import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/Footer';
import Link from "next/link";
const home = () => {
  return (
    <>
      <Nav />
      <section className='bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 px-1'>
        <section className='py-10 grid grid-cols-1 gap-10 mx-5 sm:mx-0 sm:grid-cols-3 sm:gap-5 sm:ml-24 '>
          <section className='relative sm:hidden'>
            <div class="w-80">
              <div class="relative sm:hidden overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900"><h4 className='text-sky-900 text-xl font-semibold text-center'>
                  مركز سيلا للتجميل هو مركز تجميل على احدث طراز
                  متخصصون في تصفيف الشعر والمكياج للعرائس احدث صيحات الالوان والعناية بالأظافر والسكر وعلاجات الوجه والمزيد
                </h4></h4>
              </div>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="https://elianassalon.com/wp-content/uploads/sites/774/2019/08/wallpaperm.jpg" alt="Hair" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">الشعر</h4>
              </div>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./assest/nails1.jpg" alt="Nails" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">الأظافر</h4>
              </div>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./assest/face5.jpg" alt="Face" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">البشرة</h4>
              </div>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./assest/masag.jpg" alt="Masag" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">المساج</h4>
              </div>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./makeup.jpg" alt="Makeup" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">المكياج</h4>
              </div>
            </div>
          </section>
          <section>
            <div class="w-80">
              <div class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <img class="object-cover w-full h-48"
                  src="./cella6.jpg" alt="others" />
                <h4 class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">خدمات اخرى</h4>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </section>
    </>
  )
}
export default home