import React from "react";

export default function Value() {
  return (
    <section className="value pt-[40px] pb-[230px] md:pb-[600px] lg:pb-[80px] md:py-[20px]">
      <h4 className="wow tada text-[20px] md:text-[30px] lg:text-[48px] font-sanT text-center mb-[30px] md:mb-[40px]">
        Và đây là sự thật …
      </h4>
      <div className="relative">
        <div className="flex gap-[30px] items-start justify-between lg:pr-[30px]">
          <div>
            <img
              src="./images/upl-value1.png"
              alt=""
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div className="hidden lg:block">
            <img
              src="./images/upl-title.svg"
              alt=""
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>
        <div className="mt-[-70px] md:mt-[-140px] lg:mt-0 md:mb-[30px] lg:mb-0 lg:absolute bottom-[100px] left-[50%] lg:translate-x-[-50%] px-[20px] lg:px-0">
          <img
            src="./images/upl-value2.png"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            alt=""
          />
          <h4 className="relative text-[20px] md:text-[30px] lg:text-[48px] font-sanT text-center mt-[20px]">
            Hãy chú ý đến phần tiếp theo ...
            <img
              className="absolute right-0 md:right-[90px] lg:right-[-20px] top-[70%] z-10 w-[30px] md:w-auto"
              src="./icons/arrow-icon.svg"
              alt=""
            />
          </h4>
        </div>
      </div>
      <div className="relative max-w-[1410px] w-full mx-auto px-0 py-[20px]">
        <div className="absolute z-10 top-[50%] translate-y-[-50%]">
          <img src="./images/upl-titleHor.svg" alt="" />
        </div>
        <div className="flex">
          <div className="w-0 lg:w-[30%]"></div>
          <div className="relative flex-1">
            <div
              className="px-[20px] md:pt-[40px] md:pb-[60px] md:px-[60px] bg-black md:absolute top-0 left-0"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="200"
            >
              <p className="font-sanT text-[16px] md:text-[20px] leading-10">
                Nghiêm túc rằng, thành công không xảy ra một cách tình cờ.
              </p>
              <p className="font-sanT text-[16px] md:text-[20px] leading-10 mb-[20px]">
                Nó xảy ra bằng cách có một KẾ HOẠCH ... một kế hoạch trả lời các
                câu hỏi:
              </p>
              <div className="flex flex-col gap-[15px]">
                <div className="font-sanT text-[16px] md:text-[20px] flex items-center gap-[15px]">
                  <img src="./icons/check-icon.svg" alt="" />{" "}
                  <p>
                    Bất động sản mình chọn có là một khoản đầu tư
                    <span className="uppercase text-[#26FDE6] font-sanB">
                      {" "}
                      ĐÚNG ĐẮN?
                    </span>
                  </p>
                </div>
                <div className="font-sanT text-[16px] md:text-[20px] flex items-center gap-[15px]">
                  <img src="./icons/check-icon.svg" alt="" />{" "}
                  <p>
                    Làm cách nào để mua và bán các bất động sản để
                    <span className="uppercase text-[#26FDE6] font-sanB">
                      {" "}
                      KIẾM LỜI?
                    </span>
                  </p>
                </div>
                <div className="font-sanT text-[16px] md:text-[20px] flex items-center gap-[15px]">
                  <img src="./icons/check-icon.svg" alt="" />{" "}
                  <p>
                    Các quy tắc và chuyên môn tôi cần để
                    <span className="uppercase text-[#26FDE6] font-sanB">
                      {" "}
                      QUẢN LÝ TÀI SẢN
                    </span>{" "}
                    là gì?
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[20px] md:h-[64px] w-full md:w-[65%] bg-transparent md:bg-black md:absolute bottom-0 left-0">
              <img
                className="ml-[100px] md:translate-y-[-20px] w-[40px] md:w-auto"
                src="./icons/arrow-icon2.svg"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img className="ml-auto" src="./images/upl-value3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[20px] lg:px-0">
        <div className="box-grd max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row px-[20px] py-[30px] md:px-[75px] md:py-[40px] relative">
          <div className="flex-1">
            <h3
              className="text-[20px] md:text-[32px] font-sanB mb-[10px] md:mb-[40px]"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="200"
            >
              May mắn thay, có RẤT NHIỀU <br /> cơ hội trên thị trường <br />{" "}
              NGAY BÂY GIỜ.
            </h3>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              className="font-sanT text-[16px] md:text-[20px] leading-10 mb-[10px] md:mb-[40px]"
            >
              Tôi sẽ chỉ cho bạn cách sở hữu các bất động sản với giá rẻ hơn thị
              trường 05 - 20%
              <br />
              và sau đó bán nó với lợi nhuận gấp 3 đến 5 lần.
            </p>
            <a className="btn-grd2" href="#register">
              HỘI THẢO GIẢI MÃ NHÀ SINH TIỀN
            </a>
          </div>
          <div className="relative flex-1"></div>
          <div className="absolute bottom-[-85%] md:bottom-[-130%] right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-[12px] lg:bottom-[-135px] w-[300px] md:w-[600px] lg:w-[590px] h-[300px] md:h-[600px] bg-black overflow-hidden">
            <div className="absolute top-0 right-0 z-20 w-[300px] md:w-[600px] lg:w-[590px] h-full">
              <img src="./images/upl.png" alt="" />
            </div>
            <iframe
              className="relative z-10 w-[1024px] h-[600px]"
              src="https://www.youtube.com/embed/vbsqM4Uf-Ys?autoplay=1&control=0&loop=1&mute=1&playlist=vbsqM4Uf-Ys"
              title="Upliving"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
