"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface MatrixButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function MatrixButton({
  variant = 'primary',
  size = 'md',
  glow = false,
  className,
  children,
  ...props
}: MatrixButtonProps) {
  const baseStyles = 'font-mono transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-green-400/30 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-transparent border-green-500/40 text-green-400 hover:bg-green-500/10 hover:text-green-300 hover:border-green-400/60',
    secondary: 'bg-transparent border-green-700/40 text-green-600 hover:bg-green-700/10 hover:text-green-500 hover:border-green-600/60',
    ghost: 'bg-transparent border-transparent text-green-400 hover:bg-green-500/5 hover:border-green-500/20'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const glowStyles = glow 
    ? 'shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]'
    : '';

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        glowStyles,
        className
      )}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}