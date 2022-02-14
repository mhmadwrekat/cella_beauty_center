import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from "next/link";
import Hero from '../components/Hero';
//import Slide from "react-awesome-reveal";
import Carosal from '../components/Carosal';

const home = () => {
  return (
    <div translate='no'>
      <Nav />
      <Hero />
      <section className='w-full px-1 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>
        <p id='Services' 
        className='pt-10 text-4xl font-semibold text-center sm:text-5xl text-sky-900'>خدماتنا</p>
        <section className='grid grid-cols-2 justify-items-center ... gap-10 py-10 mx-3 sm:mx-0 sm:grid-cols-4 sm:gap-5'>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">الشعر</h4>
                <Link href="/hair">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assesthair/hair53.jpg" alt="Hair" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  خدماتنا هي وسيلة رائعة للتراجع عن صخب الحياة اليومية في عمان
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">الأظافر</h4>
                <Link href="/nail">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assest/nails1.jpg" alt="Nails" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  من لحظة دخولك ينصب تركيزنا على راحتك
                  نحن خبراء في ما نقوم به</p>
              </div>
            </div>
          </section>
          <section id="asasas">
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">البشرة</h4>
                <Link href="/face">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assest/face5.jpg" alt="Face" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  لقد ميزنا أنفسنا في جوانب خدماتنا ومنتجاتنا وأجواءنا
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">المساج</h4>
                <Link href="/massage">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assest/masag.jpg" alt="Massage" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  زورينا لتنالي قسطا من الراحة معنا في سيلا بيوتي سنتر
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className='grid grid-cols-2 justify-items-center ... gap-10 mx-3 sm:mx-0 sm:grid-cols-2 sm:gap-5'>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">المكياج</h4>
                <Link href="/makeup">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./makeup.jpg" alt="Makeup" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  نسعى  لتصنيف سيلا سنتر من الأفضل والأنظف والأكثر صحة
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900"> خدمات اخرى</h4>
                <Link href="/others">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./cella6.jpg" alt="others" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  سيعمل فريقنا المحترف إلى راحتك و تدليلك بافضل الاسعار
                </p>
              </div>
            </div>
          </section>
        </section>
        <p id='Product' 
        className='pt-12 pb-5 text-4xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>منتجات برودافريكا</p>
        <section className='grid grid-cols-1 justify-items-center ... gap-10 py-5 mx-5 sm:mx-0 sm:grid-cols-1 sm:gap-5'>
          <section>
            <div class="w-72 lg:w-80">
              <Link href="/face">
                <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                  <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">برودافريكا</h4>
                  <img class="object-cover w-full h-48 hover:scale-110"
                    src="./assestafrica/africa1.jpg" alt="face" />
                </div>
              </Link>
            </div>
          </section>
        </section>
        <div id='Image' className='pt-2'></div>
<Carosal />
{/*
        <p className='pt-10 pb-5 text-4xl font-semibold text-center sm:pb-0 sm:text-5xl text-sky-900'>معرض الصور</p>
        <Slide triggerOnce>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-2/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmain/main28.jpg"
                      onClick={() => { window.open('./assestmain/main28.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-2/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestmain/main29.jpg"
                      onClick={() => { window.open('./assestmain/main29.jpg', '_self') }} />
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
                      src="./cella5.jpg"
                      onClick={() => { window.open('./cella5.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./cella2.jpg"
                      onClick={() => { window.open('./cella2.jpg', '_self') }} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./cella3.jpg"
                      onClick={() => { window.open('./cella3.jpg', '_self') }} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./cella4.jpg"
                      onClick={() => { window.open('./cella4.jpg', '_self') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>
*/}
<div id='Info'></div>
        <Footer />
      </section>
    </div>
  )
}
export default home
/*
 <section className='grid grid-cols-1 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-3 sm:gap-5'>
          <section>
            <div class="w-80">
            <Link href="/hair">
                <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                  <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">الشعر</h4>
                  <img class="object-cover w-full h-48"
                    src="./assesthair/hair53.jpg" alt="Hair" />
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
 
*/