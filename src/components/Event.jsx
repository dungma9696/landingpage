'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import ButtonPrimary from './misc/ButtonPrimary';

const steps = [
  {
    image: '/assets/event/event1.png',
    text1: 'Bước 1',
    text2: 'Đăng ký tham gia',
    text3: '',
    btnText: 'TẠI ĐÂY',
    link: '',
  },
  {
    image: '/assets/event/event2.png',
    text1: 'Bước 2',
    text2: 'Tải app Class trước để',
    text3: 'tham gia sự kiện',
    btnText: 'TẢI APP',
    link: 'https://www.classin.com/download/',
  },
  {
    image: '/assets/event/event3.png',
    text1: 'Bước 3',
    text2: 'Chờ xác nhận đăng ký thành công',
    text3: 'và sẵn sàng tham gia sự kiện',
    btnText: '',
    link: '',
  },
];

const EventCP = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
      <div className="my-12">
        <ScrollAnimationWrapper className="flex">
          <motion.div
            className="h-full w-full p-4"
            variants={scrollAnimation}
          >
            <div className="flex items-center">
              <div className="flex items-center text-left	">
                <p className="text-9xl text-yellow-400">T</p>
                <div>
                  <h2>Tham gia sự kiện với 3 bước đơn giản,</h2>
                  <p>nhanh chóng</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="h-full w-full p-4"
            variants={scrollAnimation}
          >
            <div className="">
              <div className="flex gap-1 items-stretch justify-between">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="text-center flex flex-col justify-between items-center"
                  >
                    <div>
                      <Image
                        src={item.image}
                        alt="img"
                        quality={100}
                        height={700}
                        width={700}
                        className="w-full h-[260px]"
                      />
                      <p>{item.text1}</p>
                      <p>{item.text2}</p>
                      <p>{item.text3}</p>{' '}
                    </div>

                    {item.btnText && (
                      <ButtonPrimary addClass="!w-fit">
                        {item.btnText}
                      </ButtonPrimary>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p>
                  * LƯU Ý: Học viên tải App ClassIn về Máy tính và điện thoại
                  trước khi tham gia Event để được tham gia các hoạt
                </p>
                <p>động thực hành trực tiếp theo hướng dẫn từ chuyên gia. </p>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default EventCP;
