import React from "react";
import Nav from "../components/page/Nav";
import Footer from "../components/page/Footer";
import Link from "next/link";
import Hero from "../components/page/Hero";
//import Slide from "react-awesome-reveal";
import Carosal from "../components/childComp/Carosal";

const home = () => {
  const service = [
    {
      name: "الشعر",
      img: "./assesthair/hair53.jpg",
      link: "/hair",
      desc: "خدماتنا هي وسيلة رائعة للتراجع عن صخب الحياة اليومية في عمان",
      id: 1,
    },
    {
      name: "الأظافر",
      img: "./assest/nails1.jpg",
      link: "/nail",
      desc: "من لحظة دخولك ينصب تركيزنا على راحتك نحن خبراء في ما نقوم به",
      id: 2,
    },
    {
      name: "البشرة",
      img: "./assest/face5.jpg",
      link: "/face",
      desc: "لقد ميزنا أنفسنا في جوانب خدماتنا ومنتجاتنا وأجواءنا",
      id: 3,
    },
    {
      name: "المساج",
      img: "./assest/masag.jpg",
      link: "/massage",
      desc: "زورينا لتنالي قسطا من الراحة معنا في سيلا بيوتي سنتر",
      id: 4,
    },
    {
      name: "المكياج",
      img: "/makeup.jpg",
      link: "/makeup",
      desc: "نسعى لتصنيف سيلا سنتر من الأفضل والأنظف والأكثر صحة",
      id: 5,
    },
    {
      name: " خدمات اخرى",
      img: "./cella6.jpg",
      link: "/others",
      desc: "سيعمل فريقنا المحترف إلى راحتك و تدليلك بافضل الاسعار",
      id: 6,
    },
  ];
  console.log(service);
  return (
    <div translate="no">
      <Nav />
      <Hero />
      <section id="Services" className="w-10/12 mx-auto" translate="no">
        <p className="lg:pr-12 font-TSbold lg:pt-10 pt-5 text-3xl text-right lg:text-5xl text-sky-900">
          خدماتنا
        </p>
        <section
          className="grid grid-cols-1 justify-items-center ... lg:gap-10 mx-0 sm:mx-0 lg:grid-cols-3 gap-4
         text-pink-700 text-lg lg:text-xl font-TSbold"
        >
          {service.map((item) => {
            return (
              <section key={item.id}>
                <div class="lg:w-96 w-full my-0 lg:my-5">
                  <div class="relative overflow-hidden rounded-xl shadow-lg">
                    <h4 class="my-1 tracking-tight text-center">{item.name}</h4>
                    <Link href={item.link}>
                      <div className="w-full h-56">
                        <img
                          className="object-cover w-full h-full hover:scale-110"
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                    </Link>
                    <p className="px-4 py-2 text-center text-sm lg:text-lg font-TSSemi">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </section>

        <p
          id="Product"
          className="lg:pr-12 font-TSbold lg:pt-10 pt-10 text-3xl text-right lg:text-5xl text-sky-900"
        >
          برودافريكا
        </p>
        <section className="grid lg:w-6/12 mx-auto gap-4 text-pink-700 text-lg lg:text-xl font-TSbold">
          {" "}
          <section className="text-pink-700 text-lg lg:text-xl font-TSbold">
            <div class="lg:w-full w-full my-0 lg:my-5" id="Product">
              <div class="relative overflow-hidden rounded-xl shadow-lg">
                <h4 class="my-1 tracking-tight text-center">برودافريكا</h4>
                <Link href="/face">
                  <div className="w-full h-56 lg:h-96" id="Image">
                    <img
                      className="bg-center bg-cover bg-no-repeat w-full h-full shadow-lg"
                      src="./assestafrica/cover.webp"
                      alt="برودافريكا"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </section>
          {/* <section>
            <div class="w-72 lg:w-80">
              <Link href="/face">
                <div class="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                  <h4 class="my-1 text-2xl font-semibold text-center tracking-tight text-sky-900">
                    برودافريكا
                  </h4>
                  <img
                    class="object-cover w-full h-48 hover:scale-110"
                    src="./assestafrica/africa1.jpg"
                    alt="face"
                    id="Image"
                  />
                </div>
              </Link>
            </div>
          </section> */}
        </section>
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
        <p className="lg:pr-12 font-TSbold lg:pt-10 py-5 lg:py-10 text-3xl text-right lg:text-5xl text-sky-900">
          معرض الصور
        </p>

*/}
      </section>
      {/* <Carosal /> */}
      <div id="Form"></div>
      <Footer />
    </div>
  );
};
export default home;
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
