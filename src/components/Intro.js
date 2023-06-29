import React from "react";

export default function Intro() {
  return (
    <section className="intro pt-[60px] md:pt-0 pb-[40px] overflow-hidden px-[20px] lg:px-0">
      <div className="flex md:flex-row flex-col gap-[30px] lg:gap-[70px] items-center">
        <div className="flex flex-col flex-1">
          <div
            className="relative flex flex-col max-w-[390px] ml-auto"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="absolute top-[-60px] left-[-105px] shadow1"></div>
            <div className="relative z-20">
              <h4 className="text-[24px] md:text-[28px] lg:text-[36px] font-sanB mb-[15px] lg:mb-[30px]">
                Được tổ chức bởi
              </h4>
              <img
                className="mb-[15px] md:mb-[30px] w-[280px] max-w-[280px]"
                src="./images/upl-introTitle.svg"
                alt=""
              />
              <p className="leading-[26px] text-justify">
                Chuỗi căn hộ mini tích hợp khu trung tâm, đã tạo lập và phát
                triển 10 toà căn hộ mini trong hơn nửa năm qua ở khắp các Quận
                trung tâm Thành phố Hồ Chí Minh, làm việc với hàng trăm khách
                thuê lưu trú mỗi tháng, cung cấp các kỹ thuật tăng trưởng kinh
                doanh đơn giản nhưng mạnh mẽ của mình giúp Chủ đầu tư vận hành
                hiệu quả, sinh lời mà không cần có mặt trực tiếp.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-4 gap-[20px] mt-[30px] md:mt-[50px]"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div>
              <img src="./images/intro1.png" alt="" />
            </div>
            <div>
              <img src="./images/intro2.png" alt="" />
            </div>
            <div>
              <img src="./images/intro3.png" alt="" />
            </div>
            <div>
              <img src="./images/intro4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative z-20 w-[448px] flex-shrink-0">
          <div>
            <img src="./images/intro-cen.png" alt="" />
          </div>
        </div>
        <div className="flex-1">
          <div
            className="relative max-w-[360px]"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <div className="absolute top-[50px] left-[-100px] shadow2"></div>
            <div className="relative z-20">
              <div className="mb-[10px]">
                <img src="./images/upl-ceo.png" alt="" />
              </div>
              <h4 className="text-center text-[30px] md:text-[32px] text-[#F8B500]">
                Ông Trần Như Khánh
              </h4>
              <h5 className="mb-[20px] text-center">
                Nhà sáng lập thương hiệu UPLIVING
              </h5>
              <p className="leading-[28px] text-justify">
                Là kiến trúc sư, nhà đầu tư cá nhân và kinh doanh bất động sản
                toàn thời gian, suốt hơn 10 năm qua chỉ làm một việc duy nhất là
                khai phá và phát triển bất động sản xứng tầm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
