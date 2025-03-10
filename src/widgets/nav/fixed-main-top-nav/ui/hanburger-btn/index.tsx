import { IconButton } from '@/shared/ui';
import { cn } from '@/app/lib/shadcn/utils';
import { Menu } from 'lucide-react';

interface Props {
  className?: string;
}
export function HamburgerBtn({ className }: Props) {
  return (
    <IconButton
      className={cn('[&_svg]:size-5 desktop:[&_svg]:size-6', className)}
      buttonProps={{
        variant: 'ghost',
        size: 'icon',
      }}
      icon={<Menu />}
    />
  );
}
