import { HamburgerBtn } from './hanburger-btn';
import { Logo } from './logo';
import { Menu } from './menu';
import { SearchBtn } from './search-btn';

export function MainTopNav() {
  return (
    <header className="bg-black">
      <div className="mx-auto flex justify-between items-center text-white w-full max-w-[600px] h-[72px] desktop:max-w-[1200px] desktop:h-[100px]">
        <div className="flex gap-5">
          <Logo />
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
