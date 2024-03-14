import React, { useRef, useState, useEffect, useCallback } from 'react';

interface FullPageVerticalProps {
  main: JSX.Element;
  work: JSX.Element;
  about: JSX.Element;
  contact: JSX.Element;
}

const FullpageVertical: React.FC<FullPageVerticalProps> = ({ main, work, about, contact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollBlocked, setScrollBlocked] = useState(false);

  const sections = [
    { component: main, id: 'main' },
    { component: work, id: 'work' },
    { component: about, id: 'about' },
    { component: contact, id: 'contact' },
  ];

  const hashToIndex = (hash: string) => {
    const index = sections.findIndex(section => `#${section.id}` === hash);
    return index >= 0 ? index : 0;
  };

  const handleScroll = useCallback((e: WheelEvent | TouchEvent) => {
    if (scrollBlocked) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    let direction: number;
    if ('deltaY' in e) {
      // Desktop
      direction = (e as WheelEvent).deltaY > 0 ? 1 : -1;
    } else {
      // Mobile
      const touchEvent = e as TouchEvent;
      const deltaY = touchEvent.changedTouches[0].clientY - touchEvent.touches[0].clientY;
      direction = deltaY > 0 ? 1 : -1;
    }

    let nextIndex = currentIndex + direction;
    nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
      setScrollBlocked(true);
      setTimeout(() => {
        setScrollBlocked(false);
      }, 1000);
      window.location.hash = sections[nextIndex].id;
    }
  }, [currentIndex, scrollBlocked, sections]);

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const eventName = isMobile ? 'touchmove' : 'wheel';
    container?.addEventListener(eventName, handleScroll, { passive: false });

    return () => {
      container?.removeEventListener(eventName, handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const hash = window.location.hash;
    const initialIndex = hash === '#main' ? 0 : hashToIndex(hash);
    setCurrentIndex(initialIndex);
  }, []);

  useEffect(() => {
    const currentSection = sections[currentIndex].component;
    if (currentIndex !== 0) {
      document.getElementById(currentSection.props.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex, sections]);

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {sections.map((section, index) => (
        <section key={index} id={section.id} className={`snap-start h-screen w-screen flex ${currentIndex !== index ? 'hidden' : ''}`}>
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default FullpageVertical;
