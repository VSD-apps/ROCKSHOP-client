import { Button } from '@/shared/ui/button/ui';
import { Menu } from 'lucide-react';

export function HamburgerBtn() {
  return (
    <Button variant="ghost" size="icon">
      <Menu />
    </Button>
  );
}
