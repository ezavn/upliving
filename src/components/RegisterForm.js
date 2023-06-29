import React, { useState } from "react";

export default function RegisterForm() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    place: "",
  });
  const { name, phone, email, place } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ethannguyen/google_sheets/OkDYCYLxLtTqWwga?tabId=Trang tính1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [new Date().toLocaleDateString("Vi-vi"), name, phone, email, place],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        phone: "",
        email: "",
        place: "",
      });
      setLoad(false);
      alert("Đăng ký thành công!");
    } catch (error) {
      console.log(error);
      alert("Đã có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-[20px]">
          <div className="field-item">
            <input
              className="outline-none border-white border-solid border bg-[#004F35] w-full md:w-[410px] rounded-md py-[14px] px-[17px] placeholder:text-white placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] text-white"
              type="text"
              id="name"
              name="name"
              placeholder="Họ tên*"
              required
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="field-item">
            <input
              className="outline-none border-white border-solid border bg-[#004F35] w-full md:w-[410px] rounded-md py-[14px] px-[17px] placeholder:text-white placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] text-white"
              id="phone"
              name="phone"
              placeholder="Số điện thoại*"
              type="phone"
              required
              value={data.phone}
              onChange={handleChange}
            />
          </div>
          <div className="field-item">
            <input
              className="outline-none border-white border-solid border bg-[#004F35] w-full md:w-[410px] rounded-md py-[14px] px-[17px] placeholder:text-white placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] text-white"
              id="email"
              name="email"
              placeholder="Email*"
              required
              type="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="field-item">
            <input
              className="outline-none border-white border-solid border bg-[#004F35] w-full md:w-[410px] rounded-md py-[14px] px-[17px] placeholder:text-white placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] text-white"
              id="place"
              name="place"
              placeholder="Khu vực sinh sống"
              type="phone"
              value={data.place}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-[36px]">
          {load === false ? (
            <div className="relative inline-block">
              <button
                type="submit"
                className="w-[143px] h-[48px] bg-[#E43A15] rounded-md font-sanB"
              >
                Gửi thông tin
              </button>
            </div>
          ) : (
            <div className="relative inline-block">
              <button
                disabled
                type="submit"
                className="w-[143px] h-[48px] bg-[#E43A15] rounded-md font-sanB inline-flex items-center justify-center select-none opacity-50"
              >
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>ĐANG GỬI</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
