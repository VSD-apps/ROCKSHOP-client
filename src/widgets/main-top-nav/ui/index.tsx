import { HamburgerBtn } from './hanburger-btn';
import { Logo } from './logo';
import { Menu } from './menu';
import { SearchBtn } from './search-btn';

export function MainTopNav() {
  return (
    <header style={{ display: 'flex', gap: '12px' }}>
      <Logo />
      <Menu />
      <SearchBtn />
      <HamburgerBtn />
    </header>
  );
}
