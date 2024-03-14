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

  // Função para mapear o hash para o índice correspondente
  const hashToIndex = (hash: string) => {
    const index = sections.findIndex(section => `#${section.id}` === hash);
    return index >= 0 ? index : 0;
  };

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
      window.location.hash = sections[nextIndex].id;
    }
  }, [currentIndex, scrollBlocked, sections]);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Ajusta o índice com base no hash atual na URL ao carregar a página
    const initialIndex = hashToIndex(window.location.hash);
    setCurrentIndex(initialIndex);
  }, []);

  useEffect(() => {
    // Garante que o scroll para a seção correta após o índice ser atualizado
    const currentSection = sections[currentIndex].component;
    currentSection?.props.id && document.getElementById(currentSection.props.id)?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex, sections]);

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {sections.map((section, index) => (
        <section key={index} id={section.id} className="snap-start h-screen w-screen flex">
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default FullpageVertical;
