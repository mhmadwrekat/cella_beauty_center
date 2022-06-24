import React, { useRef } from "react";
import Link from "next/link";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
const Footer = () => {
  {
    /* POST FEEDBACK */
  }
  const form = useRef();
  const handelFeedback = (event) => {
    event.preventDefault();
    const feedback = {
      name: event.target.name.value,
      email: event.target.email.value,
      number: event.target.number.value,
      day: event.target.day.value,
      message: event.target.message.value,
      author: 2,
    };
    //  createFeedback(feedback);
    swal("تم بنجاح", "شكرا لك , سيتم التواصل معك عن قريب", "success");
    emailjs.sendForm(
      `${SERVICE_ID}`,
      `${TEMPLATE_ID}`,
      form.current,
      `${USER_ID}`
    );
    event.target.reset();
  };
  {
    /* END POST FEEDBACK */
  }
  return (
    <>
      <section className="lg:pt-0 pt-5">
        {/* FEEDBACK FORM */}
        <section className="pt-10 text-gray-900 lg:pt-14 lg:bg-top bg-right bg-cover bg-no-repeat bg-fixed h-auto bg-Cella">
          <div className="text-gray-100">
            <div className="container flex flex-col mx-auto md:flex-row">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-5/12 pb-10">
                    <div className="relative flex flex-col w-full min-w-0 mb-0 break-words rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-pink-800 opacity-90">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="mb-3 text-2xl font-TSExtra text-center">
                          !! للحجز والأستفسار
                        </h4>
                        <form
                          id="feedbackForm"
                          method="post"
                          onSubmit={handelFeedback}
                          ref={form}
                        >
                          <div className="relative w-full mb-3">
                            <label
                              className="block float-right mb-2 text-xs font-TSbold uppercase"
                              htmlFor="email"
                            >
                              الأسم
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
                              placeholder="Cella Ahmad"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block float-right mb-2 text-xs font-TSbold uppercase"
                              htmlFor="email"
                            >
                              الأيميل
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
                              placeholder="Cella@gmail.com"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block float-right mb-2 text-xs font-TSbold uppercase"
                              htmlFor="number"
                            >
                              الهاتف
                            </label>
                            <input
                              type="number"
                              name="number"
                              id="number"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
                              placeholder="0799999999"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block float-right mb-2 text-xs font-TSbold uppercase"
                              htmlFor="day"
                            >
                              التوقيت
                            </label>
                            <input
                              type="datetime-local"
                              name="day"
                              id="day"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block float-right mb-2 text-xs font-TSbold uppercase"
                              htmlFor="message"
                            >
                              الحجز / الخدمة
                            </label>
                            <textarea
                              maxLength="300"
                              name="message"
                              id="feedback"
                              rows="1"
                              cols="80"
                              className="w-full px-3 py-3 text-sm text-gray-800 bg-gray-100 border-0 rounded shadow placeholder-gyay-400 focus:outline-none"
                              placeholder="Hair | Nails | Face | Makeup"
                              required
                            ></textarea>
                          </div>
                          <div className="mt-6 text-center">
                            <button
                              id="feedbackBtn"
                              type="submit"
                              className="px-6 py-3 mx-auto mb-1 mr-1 text-sm font-TSbold text-center text-gray-200 uppercase rounded shadow outline-none bg-sky-700 hover:bg-sky-900 cursor-alias active:bg-yellow-400 hover:shadow-lg focus:outline-none"
                            >
                              أرسال
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Info" translate="no" className="pt-10 justify-center ...">
          <section className="py-8 opacity-75 align-center">
            <div className="grid items-center text-xl font-TSbold text-center sm:grid-cols-1 text-sky-900 ">
              <div className="w-10/12 mx-auto justify-center ...">
                <iframe
                  className="w-full h-auto px-0 py-3 sm:pl-0 sm:px-10 sm:w-full sm:h-96 rounded-3xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9692.582730983906!2d35.884355085248224!3d32.06012974125795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xccadd703c7e3d5a7!2sCella%20Beauty%20Center!5e0!3m2!1sar!2sjo!4v1642220212245!5m2!1sar!2sjo"
                  allowFullScreen=""
                  loading="eager"
                  title="cella center location"
                ></iframe>
              </div>
              <div className="sm:pr-5 text-sm sm:text-xl sm:pt-7 pt-5 grid justify-center ...">
                <div className="flex flex-wrap justify-center space-x-2 items-end">
                  <Link href="tel:0782950960">
                    <span className="mx-4 rounded-full text-sky-900 bg-gray-200 font-TSbold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                      <img
                        className="rounded-full sm:w-10 sm:h-10 w-8 h-8 max-w-none shadow-2xl"
                        alt="A"
                        src="https://cdn-icons-png.flaticon.com/512/6996/6996275.png"
                      />
                      <a
                        className="flex items-center sm:px-3 px-2 py-1 sm:py-2 text-pink-700"
                        href="tel:0782950960"
                      >
                        0782950960
                      </a>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="pt-2 text-pink-700">
                <p>ساعات العمل</p>
                <p className="text-sm sm:text-xl"> 10:00 am - 8:00 pm</p>
              </div>{" "}
            </div>
          </section>
        </section>
        <section
          translate="no"
          className="bg-white text-pink-700 "
          id="profilefoot"
        >
          <div>
            <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-9">
              <div className="flex flex-col items-center justify-center">
                <Link href="/">
                  <img
                    alt="بيوتي سينتر سيلا"
                    className="cursor-grab	hover:scale-110"
                    src="./cellalogo.jpg"
                    width="130"
                    height="30"
                  />
                </Link>
                <div className="flex items-center gap-x-8 mt-4">
                  <a
                    href="https://wa.me/+962782950960"
                    data-tippy-content="WhatsApp"
                  >
                    <img
                      src="./assest/whatsapp.png"
                      className="w-6 h-6 fill-current"
                      alt="واتس اب"
                    />
                  </a>
                  <a
                    className="pb-0.5 rounded-full hover:scale-125"
                    href="https://www.facebook.com/cella.center/"
                    data-tippy-content="Facebook"
                  >
                    <img
                      src="./assest/facebook.png"
                      className="w-6 h-6 fill-curren"
                      alt="فيسبووك"
                    />
                  </a>
                  <a
                    className="rounded-full hover:scale-125"
                    href="https://www.instagram.com/cella_center"
                    data-tippy-content="Instagram"
                  >
                    <img
                      src="./assest/instagram.png"
                      className="w-6 h-6 fill-current"
                      alt="انستا"
                    />
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <p className="font-mono text-xs opacity-75 sm:pt-0 pt-3 hover:scale-105 text-pink-700">
                    Inc. All Rights Reserved
                  </p>
                  <div className="opacity-75 border-l border-gray-800 sm:pl-2 sm:ml-2">
                    <a
                      href="https://www.wrekat.com"
                      className="text-pink-700 sm:block hidden font-TSbold text-xs hover:scale-105"
                    >
                      2022{" "}
                      <span className="text-pink-700 text-xs font-TSbold">
                        MHMAD WREKAT
                      </span>
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.wrekat.com"
                  className="text-pink-700 block sm:hidden pt-2 font-TSbold text-xs hover:scale-105"
                >
                  2022{" "}
                  <span className="text-pink-700 text-xs font-TSbold">
                    MHMAD WREKAT
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Footer;
