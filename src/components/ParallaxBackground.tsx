import React, { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxBackground({ 
  children, 
  className = '', 
  speed = 0.5 
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
}