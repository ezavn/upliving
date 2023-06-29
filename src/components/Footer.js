import React from "react";

export default function Footer() {
  return (
    <section className="footer pt-[50px] pb-[50px] md:pb-[80px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between lg:max-w-[1105px] lg:mx-auto px-[20px] lg:px-0 gap-[50px] lg:gap-[116px]">
        <div className="flex-shrink-0">
          <a className="inline-flex w-[183px]" href="/">
            <img className="w-full" src="./images/upl-logo.svg" alt="" />
          </a>
        </div>
        <div className="flex md:flex-row flex-col flex-1 gap-[20px]">
          <div className="flex-1 flex items-center gap-[22px] justify-start md:justify-center">
            <div className="w-[41px]">
              <img className="w-full" src="./icons/address-icon.svg" alt="" />
            </div>
            <div>
              <p>
                19-21 Lô B Trường Sơn, <br />
                Phường 15, Quận 10, Tp.HCM
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-[22px] justify-start md:justify-center py-[20px] md:py-0 border-y-[1px] md:border-y-0 border-x-0 md:border-x-[1px] border-solid border-white">
            <div className="w-[41px]">
              <img className="w-full" src="./icons/phone-icon.svg" alt="" />
            </div>
            <div>
              <p>
                Hotline <br />
                0901 88 91 89
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-[22px] justify-start md:justify-center">
            <div className="w-[41px]">
              <img className="w-full" src="./icons/mail-icon.svg" alt="" />
            </div>
            <div>
              <p>
                Email <br />
                info@upliving.vn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
