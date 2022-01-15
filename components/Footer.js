import React from 'react';
import Link from "next/link";
import Test from './text';
const Footer = () => {

    return (
        <>















<div className="pt-3 mx-auto border-b-2 border-pink-900 opacity-25 w-5/5 sm:w-5/5 lg:mx-0"></div>

        
            <section className='py-10 justify-center ...'>
                <section className='py-8 opacity-75 bg-fuchsia-100 align-center'>
                    <div className='grid items-center text-xl font-bold text-center sm:grid-cols-1 text-sky-900 '>

                    <div className='justify-center ...'>
                            <iframe className='w-5/6 h-auto px-3 py-3 sm:px-10 sm:w-full sm:h-96 rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9692.582730983906!2d35.884355085248224!3d32.06012974125795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xccadd703c7e3d5a7!2sCella%20Beauty%20Center!5e0!3m2!1sar!2sjo!4v1642220212245!5m2!1sar!2sjo" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className=''>
                            <p>
                                ساعات العمل</p>
                            <p className='text-base sm:text-xl'> 9:00 am - 7:00 pm</p>
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
