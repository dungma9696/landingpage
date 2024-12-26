'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Testimoni from './Testimoni';
import ButtonPrimary from './misc/ButtonPrimary';
import ButtonOutline from './misc/ButtonOutline.';
import Maps from '../../public/assets/HugeGlobal.svg';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const steps = [
  'Học Chiến Thuật nâng band từ TOP chuyên gia',
  'Trải Nghiệm Công Nghệ luyện IELTS Hiện Đại',
  'Tiết kiệm hơn 70% thời gian công sức luyện IELTS',
  'Được đồng hành hỗ trợ theo cộng đồng Tactics',
  'Vô vàn quà tặng & suất học Online miễn phí cùng Ai',
];

const Guest = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(100), []);

  return (
    <div
      className="bg-[#ffffff]  w-full "
      id="guest"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper className="w-full flex flex-col sm:py-12">
          <motion.div variants={scrollAnimation}>
            <div>
              <div className="flex justify-end items-center">
                <div className="flex items-center text-left	">
                  <p className="text-8xl sm:text-9xl text-yellow-400">C</p>
                  <div>
                    <h2 className="text-xl sm:text-2xl">
                      Chia sẻ từ Chuyên gia hàng đầu
                    </h2>
                    <p>
                      Không chỉ là là Thầy dạy, họ sẵn sàng trở thành Mentor
                      thân thiết của bạn!
                    </p>
                  </div>
                </div>
              </div>

              <Testimoni />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <div>
              <div className="flex items-center">
                <div className="flex items-center text-left	">
                  <p className="text-8xl sm:text-9xl text-yellow-400">5</p>
                  <div className="">
                    <h2 className="text-xl sm:text-2xl inline sm:block pr-1">
                      Lý do bạn NHẤT ĐỊNH nên có
                    </h2>
                    <h2 className="text-xl sm:text-2xl inline sm:block">
                      mặt ở sự kiện này
                    </h2>
                  </div>
                </div>
              </div>

              <Image
                src={'/assets/5lydo.png'}
                height={2400}
                width={2400}
                quality={100}
                alt="Icon People"
                className="w-full h-auto rounded-2xl hidden sm:block"
              />
              <div className="sm:hidden">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 rounded-2xl border-2 border-[#E6E6E6] bg-[#FAFAF5] p-2 mb-4"
                  >
                    <div className="flex items-center justify-center bg-yellow-400 w-8 h-8 rounded-full text-4xl p-6 text-white-500">
                      {index + 1}
                    </div>
                    <div className="grow text-left">{item} </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Guest;
