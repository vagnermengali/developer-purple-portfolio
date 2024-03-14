import React, { useRef, useState, useEffect, useCallback } from 'react';

import { ScrollSnapProps } from '@/interfaces/ScrollSnapProps/ScrollSnapProps';

const ScrollSnap = ({ main, work, about, contact }: ScrollSnapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollBlocked, setScrollBlocked] = useState(false);

  const sections = [main, work, about, contact];

  const handleScroll = useCallback((e: WheelEvent) => {
    if (scrollBlocked) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    let nextIndex = currentIndex + direction;
    nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
      setScrollBlocked(true);
      setTimeout(() => {
        setScrollBlocked(false);
      }, 1000);
    }
  }, [currentIndex, scrollBlocked, sections.length]);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const container = containerRef.current;
    const currentSection = container?.children[currentIndex] as HTMLElement;
    currentSection?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen w-screen flex">
        {main}
      </section>
      <section className="snap-start h-screen w-screen flex">
        {work}
      </section>
      <section className="snap-start h-screen w-screen flex">
        {about}
      </section>
      <section className="snap-start h-screen w-screen flex">
        {contact}
      </section>
    </div>
  );
};

export default ScrollSnap;
