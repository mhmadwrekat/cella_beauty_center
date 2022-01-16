import Head from 'next/head';
import Link from "next/link";
import React, { useEffect } from "react";
const Nav = () => {
  useEffect(() => {
    try {
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    } catch (error) {
      handleError(error);
    }
    function handleError(error) {
      console.error(error);
    }
  }, []);
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
            <nav id="header" className="fixed top-0 z-30 w-full font-sans text-white bg-white">
              <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                <Link href='/'>
                  <img className='w-2/6 sm:w-1/6 hover:scale-110 cursor-grab'
                    src='./cellalogo.jpg' />
                </Link>
                        <ul class="flex flex-col mt-3 md:flex-row md:space-x-8 md:mt-0 text-sm sm:text-xl">
                            <Link href='/'>
                                <li>
<p translate='no' 
class="cursor-grab hover:scale-110 block py-2 pr-4 font-bold pl-3 text-sky-900 
hover:text-violet-600 rounded md:bg-transparent md:p-0">الرئيسية</p>
                                </li>
                            </Link>
                        </ul>
                <div class="flex items-right mt-2">
                  <a href="https://wa.me/+962782950960" data-tippy-content="WhatsApp">
                    <button translate='no' class="bg-gradient-to-r from-purple-500 to-pink-500 ... hover:bg-pink-800 animate-bounce text-white font-bold py-2 px-4 rounded-full">
                      أحجزي موعدك
                    </button>
                  </a>
{/*                  <button class="mobile-menu-button" type="button" >
                    <span class="sr-only">Open main menu</span>
                    <svg class="text-gray-900 md:hidden flex w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>*/}
                </div>
                    </div>
{/*
              <div class='hidden mobile-menu md:hidden w-full bg-white opacity-80 border-gray-900'>
                <ul class="flex flex-col md:flex-row md:space-x-0 md:mt-0 md:text-medium md:font-medium font-bold text-center">
                  <li className='py-3'>
                    <a class="cursor-grab  hover:scale-110 py-2 text-violet-900 text-center hover:text-violet-600 rounded md:p-0"> الرئيسية</a>
                  </li>
                  <li className='py-3'>
                    <a href="" class="cursor-grab hover:scale-110 py-2  text-center no-underline text-violet-900 hover:text-violet-600 md:p-0">خدماتنا</a>
                  </li>
                  <li className='py-3'>
                    <a href="" class="cursor-grab hover:scale-110 py-2  text-center no-underline text-violet-900 hover:text-violet-600 md:p-0">من نحن</a>
                  </li>
                  <li className='py-3'>
                    <a href="" class="cursor-grab hover:scale-110 py-2  text-center no-underline text-violet-900 hover:text-violet-600 md:p-0">اتصل بنا</a>
                  </li>
                </ul>
</div>*/}
              <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
            </nav>
          </div>
        </section>
      </>
    </>
  )
}
export default Nav