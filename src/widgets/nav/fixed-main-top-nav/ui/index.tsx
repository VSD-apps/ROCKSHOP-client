'use client';

import Logo from '@/shared/ui/logo/ui';
import { useEffect, useState } from 'react';
import { HamburgerBtn } from './hanburger-btn';

export function FixedMainTopNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1280;

    const handleScroll = () => {
      if (isDesktop) {
        setShow(window.scrollY > 70);
      }

      if (!isDesktop) {
        setShow(window.scrollY > 72);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white border-b border-gray-300 fixed top-0 z-100 transition-all duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex justify-between items-center text-black mx-auto  w-full max-w-[600px] h-[72px] desktop:max-w-[1200px] desktop:h-[100px]">
        <div className="flex items-center gap-2">
          <HamburgerBtn />
          <Logo className="w-[96px] h-[24px] desktop:w-[136px] desktop:h-[34px]" />
        </div>
        <div className="flex gap-5 hidden desktop:block">Menu</div>
        <div className="flex gap-5 desktop:hidden">모바일 메뉴</div>
      </div>
    </header>
  );
}
