'use client';
import Image from 'next/image';

const Book = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
      <div className="flex py-6 sm:py-16">
        <div className="w-[40%]">
          <Image
            src={'/assets/book.png'}
            alt="img"
            quality={100}
            width={612}
            height={383}
            className="w-[160px] h-auto"
          />
        </div>

        <div className="grow">
          <div className="flex items-center text-left	">
            <p className="text-9xl text-yellow-400">C</p>
            <div>
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
        </div>
      </div>
    </div>
  );
};

export default Book;
