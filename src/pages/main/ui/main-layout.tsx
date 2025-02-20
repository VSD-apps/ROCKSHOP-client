import { MainTopNav } from '@/widgets/main-top-nav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainTopNav />
      {children}
    </>
  );
}
