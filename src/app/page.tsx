"use client";

import { useEffect } from 'react';
import AboutSection from '@/components/AboutSection';
import PostsSection from '@/components/PostsSection';
import WriteupsSection from '@/components/WriteupsSection';
import ProjectsSimple from '@/components/ProjectsSimple';
import Terminal from '@/components/Terminal';
import GlitchText from '@/components/GlitchText';

export default function HomePage() {
  useEffect(() => {
    // Add subtle cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-1 h-1 bg-green-400/50 rounded-full pointer-events-none z-50 transition-all duration-300';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.backgroundColor = 'rgba(57, 255, 20, 0.8)';
    };

    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'rgba(0, 255, 65, 0.5)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

    return (
    <div className="min-h-screen bg-black">      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-green-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-mono text-green-400 font-bold text-lg">
              MATRIX.DEV
            </div>
            
             <div className="hidden md:flex space-x-8 font-mono text-sm">
              <a 
                href="#about" 
                className="text-green-300 hover:text-green-400 transition-colors duration-200"
              >
                ABOUT
              </a>
              <a 
                href="#terminal" 
                className="text-green-300 hover:text-green-400 transition-colors duration-200"
              >
                TERMINAL
              </a>
              <a 
                href="#posts" 
                className="text-green-300 hover:text-green-400 transition-colors duration-200"
              >
                POSTS
              </a>
              <a 
                href="#writeups" 
                className="text-green-300 hover:text-green-400 transition-colors duration-200"
              >
                WRITEUPS
              </a>
              <a 
                href="#projects" 
                className="text-green-300 hover:text-green-400 transition-colors duration-200"
              >
                PROJECTS
              </a>
            </div>

            {/* Status Indicator */}
            <div className="font-mono text-xs text-green-500 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              ONLINE
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="bg-black/90 backdrop-blur-sm border border-green-500/20 rounded-lg p-3">
           <div className="flex justify-around font-mono text-xs">
            <a href="#about" className="text-green-300 hover:text-green-400 transition-colors">
              ABOUT
            </a>
            <a href="#terminal" className="text-green-300 hover:text-green-400 transition-colors">
              TERM
            </a>
            <a href="#posts" className="text-green-300 hover:text-green-400 transition-colors">
              POSTS
            </a>
            <a href="#writeups" className="text-green-300 hover:text-green-400 transition-colors">
              CTF
            </a>
            <a href="#projects" className="text-green-300 hover:text-green-400 transition-colors">
              PROJ
            </a>
          </div>
        </div>
      </div>

       {/* Main Content Sections */}
      <div className="relative">
        <AboutSection />
        
        {/* Terminal Section */}
        <section id="terminal" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GlitchText 
                text="MATRIX TERMINAL"
                as="h2" 
                className="text-4xl md:text-6xl font-bold mb-8"
              />
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"></div>
              <p className="text-green-300 text-lg font-mono">
                Interactive command line interface - Type "help" for available commands
              </p>
            </div>
            <Terminal />
          </div>
        </section>

        <PostsSection />
        <WriteupsSection />
        <ProjectsSimple />

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-green-500/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-green-400 font-mono text-lg font-bold mb-4">
                  CONTACT
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-green-300">
                    EMAIL: dev@matrix.local
                  </div>
                  <div className="text-green-300">
                    GITHUB: github.com/matrix-dev
                  </div>
                  <div className="text-green-300">
                    LINKEDIN: linkedin.com/in/matrix-dev
                  </div>
                  <div className="text-green-300">
                    TWITTER: @matrix_dev
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="text-green-400 font-mono text-lg font-bold mb-4">
                  STATS
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-green-600">Projects:</span>
                    <span className="text-green-400">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Posts:</span>
                    <span className="text-green-400">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Writeups:</span>
                    <span className="text-green-400">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Experience:</span>
                    <span className="text-green-400">5+ Years</span>
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div>
                <h3 className="text-green-400 font-mono text-lg font-bold mb-4">
                  SYSTEM
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-green-600">Version:</span>
                    <span className="text-green-400">v2.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Build:</span>
                    <span className="text-green-400">{new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Status:</span>
                    <span className="text-green-400">OPERATIONAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Security:</span>
                    <span className="text-green-400">ENABLED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-green-500/10">
              <p className="text-green-600 text-sm font-mono">
                © {new Date().getFullYear()} MATRIX PORTFOLIO. ALL RIGHTS RESERVED.
              </p>
              <p className="text-green-700 text-xs font-mono mt-2">
                BUILT WITH NEXT.JS • SECURED BY DESIGN
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}