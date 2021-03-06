import React from "react";
import PageNav from "../components/page/PageNav";
import Footer from "../components/page/Footer";
import Slide from "react-awesome-reveal";
import africaData from "./africa.json";
import Carosal from "../components/childComp/Carosal";
const face = () => {
  return (
    <>
      <PageNav />
      <section
        translate="no"
        className="pt-16 bg-gradient-to-r from-white to-fuchsia-100"
      >
        <div>
          <img src="./assestface/facehero.jpg" className="w-full" />
          <div className="hidden sm:flex">
            <h4 className="absolute float-right px-4 py-4 text-3xl font-semibold text-right bg-white opacity-75 text-sky-900 w-96 top-60 rounded-2xl left-24">
              الاهتمام بالبشرة هو ما يعطي الانطباع الرئيسي بالحيويه والشباب بغض
              النظر عن العمر الحقيقي تميّزي عن الجميع
            </h4>
          </div>
        </div>
        <section className="absolute w-full text-center sm:hidden top-20">
          <section className="relative">
            <div className="relative py-5 sm:hidden overflow-hidden rounded-lg  cursor-pointer">
              <h4 className="mb-3 text-sm font-semibold text-center tracking-tight text-sky-900">
                <h4 className="px-4 py-3 font-semibold text-center bg-white opacity-75 text-sky-900">
                  الاهتمام بالبشرة هو ما يعطي الانطباع الرئيسي بالحيويه والشباب
                  بغض النظر عن العمر الحقيقي
                  <br></br>
                  تميّزي عن الجميع
                </h4>
              </h4>
            </div>
          </section>
        </section>
        <div className="pt-4"></div>
        <Carosal />
        <div className="pt-3"></div>
        {/* S 1 */}
        <Slide triggerOnce>
          <section className="overflow-hidden text-gray-700">
            <div className="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face3.jpg"
                      onClick={() => {
                        window.open("./assestface/face3.jpg", "_self");
                      }}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face6.jpg"
                      onClick={() => {
                        window.open("./assestface/face6.jpg", "_self");
                      }}
                    />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face4.jpg"
                      onClick={() => {
                        window.open("./assestface/face4.jpg", "_self");
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face5.jpg"
                      onClick={() => {
                        window.open("./assestface/face5.jpg", "_self");
                      }}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face2.jpg"
                      onClick={() => {
                        window.open("./assestface/face2.jpg", "_self");
                      }}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="./assestface/face1.jpg"
                      onClick={() => {
                        window.open("./assestface/face1.jpg", "_self");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slide>

        <p className="pt-10 text-4xl font-semibold text-center sm:text-5xl text-sky-900">
          منتجات برودافريكا
        </p>

        <section className="grid grid-cols-2 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-4 sm:gap-5">
          {africaData.map((item) => {
            return (
              <>
                <section>
                  <div className="w-36 sm:w-60">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                      <h4 className="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">
                        {item.name}
                      </h4>
                      <img
                        className="object-cover w-full sm:h-48 h-28"
                        src={item.img}
                        alt="Face"
                      />
                      <p className="pl-1">
                        <span className="sm:px-2 sm:py-1 py-0 px-2 text-xs font-bold leading-none text-white bg-sky-300 rounded-full">
                          {item.price}JD
                        </span>
                        <a href="https://wa.me/+962782950960">
                          <span className="py-1 sm:px-2 sm:py-1 px-1 text-xs font-bold leading-none float-right rounded-full">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png"
                              className="w-5 h-5"
                            ></img>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </>
            );
          })}
        </section>
        <div id="Form"></div>
        <Footer />
      </section>
    </>
  );
};
export default face;
