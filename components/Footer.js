import React, { useRef } from "react";
import Link from "next/link";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
const Footer = () => {
    {/* POST FEEDBACK */ }
    const form = useRef();
    const handelFeedback = (event) => {
        event.preventDefault();
          const feedback = {
              name: event.target.name.value,
              email: event.target.email.value,
              number:event.target.number.value,
              day:event.target.day.value,
              message: event.target.message.value,
              author: 2
          }
              //  createFeedback(feedback);
          swal("تم بنجاح", "شكرا لك , سيتم التواصل معك عن قريب", "success");
          emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${USER_ID}`);
          event.target.reset();
          }
      {/* END POST FEEDBACK */ }
    return (
        <>
        <section className="bg-gradient-to-r from-white to-fuchsia-100">
 {/* FEEDBACK FORM */}
 <section className="pt-10 text-gray-900 sm:pt-10 ">
<div className="text-gray-100 opacity-95">
<div className="container flex flex-col mx-auto md:flex-row">
<div className="container w-full px-4">
<div className="flex flex-wrap justify-center">
<div className="w-full px-4 lg:w-5/12">
<div
className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-gradient-to-r from-purple-300 to-purple-500 opacity-90">
<div className="flex-auto p-5 lg:p-10">
<h4 className="mb-3 text-2xl font-semibold text-center">!! للحجز والأستفسار</h4>
<form id="feedbackForm" method='post' onSubmit={handelFeedback} ref={form}>
<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="email">الأسم</label>
<input type="text" name="name" id="name"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
placeholder="Cella Ahmad"
required />
</div>
<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="email">الأيميل</label>
<input type="email" name="email" id="email"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
 placeholder="Cella@gmail.com"
required />
</div>
<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="number">الهاتف</label>
<input type="number" name="number" id="number" 
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
placeholder="0799999999"
required />
</div>
<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="day">التوقيت</label>
<input  type="datetime-local" name="day" id="day"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
required />
</div>
<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="message">الحجز / الخدمة</label>
<textarea maxlength="300" name="message" id="feedback" rows="1"
cols="80"
className="w-full px-3 py-3 text-sm text-gray-800 bg-gray-100 border-0 rounded shadow placeholder-gyay-400 focus:outline-none"
placeholder="Hair | Nails | Face | Makeup" required></textarea>
</div>
<div className="mt-6 text-center">
<button id="feedbackBtn" type="submit"
className="px-6 py-3 mx-auto mb-1 mr-1 text-sm font-bold text-center text-gray-200 uppercase bg-pink-600 rounded shadow outline-none hover:bg-sky-900 cursor-alias active:bg-yellow-400 hover:shadow-lg focus:outline-none"
                                                            >أرسال
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











            <section id='Info' translate='no' className='pt-10 justify-center ...'>
                <section className='py-8 opacity-75 align-center'>
                    <div className='grid items-center text-xl font-bold text-center sm:grid-cols-1 text-sky-900 '>
                        <div className='justify-center ...'>
                            <iframe className='w-full h-auto px-0 py-3 sm:pl-0 sm:px-10 sm:w-full sm:h-96 rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9692.582730983906!2d35.884355085248224!3d32.06012974125795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xccadd703c7e3d5a7!2sCella%20Beauty%20Center!5e0!3m2!1sar!2sjo!4v1642220212245!5m2!1sar!2sjo" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className='sm:pr-5 text-sm sm:text-xl sm:pt-7 pt-5 grid justify-center ...'>
                            <div class="flex flex-wrap justify-center space-x-2 items-end">
<Link href='tel:0782950960'>
<span
class="mx-4 rounded-full text-sky-900 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">

<img class="rounded-full sm:w-10 sm:h-10 w-8 h-8 max-w-none" alt="A"
src="https://cdn-icons-png.flaticon.com/512/724/724664.png" />

<a class="flex items-center sm:px-3 px-2 py-1 sm:py-2" href="tel:0782950960">0782950960</a>
</span>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <p>
                                ساعات العمل</p>
                            <p className='text-sm sm:text-xl'> 10:00 am - 8:00 pm</p>
                        </div>                    </div>
                </section></section>
            <section translate='no' class='bg-white text-sky-900 ' id='profilefoot'>
                <div>
                    <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-9">
                        <div class="flex flex-col items-center justify-center">
                            <Link href="/">
                                <img class='cursor-grab	hover:scale-110'
                                    src='./cellalogo.jpg' width="130" height="30" />
                            </Link>
                            <div class="flex items-center gap-x-8 mt-4">
                                <a href="https://wa.me/+962782950960" data-tippy-content="WhatsApp">
                                    <img src='./assest/whatsapp.png'
                                        className='w-6 h-6 fill-current' />
                                </a>
                                <a className="pb-0.5 rounded-full hover:scale-125" href="https://www.facebook.com/cella.center/"
                                    data-tippy-content="Facebook">
                                    <img src='./assest/facebook.png'
                                        className='w-6 h-6 fill-curren' />
                                </a>
                                <a className="rounded-full hover:scale-125" href="https://www.instagram.com/cella_center"
                                    data-tippy-content="Instagram">
                                    <img src='./assest/instagram.png'
                                        className='w-6 h-6 fill-current' /></a>
                            </div>
                            <div class="flex items-center mt-6">
                                <p class="font-mono text-xs opacity-75 sm:pt-0 pt-3 hover:scale-105 text-sky-900">Inc. All Rights Reserved</p>
                                <div class="opacity-75 border-l border-gray-800 sm:pl-2 sm:ml-2">
                                    <a href='https://wa.me/+962788818125' class="text-sky-900 sm:block hidden font-mono text-xs hover:scale-105">2022 <span class="text-xs font-mono">MHMAD
                                        WREKAT</span></a>
                                </div>
                            </div>
                            <a href='https://wa.me/+962788818125' class="text-sky-900 opacity-75 block sm:hidden pt-2 font-mono text-xs hover:scale-105">2022 <span class="text-sky-900 text-xs font-mono">MHMAD
                                WREKAT</span></a>
                        </div>
                    </div>
                </div>
            </section>
            </section>

        </>
    )
}
export default Footer
