'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import { Link as LinkScroll } from 'react-scroll';
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

  return (
    <div
      className="wrap-content !pt-[66px] sm:!pt-[94px] "
      id="gift"
    >
      <div className="max-w-[1320px] px-2 sm:px-8 lg:px-16  w-full  mx-auto ">
        <ScrollAnimationWrapper className="flex">
          <motion.div
            className="h-full w-full"
            variants={scrollAnimation}
          >
            <div className="flex justify-end items-center">
              <div className="flex items-center text-left	">
                <p className="text-9xl text-yellow-400">Q</p>
                <div>
                  <h2 className="text-xl sm:text-2xl">
                    Quà tặng hấp dẫn đang chờ bạn!
                  </h2>
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
                  className="flex flex-col gap-2 sm:flex-row sm:gap-4 items-center mb-4 w-full rounded-lg overflow-hidden border-solid border-2	border-[#E6E6E6] bg-[#FAFAF5]"
                >
                  <Image
                    src={item.image}
                    alt="img"
                    quality={100}
                    width={612}
                    height={383}
                    className="w-full sm:w-[160px] h-auto"
                  />
                  <div className="p-2 sm:flex sm:p-[24px] justify-between w-full ">
                    <div>
                      <p className="text-black-600">{item.text1}</p>
                      <p className="text-black-600">{item.text2}</p>
                      {item.text3 && (
                        <p className="text-black-600">{item.text3}</p>
                      )}
                      {item.text4 && (
                        <p className="text-black-600">{item.text4}</p>
                      )}
                    </div>

                    <p className="text-right">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>{' '}
            <div className="rounded-lg overflow-hidden border-solid border-2	border-[#E6E6E6] bg-[#FAFAF5] h-fit p-2 sm:p-[24px]">
              <p className="text-black-600 font-bold">Quà tặng bạn</p>
              <div className="flex justify-between">
                <span>Voucher thi thật IDP</span>
                <span>300.000 VNĐ </span>
              </div>
              <div className="flex justify-between">
                <span>Suất thi thử 4 kỹ năng</span>
                <span>300.000 VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Khoá Sample Speaking</span>
                <span>3.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between mb-2 sm:mb-[24px]">
                <span>Tổng</span>
                <span>3.600.000 VNĐ</span>
              </div>

              <LinkScroll
                to="form"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <ButtonPrimary addClass={'w-full'}>
                  GIỮ CHỖ NHẬN ƯU ĐÃI
                </ButtonPrimary>
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
