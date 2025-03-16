'use client';

import { cn } from '@/app/lib/shadcn/utils';
import { Badge } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  noticeId: number;
  className?: string;
  badgeLabel: string;
  title: string;
}
export function NoticeBanner(props: Props) {
  const { noticeId, className, badgeLabel, title } = props;
  const router = useRouter();

  return (
    <div
      className={cn(
        'my-4 py-2 px-4 flex gap-2 items-center bg-gray-100 rounded-md desktop:gap-4 desktop:py-3 desktop:px-4',
        className,
      )}
    >
      <Badge className="flex-shrink-0 text-xs desktop:text-sm hover:bg-destructive" variant={'destructive'}>
        {badgeLabel}
      </Badge>
      <p
        className="text-xs truncate desktop:text-sm hover:cursor-pointer"
        onClick={() => router.push(`/notice/${noticeId}`)}
      >
        {title}
      </p>
    </div>
  );
}
