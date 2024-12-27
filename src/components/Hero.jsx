'use client';
import React, { useMemo } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-[1320px] mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1 sm:items-start">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              ONLINE WORKSHOP
            </h1>
            <h1 className="text-2xl mt-2 lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Tactics with IELTS Tactics
            </h1>
            <div className="text-black-500 mt-4 mb-6">
              <p className=" inline sm:block pr-1">
                Chiến thuật IELTS ứng dụng Công nghệ thông minh cùng Giám khảo
                IDP
              </p>
              <p className="inline sm:block">
                & Cựu SV Bắc Đạicho Học sinh, Sinh viên Việt Nam!
              </p>
              <div className="flex gap-2 items-center mt-4 justify-center sm:justify-start">
                <Image
                  src="/assets/Icon/calendar.svg"
                  alt="logo"
                  layout="responsive"
                  quality={100}
                  height={40}
                  width={40}
                  className="!h-8 !w-auto sm:!h-10 "
                />{' '}
                <p className="text-black-500">
                  8 - 10h tối CHỦ NHẬT, 05/01/2024
                </p>
              </div>
            </div>

            <LinkScroll
              to="form"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <ButtonPrimary>Giữ chỗ ngay</ButtonPrimary>
            </LinkScroll>
          </div>
          <div className="flex w-full">
            <motion.div
              className="h-full w-full"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/img-1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          <motion.div
            className="flex items-center justify-start sm:justify-center py-0 sm:py-6 mx-auto sm:mx-0"
            custom={{ duration: 2 }}
            variants={scrollAnimation}
          >
            <div className="text-black-600 text-center sm:text-2xl">
              <p className="inline sm:block pr-1">
                HỌC IELTS CÓ KẾ HOẠCH + CHIẾN THUẬT THÔNG MINH bạn sẽ tiến nhanh
                hơn x10
              </p>
              <p className="inline sm:block">
                so với việc 'tự bơi' không được ai hướng dẫn!
              </p>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
