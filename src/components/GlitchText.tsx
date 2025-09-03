"use client";

import { useState, useEffect } from 'react';
import { createGlitchText } from '@/lib/matrix-utils';

interface GlitchTextProps {
  text: string;
  intensity?: number;
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function GlitchText({
  text,
  intensity = 0.05,
  speed = 150,
  className = '',
  as: Component = 'span'
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    const startGlitch = () => {
      setIsGlitching(true);
      let glitchCount = 0;
      const maxGlitches = 3;

      interval = setInterval(() => {
        if (glitchCount < maxGlitches) {
          setDisplayText(createGlitchText(text, intensity));
          glitchCount++;
        } else {
          setDisplayText(text);
          setIsGlitching(false);
          clearInterval(interval);
        }
      }, speed);
    };

    // Random glitch trigger
    const randomGlitchInterval = setInterval(() => {
      if (!isGlitching && Math.random() < 0.1) {
        startGlitch();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(randomGlitchInterval);
    };
  }, [text, intensity, speed, isGlitching]);

  return (
    <Component
      className={`font-mono transition-all duration-75 ${
        isGlitching 
          ? 'text-green-300 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]' 
          : 'text-green-400'
      } ${className}`}
      style={{
        textShadow: isGlitching 
          ? '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41'
          : '0 0 5px #00ff41'
      }}
    >
      {displayText}
    </Component>
  );
}