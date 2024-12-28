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
    time: '20:00 PM',
    title: 'LÀM QUEN CÁC “NGÔI SAO” - Mở Ra Thế Giới IELTS Hiện Đại',
    content: [
      'Đối thoại cùng Chuyên gia IDP vững hành trang đi thi năm 2025',
      'Gặp gỡ Cựu sinh viên Đại học Bắc Kinh Trung Quốc  (top 1% talent Trung Quốc), Chuyên gia IELTS Tactics',
      'Thảo luận về những rào cản thường gặp khi học IELTS và cách vượt qua chúng hiệu quả',
    ],
  },
  {
    time: '20:20 PM',
    title: 'THỰC CHIẾN - Chiến Thuật Nâng Band Đỉnh Cao',
    content: [
      'Trực tiếp trải nghiệm và lắng nghe phân tích sample pronunciation từ Chuyên gia',
      'Trải nghiệm luyện thi IELTS trên ClassIn với chiến thuật thông minh giúp cải thiện nhanh chóng',
      'Phân tích bài Speaking Band 8+ cùng chuyên gia để hiểu cách học và áp dụng kỹ thuật làm bài thực chiến.',
    ],
  },
  {
    time: '21:20 PM',
    title: 'Q&A - Hỏi Đáp Chuyên Sâu & Quà Tặng Giá Trị',
    content: [
      'Đặt câu hỏi trực tiếp và nhận lời khuyên từ Quản lý cấp cao IDP, CEO ClassIn và Đại diện IELTS Tactics.',
      'Nhận ngay các phần quà đặc biệt: Voucher giảm giá lệ phí thi tại IDP, khoá luyện Speaking Forecast 8.0+ hoàn toàn Miễn Phí...',
    ],
  },
];

const Content = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      id="content"
      className="bg__color--gray wrap-content"
    >
      <div className="max-w-[1320px]  px-2 sm:px-8 lg:px-16 mx-auto">
        <ScrollAnimationWrapper className="flex">
          <motion.div
            className="h-full w-full"
            variants={scrollAnimation}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center text-left	">
                <p className="text-8xl sm:text-9xl text-yellow-400">N</p>
                <div>
                  <p className="text-xl sm:text-2xl">Nội dung workshop</p>
                  <p>
                    Hãy update cách học thông minh, bạn sẽ thấy IELTS easy hơn
                    bao giờ hết!
                  </p>
                </div>
              </div>
              <Image
                src={'/assets/group-ky-nang.png'}
                height={1400}
                width={1400}
                quality={100}
                alt="Icon People"
                className="w-[408px] h-auto hidden sm:inline"
              />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="flex flex-col items-end justify-center sm:mt-4 sm:mx-auto w-full lg:w-9/12">
          <div>
            {steps.map((item, index) => (
              <div
                key={`${index}-${item.time}`}
                className="flex sm:gap-4  items-center mb-4 w-full flex-col sm:flex-row"
              >
                <p className="min-w-[80px] text-black-600 font-bold">
                  {item.time}
                </p>

                <div className="bg-yellow-400 p-4 w-full rounded-md">
                  <p className="text-black-600 font-bold">{item.title}</p>
                  <div className="text-black-500">
                    {item.content.map((contentItem, indexContent) => (
                      <div key={`${indexContent}-${contentItem}`}>
                        {`- ${contentItem}`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center mt-8">
              <p className="text-[20px]">
                BẠN HOÀN TOÀN CÓ THỂ MONG ĐỢI NHIỀU HƠN!
              </p>
              <p className="">
                Vì chúng mình đã chuẩn bị rất nhiều BẤT NGỜ TUYỆT VỜI tặng riêng
                người tham gia Event!
              </p>
              <p className="mb-4">
                Số lượng có hạn, hãy đăng ký NGAY để không bỏ lỡ cơ hội
              </p>
              <LinkScroll
                to="form"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <ButtonPrimary>Đăng ký ngay</ButtonPrimary>
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
