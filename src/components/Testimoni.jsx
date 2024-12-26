'use client';

import React, { useState } from 'react';

// import react slick
import Slider from 'react-slick';
import Image from 'next/image';

const Testimoni = ({
  listTestimoni = [
    {
      name: 'Ms. Thuỳ Dương',
      role: 'MC chương trình',
      image: '/assets/user1.png',
      contents: [
        '7.0 IELTS Overall (7.5 Speaking)',
        'Tốt nghiệp bằng xuất sắc Học viện Ngoại Giao. Từng thực tập tại Vụ Đối Ngoại Văn phòng Quốc Hội.',
      ],
    },
    {
      name: 'Mr. A',
      role: 'Giám khảo kỳ cựu tại IDP',
      image: '/assets/user.png',
      contents: [
        '9.0 IELTS',
        ' Hơn 10 năm kinh nghiệm chấm thi tại IDP Việt Nam',
      ],
    },
    {
      name: 'Mr. X',
      role: 'CEO ClassIn tại Trung Quốc',
      image: '/assets/user.png',
      contents: ['Thông tin sắp được hé lộ!'],
    },
    {
      name: 'Ms. Ngọc Bích',
      role: 'Trưởng phòng QLHV IELTS Tactics',
      image: '/assets/user4.png',
      contents: [
        'Tốt nghiệp trường Đại học Hà Nội, chuyên ngành Ngôn Ngữ Anh',
        'Chứng chỉ C1 khung tham chiếu Châu Âu (HANU Test)',
        'Chứng chỉ nghiệp vụ Sư Phạm',
      ],
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: 'slick-dots w-max absolute mt-6 sm:mt-20  ',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 770,
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
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((item, index) => (
          <div
            className="flex items-stretch text-left"
            key={index}
          >
            <div className="transition-all p-2">
              <Image
                src={item.image}
                height={500}
                width={500}
                quality={100}
                alt="Icon People"
                className="w-full h-auto rounded-2xl"
              />
              <div className="text-[#505050] mt-2">
                <p className="sm:text-[20px]">{item.name}</p>
                <p className="sm:text-[20px]">{item.role}</p>
                <ul>
                  {item.contents.map((content, indexContent) => (
                    <li
                      key={indexContent}
                      className="text-[12px]"
                    >
                      {`- ${content}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto sm:mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-400 border hover:bg-yellow-400 hover:text-white-500 transition-all text-yellow-400 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            {/* <ArrowBack className="h-6 w-6 " /> */}

            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-400 border hover:bg-yellow-400 hover:text-white-500 transition-all text-yellow-400 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
