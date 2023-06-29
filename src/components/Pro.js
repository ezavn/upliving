import React from "react";

export default function Pro() {
  return (
    <section className="overflow-x-hidden pro">
      <div className="page-container md:pt-section pt-sectionMB">
        <div className="text-center mb-[30px] md:mb-[50px]">
          <h4
            className="text-[24px] md:text-[28px] lg:text-[36px] font-sanB mb-[15px] md:mb-0"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            CÁC CHUYÊN GIA CHIA SẺ <br className="block md:hidden" /> TẠI HỘI
            THẢO
          </h4>
          <p
            className="font-sanT text-[16px] md:text-[20px]"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Gúp bạn thực hiện đầu tư một cách an toàn, hiệu quả mà bạn không cần
            có mặt
          </p>
        </div>
        <div className="max-w-[1060px] mx-auto flex flex-col md:flex-row gap-[30px] lg:gap-[70px]">
          <div className="flex flex-col flex-1">
            <div data-aos="fade-right" data-aos-offset="200">
              <img src="./images/upl-pro1.png" alt="" />
            </div>
            <div
              className="md:ml-auto md:w-[300px] lg:w-[355px] mt-[-30px]"
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <div className="max-w-[352px] rounded-[10px] bg-[#F7AC16] px-[15px] lg:px-[28px] h-[104px] mb-[30px] flex justify-center flex-col">
                <h4 className="text-[28px] lg:text-[32px] font-sanB text-black leading-[1]">
                  <span className="font-sanR">Ông</span> Trần Như Khánh
                </h4>
                <p>Nhà sáng lập thương hiệu UPLIVING</p>
              </div>
              <p className="text-justify leading-[2]">
                Là kiến trúc sư, nhà đầu tư cá nhân và kinh doanh bất động sản
                toàn thời gian, suốt hơn 10 năm qua chỉ làm một việc duy nhất là
                khai phá và phát triển bất động sản xứng tầm.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[30px]">
            <div
              className="flex gap-[30px] items-center"
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <div className="w-[100px] h-[100px]">
                <img
                  className="object-cover w-full h-full"
                  src="./images/upl-pro2.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[#F7AC16] text-[20px] leading-[1.5]">
                  Ông Lê Ngọc Đồng
                </h3>
                <p>Cố vấn chiến lược UPLIVING</p>
              </div>
            </div>
            <div
              className="flex gap-[30px] items-center"
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <div className="w-[100px] h-[100px]">
                <img
                  className="object-cover w-full h-full"
                  src="./images/upl-pro2.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[#F7AC16] text-[20px] leading-[1.5]">
                  Ông Võ Hồng Tú
                </h3>
                <p>Luật sư đại diện luật Minh Tú</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
