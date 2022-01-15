import React from 'react';
import Link from "next/link";
const Footer = () => {
    return (
        <>




            <div className="pt-3 mx-auto border-b-2 border-pink-900 opacity-25 w-5/5 sm:w-5/5 lg:mx-0"></div>
            <section className='py-10 justify-center ...'>
                <section className='py-8 opacity-75 bg-fuchsia-100 align-center'>
                    <div className='grid items-center text-xl font-bold text-center sm:grid-cols-1 text-sky-900 '>
                        <div className='justify-center ...'>
                            <iframe className='w-5/6 h-auto px-0 py-3 pl-12 sm:pl-0 sm:px-10 sm:w-full sm:h-96 rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9692.582730983906!2d35.884355085248224!3d32.06012974125795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xccadd703c7e3d5a7!2sCella%20Beauty%20Center!5e0!3m2!1sar!2sjo!4v1642220212245!5m2!1sar!2sjo" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className='pt-3'>
                            <p>
                                ساعات العمل</p>
                            <p className='text-sm sm:text-xl'> 9:00 am - 7:00 pm</p>
                        </div>
                        <div className='sm:pr-5 pr-3 text-sm sm:text-xl sm:pt-7 pt-4  grid justify-center ...'>
                        <p class="mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            class="w-4 sm:w-5 mr-2 float-left " role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
          0782950960
        </p>
                        </div>
                    </div>
                </section></section>
            <section class='bg-white text-sky-900 ' id='profilefoot'>
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
                                <a className="rounded-full hover:scale-125" href="https://www.instagram.com/mhmadwrekatt?r=nametag"
                                    data-tippy-content="Instagram">
                                    <img src='./assest/instagram.png'
                                        className='w-6 h-6 fill-current' /></a>
                            </div>
                            <div class="flex items-center mt-6">
                                <p class="font-mono text-xs opacity-75 pt-3 hover:scale-105 text-sky-900">Inc. All Rights Reserved</p>
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
        </>
    )
}
export default Footer