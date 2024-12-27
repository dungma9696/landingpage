'use client';
import Image from 'next/image';

const Book = () => {
  return (
    <div className="wrap-content  hidden sm:block">
      <div className="flex max-w-[1320px] px-2 sm:px-8 lg:px-16  w-full  mx-auto">
        <div className="w-1/2">
          <Image
            src={'/assets/book.png'}
            alt="img"
            quality={100}
            width={612}
            height={383}
            className="w-[420px] h-auto mx-auto"
          />
        </div>

        <div className="w-1/2">
          <div className="flex items-center text-left	">
            <p className="text-9xl text-yellow-400">S</p>
            <div className="text-black-600 font-bold text-2xl">
              <p>SỰ KIỆN về IELTS hội tụ nhiều thông tin</p>
              <p>HOT nhất hiện nay sắp bắt đầu!</p>
            </div>
          </div>
          <p>
            Hãy để Tactics cùng các Chuyên gia “bật mí” cho bạn các thông tin
            quý giá liên quan kỳ thi quan trọng sắp tới và chiến thuật nâng band
            thật sự hiệu quả, đã giúp Tactics chắp cánh ước mơ cho hàng ngàn Học
            viên thành công chinh phục mục tiêu 6.5 - 7.0 - 8.0 IELTS nhé!
          </p>

          <Image
            src={'/assets/hoc-vien.png'}
            alt="img"
            quality={100}
            width={612}
            height={383}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
