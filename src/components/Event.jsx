'use client';

import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';
import React, { useMemo } from 'react';
import Link from 'next/link';
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
    text2: 'Tải app ClassIn trước để',
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
    <div className="bg__color--gray wrap-content">
      <div className="max-w-[1320px] px-2 sm:px-8 lg:px-16  w-full  mx-auto">
        <ScrollAnimationWrapper className="flex">
          <motion.div
            className="h-full w-full"
            variants={scrollAnimation}
          >
            <div className="flex items-center">
              <div className="flex items-center text-left	">
                <p className="text-9xl text-yellow-400">T</p>
                <div className="text-xl sm:text-2xl text-black-600">
                  <p className="inline sm:block pr-1">
                    Tham gia sự kiện với 3 bước đơn giản,
                  </p>
                  <p className="inline sm:block">nhanh chóng</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-1 items-stretch justify-between">
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
                <p className="font-bold">{item.text1}</p>
                <p>{item.text2}</p>
                <p>{item.text3}</p>{' '}
              </div>
              {index === 0 && (
                <LinkScroll
                  to="form"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="mt-2 sm:mt-8"
                >
                  <ButtonPrimary>{item.btnText}</ButtonPrimary>
                </LinkScroll>
              )}

              {index !== 0 && item.btnText && (
                <a
                  href={item.link}
                  target="_blank"
                >
                  <ButtonPrimary addClass="!w-fit mt-4">
                    {item.btnText}
                  </ButtonPrimary>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6 italic">
          <p className="inline sm:block pr-1">
            * LƯU Ý: Học viên tải App ClassIn về Máy tính và điện thoại trước
            khi tham gia Event để được tham gia các hoạt
          </p>
          <p className="inline sm:block">
            động thực hành trực tiếp theo hướng dẫn từ chuyên gia.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCP;
