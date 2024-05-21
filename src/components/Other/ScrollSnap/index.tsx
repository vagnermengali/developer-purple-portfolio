import React, { useRef, useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import { ScrollSnapProps, SectionScrollSnapProps } from '@/interfaces/ScrollSnapProps/ScrollSnapProps';

const ScrollSnap = ({ main, work, about, contact }: ScrollSnapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollBlocked, setScrollBlocked] = useState(false);

  const sections = [
    { component: main, id: 'main' },
    { component: work, id: 'work' },
    { component: about, id: 'about' },
    { component: contact, id: 'contact' },
  ];

  const hashToIndex = useCallback((hash: string) => {
    const index = sections.findIndex(section => `#${section.id}` === hash);
    return index >= 0 ? index : 0;
  }, [sections]);

  const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleScroll = useCallback((e: WheelEvent | TouchEvent) => {
    e.preventDefault();

    if (scrollBlocked) {
      return;
    }

    let direction = 0;
    if (e instanceof WheelEvent) {
      direction = e.deltaY > 0 ? 1 : -1;
    } else if (e instanceof TouchEvent) {
      // Detect touch movement on Y axis
      const touch = e.touches[0];
      const deltaY = touch.clientY - startY.current;
      if (Math.abs(deltaY) >= touchThreshold) {
        direction = deltaY > 0 ? (isMobile ? -1 : 1) : (isMobile ? 1 : -1); // Invert direction on mobile
        startY.current = touch.clientY;
      }
    }

    let nextIndex = currentIndex + direction;
    nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
      setScrollBlocked(true);
      setTimeout(() => setScrollBlocked(false), 1000);
      window.location.hash = sections[nextIndex].id;
    }
  }, [currentIndex, scrollBlocked, sections, isMobile]);

  // Track touch start position and threshold
  const startY = useRef<number>(0);
  const touchThreshold = 50; // Adjust as needed

  // Effect to attach event listeners based on device type
  useEffect(() => {
    const handleScrollEvent = (e: WheelEvent | TouchEvent) => handleScroll(e);

    if (isMobile) {
      // Mobile device
      window.addEventListener('touchstart', (e) => {
        startY.current = e.touches[0].clientY;
      });
      window.addEventListener('touchmove', handleScrollEvent, { passive: false });
    } else {
      // Desktop
      window.addEventListener('wheel', handleScrollEvent, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleScrollEvent);
      window.removeEventListener('touchmove', handleScrollEvent);
    };
  }, [handleScroll, isMobile]);


  useEffect(() => {
    const initialIndex = hashToIndex(window.location.hash);
    setCurrentIndex(initialIndex);
  }, [hashToIndex]);

  useEffect(() => {
    const currentSection = sections[currentIndex].component;
    if (currentSection?.props.id) {
      document.getElementById(currentSection.props.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex, sections]);

  const onNavigate = useCallback((sectionId: string) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId);
    if (sectionIndex >= 0) {
      setCurrentIndex(sectionIndex);
      window.location.hash = sectionId;
    }
  }, [sections]);

  return (
    <div ref={containerRef} className="w-screen h-dvh overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <ScrollNavigation onNavigate={onNavigate} currentIndex={currentIndex} sections={sections} />
      <AnimatePresence>
        {sections.map((section, index) => (
          currentIndex === index && (
            <motion.section
              key={index}
              id={section.id}
              className="snap-start h-dvh w-screen flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .6 }}
            >
              {section.component}
            </motion.section>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

const ScrollNavigation = ({ onNavigate, currentIndex, sections }: {
  onNavigate: (sectionId: string) => void, currentIndex: number, sections: SectionScrollSnapProps[]
}) => {
  return (
    <div className="fixed flex items-center flex-col justify-center w-8 sm:w-10 h-full lg:w-10 lg:h-32 left-1/2 lg:left-10 z-30 -bottom-7 lg:bottom-0 lg:top-1/2 -rotate-90 lg:rotate-0 -translate-x-2/4 translate-y-64 lg:-translate-y-2/4 lg:translate-x-0">
      <ul className="list-none w-full h-full flex flex-col items-center justify-center gap-7 lg:block">
        {sections.map((section, index) => (
          <li
            className="w-full my-2 sm:my-4 lg:my-0 lg:mb-10 flex items-center h-6 lg:block relative lg:h-1"
            key={section.id}
          >
            <motion.div
              initial={{ width: '50%' }}
              animate={{
                width: currentIndex === index ? '100%' : '50%',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="block absolute top-1/2 lg:top-auto lg:relative z-50 h-1 lg:h-full cursor-pointer bg-brand4 no-underline mb-10"
              onClick={() => onNavigate(section.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSnap;
