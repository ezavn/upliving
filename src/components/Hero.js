import React from "react";

export default function Hero() {
  return (
    <section className="hero bg-[url('../public/images/upl-hero.png')] bg-center bg-no-repeat bg-cover pt-[50px] md:pb-[120px] h-[90vh] md:h-auto overflow-x-hidden">
      <div className="max-w-[900px] mx-auto relative">
        <div className="absolute bottom-[210px] left-[30px] lg:bottom-[190px] lg:left-0 md:block hidden">
          <img src="./icons/coin-icon1.svg" alt="" />
        </div>
        <div className="absolute top-[330px] right-0 lg:top-[230px] lg:right-[-20px] md:block hidden">
          <img src="./icons/coin-icon2.svg" alt="" />
          <img
            className="light absolute top-[30px] right-0"
            src="./icons/light-icon1.svg"
            alt=""
          />
        </div>
        <div className="logo flex justify-center items-center mb-[80px]">
          <a href="/" className="inline-block">
            <img src="./images/upl-logo.svg" alt="Upliving logo" />
          </a>
        </div>
        <div className="content">
          <h3 className="title title1 mb-[-10px] md:mb-[-20px]">GIÃI MÃ</h3>
          <h1 className="title title2">NHÀ SINH TIỀN</h1>
          <div className="flex items-start justify-between">
            <div className="relative flex-1 w-full">
              <h4 className="w-[150px] md:w-[100%] title3 absolute top-0 left-[20px] md:left-[60px] lg:left-[130px]">
                Tăng tốc tiến đến
              </h4>
            </div>
            <div className="relative">
              <img
                className="ml-[100px] md:ml-0 md:mr-[50px] w-[65%] md:w-[80%] lg:w-auto"
                src="./images/hero-title.svg"
                alt=""
              />
              <img
                className="absolute top-[40px] left-[105px] md:top-[85px] md:left-[40px] light2"
                src="./icons/light-icon2.svg"
                alt=""
              />
            </div>
          </div>
          <p className="text-[16px] md:text-[20px] font-sanUL text-justify md:text-center px-[20px] md:px-[80px] mt-[20px] md:mt-[10px] leading-[1.8]">
            Bằng lộ trình đã được minh chứng về cách đạt được thành công nhanh
            hơn và hiệu quả hơn với cộng đồng nhà đầu tư Nhà Sinh Tiền có cùng
            chí hướng.
          </p>
          <div className="mt-[60px] md:mt-[40px] text-center">
            <a className="btn-grd" href="#register">
              Tham gia lộ trình
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
