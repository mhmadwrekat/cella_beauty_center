import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from "next/link";
import Hero from '../components/Hero';
import Caros from '../components/Carosall';
/*
<section className='grid justify-center ...'>

      <div className="w-full mx-auto border-b-2 border-pink-900 opacity-90 sm:w-full lg:mx-0"></div>
      <div class="mb-3 text-2xl font-semibold text-center tracking-tight text-sky-900">خدماتنا</div>
      <div className="w-full mx-auto border-b-2 border-pink-900 opacity-90 sm:w-full lg:mx-0"></div>
</section>
*/
const home = () => {
  return (
    <div translate='no'>
      <Nav />
      <Hero />
      <section className='w-full px-1 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>
      <p className='pt-10 text-4xl font-semibold text-center sm:text-5xl text-sky-900'>خدماتنا</p>
      <section className='grid grid-cols-1 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-3 sm:gap-5'>
          <section>
            <div class="w-80">
              <Link href="/hair">
                <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">الشعر</h4>
                  <img class="object-cover w-full h-48"
                    src="https://elianassalon.com/wp-content/uploads/sites/774/2019/08/wallpaperm.jpg" alt="Hair" />
              <p className='px-4 py-2 font-mono font-bold text-center text-medium text-sky-900'>
                خدماتنا هي وسيلة رائعة للتراجع عن صخب الحياة اليومية في عمان
              </p>
                </div>
              </Link>
              
            </div>
          </section>
          <section>
            <div class="w-80">
              <Link href="/nail">
                <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">الأظافر</h4>
                  <img class="object-cover w-full h-48"
                    src="./assest/nails1.jpg" alt="Nails" />
             <p className='px-4 py-2 font-mono font-bold text-center text-medium text-sky-900'>
                من لحظة دخولك الباب ، ينصب تركيزنا على راحتك التامة
                نحن خبراء في ما نقوم به</p>
                </div>
              </Link>
              
            </div>
          </section>
          <section>
            <div class="w-80">
            <Link href="/face">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
              <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">البشرة</h4>
                <img class="object-cover w-full h-48"
                  src="./assest/face5.jpg" alt="Face" />
             <p className='px-4 py-2 font-mono font-bold text-center text-medium text-sky-900'>
                لقد ميزنا أنفسنا في كل جانب من جوانب خدماتنا ومنتجاتنا وأجواءنا
              </p>
              </div>
              </Link>
              
            </div>
          </section>
          <section>
            <div class="w-80">
            <Link href="/massage">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
              <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">المساج</h4>
                <img class="object-cover w-full h-48"
                  src="./assest/masag.jpg" alt="Masag" />
              <p className='px-4 py-2 font-mono font-bold text-center text-medium text-sky-900'>
                زورينا لتنالي قسطا من الراحة معنا في سيلا بيوتي سنتر
              </p>
              </div>
              </Link>
              
            </div>
          </section>
          <section>
            <div class="w-80">
            <Link href="/makeup">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
              <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">المكياج</h4>
                <img class="object-cover w-full h-48"
                  src="./makeup.jpg" alt="Makeup" />
              <p className='px-4 py-2 font-mono font-bold text-center text-medium text-sky-900'>
                نحن نسعى بكل فخر لتصنيف سيلا بيوتي سنتر كواحد من الأفضل والأنظف والأكثر صحة في المدينة
              </p>
              </div>
              </Link>
             
            </div>
          </section>
          <section>
            <div class="w-80">
            <Link href="/others">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
              <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">خدمات اخرى</h4>
                <img class="object-cover w-full h-48"
                  src="./cella6.jpg" alt="others" />
  <p className='px-4 py-2 font-mono font-bold text-center text-medium text-sky-900'>
                سيعمل فريقنا المحترف إلى تدليلك
              </p>
              </div>
              </Link>
            </div>
          </section>
        </section>

<p className='pt-10 pb-5 text-4xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>منتجات برودافريكا</p>
<section className='grid grid-cols-1 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-1 sm:gap-5'>
          <section>
            <div class="w-80">
              <Link href="/face">
                <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">برودافريكا</h4>
                  <img class="object-cover w-full h-48"
                    src="./assestafrica/africa1.jpg" alt="Hair" />
              
                </div>
              </Link>
              
            </div>
          </section>

</section>

        <p className='pt-10 pb-5 text-4xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>معرض الصور</p>
  
        <Footer />
      </section>
    </div>
  )
}
export default home
/*
<div className='px-20'>
<p class="bg-sky-900 opacity-50 h-0.5 rounded-full"></p>
</div>
*/
/*
<div className='w-full sm:w-12/12'>
<section className='grid grid-cols-1 justify-items-center ... gap-10 py-10 5 mx-2 sm:mx-0 sm:grid-cols-1 sm:gap-5'>
<Caros/>
</section>
</div>
*/