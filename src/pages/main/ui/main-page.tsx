import { Button } from '@/shared/ui/button/ui';
import { ModeToggle } from '@/shared/ui/theme-toggle-button/ui';
import { NoticeBanner } from '@/widgets/notice/notice-banner/ui';

export default function MainPage() {
  return (
    <div>
      <NoticeBanner noticeId={1} badgeLabel="공지" title="오직, 클라이밍을 위한 굿즈샵, ROCKSHOP이 3월 오픈해요!" />
      <h1 className="h2">gkdl</h1>
      <p className="text-foreground"> ROCKSHOP - 오직, 클라이밍을 위한 굿즈샵</p>
      <Button variant="outline">그말을</Button>
      <ModeToggle />
    </div>
  );
}
