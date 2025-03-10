'use client';

import Logo from '@/shared/ui/_custom/logo/ui';
import { useEffect, useState } from 'react';
import { HamburgerBtn } from './hanburger-btn';
import Menu from '../../_common/ui/menu';
import { SearchBtn } from '../../_common/ui/search-btn';
import { cn } from '@/app/lib/shadcn/utils';

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
      className={cn(
        'z-lv4 w-full bg-white border-b border-gray-300 fixed top-0 transition-all duration-300',
        show ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="w-full max-w-[600px] h-[72px] mx-auto px-2 flex gap-4 justify-between items-center text-black desktop:max-w-[1200px] desktop:h-[100px]">
        <div className="w-full flex items-center gap-4 desktop:gap-6">
          <div className="flex items-center gap-2 desktop:gap-4">
            <HamburgerBtn className="flex-shrink-0" />
            <Logo className="flex-shrink-0 w-[96px] h-[24px] desktop:w-[136px] desktop:h-[34px]" />
          </div>
          <div className="flex-grow desktop:max-w-[500px]">
            <SearchBtn className="border-gray-300 hover:bg-gray-50" />
          </div>
        </div>
        <div className="hidden gap-5 desktop:block">
          <Menu.Desktop />
        </div>
        <div className="flex gap-5 desktop:hidden">
          <Menu.Mobile />
        </div>
      </div>
    </header>
  );
}
