import React from "react";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <section
      id="register"
      className="register bg-[url('../public/images/register-bg.png')] bg-center bg-no-repeat bg-cover md:py-section py-sectionMB overflow-x-hidden"
    >
      <div className="page-container flex flex-col lg:flex-row gap-[30px] md:gap-[50px] items-center">
        <div className="max-w-[540px] flex-shrink-0 text-center lg:text-left">
          <h2
            className="text-[24px] md:text-[38px] lg:text-[48px] font-sanH uppercase leading-[30px] md:leading-[50px] lg:leading-[55px] mb-[15px] lg:mb-[30px]"
            data-aos="fade-right"
          >
            Gia nhập Câu lạc bộ <br /> Nhà Sinh Tiền
          </h2>
          <p className="font-sanT text-[17px] md:text-[20px]">
            Trở thành một phần của cộng đồng những người tìm kiếm thành công
            thông qua đầu tư giá trị của chúng tôi.
          </p>
        </div>
        <div className="flex-1 w-full" data-aos="fade-left">
          <div className="relative bg-[url('../public/images/form-bg.png')] bg-right md:bg-center bg-no-repeat bg-cover md:py-[80px] px-[30px] md:px-[50px] rounded-[15px] pb-[60px] pt-[125px]">
            <RegisterForm />
            <div className="w-[100px] md:w-[156px] absolute top-[30px] right-[50%] md:translate-x-0 translate-x-[50%]  md:right-[35px]">
              <img className="w-full" src="./images/form-logo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
