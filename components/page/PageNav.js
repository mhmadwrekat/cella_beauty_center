import Head from "next/head";
import Link from "next/link";
import React from "react";
const PageNav = () => {
  return (
    <>
      <Head>
        <title>Cella Center</title>
        <link rel="icon" href="/assest/saloon.png" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Cella Bueaty Center - Amman-Abunsair"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>
      <>
        <section>
          <div className="leading-normal tracking-normal text-white gradient">
            <nav
              id="header"
              className="fixed top-0 z-30 w-full font-sans text-white bg-white"
            >
              <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                <Link href="/">
                  <img
                    className="w-2/6 sm:w-1/6 hover:scale-110 cursor-grab"
                    src="./cellalogo.jpg"
                    alt="cella logo"
                  />
                </Link>
                <ul className="flex flex-col mt-3 md:flex-row md:space-x-8 md:mt-0 text-sm sm:text-xl">
                  <Link href="/">
                    <li>
                      <p
                        translate="no"
                        className="cursor-grab hover:scale-110 block py-2 pr-4 font-bold pl-3 text-sky-900 hover:text-violet-600 rounded md:bg-transparent md:p-0"
                      >
                        الرئيسية
                      </p>
                    </li>
                  </Link>
                </ul>
                <div className="flex items-right mt-2">
                  <a href="#Form" data-tippy-content="WhatsApp">
                    <button
                      translate="no"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 ... hover:bg-pink-800 animate-bounce text-white font-bold py-2 px-3 rounded-full"
                    >
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
    </>
  );
};
export default PageNav;
