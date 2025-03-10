'use client';

import Logo from '@/shared/ui/_custom/logo/ui';
import { SearchBtn } from '../../_common/ui/search-btn';
import Menu from '../../_common/ui/menu';

export function MainTopNav() {
  return (
    <header className="bg-black z-lv5 relative">
      <div className="px-2 flex gap-4 items-center justify-between text-white mx-auto w-full max-w-[600px] h-[72px] desktop:max-w-[1200px] desktop:h-[100px]">
        <div className="w-full flex items-center gap-6">
          <Logo className="flex-shrink-0 w-[96px] h-[24px] desktop:w-[136px] desktop:h-[34px]" />
          <div className="flex-grow desktop:max-w-[500px]">
            <SearchBtn />
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
