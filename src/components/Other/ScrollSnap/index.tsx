import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";

import { ScrollSnapProps, SectionScrollSnapProps } from '@/interfaces/ScrollSnapProps/ScrollSnapProps';

const ScrollSnap = ({ main, work, about, contact }: ScrollSnapProps) => {
  const { isMobile } = useContext(GlobalContext)
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

  const handleScrollDesktop = useCallback((e: WheelEvent) => {
    e.preventDefault();

    if (scrollBlocked) {
      return;
    }

    const direction = e.deltaY > 0 ? 1 : -1;
    let nextIndex = currentIndex + direction;
    nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
      setScrollBlocked(true);
      setTimeout(() => setScrollBlocked(false), 1000);
      window.location.hash = sections[nextIndex].id;
    }
  }, [currentIndex, scrollBlocked, sections]);

  const handleScrollMobile = useCallback((e: TouchEvent) => {
    e.preventDefault();

    if (scrollBlocked) {
      return;
    }

    const touch = e.touches[0];
    const startY = touch.pageY;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      moveEvent.preventDefault();

      const moveTouch = moveEvent.touches[0];
      const deltaY = moveTouch.pageY - startY;

      if (Math.abs(deltaY) < 50) {
        return;
      }

      const direction = deltaY > 0 ? 1 : -1;
      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

      if (nextIndex !== currentIndex) {
        setCurrentIndex(nextIndex);
        setScrollBlocked(true);
        setTimeout(() => setScrollBlocked(false), 1000);
        window.location.hash = sections[nextIndex].id;
      }

      document.removeEventListener('touchmove', handleTouchMove);
    };

    document.addEventListener('touchmove', handleTouchMove);

  }, [currentIndex, scrollBlocked, sections]);


  useEffect(() => {
    if (isMobile) {
      const container = containerRef.current;
      container?.addEventListener('touchmove', handleScrollMobile, { passive: false });

      return () => {
        container?.removeEventListener('touchmove', handleScrollMobile);
      };
    } else {
      const container = containerRef.current;
      container?.addEventListener('wheel', handleScrollDesktop, { passive: false });

      return () => {
        container?.removeEventListener('wheel', handleScrollDesktop);
      };
    }

  }, [handleScrollDesktop, handleScrollMobile]);

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
    <div ref={containerRef} className="w-screen h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <ScrollNavigation onNavigate={onNavigate} currentIndex={currentIndex} sections={sections} />
      {sections.map((section, index) => (
        <section key={index} id={section.id} className="snap-start h-screen w-screen flex justify-center items-center">
          {section.component}
        </section>
      ))}
    </div>
  );
};

const ScrollNavigation = ({ onNavigate, currentIndex, sections }: {
  onNavigate: (sectionId: string) => void, currentIndex: number, sections: SectionScrollSnapProps[]
}) => {
  return (
    <div className="fixed flex items-center flex-col justify-center w-8 sm:w-10 h-full lg:w-10 lg:h-32 left-1/2 lg:left-10 z-30 bottom-0 lg:top-1/2 -rotate-90 lg:rotate-0 -translate-x-2/4 translate-y-64 lg:-translate-y-2/4 lg:translate-x-0">
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
              className="block absolute top-1/2 lg:top-auto lg:relative z-50 h-1 lg:h-full cursor-pointer bg-white no-underline mb-10"
              onClick={() => onNavigate(section.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSnap;
