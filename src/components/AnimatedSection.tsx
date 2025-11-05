import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    return 'opacity-100';
  };

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay * 0.1}s`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fadeInLeft':
          return { ...baseStyle, transform: 'translateX(-50px)' };
        case 'fadeInRight':
          return { ...baseStyle, transform: 'translateX(50px)' };
        case 'fadeInUp':
        default:
          return { ...baseStyle, transform: 'translateY(30px)' };
      }
    }

    return { ...baseStyle, transform: 'translateX(0) translateY(0)' };
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
}
