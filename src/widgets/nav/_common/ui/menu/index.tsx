'use client';

import { IconButton } from '@/shared/ui';
import { Heart, ShoppingCart, User } from 'lucide-react';

/**
 * 상단 네비게이션 데스크탑 메뉴
 */
function Desktop() {
  return (
    <div className="releative inline-flex gap-2">
      <IconButton
        className="[&_svg]:size-6"
        buttonProps={{
          variant: 'ghost',
          size: 'icon',
          onClick: () => console.log('clicked'),
        }}
        icon={<User />}
      />
      <IconButton
        className="[&_svg]:size-6"
        buttonProps={{
          variant: 'ghost',
          size: 'icon',
          onClick: () => console.log('clicked'),
        }}
        icon={<Heart />}
      />
      <IconButton
        className="[&_svg]:size-6"
        buttonProps={{
          variant: 'ghost',
          size: 'icon',
          onClick: () => console.log('clicked'),
        }}
        icon={<ShoppingCart />}
      />
    </div>
  );
}

/**
 * 상단 네비게이션 모바일 메뉴
 */
function Mobile() {
  return (
    <div className="releative inline-flex gap-2">
      <IconButton
        className="[&_svg]:size-5"
        buttonProps={{
          variant: 'ghost',
          size: 'icon',
          onClick: () => console.log('clicked'),
        }}
        icon={<ShoppingCart />}
      />
    </div>
  );
}

const Menu = { Desktop, Mobile };

export default Menu;
