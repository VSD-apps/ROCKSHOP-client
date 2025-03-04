import { Button } from '@/shared/ui/button/ui';
import { ModeToggle } from '@/shared/ui/theme-toggle-button/ui';

export default function MainPage() {
  return (
    <div>
      <h1 className="h2">gkdl</h1>
      <p className="text-foreground"> ROCKSHOP - 오직, 클라이밍을 위한 굿즈샵</p>
      <Button variant="outline">그말을</Button>
      <ModeToggle />
    </div>
  );
}
