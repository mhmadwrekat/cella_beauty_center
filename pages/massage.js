import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from "next/link";
import { Slide, Flip, Fade } from "react-awesome-reveal";
const massage = () => {
    return (
        <>
          <Nav/>
          <section className='pt-16 bg-gradient-to-r from-white to-fuchsia-100' translate='no'>

          <div>
          <img src='./assestmain/main21.jpg' class="w-full" />
                <div className='hidden sm:flex'>
                    <h4 className='absolute float-right px-5 py-5 text-2xl font-semibold text-right bg-white opacity-75 rounded-2xl text-sky-900 w-96 top-60 right-36'>
                    من اهم 
                    فوائد المساج يزيد من نشاط الدورة الدموية
                    والتخلص من الأرق
                    و
                    يحسّن من لون البشرة، إذ يساعد على التخلص من خلايا البشرة الميّتة، ويجدد الأنسجة
ما تترددي واحجزي لتدللي حالك
 </h4>
                </div>
            </div>
            <section className='absolute w-4/6 py-2 text-center bg-white opacity-75 sm:hidden rounded-2xl top-20 right-1'>
                <section className='relative'>
                    <div class="relative sm:hidden overflow-hidden rounded-lg  cursor-pointer">
                        <h4 class="mb-3 text-sm font-semibold text-center tracking-tight text-sky-900">
                          <h4 className='px-1 font-semibold text-center text-sky-900'>
                          من اهم 
                    فوائد المساج يزيد من نشاط الدورة الدموية
                    والتخلص من الأرق
                    و
                    يحسّن من لون البشرة، إذ يساعد على التخلص من خلايا البشرة الميّتة، ويجدد الأنسجة
ما تترددي واحجزي لتدللي حالك
                            </h4></h4>
                    </div>
                </section>
            </section>
{/* S 1 */}
<Slide triggerOnce>
<section class="overflow-hidden text-gray-700">
<div class="container px-2 py-2 mx-auto lg:pt-24 lg:px-20">
<div class="flex flex-wrap -m-1 md:-m-2">
<div class="flex flex-wrap w-1/2">
<div class="w-1/2 p-1 md:p-2">
<img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
          src="./assestnail/nail55.jpg"
          onClick={()=>{window.open('./assestnail/nail55.jpg','_self')}}
          />
</div>
<div class="w-1/2 p-1 md:p-2">
<img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
          src="./assestnail/nail56.jpg" 
          onClick={()=>{window.open('./assestnail/nail56.jpg','_self')}}
          />
</div>
<div class="w-full p-1 md:p-2">
<img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
          src="./assestnail/nail51.jpg" 
          onClick={()=>{window.open('./assestnail/nail51.jpg','_self')}}
          />
</div>
</div>
<div class="flex flex-wrap w-1/2">
<div class="w-full p-1 md:p-2">
<img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
          src="./assestnail/nail57.jpg" 
          onClick={()=>{window.open('./assestnail/nail57.jpg','_self')}}
          />
</div>
<div class="w-1/2 p-1 md:p-2">
<img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
          src="./assestnail/nail58.jpg" 
          onClick={()=>{window.open('./assestnail/nail58.jpg','_self')}}
          />
</div>
<div class="w-1/2 p-1 md:p-2">
<img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
          src="./assestnail/nail59.jpg" 
          onClick={()=>{window.open('./assestnail/nail59.jpg','_self')}}
          />
</div>
</div>
</div>
</div>
</section>
</Slide>
{/*

*/}
          <Footer/>  
          </section>
        </>
    )
}
export default massage
