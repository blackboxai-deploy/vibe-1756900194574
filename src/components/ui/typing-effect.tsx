"use client";

import { useTypingEffect } from '@/hooks/use-typing-effect';

interface TypingEffectProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: string;
  showCursor?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function TypingEffect({
  text,
  speed = 50,
  delay = 1000,
  loop = false,
  cursor = '_',
  showCursor = true,
  className = '',
  as: Component = 'span'
}: TypingEffectProps) {
  const { displayText } = useTypingEffect(text, {
    speed,
    delay,
    loop,
    cursor,
    showCursor
  });

  return (
    <Component className={`font-mono ${className}`}>
      {displayText}
    </Component>
  );
}