import React from "react";

export default function Owner() {
  return (
    <section>
      <div className="bg-[#4F4F51] pt-[50px] md:pt-[80px] pb-[30px] md:pb-[50px]">
        <h2 className="text-center px-[20px] text-[22px] md:text-[24px]">
          <span className="block text-[#05DF97]">
            Chủ sở hữu bất động sản nội đô là
          </span>{" "}
          đất ở trên 50 m² hoặc nhà sẵn trên 500 m² sàn
        </h2>
      </div>
      <div className="w-full">
        <img className="hidden md:block" src="./images/owner-main.png" alt="" />
        <div className="owner-grid grid md:hidden grid-cols-2 gap-[15px] px-[15px]">
          <div className="h-[295px]">
            <img
              className="object-cover h-full"
              src="./images/owner1.png"
              alt=""
            />
          </div>
          <div className="h-[295px]">
            <img
              className="object-cover h-full"
              src="./images/owner2.png"
              alt=""
            />
          </div>
          <div className="h-[295px]">
            <img
              className="object-cover h-full"
              src="./images/owner3.png"
              alt=""
            />
          </div>
          <div className="h-[295px]">
            <img
              className="object-cover h-full"
              src="./images/owner4.png"
              alt=""
            />
          </div>
          <div className="h-[295px]">
            <img
              className="object-cover h-full"
              src="./images/owner5.png"
              alt=""
            />
          </div>
          {/* <div className="block"></div> */}
        </div>
      </div>
      <div className="bg-[#343331] pt-[40px] pb-[50px] text-center">
        <a className="btn-grd2" href="#register">
          ĐĂNG KÝ THAM GIA
        </a>
      </div>
    </section>
  );
}
