"use client";

import { useState, useEffect } from 'react';

interface TypingEffectOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: string;
  showCursor?: boolean;
}

export function useTypingEffect(
  text: string | string[],
  options: TypingEffectOptions = {}
) {
  const {
    speed = 50,
    delay = 1000,
    loop = false,
    cursor = '_',
    showCursor = true
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[currentTextIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        }
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);

        if (currentIndex === currentText.length) {
          setIsComplete(true);
          
          if (loop && textArray.length > 1) {
            setTimeout(() => {
              setIsDeleting(true);
              setIsComplete(false);
            }, delay);
          } else if (!loop) {
            setIsComplete(true);
          }
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentText, speed, delay, loop, textArray.length]);

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText('');
    setIsComplete(false);
    setIsDeleting(false);
  }, [text]);

  const finalText = showCursor && !isComplete 
    ? `${displayText}${cursor}` 
    : displayText;

  return {
    displayText: finalText,
    isComplete,
    restart: () => {
      setCurrentIndex(0);
      setDisplayText('');
      setIsComplete(false);
      setIsDeleting(false);
      setCurrentTextIndex(0);
    }
  };
}