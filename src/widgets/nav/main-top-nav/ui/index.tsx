import Logo from '@/shared/ui/logo/ui';
import { HamburgerBtn } from './hanburger-btn';
import { Menu } from './menu';
import { SearchBtn } from './search-btn';

export function MainTopNav() {
  return (
    <header className="bg-black">
      <div className=" flex justify-between items-center text-white mx-auto  w-full max-w-[600px] h-[72px] desktop:max-w-[1200px] desktop:h-[100px]">
        <div className="flex gap-5">
          <Logo className="w-[96px] h-[24px] desktop:w-[136px] desktop:h-[34px]" />
          <SearchBtn />
        </div>
        <div className="flex gap-5 hidden desktop:block">
          <Menu />
        </div>
        <div className="flex gap-5 desktop:hidden">TODO : Mobile Menu</div>
      </div>
    </header>
  );
}
