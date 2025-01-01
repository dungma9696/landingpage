'use client';
import React, { useMemo } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Hero = () => {
  const isPc = useMediaQuery('(min-width: 768px)');
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div
        className="max-w-[1320px] mt-24 px-8 xl:px-16 mx-auto"
        id="about"
      >
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col-reverse sm:flex-row sm:gap-8 py-6 sm:py-16"
            variants={isPc ? scrollAnimation : undefined}
          >
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1 sm:items-start">
              <div className="flex items-center gap-4 sm:gap-[20px] sm:flex-row flex-col mt-4">
                <h1 className="text-xl font-medium text-black-600 leading-normal bg-yellow-300 rounded-full p-2">
                  Online Workshop
                </h1>

                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/logo/logo-ielts-tactics.png"
                    alt="user"
                    quality={100}
                    width={612}
                    height={383}
                    className="h-11 w-auto"
                  />
                  <Image
                    src="/assets/logo/logo-idp.png"
                    alt="user"
                    quality={100}
                    width={612}
                    height={383}
                    className="h-11 w-auto"
                  />
                  <Image
                    src="/assets/logo/logo-classin.png"
                    alt="user"
                    quality={100}
                    width={612}
                    height={383}
                    className="h-14 w-auto"
                  />
                </div>
              </div>

              {/* <h1 className="text-2xl mt-2 lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal ">
                Tactics with IELTS Tactics
              </h1> */}
              <p className="pt-4 text-3xl lg:text-4xl border-solid border-b-4	border-yellow-400 ">
                Đột phá Band 7.5
              </p>
              <p className="pt-4 text-3xl lg:text-4xl text-center sm:text-left">
                CHIẾN LƯỢC TĂNG ĐIỂM Ngay Lập Tức!
              </p>
              <div className="text-black-500 mt-4 mb-6">
                <p className="inline sm:block pr-1">
                  Cán Mốc Điểm Cao ngay{' '}
                  <span className="change-color font-bold">
                    Quý I, II năm 2025
                  </span>{' '}
                  Cùng Chuyên gia cấp cao{' '}
                  <span className="change-color font-bold">
                    IDP và CEO ClassIn
                  </span>{' '}
                  - Nền tảng học IELTS cùng AI số 1 tại Trung Quốc
                </p>
                {/* <p className="inline sm:block">
                  & Cựu SV Bắc Đạicho Học sinh, Sinh viên Việt Nam!
                </p> */}
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
                    8 - 10h tối THỨ 3, 07/01/2024
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
            <div className=" sm:w-full">
              <motion.div
                className="h-fit sm:h-full w-full"
                variants={isPc ? scrollAnimation : undefined}
              >
                <Image
                  src="/assets/img-1.png"
                  alt="user"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        {/* <div className="relative w-full flex">
          <ScrollAnimationWrapper className="rounded-lg w-full py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            <motion.div
              className="flex items-center justify-start sm:justify-center py-0 sm:py-6 mx-auto sm:mx-0"
              custom={{ duration: 2 }}
              variants={scrollAnimation}
            >
              <div className="text-black-600 text-center sm:text-2xl">
                <p className="inline sm:block pr-1">
                  HỌC IELTS CÓ KẾ HOẠCH + CHIẾN THUẬT THÔNG MINH bạn sẽ tiến
                  nhanh hơn x10
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
        </div> */}
      </div>

      <div className="bg-yellow-400">
        <div className="max-w-[1320px] sm:mt-24 px-8 xl:px-16 mx-auto">
          <div className="relative w-full flex">
            <ScrollAnimationWrapper className="rounded-lg w-full py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100  z-10">
              <motion.div
                className="flex items-center justify-start sm:justify-center py-0 sm:py-6 mx-auto sm:mx-0"
                custom={{ duration: 2 }}
                variants={scrollAnimation}
              >
                <div className="text-black-600 text-center sm:text-2xl">
                  <p className="mb-2 sm:mb-0 font-bold">
                    DUY NHẤT TẠI WORKSHOP 7/1 NÀY!
                  </p>
                  <p className="">
                    Cập nhật những thông tin mới nhất về về{' '}
                    <span className="font-bold">kì thi IELTS 2025</span> từ IDP
                    và những{' '}
                    <span className="font-bold">chiến lược nâng band</span> hữu
                    ích nhất!
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
      </div>
    </>
  );
};

export default Hero;
