'use client';

import { cn } from '@/app/lib/shadcn/utils';
import { Button, ButtonProps } from '@/shared/ui/button/ui';

interface Props {
  buttonProps: ButtonProps;
  className?: string;
  icon: React.ReactNode;
}

export function IconButton({ buttonProps, className, icon }: Props) {
  return (
    <Button {...buttonProps} className={cn('rounded-full', className)}>
      {icon}
    </Button>
  );
}
