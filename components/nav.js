import React from 'react';
import Head from 'next/head';
import Link from "next/link";
const nav = () => {
  return (
    <>
      <Head>
        <title>Cella</title>
        <link rel="icon" href="/assest/saloon.png" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Free open source Tailwind CSS Store template" />
        <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      </Head>
      <>
        <section >
          <div className="leading-normal tracking-normal text-white gradient">
            <nav id="header" className="fixed top-0 z-30 w-full text-white bg-white font-sans">
              <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                <Link href='/'>
                  <img className='w-2/6 sm:w-1/6 hover:scale-110 cursor-grab'
                    src='./cellalogo.jpg' />
                </Link>
                <div class="flex items-right gap-x-8 mt-2">
                  <a href="https://wa.me/+962782950960" data-tippy-content="WhatsApp">
                    <button class="bg-gradient-to-r from-purple-500 to-pink-500 ... hover:bg-pink-800 animate-bounce text-white font-bold py-2 px-4 rounded-full">
                      أحجزي موعدك
                    </button>
                  </a>
                </div>
              </div>
              <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
            </nav>
          </div>
        </section>
      </>
      <div className='pt-20'></div>
      <div className=" bg-cover h-screen bg-[url('https://latelierhairdressing.com/wp-content/uploads/2016/04/Beauty-Salon.jpg')]">
        <div className='hidden sm:flex'>
          <h4 className='text-sky-900 absolute text-3xl font-semibold w-96 float-right top-72 right-32 text-right'>
            مركز سيلا للتجميل هو مركز تجميل على احدث طراز,
            متخصصون في تصفيف الشعر والمكياج للعرائس, احدث صيحات الالوان والعناية بالأظافر والسكر وعلاجات الوجه والمزيد!!
          </h4>
        </div>
      </div>
    </>
  )
}
export default nav