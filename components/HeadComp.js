import React from "react";
import Head from "next/head";

const HeadComp = () => {
  const head_keywords = `
    cella
    cella center
    cella_center
    cella beauty center
    سيلا سنتر
    صالون سيلا
    ابونصير
    بيوتي سنتر
    ميكب
    منتجات برودافريكا
    برودافريكا
    اظافر
    جل اكستنشن
    جل كلر
      `;
  const head_description = `
      ◉ Cella Bueaty Center - Amman-Abunsair
      ◉ سيلا بيوتي سنتر - عمان - ابونصير
      ◉  خدماتنا هي وسيلة رائعة للتراجع عن صخب الحياة اليومية في عمان
      ◉ مركز سيلا للتجميل هو مركز تجميل على احدث طراز,
      متخصصون في تصفيف الشعر والمكياج للعرائس, احدث صيحات الالوان والعناية بالأظافر والسكر وعلاجات الوجه والمزيد!!
      ◉   من لحظة دخولك ينصب تركيزنا على راحتك
      نحن خبراء في ما نقوم به
      ◉ لقد ميزنا أنفسنا في جوانب خدماتنا ومنتجاتنا وأجواءنا
      ◉ زورينا لتنالي قسطا من الراحة معنا في سيلا بيوتي سنتر
      ◉ نسعى  لتصنيف سيلا سنتر من الأفضل والأنظف والأكثر صحة
      ◉ سيعمل فريقنا المحترف إلى راحتك و تدليلك بافضل الاسعار
      `;
  return (
    <React.Fragment>
      <Head>
        <title>Cella Center</title>
        <link rel="icon" href="/assest/saloon.png" />
        <meta name="keywords" content={head_keywords} />
        <meta name="description" content={head_description} />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
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
    </React.Fragment>
  );
};

export default HeadComp;
