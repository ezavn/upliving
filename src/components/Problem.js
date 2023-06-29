import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Problem() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className="problem lg:px-[50px] flex flex-col-reverse lg:flex-row lg:gap-[80px] lg:pb-[280px] relative">
      <img
        className="hidden lg:block absolute bottom-[70px] left-[8%] z-10"
        src="./images/problem-upl.svg"
        alt=""
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      />
      <div className="bg-darkGreen flex-1 max-w-[769px] flex-shrink-0 pt-[70px] md:pt-[105px] pb-[50px] pr-[40px] relative pl-[20px]">
        <img
          className="w-[40px] md:w-auto absolute right-[30px] top-[70px] md:top-[100px] lg:right-[-46px] lg:top-[60px]"
          src="./icons/star-icon1.svg"
          alt=""
          data-aos="zoom-in"
        />
        <img
          className="lg:ml-[110px] mb-[30px] md:mb-[60px]"
          src="./images/problem-title.svg"
          alt=""
          data-aos="fade-right"
        />
        <div className="flex">
          <div className="w-0 md:w-[30%]"></div>
          <div className="flex-1 md:pl-[45px] py-[12px] md:border-solid md:border-l-[2px] border-white">
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              className="pb-[40px] text-[16px] md:text-xl font-sanT leading-8 text-justify"
            >
              Hầu hết thời gian, khi các Chủ nhà/ Nhà đầu tư bất động sản được
              lựa chọn giữa việc làm những ĐIỀU DỄ DÀNG và thử một cái gì đó
              MỚI, họ sẽ chọn những điều dễ dàng.
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              className="pb-[40px] text-[16px] md:text-xl font-sanT leading-8 text-justify"
            >
              Và bạn có biết vấn đề xảy ra khi chọn những điều dễ dàng là gì?
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              className="text-[16px] md:text-xl font-sanT leading-8 text-justify"
            >
              Nếu làm những điều dễ dàng và hiệu quả thì bạn đã có mọi thứ bạn
              muốn và bạn sẽ không ở đây đọc những câu từ này.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-20 self-end flex-1">
        <img
          // data-aos="fade-right"
          className="lg:translate-y-[100px]"
          src="./images/upl-problem.png"
          alt=""
        />
      </div>
    </section>
  );
}
