'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';
import ButtonOutline from '../misc/ButtonOutline.';
import { NAMES } from './data';
import { toast } from 'sonner';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setScrollActive(window.scrollY > 10);
      });
    }
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 101);
      toast.success(`${NAMES[randomNumber]} vừa đăng ký thành công!`);
    }, 5000);
    const intervalID = setInterval(function () {
      const randomNumber = Math.floor(Math.random() * 101);
      toast.success(`${NAMES[randomNumber]} vừa đăng ký thành công!`);
    }, 60000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <>
      <header
        className={
          'fixed top-0 w-full  z-30 bg-white-500 transition-all pt-4 ' +
          (scrollActive ? ' shadow-md ' : '')
        }
      >
        <div
          className={
            'max-w-[1320px] px-2 sm:px-8 lg:px-16 mx-auto text-sm flex gap-2 justify-between sm:justify-start ' +
            (scrollActive ? ' hidden sm:flex' : '')
          }
        >
          <span>Hotline: 094 965 8894</span>
          <span className="hidden sm:block">|</span>
          <span>center.ieltstactics@gmail.com</span>
        </div>
        <nav className="max-w-[1320px] px-2 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src="/assets/logo-ielts-tactics.png"
              alt="logo"
              layout="responsive"
              quality={100}
              height={54}
              width={100}
              className="!h-10 !w-auto"
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'about'
                  ? ' text-yellow-400 animation-active '
                  : ' text-black-500 hover:text-yellow-400 a')
              }
            >
              Home
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="guest"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('guest');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'guest'
                  ? ' text-yellow-400 animation-active '
                  : ' text-black-500 hover:text-yellow-400 ')
              }
            >
              Diễn giả
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('content');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'content'
                  ? ' text-yellow-400 animation-active '
                  : ' text-black-500 hover:text-yellow-400 ')
              }
            >
              Nội dung sự kiện
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="gift"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('gift');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'gift'
                  ? ' text-yellow-400 animation-active '
                  : ' text-black-500 hover:text-yellow-400 ')
              }
            >
              Quà Tặng đặc biệt
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {/* <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-yellow-400 transition-all">
                  Sign In
              </a>
            </Link> */}
            <LinkScroll
              to="form"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <ButtonOutline>Đăng ký ngay</ButtonOutline>
            </LinkScroll>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-0 sm:px-8 shadow-t ">
        <div className="bg-white-500 px-2 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'mx-1 sm:mx-2 px-1 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'about'
                  ? '  border-yellow-400 text-yellow-400'
                  : ' border-transparent')
              }
            >
              <svg
                className="!w-6 !h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                stroke="currentColor"
                fill={activeLink === 'about' ? '#facc15' : '#0000000'}
              >
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" />
              </svg>
              Home
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="guest"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('guest');
              }}
              className={
                'mx-1 sm:mx-2 px-1 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'guest'
                  ? '  border-yellow-400 text-yellow-400'
                  : ' border-transparent ')
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60.671 60.671"
                className="w-6 h-6"
                fill={activeLink === 'guest' ? '#facc15' : '#0000000'}
              >
                <g>
                  <g>
                    <ellipse
                      fill={activeLink === 'guest' ? '#facc15' : '#0000000'}
                      cx="30.336"
                      cy="12.097"
                      rx="11.997"
                      ry="12.097"
                    />
                    <path
                      fill={activeLink === 'guest' ? '#facc15' : '#0000000'}
                      d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
			C48.354,35.818,42.661,30.079,35.64,30.079z"
                    />
                  </g>
                </g>
              </svg>
              Diễn giả
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('content');
              }}
              className={
                'mx-1 sm:mx-2 px-1 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'content'
                  ? '  border-yellow-400 text-yellow-400'
                  : ' border-transparent ')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Nội dung sự kiện
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="gift"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('gift');
              }}
              className={
                'mx-1 sm:mx-2 px-1 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'gift'
                  ? '  border-yellow-400 text-yellow-400'
                  : ' border-transparent ')
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-6 h-6"
                fill={activeLink === 'gift' ? '#facc15' : '#0000000'}
              >
                <path d="M 21 4 C 17.709968 4 15 6.7099679 15 10 C 15 11.480035 15.475387 12.896259 16.328125 14 L 8 14 C 6.895 14 6 14.895 6 16 L 6 22 L 58 22 L 58 16 C 58 14.895 57.105 14 56 14 L 47.589844 14 C 48.472908 12.913389 49 11.496062 49 10 C 49 6.7099679 46.290032 4 43 4 L 42.119141 4 L 41.523438 4.6503906 C 39.370516 7.0053824 36.70757 9.2523567 34.464844 11 L 29.535156 11 C 27.29243 9.2523567 24.629484 7.0053824 22.476562 4.6503906 L 21.880859 4 L 21 4 z M 20.429688 8.2304688 C 22.456004 10.319321 24.619146 12.20238 26.59375 13.761719 C 24.720228 13.596465 23.146961 13.339805 21.958984 12.966797 C 20.774603 12.594918 20.013074 12.127805 19.599609 11.683594 C 19.186144 11.239382 19 10.8304 19 10 C 19 9.0978916 19.629307 8.4900098 20.429688 8.2304688 z M 43.570312 8.2304688 C 44.370694 8.4900098 45 9.0978916 45 10 C 45 10.780533 44.814862 11.163616 44.347656 11.628906 C 43.88045 12.094196 43.021775 12.582887 41.777344 12.960938 C 40.632841 13.308628 39.132022 13.53323 37.482422 13.699219 C 39.439223 12.1503 41.569331 10.293204 43.570312 8.2304688 z M 8 24.037109 L 8 56 L 28 56 L 28 24.423828 L 8 24.037109 z M 36 24.576172 L 36 56 L 56 56 L 56 24.962891 L 36 24.576172 z" />
              </svg>
              Quà tặng đặc biệt
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
