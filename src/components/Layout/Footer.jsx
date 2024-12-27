'use client';

import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-white pt-8 border-solid pb-20 border-t-2 	border-yellow-400">
      <div className="flex flex-col sm:flex-row max-w-[1320px] w-full mx-auto px-2 sm:px-8 lg:px-16">
        <div className="w-full sm:w-7/12 sm:pr-4 flex-col items-start ">
          <Image
            src="/assets/logo-ielts-tactics.png"
            alt="logo"
            layout="responsive"
            quality={100}
            height={54}
            width={100}
            className="!h-[81px] !w-auto m-auto sm:m-0"
          />
          <p className="mt-4 text-xl text-[#000000] font-bold">
            Về IELTS Tactics
          </p>
          <p>
            IELTS Tactics - Trung tâm luyện thi IELTS đặt vấn đề chất lượng và
            trải nghiệm của học viên là trọng tâm mọi hoạt động. Chúng tôi tin
            rằng, bằng kinh nghiệm và tâm huyết, IELTS Tactics là môi trường
            tuyệt vời để bạn phát huy tối đa năng lực IELTS, tự tin thực hiện
            những khát vọng lớn lao hơn trong tương lai. IELTS Tactics - Smarter
            . Faster . Better
          </p>
          <p className='font-bold'>094 965 8894 | center.ieltstactics@gmail.com</p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                target="blank"
                href="https://www.ieltstactics.vn/"
              >
                <img
                  src={'/assets/Icon/world.svg'}
                  className="h-6 w-6"
                />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                target="blank"
                href="https://www.facebook.com/luyenthiforecast"
              >
                <img
                  src={'/assets/Icon/facebook.svg'}
                  className="h-6 w-6"
                />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                target="blank"
                href="https://www.youtube.com/c/IELTSTactics"
              >
                <img
                  src={'/assets/Icon/youtube.svg'}
                  className="h-6 w-6"
                />{' '}
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                target="blank"
                href="https://www.instagram.com/ieltstactics"
              >
                {' '}
                <img
                  src={'/assets/Icon/instagram.svg'}
                  className="h-6 w-6"
                />{' '}
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                target="blank"
                href="https://www.facebook.com/groups/chienthuatielts"
              >
                <img
                  src={'/assets/Icon/facebook.svg'}
                  className="h-6 w-6"
                />
              </a>
            </div>

            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                target="blank"
                href="https://www.tiktok.com/@ielts.tactics"
              >
                <img
                  src={'/assets/Icon/tiktok.svg'}
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-5/12 flex gap-4">
          <div className="w-1/2 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Dịch vụ</p>
            <ul className="text-black-500 ">
              <li className="my-2 transition-all">Khóa học IELTS Tactics</li>
              <li className="my-2 transition-all">Thi thử IELTS Online</li>
              <li className="my-2 transition-all">
                Tư vấn lộ trình IELTS miễn phí
              </li>
              <li className="my-2 transition-all">Chính sách cam kết</li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Khoá học</p>
            <ul className="text-black-500">
              <li className="my-2  transition-all">Full 4 kỹ năng</li>
              <li className="my-2  transition-all">Speaking</li>
              <li className="my-2  transition-all">Writing</li>
              <li className="my-2  transition-all">Listening</li>
              <li className="my-2  transition-all">Reading</li>
              <li className="my-2  transition-all">1 kèm 1, 1 kèm 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
