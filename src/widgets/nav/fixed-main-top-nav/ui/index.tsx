'use client';

import { useEffect, useState } from 'react';

export function FixedMainTopNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1280;

    const handleScroll = () => {
      if (isDesktop) {
        setShow(window.scrollY > 100);
      }

      if (!isDesktop) {
        setShow(window.scrollY > 72);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`text-red-500 fixed top-0 z-50 transition-all duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      TopNav
    </div>
  );
}
