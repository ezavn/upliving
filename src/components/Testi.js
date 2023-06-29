import React from "react";
import Slider from "react-slick";

export default function Testi() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testi py-sectionMB md:py-section">
      <div className="max-w-[1600px] mx-auto px-[20px] lg:px-[50px]">
        <h4
          className="text-center mb-[30px] text-[24px] md:text-[28px] lg:text-[36px] font-sanB"
          data-aos="fade-down"
        >
          PHẢN HỒI CỦA KHÁCH HÀNG SAU HỘI THẢO
        </h4>
        <div className="testi-slider">
          <Slider {...settings}>
            <TestiItem
              img="./images/testi1.png"
              name="Nguyễn Thị Phượng Liên"
              position="Nhà đầu tư cá nhân"
              desc='"Đã mua một Nhà Sinh Tiền trị giá 22 tỷ với giá 19,5 tỷ đồng. Đã tăng doanh thu cho thuê từ 45 triệu/ tháng lên 135 triệu/ tháng chỉ sau 3 tháng nâng cấp và chuẩn hoá mô hình."'
            />
            <TestiItem
              img="./images/testi2.png"
              name="Nguyễn Anh Đức"
              position="Nhà đầu tư cá nhân"
              desc='"Sự kiện như một chất xúc tác đã tạo ra sự phát triển vượt bậc về mặt tư duy và tài chính cho tôi. Tôi cảm thấy cân bằng và tự tin hơn bao giờ hết. " '
            />
            <TestiItem
              img="./images/testi3.png"
              name="Huỳnh Nhã My"
              position="Nhà đầu tư cá nhân"
              desc='"Chúng tôi đã tìm được chìa khoá để thoát khỏi cái bẫy “ổn định”. Chúng tôi đã tăng thêm thu nhập thụ động 1,2 tỷ chỉ sau 1 năm nhờ hỗ trợ của Khánh và cộng sự. Cảm ơn rất nhiều! “'
            />
            <TestiItem
              img="./images/testi1.png"
              name="Huỳnh Nhã My"
              position="Nhà đầu tư cá nhân"
              desc='"Chúng tôi đã tìm được chìa khoá để thoát khỏi cái bẫy “ổn định”. Chúng tôi đã tăng thêm thu nhập thụ động 1,2 tỷ chỉ sau 1 năm nhờ hỗ trợ của Khánh và cộng sự. Cảm ơn rất nhiều! “'
            />
          </Slider>
        </div>
      </div>
    </section>
  );
}

const TestiItem = ({ img, name, position, desc }) => {
  return (
    <div className="mx-[7px] md:mx-[10px] testi-item flex flex-col rounded-[20px] pl-[20px] pr-[20px] pt-[40px] lg:pl-[40px] pb-[40px] lg:pr-[32px] bg-white h-[375px] lg:h-[324px]">
      <div className="flex items-center gap-[12px] mb-[32px]">
        <div className="w-[60px] h-[60px]">
          <img className="object-cover w-full h-full" src={img} alt="" />
        </div>
        <div>
          <h4 className="text-[20px] text-[#13213B] font-sanB">{name}</h4>
          <p className="font-sanT text-[14px] text-[#3F486A]">{position}</p>
        </div>
      </div>
      <div className="flex items-center gap-[8px] mb-[20px]">
        <img
          className="w-[20px] h-[20px]"
          src="./icons/yellowStar-icon.svg"
          alt=""
        />
        <img
          className="w-[20px] h-[20px]"
          src="./icons/yellowStar-icon.svg"
          alt=""
        />
        <img
          className="w-[20px] h-[20px]"
          src="./icons/yellowStar-icon.svg"
          alt=""
        />
        <img
          className="w-[20px] h-[20px]"
          src="./icons/yellowStar-icon.svg"
          alt=""
        />
        <img
          className="w-[20px] h-[20px]"
          src="./icons/yellowStar-icon.svg"
          alt=""
        />
      </div>
      <div className="font-sanT text-[16px] text-[#3F486A] leading-[2]">
        {desc}
      </div>
    </div>
  );
};
