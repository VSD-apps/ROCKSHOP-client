import { PageLayout } from '@/widgets/layouts/page-layout';
import { FixedMainTopNav } from '@/widgets/nav/fixed-main-top-nav';
import { MainTopNav } from '@/widgets/nav/main-top-nav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <FixedMainTopNav />
      <MainTopNav />
      <PageLayout>{children}</PageLayout>
    </div>
  );
}
