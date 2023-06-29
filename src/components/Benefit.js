import React from "react";

export default function Benefit() {
  return (
    <section className="benefit py-sectionMB md:py-section bg-[url('../public/images/benefit-bg.png')] bg-center-center bg-no-repeat bg-cover">
      <div className="page-container">
        <h4
          className="text-[24px] md:text-[28px] lg:text-[36px] font-sanB lg:mb-[10px] text-center"
          data-aos="fade-down"
          data-aos-offset="200"
        >
          LỢI ÍCH KHI THAM GIA HỘI THẢO
        </h4>
        <h2 className="title" data-aos="fade-up" data-aos-offset="200">
          GIẢI MÃ NHÀ SINH TIỀN
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-[50px] relative mt-[20px] md:mt-[30px] lg:mt-[50px]">
          <div className="md:block hidden absolute top-[130px] lg:top-[55px] lg:left-[-25px] z-0">
            <img
              className="object-cover w-full h-full lg:w-auto lg:h-auto"
              src="./images/upl-line.png"
              alt=""
            />
          </div>
          <div className="lg:h-[350px] flex flex-col justify-center">
            <img
              className="object-cover w-full h-full lg:w-auto lg:h-auto"
              src="./images/benefit1.png"
              alt=""
            />
          </div>
          <div className="lg:h-[350px]">
            <img
              className="object-cover w-full h-full lg:w-auto lg:h-auto"
              src="./images/benefit2.png"
              alt=""
            />
          </div>
          <div className="lg:h-[350px] flex flex-col justify-end">
            <img
              className="object-cover w-full h-full lg:w-auto lg:h-auto"
              src="./images/benefit3.png"
              alt=""
            />
          </div>
          <div className="lg:h-[350px] flex flex-col justify-center">
            <img src="./images/benefit4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
