'use client';

import { IconButton } from '@/shared/ui';
import { ShoppingBasket } from 'lucide-react';

export function Menu() {
  return (
    <div>
      <IconButton
        buttonProps={{ variant: 'default', size: 'icon', onClick: () => console.log('clicked') }}
        icon={<ShoppingBasket />}
      />
    </div>
  );
}
