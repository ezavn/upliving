import React from "react";

export default function Seminar() {
  return (
    <section className="pt-[100px] md:pt-[160px] pb-[90px] md:pb-[100px] lg:pb-[300px] seminar bg-[url('../public/images/seminar-bg.png')] bg-center-center lg:bg-center bg-no-repeat overflow-x-hidden">
      <div className="page-container">
        <div className="max-w-[820px] ml-auto">
          <h4
            className="text-[24px] md:text-[28px] lg:text-[36px] font-sanB"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            NỘI DUNG HỘI THẢO
          </h4>
          <h2 className="title" data-aos="fade-up" data-aos-offset="200">
            GIẢI MÃ NHÀ SINH TIỀN
          </h2>
          <div
            className="flex flex-col mt-[40px] md:mt-[70px] gap-[8px]"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="flex items-center gap-[15px] pb-[8px] border-dashed border-b-[1px] border-[#26FDE6]">
              <div className="w-[35px] h-[38px] flex-shrink-0">
                <img
                  className="w-full h-full"
                  src="./icons/seminar-icon1.svg"
                  alt=""
                />
              </div>
              <p className="font-sanT text-[20px] leading-[2]">
                Thông tin về thị trường và xu hướng các loại hình bất động sản
              </p>
            </div>
            <div className="flex items-center gap-[15px] pb-[8px] border-dashed border-b-[1px] border-[#26FDE6]">
              <div className="w-[35px] h-[38px] flex-shrink-0">
                <img
                  className="w-full h-full"
                  src="./icons/seminar-icon2.svg"
                  alt=""
                />
              </div>
              <p className="font-sanT text-[20px] leading-[2]">
                Giới thiệu mô hình đầu tư căn hộ cho thuê lợi nhuận 20 - 30%/
                năm
              </p>
            </div>
            <div className="flex items-center gap-[15px] pb-[8px] border-dashed border-b-[1px] border-[#26FDE6]">
              <div className="w-[35px] h-[38px] flex-shrink-0">
                <img
                  className="w-full h-full"
                  src="./icons/seminar-icon3.svg"
                  alt=""
                />
              </div>
              <p className="font-sanT text-[20px] leading-[2]">
                Chia sẻ về cơ hội đầu tư thực tế
              </p>
            </div>
            <div className="flex items-center gap-[15px] pb-[8px]">
              <div className="w-[35px] h-[38px] flex-shrink-0">
                <img
                  className="w-full h-full"
                  src="./icons/seminar-icon4.svg"
                  alt=""
                />
              </div>
              <p className="font-sanT text-[20px] leading-[2]">
                Tổ chức thăm quan, khảo sát & thẩm định Nhà Sinh Tiền
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
