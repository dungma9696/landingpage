'use client';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import ButtonPrimary from './misc/ButtonPrimary';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    const newForm = new FormData();
    newForm.append('Name', name.trim());
    newForm.append('Phone', phone.trim());
    newForm.append('Email', email.trim());
    newForm.append('Job', job.trim());
    newForm.append('Plan', plan.trim());
    newForm.append('Question', question.trim());
    const data = {
      Name: name.trim(),
      Phone: phone.trim(),
      Email: email.trim(),
      Job: job.trim(),
      Plan: plan.trim(),
      Question: question.trim(),
    };

    try {
      debugger;

      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbwHazyVn31m1LJcvF8F23ai-8CiOhg8Ha-hOfCo1lP8Gi7-INQojDoU9JJjJJmIfMKPpw/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify(data),
        }
      );
      debugger;

      const result = await res.json();
      if (res.ok) {
        setStatus(`File uploaded successfully! File ID: ${result.fileId}`);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      debugger;
    }
  };

  // action="https://script.google.com/macros/s/AKfycbwHazyVn31m1LJcvF8F23ai-8CiOhg8Ha-hOfCo1lP8Gi7-INQojDoU9JJjJJmIfMKPpw/exec"

  return (
    <div
      className=" bg-gray-100"
      id="gift"
    >
      <div className=" max-w-screen-xl py-14  mt-8 px-6 sm:px-8 lg:px-16 mx-auto">
        <ScrollAnimationWrapper className="flex">
          <motion.div
            className="h-full w-full p-4"
            variants={scrollAnimation}
          >
            <div className="flex">
              <div className="grow flex flex-col items-center">
                <p>“KHO VÀNG” TRI THỨC DÀNH TẶNG BẠN</p>
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
                      className="w-[160px] h-auto absolute top-0 end-0"
                    />
                  </div>
                  <Image
                    src={'/assets/form/user.png'}
                    alt="img"
                    quality={100}
                    width={612}
                    height={383}
                    className="w-[60%] h-auto mx-auto mt-4"
                  />
                </div>
              </div>
              <div className="grow">
                <div className="rounded-lg text-[#050505] overflow-hidden p-4 border-solid border-2	border-[#E6E6E6] bg-[#FAFAF5]">
                  <p className="text-[30px] ">Đừng tiếc 3s nắm cơ hội VÀNG!</p>
                  <p className="text-[16px] mt-4">
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
                  {/* <form
                    method="POST"
                    action={
                      'https://script.google.com/macros/s/AKfycbwHazyVn31m1LJcvF8F23ai-8CiOhg8Ha-hOfCo1lP8Gi7-INQojDoU9JJjJJmIfMKPpw/exec'
                    }
                    target="hiddenFrame"
                  > */}
                  <div className="flex mb-4">
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
                    addClass="w-full"
                  >
                    Submit
                  </ButtonPrimary>
                  {/* </form> */}
                  <p className="text-[12px] text-[#222222] opacity-70">
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
