'use client';

import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import ButtonPrimary from './misc/ButtonPrimary';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

const FormCP = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [plan, setPlan] = useState('');
  const [question, setQuestion] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (
      (!name.trim() &&
        !phone.trim() &&
        !email.trim() &&
        !job.trim() &&
        !plan.trim() &&
        !question.trim()) ||
      loading
    ) {
      return;
    }
    e.preventDefault();
    setLoading(true);
    const data = {
      Name: name.trim(),
      Phone: phone.trim(),
      Email: email.trim(),
      Job: job.trim(),
      Plan: plan.trim(),
      Question: question.trim(),
      Date: new Date().toISOString(),
    };
    const dataBody = [];
    for (const [key, value] of Object.entries(data)) {
      dataBody.push(`${key}=${value}`);
    }
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwdTqIMga6A7A8fILmqNnNgcF8HBBTDpE12c3Q4ZR3qHBIQnZ6nst9x4KeUgfU-FHr-zg/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: dataBody.join('&&&'),
        }
      ).then(function (response) {
        if (response) {
          toast.success(`${name.trim()} vừa đăng ký thành công!`);

          setName('');
          setPhone('');
          setEmail('');
          setJob('');
          setPlan('');
          setQuestion('');
          setLoading(false);

          return response; // Assuming your script returns JSON response
        } else {
          setLoading(false);
          toast.success(`Error!`);
        }
      });
    } catch (error) {
      setLoading(false);
      toast.success(`Error!`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className=" bg__color--gray wrap-content"
      id="form"
    >
      <div className="max-w-[1320px] px-2 sm:px-8 lg:px-16  w-full  mx-auto">
        <ScrollAnimationWrapper>
          <motion.div
            className="h-full w-full"
            variants={scrollAnimation}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grow flex flex-col items-center">
                <p className="text-black-600 text-2xl text-center">
                  “KHO VÀNG” TRI THỨC DÀNH TẶNG BẠN
                </p>
                <div className="">
                  <div className="relative">
                    <Image
                      src={'/assets/form/line.png'}
                      alt="img"
                      quality={100}
                      width={612}
                      height={383}
                      className="w-[160px] h-auto mx-auto"
                    />
                    <Image
                      src={'/assets/form/mien-phi.png'}
                      alt="img"
                      quality={100}
                      width={612}
                      height={383}
                      className=" w-[100px]  sm:w-[160px] h-auto absolute top-2 end-0"
                    />
                  </div>
                  <Image
                    src={'/assets/form/user.png'}
                    alt="img"
                    quality={100}
                    width={612}
                    height={383}
                    className="w-[60%] h-auto mx-auto mt-4 hidden sm:block"
                  />
                  <div className="flex text-[12px] mb-4 mt-12 sm:my-4 mx-2 sm:mx-14 border-solid pb-2 border-b-4	border-yellow-400">
                    <div className="w-1/2 pr-1">
                      <p>-Tài khoản học Online Miễn Phí</p>
                      <p>-Voucher giảm 300k lệ phí thi IDP</p>
                      <p>-Suất thi thử 4 kỹ năng Miễn Phí</p>
                    </div>

                    <div className="w-1/2 pl-1">
                      <p>-Học bổng khoá học tại Tactics lên đến 40%</p>
                      <p>
                        -Gia nhập cộng đồng IELTS Tactics hỗ trợ học tập mỗi
                        ngày
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p>Tặng Khoá IELTS Online Độc Quyền </p>
                    <p>
                      trị giá{' '}
                      <span className="text-[#b23030] font-bold">
                        3.000.000VNĐ
                      </span>{' '}
                    </p>
                    <p>
                      <span className="text-[#b23030] font-bold">
                        Tặng MIỄN PHÍ
                      </span>{' '}
                      - Duy nhất tại sự kện
                    </p>
                  </div>
                </div>
              </div>
              <div className="grow pt-12 sm:pt-0 text-center">
                <div className="rounded-lg text-[#050505] overflow-hidden p-2 sm:p-4 border-solid border-2	border-[#E6E6E6] bg-[#FAFAF5]">
                  <p className="text-xl font-bold sm:text-[30px] ">
                    Đừng tiếc 3s nắm cơ hội VÀNG!
                  </p>
                  <p className="text-[12px] my-4 font-bold">
                    Giữ chỗ sớm để tham gia sự kiện IELTS hot nhất Quý 1 năm
                    2025!
                  </p>
                  <iframe
                    name="hiddenFrame"
                    width="0"
                    height="0"
                    border="0"
                    style={{ display: 'none' }}
                  ></iframe>
                  <div className="flex mb-4 gap-4 sm:gap-1 flex-col sm:flex-row">
                    <Input
                      type="text"
                      placeholder="Họ và Tên"
                      className="grow"
                      value={name}
                      name={'Name'}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Số điện thoại"
                      className="grow"
                      name="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <Input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    className="grow mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="mb-4">
                    <Select
                      className="!bg-[#FAFAF5]"
                      onValueChange={(e) => {
                        setJob(e);
                      }}
                      name="Job"
                      value={job || undefined}
                    >
                      <SelectTrigger className="w-full !bg-[#FAFAF5]">
                        <SelectValue
                          placeholder="Bạn hiện đang làm gì"
                          className="!bg-[#FAFAF5]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Học sinh Cấp 2">
                            Học sinh Cấp 2
                          </SelectItem>
                          <SelectItem value="Học sinh Cấp 3">
                            Học sinh Cấp 3
                          </SelectItem>
                          <SelectItem value="Sinh viên">Sinh viên</SelectItem>
                          <SelectItem value="Người đi làm">
                            Người đi làm
                          </SelectItem>
                          <SelectItem value="Phụ huynh">Phụ huynh</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <Input
                    name="Plan"
                    type="text"
                    placeholder="Bạn dự định thi IELTS khi nào?"
                    className="grow mb-4"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                  />

                  <Input
                    name="Question"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                    type="text"
                    placeholder="Bạn mong muốn được giải đáp vấn đề gì từ Diễn giả?"
                    className="grow mb-4"
                  />
                  <p className="text-[14px]">
                    Số lượng tham gia GIỚI HẠN chỉ 300 slot Miễn Phí!
                  </p>
                  <p className="text-[14px] text-yellow-400">
                    Nhanh tay lên! Sự kiện sắp bắt đầu!
                  </p>

                  <ButtonPrimary
                    onClick={handleSubmit}
                    addClass="w-full my-4"
                  >
                    Submit
                  </ButtonPrimary>
                  <p className="text-[11px] sm:text-[12px] text-[#222222] opacity-70 mb-8 sm:mb-20">
                    * Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm
                    (trong vòng 24h )
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default FormCP;
