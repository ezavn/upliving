import React from "react";

export default function Strategy() {
  return (
    <section className="pt-[150px]">
      <h2
        className="px-[20px] text-center text-[20px] md:text-[36px] font-sanB uppercase"
        data-aos="fade-down"
      >
        Nhận các chiến lược chính xác mà bạn cần{" "}
        <br className="hidden lg:block" /> để đạt được thành công{" "}
        <br className="block lg:hidden" /> qua nhiều thế hệ
      </h2>
      <div className="bg-[url('../public/images/shadow-overlay.png')] bg-center bg-cover pb-section">
        <div className="page-container">
          <div
            className="flex lg:flex-row flex-col gap-[30px] md:gap-[50px] lg:gap-0 justify-between pt-[30px] md:pt-[70px]"
            data-aos="fade-up"
            ata-aos-offset="-200"
          >
            <StrategyItem
              img="./images/upl-stra1.svg"
              title="MUA, XÂY, BÁN"
              btn="./images/strategy-btn.svg"
              desc="Hãy sử dụng 10 năm kinh nghiệm và kiến thức của tôi để mua, xây và
bán các bất động sản."
            />
            <StrategyItem
              img="./images/upl-stra2.svg"
              title="ĐẦU TƯ NHÀ SINH TIỀN"
              btn="./images/strategy-btn2.svg"
              desc="Nắm vững chính xác những gì bạn cần biết để thu được lợi nhuận cao nhất từ
 bất động sản."
            />
            <StrategyItem
              img="./images/upl-stra3.svg"
              title="KẾ HOẠCH GIÀU CÓ"
              btn="./images/strategy-btn3.svg"
              desc="Tìm hiểu cách xây dựng một kế hoạch kinh doanh cho sự thành công của bạn và
sự giàu có của gia đình bạn."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const StrategyItem = ({ img, title, desc, btn }) => {
  return (
    <div className="strategy-item">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="desc">{desc}</p>
      <a className="btn glow-on-hover " href="#register">
        <img src={btn} alt="" />
      </a>
    </div>
  );
};
