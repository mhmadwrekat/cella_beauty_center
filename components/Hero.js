import React from 'react';
const Hero = () => {
    return (
        <>
            <div className='pt-20'></div>
            <div className=" bg-cover h-screen bg-[url('https://latelierhairdressing.com/wp-content/uploads/2016/04/Beauty-Salon.jpg')]">
                <div className='hidden sm:flex'>
                    <h4 translate='no' className='absolute float-right text-3xl font-semibold text-right text-sky-900 w-96 top-80 right-32'>
                        مركز سيلا للتجميل هو مركز تجميل على احدث طراز,
                        متخصصون في تصفيف الشعر والمكياج للعرائس, احدث صيحات الالوان والعناية بالأظافر والسكر وعلاجات الوجه والمزيد!!
                    </h4>
                </div>
            </div>
            <section className='absolute w-full text-center bg-white opacity-70 sm:hidden top-72'>
                <section className='relative'>
                    <div class="relative py-5 sm:hidden overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                        <h4 translate='no' class="mb-3 text-xl font-semibold text-center tracking-tight text-sky-900"><h4 className='px-5 text-lg font-semibold text-center text-sky-900'>
                            مركز سيلا للتجميل هو مركز تجميل على احدث طراز
                            متخصصون في تصفيف الشعر والمكياج للعرائس احدث صيحات الالوان والعناية بالأظافر والسكر وعلاجات الوجه والمزيد
                        </h4></h4>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Hero