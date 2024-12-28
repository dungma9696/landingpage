'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './styles.css';

export function ModalCP({ open, setOpen }) {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('05');

  let timeLeft = 300;

  // Hàm đếm ngược

  useEffect(() => {
    let countdown = setInterval(function () {
      // Tính toán phút và giây còn lại
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      const timeS = `${seconds < 10 ? '0' + seconds : seconds}`;
      setSeconds(timeS);
      // Hiển thị thời gian đếm ngược

      // Giảm số giây còn lại
      timeLeft--;

      const timeM = `${'0' + minutes}`;
      setMinutes(timeM);

      // Khi hết thời gian, dừng đếm ngược
      if (timeLeft < 0) {
        timeLeft = 300;
      }
    }, 1000);

    return () => {
      if (!open) {
        clearInterval(countdown);
      }
    };
  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger
        asChild
        className="hidden"
      >
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[800px] sm:min-h-[500px] px-2">
        <DialogHeader>
          <DialogTitle className="text-center text-yellow-400 text-3xl pt-2 sm:pt-0">
            QUAN TRỌNG! Bạn chỉ còn 1 bước cuối cùng
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <div className="text-black-600 sm:text-xl font-bold text-center">
            <p>Vào Nhóm Kín Zalo Chúng Ta Để Nhận Thông Tin và </p>
            <p>Cách Thức Học Kèm Theo Tài Liệu</p>
          </div>

          <Image
            src="/assets/qr-zalo.jpeg"
            alt="logo"
            layout="responsive"
            quality={100}
            height={800}
            width={800}
            className="hidden sm:block sm:!h-[260px] !w-auto  "
          />
          <a
            href="https://zalo.me/g/tmaalb745"
            target="blank"
            className="rounded-full font-bold flex gap-2 items-center px-2 sm:px-4 py-2  bg-yellow-400 my-4"
          >
            <Image
              src="/assets/zalo.png"
              alt="logo"
              layout="responsive"
              quality={100}
              height={200}
              width={200}
              className="!h-[30px] sm:!h-[60px] !w-auto  "
            />{' '}
            <p className="text-sm sm:text-base text-center">
              BẤM VÀO ĐÂY ĐỂ ĐƯỢC GIÁO VIÊN IELTS STACTISC HỖ TRỢ SỰ KIỆN
            </p>
          </a>
          <div className="text-center font-bold">
            <p className="text-orange-500">
              Hoặc add Zalo Đội ngũ Support theo SĐT này để được thêm vào Nhóm:{' '}
            </p>
            <p className="text-orange-500">0915480726 (Cô Thuỳ Giang)</p>
          </div>

          <div className="text-center font-bold">
            <p>
              <span className="text-orange-500">
                Nếu bạn không vào nhóm kín
              </span>
              , chúng tôi không thể gửi link vào phòng Online
            </p>
            <p className="inline sm:block pr-1">
              Workshop và hướng dẫn bạn nhận tài liệu học tập được.
            </p>
            <p className="inline sm:block">
              Vì vậy hãy vào nhóm ngay trước khi nhóm đóng lại trong:
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <div>
              <div className="bg-yellow-400 w-[60px] h-[80px] flex items-center justify-center text-[50px]">
                {minutes}
              </div>
              Minutes
            </div>

            <div>
              <div className="bg-yellow-400 w-[60px] h-[80px] flex items-center justify-center text-[50px]">
                {seconds}
              </div>
              Seconds
            </div>
          </div>
        </div>
        <DialogFooter className={'hidden'}>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
