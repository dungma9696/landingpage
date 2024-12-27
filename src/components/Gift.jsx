'use client';

import Image from 'next/image';
import React, { useMemo, useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import ButtonPrimary from './misc/ButtonPrimary';

const steps = [
  {
    image: '/assets/gift1.png',
    text1: 'Voucher giảm lệ phí thi IELTS tại IDP',
    text2: 'Giới hạn chỉ 100 voucher',
    text3: 'Chỉ còn: 15',
    text4: '',
    price: '300.000 VNĐ',
  },
  {
    image: '/assets/gift2.png',
    text1: 'Thẻ thi thử IELTS 4 kỹ năng miễn phí',
    text2: 'Giới hạn 300 thẻ',
    text3: 'Chỉ còn: 21',
    text4: '',
    price: '300.000 VNĐ',
  },
  {
    image: '/assets/gift3.png',
    text1: 'Khoá Sample Speaking Forecast band 8.0+ với Ai',
    text2: 'Tặng toàn bộ khách tham gia',
    text3: '',
    text4: 'Chỉ tặng trong  sự kiện',
    price: '3.000.000 VNĐ',
  },
];

const Gift = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.screen.width < 800);
    }
  }, []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="gift"
    >
      <div className="my-12">
        <ScrollAnimationWrapper className="flex">
          <motion.div
            className="h-full w-full p-4"
            variants={scrollAnimation}
          >
            <div className="flex justify-end items-center">
              <div className="flex items-center text-left	">
                <p className="text-9xl text-yellow-400">Q</p>
                <div>
                  <h2>Quà tặng hấp dẫn đang chờ bạn!</h2>
                  <p>Tất cả đều được trao tặng hoàn toàn MIỄN PHÍ!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="h-full w-full p-4 !opacity-100">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="grow">
              {steps.map((item, index) => (
                <div
                  key={`${index}-${item.image}`}
                  className="flex gap-4 items-center mb-4 w-full rounded-lg overflow-hidden border-solid border-2	border-[#E6E6E6] bg-[#FAFAF5]"
                >
                  <Image
                    src={item.image}
                    alt="img"
                    quality={100}
                    width={612}
                    height={383}
                    className="w-[160px] h-auto"
                  />
                  <div className="flex p-[24px] justify-between w-full">
                    <div>
                      <p>{item.text1}</p>
                      <p>{item.text2}</p>
                      {item.text3 && <p>{item.text3}</p>}
                      {item.text4 && <p>{item.text4}</p>}
                    </div>

                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>{' '}
            <div className="rounded-lg overflow-hidden border-solid border-2	border-[#E6E6E6] bg-[#FAFAF5] h-fit p-[24px]">
              <p>Quà tặng bạn</p>
              <div className="flex justify-between">
                <span>Voucher thi thật IDP</span>
                <span>300.000</span>
              </div>
              <div className="flex justify-between">
                <span>Suất thi thử 4 kỹ năng</span>
                <span>300.000</span>
              </div>
              <div className="flex justify-between">
                <span>Khoá Sample Speaking</span>
                <span>3.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Tổng</span>
                <span>3.600.000</span>
              </div>

              <LinkScroll
                to="form"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <ButtonPrimary>GIỮ CHỖ NHẬN ƯU ĐÃI</ButtonPrimary>
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
