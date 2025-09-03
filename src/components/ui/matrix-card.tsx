"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface MatrixCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  animated?: boolean;

  onClick?: () => void;
}

export default function MatrixCard({
  children,
  className = '',
  glow = false,
  animated = false,
  onClick
}: MatrixCardProps) {
  return (
    <div
      className={cn(
        'relative bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-lg p-6',
        'transition-all duration-300',
        glow && 'hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] hover:border-green-400/40',
        animated && 'hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Subtle corner accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-green-500/30"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-green-500/30"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-green-500/30"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-green-500/30"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}