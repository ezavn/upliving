import React from "react";

export default function Expense() {
  return (
    <section className="pb-[0px] pt-[50px] lg:py-section bg-[url('../public/images/expense-bg.png')] bg-center bg-no-repeat bg-cover overflow-x-hidden">
      <div className="max-w-[1550px] mx-auto px-[20px] lg:px-0">
        <h4
          className="lg:pt-[80px] text-center mb-[30px] lg:mb-[125px] text-[24px] md:text-[28px] lg:text-[36px] font-sanB"
          data-aos="fade-down"
        >
          PHÍ THAM DỰ
        </h4>
        <div className="max-w-[1450px] mx-auto relative bg-[url('../public/images/ex-bg2.png')] bg-center bg-no-repeat bg-cover">
          <img
            className="hidden lg:block"
            src="./images/ex-border.png"
            alt=""
          />
          <div className="relative lg:absolute flex gap-[25px] lg:top-[-93px] lg:left-[50%] lg:translate-x-[-50%]">
            <div data-aos="fade-right">
              <img src="./images/ex1.png" alt="" />
            </div>
            <div data-aos="fade-left">
              <img src="./images/ex2.png" alt="" />
            </div>
          </div>
          <div className="relative lg:absolute lg:bottom-[-100px] lg:left-[50%] lg:translate-x-[-50%] flex items-center w-full lg:w-[1300px]">
            <div className="hidden lg:block">
              <img src="./images/ex3.svg" alt="" />
            </div>
            <div
              className="flex flex-col items-center flex-1 mt-[15px] md:mt-[30px] lg:mt-0"
              data-aos="zoom-in-up"
            >
              <h3 className="text-[32px] md:text-[60px] font-sanB text-[#F8421F] uppercase">
                HOÀN PHÍ THAM DỰ
              </h3>
              <p className="font-sanT text-[16px] md:text-[20px] leading-[28px] text-center border-t-[1px] border-solid border-white p-[10px] md:p-[20px]">
                Khi Chủ bất động sản đồng hành hợp tác <br /> phát triển dự án
                cùng <span className="font-sanB">UPLIVING</span>.
              </p>
              <div className="w-[100px] md:w-[174px] mt-[20px]">
                <img className="w-full" src="./images/upl-logo.svg" alt="" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="./images/ex4.svg" alt="" />
            </div>
          </div>
        </div>
        <div
          className="relative ex-box max-w-[879px] mx-auto flex items-center justify-center py-[15px] md:py-[30px] lg:mt-[90px] mt-[30px]"
          data-aos="flip-up"
        >
          <div className="rounded-[20px] border-[4px] border-solid border-transparent absolute top-0 left-0 w-full h-full bg-[rgba(43,_43,_43,_0.60)]"></div>
          <p className="relative z-10 text-center title">
            Đăng ký tham gia cho nhóm 05 người, <br /> liên hệ UPLIVING qua
            Email: support@upliving.vn
          </p>
        </div>
      </div>
    </section>
  );
}
