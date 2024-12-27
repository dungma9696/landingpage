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

const TextFooter = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(100), []);

  return (
    <div className="w-full wrap-content">
      <div className="max-w-[1320px]  px-2 sm:px-8 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper className="w-full flex flex-col ">
          <motion.div variants={scrollAnimation}>
            <div className="flex items-stretch max-w-[990px] mx-auto">
              <div>
                <svg
                  width="48"
                  height="40"
                  viewBox="0 0 48 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66281 39.6C6.94281 39.6 4.66281 38.48 2.82281 36.24C1.06281 34 0.182813 31.52 0.182813 28.8C0.182813 25.68 0.782813 22.24 1.98281 18.48C3.26281 14.64 4.82281 11.12 6.66281 7.92C8.58281 4.63999 10.4228 2.23999 12.1828 0.719995H19.7428C18.2228 3.52 16.9428 6.84 15.9028 10.68C14.9428 14.44 14.3828 18.16 14.2228 21.84C15.5028 22.56 16.6228 23.72 17.5828 25.32C18.6228 26.92 19.1428 28.48 19.1428 30C19.1428 32.56 18.2228 34.8 16.3828 36.72C14.6228 38.64 12.3828 39.6 9.66281 39.6ZM37.1428 39.6C34.4228 39.6 32.1428 38.48 30.3028 36.24C28.5428 34 27.6628 31.52 27.6628 28.8C27.6628 25.68 28.2628 22.24 29.4628 18.48C30.7428 14.64 32.3028 11.12 34.1428 7.92C36.0628 4.63999 37.9028 2.23999 39.6628 0.719995H47.2228C45.7028 3.52 44.4228 6.84 43.3828 10.68C42.4228 14.44 41.8628 18.16 41.7028 21.84C42.9828 22.56 44.1028 23.72 45.0628 25.32C46.1028 26.92 46.6228 28.48 46.6228 30C46.6228 32.56 45.7028 34.8 43.8628 36.72C42.1028 38.64 39.8628 39.6 37.1428 39.6Z"
                    fill="#FDD42A"
                  />
                </svg>
              </div>
              Ai cũng nói tương lai chúng ta luôn rộng mở, nhưng nếu không nắm
              bắt được hiện tại thì làm sao bàn tính chắc tương lai?! Cơ hội
              không đến 2 lần – hãy tham gia Workshop này để được trợ sức từ
              Chuyên gia, biến nỗ lực của bạn thành kết quả vượt trội, chinh
              phục band điểm IELTS trong tầm tay!
              <div className="flex items-end">
                <svg
                  width="48"
                  height="40"
                  viewBox="0 0 48 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8628 0.719995C13.5828 0.719995 15.8228 1.83999 17.5828 4.07999C19.4228 6.31999 20.3428 8.8 20.3428 11.52C20.3428 14.64 19.7028 18.12 18.4228 21.96C17.2228 25.72 15.6628 29.24 13.7428 32.52C11.9028 35.72 10.1028 38.08 8.34281 39.6H0.782813C2.30281 36.8 3.54281 33.52 4.50281 29.76C5.54281 25.92 6.14281 22.16 6.30281 18.48C5.02281 17.76 3.86281 16.6 2.82281 15C1.86281 13.4 1.38281 11.84 1.38281 10.32C1.38281 7.75999 2.26281 5.51999 4.02281 3.59999C5.86281 1.67999 8.14281 0.719995 10.8628 0.719995ZM38.3428 0.719995C41.0628 0.719995 43.3028 1.83999 45.0628 4.07999C46.9028 6.31999 47.8228 8.8 47.8228 11.52C47.8228 14.64 47.1828 18.12 45.9028 21.96C44.7028 25.72 43.1428 29.24 41.2228 32.52C39.3828 35.72 37.5828 38.08 35.8228 39.6H28.2628C29.7828 36.8 31.0228 33.52 31.9828 29.76C33.0228 25.92 33.6228 22.16 33.7828 18.48C32.5028 17.76 31.3428 16.6 30.3028 15C29.3428 13.4 28.8628 11.84 28.8628 10.32C28.8628 7.75999 29.7428 5.51999 31.5028 3.59999C33.3428 1.67999 35.6228 0.719995 38.3428 0.719995Z"
                    fill="#FDD42A"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default TextFooter;
