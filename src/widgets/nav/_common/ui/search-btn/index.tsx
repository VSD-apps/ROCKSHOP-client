import { cn } from '@/app/lib/shadcn/utils';
import { Button } from '@/shared/ui';
import { Search } from 'lucide-react';

interface Props {
  className?: string;
}
export function SearchBtn({ className }: Props) {
  return (
    <div
      className={cn(
        'p-1.5 flex gap-2 items-center rounded-md border border-gray-700 hover:bg-gray-900 desktop:p-2',
        className,
      )}
    >
      <Search className="flex-shrink-0 size-5 text-gray-400" />
      <p className="w-full text-gray-400 text-sm hover:cursor-text">봄 맞이 한정판, 더클라임 티셔츠 어때요?</p>
    </div>
  );
}
