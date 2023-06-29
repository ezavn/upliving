import React from "react";
import Slider from "react-slick";

export default function Projects() {
  var settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section className="projects py-sectionMB md:py-section">
      <div>
        <h4
          className="text-[24px] md:text-[28px] lg:text-[36px] font-sanB text-center mb-[40px]"
          data-aos="fade-down"
        >
          CÁC DỰ ÁN NHÀ SINH TIỀN <br /> ĐÃ ĐƯỢC UPLIVING THỰC HIỆN VÀ VẬN HÀNH
        </h4>
        <div className="h-[450px]">
          <Slider {...settings}>
            <div className="h-[430px] px-[10px]" style={{ width: 580 }}>
              <img className="h-full" src="./images/project1.png" alt="" />
            </div>
            <div
              className="h-[430px] !inline-flex flex-col px-[10px] gap-[20px]"
              style={{ width: 303 }}
            >
              <div className="h-[204px]">
                <img className="h-full" src="./images/project2.png" alt="" />
              </div>
              <div className="h-[204px]">
                <img className="h-full" src="./images/project3.png" alt="" />
              </div>
            </div>
            <div className="h-[430px] px-[10px]" style={{ width: 303 }}>
              <div className="h-full">
                <img className="h-full" src="./images/project4.png" alt="" />
              </div>
            </div>
            <div
              className="h-[430px] !inline-flex flex-col px-[10px] gap-[20px]"
              style={{ width: 303 }}
            >
              <div className="h-[204px]">
                <img className="h-full" src="./images/project5.png" alt="" />
              </div>
              <div className="h-[204px]">
                <img className="h-full" src="./images/project6.png" alt="" />
              </div>
            </div>
            <div className="h-[430px] px-[10px]" style={{ width: 580 }}>
              <img className="h-full" src="./images/project7.png" alt="" />
            </div>
          </Slider>
        </div>
        <div className="text-center mt-[50px]">
          <a className="btn-grd2" href="#register">
            ĐĂNG KÝ THAM GIA
          </a>
        </div>
      </div>
    </section>
  );
}
