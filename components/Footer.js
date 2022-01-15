import React from 'react';
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <section className='py-10 grid justify-center ...'>
                <section className='px-20 py-10 bg-fuchsia-100 opacity-75 align-center'>
                    <div className='flex flex-col items-center text-xl font-bold text-center text-sky-900  '>
                        <div className='px-3'>
                            <p>
                                <img src='./assest/map.png' className='inline w-6 h-6 mr-2 fill-current ' />
                                موقعنا
                            </p>
                            <p className='text-base sm:text-xl'>أبو نصير - مقابل أبو ليلى و فوق ملبوسات كاكاو</p>
                        </div>
                        <div className="w-4/5 pt-3 mx-auto border-b-2 border-pink-900 opacity-25 sm:w-2/5 lg:mx-0"></div>
                        <div className='px-3 py-2'>
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
