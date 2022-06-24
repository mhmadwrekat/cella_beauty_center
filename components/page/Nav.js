import Link from "next/link";
import React, { useEffect } from "react";
import HeadComp from "./HeadComp";
const Nav = () => {
  // useEffect(() => {
  //   try {
  //     const btn = document.querySelector("button.mobile-menu-button");
  //     const navButton1 = document.querySelector("button.navButton1");
  //     const navButton2 = document.querySelector("button.navButton2");
  //     const navButton3 = document.querySelector("button.navButton3");
  //     const navButton4 = document.querySelector("button.navButton4");
  //     const menu = document.querySelector(".mobile-menu");
  //     btn.addEventListener("click", () => {
  //       menu.classList.toggle("hidden");
  //     });
  //     navButton1.addEventListener("click", () => {
  //       menu.classList.toggle("hidden");
  //     });
  //     navButton2.addEventListener("click", () => {
  //       menu.classList.toggle("hidden");
  //     });
  //     navButton3.addEventListener("click", () => {
  //       menu.classList.toggle("hidden");
  //     });
  //     navButton4.addEventListener("click", () => {
  //       menu.classList.toggle("hidden");
  //     });
  //   } catch (error) {
  //     handleError(error);
  //   }
  //   function handleError(error) {
  //     console.error(error);
  //   }
  // }, []);
  return (
    <React.Fragment>
      <React.Fragment>
        <HeadComp />
        <section>
          <div className="leading-normal tracking-normal text-white gradient">
            <nav
              id="header"
              className="z-30 w-full font-sans text-white bg-white"
            >
              <div className="container flex flex-wrap items-center justify-center w-full py-2 mx-auto mt-0">
                <Link href="/">
                  <img
                    className="w-2/6 sm:w-1/6 hover:scale-110 cursor-grab"
                    src="./cellalogo.jpg"
                  />
                </Link>
              </div>
              <div class="hidden mobile-menu w-full bg-white opacity-80 border-gray-900"></div>
              <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
            </nav>
          </div>
        </section>
      </React.Fragment>
      <section className="w-full sticky top-0 z-50 bg-white " dir="rtl">
        <ul className="text-pink-700 overflow-x-auto flex justify-start items-center lg:justify-center md:space-x-0 md:mt-0 text-center font-TSbold text-sm lg:text-xl">
          <li className="px-2 lg:px-8">
            <a href="#Form" data-tippy-content="WhatsApp">
              <span className=" h-0 w-0">
                <span className="animate-ping absolute inline h-4 w-4 rounded-full bg-blue-500"></span>
                <span className="relative rounded-full h-0 w-0 bg-blue-800"></span>
              </span>
              <button
                translate="no"
                className="hover:text-violet-400 bg-pink-700 text-white font-bold py-1 my-1 px-3 rounded-full lg:w-auto w-28"
              >
                أحجزي موعدك
              </button>
            </a>
          </li>
          <li className="px-2 lg:px-8">
            <a
              href="#Services"
              className="cursor-grab hover:scale-110 py-2  text-center no-underline hover:text-violet-600 md:p-0"
            >
              خدماتنا
            </a>
          </li>
          <li className="px-2 lg:px-8">
            <div className="w-28 lg:w-auto">
              <a
                href="#Product"
                className="cursor-grab hover:scale-110 py-2 text-center no-underline hover:text-violet-600 md:p-0"
              >
                منتجات برودافريكا
              </a>
            </div>
          </li>
          {/* <li className="px-2 lg:px-8">
            <div className="w-20 lg:w-auto">
              <a
                href="#Image"
                class="cursor-grab hover:scale-110 py-2 text-center hover:text-violet-600 rounded md:p-0"
              >
                {" "}
                معرض الصور
              </a>
            </div>
          </li> */}
          <li className="px-2 lg:px-8">
            <div className="w-12 lg:w-auto">
              <a
                href="#Info"
                class="cursor-grab hover:scale-110 py-2 text-center no-underline hover:text-violet-600 md:p-0"
              >
                اتصل بنا{" "}
              </a>
            </div>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};
export default Nav;
