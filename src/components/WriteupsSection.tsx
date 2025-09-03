"use client";

import { useState } from 'react';
import MatrixCard from './ui/matrix-card';
import MatrixButton from './ui/matrix-button';
import TypingEffect from './ui/typing-effect';

interface Writeup {
  id: string;
  title: string;
  platform: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'insane';
  category: 'web' | 'crypto' | 'pwn' | 'forensics' | 'misc' | 'rev';
  date: string;
  description: string;
  techniques: string[];
  completed: boolean;
}

const writeups: Writeup[] = [
  {
    id: 'writeup_001',
    title: 'SQL Injection in Authentication Bypass',
    platform: 'HackTheBox',
    difficulty: 'medium',
    category: 'web',
    date: '2024-01-12',
    description: 'Exploiting SQL injection vulnerability in login form to bypass authentication and gain admin access.',
    techniques: ['SQL Injection', 'Authentication Bypass', 'Union Based'],
    completed: true
  },
  {
    id: 'writeup_002',
    title: 'Buffer Overflow Exploitation',
    platform: 'TryHackMe',
    difficulty: 'hard',
    category: 'pwn',
    date: '2024-01-08',
    description: 'Classic buffer overflow exploitation with custom shellcode to gain shell access on Linux target.',
    techniques: ['Buffer Overflow', 'Shellcode', 'ROP Chain'],
    completed: true
  },
  {
    id: 'writeup_003',
    title: 'XSS to Account Takeover',
    platform: 'PortSwigger',
    difficulty: 'medium',
    category: 'web',
    date: '2024-01-05',
    description: 'Chaining stored XSS with CSRF to achieve full account takeover in web application.',
    techniques: ['XSS', 'CSRF', 'Session Hijacking'],
    completed: true
  },
  {
    id: 'writeup_004',
    title: 'RSA Crypto Challenge',
    platform: 'PicoCTF',
    difficulty: 'hard',
    category: 'crypto',
    date: '2024-01-03',
    description: 'Breaking weak RSA implementation using Wiener\'s attack due to small private exponent.',
    techniques: ['RSA', 'Wiener Attack', 'Continued Fractions'],
    completed: true
  },
  {
    id: 'writeup_005',
    title: 'Windows Privilege Escalation',
    platform: 'VulnHub',
    difficulty: 'medium',
    category: 'misc',
    date: '2024-01-01',
    description: 'Escalating privileges on Windows machine using unquoted service path vulnerability.',
    techniques: ['Privilege Escalation', 'Service Exploitation', 'Windows'],
    completed: true
  },
  {
    id: 'writeup_006',
    title: 'Reverse Engineering Malware',
    platform: 'MalwareBazaar',
    difficulty: 'insane',
    category: 'rev',
    date: '2023-12-28',
    description: 'Static and dynamic analysis of encrypted malware sample to understand its behavior.',
    techniques: ['Reverse Engineering', 'Malware Analysis', 'Unpacking'],
    completed: false
  }
];

const difficultyColors = {
  easy: 'text-green-400',
  medium: 'text-yellow-400',
  hard: 'text-orange-400',
  insane: 'text-red-400'
};

const categoryColors = {
  web: 'text-green-400',
  crypto: 'text-purple-400',
  pwn: 'text-red-400',
  forensics: 'text-blue-400',
  misc: 'text-yellow-400',
  rev: 'text-pink-400'
};

export default function WriteupsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredWriteups = writeups.filter(writeup => {
    const categoryMatch = selectedCategory === 'all' || writeup.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || writeup.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const completedCount = writeups.filter(w => w.completed).length;
  const totalCount = writeups.length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="writeups" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-green-400 mb-8">
            WRITEUPS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"></div>
          <TypingEffect
            text="CTF challenges and security research documentation"
            speed={50}
            className="text-green-300 text-lg"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MatrixCard className="p-4 text-center">
            <div className="text-2xl font-mono text-green-400 font-bold">{completedCount}</div>
            <div className="text-green-300 font-mono text-sm">Completed</div>
          </MatrixCard>
          
          <MatrixCard className="p-4 text-center">
            <div className="text-2xl font-mono text-yellow-400 font-bold">{totalCount - completedCount}</div>
            <div className="text-green-300 font-mono text-sm">In Progress</div>
          </MatrixCard>
          
          <MatrixCard className="p-4 text-center">
            <div className="text-2xl font-mono text-green-400 font-bold">{Math.round((completedCount / totalCount) * 100)}%</div>
            <div className="text-green-300 font-mono text-sm">Success Rate</div>
          </MatrixCard>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex-1">
            <h3 className="text-green-400 font-mono text-sm font-bold mb-3">CATEGORY</h3>
            <div className="flex flex-wrap gap-2">
              {['all', 'web', 'crypto', 'pwn', 'forensics', 'misc', 'rev'].map((category) => (
                <MatrixButton
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'secondary'}
                  onClick={() => setSelectedCategory(category)}
                  glow={selectedCategory === category}
                  size="sm"
                  className="capitalize"
                >
                  {category}
                </MatrixButton>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="flex-1">
            <h3 className="text-green-400 font-mono text-sm font-bold mb-3">DIFFICULTY</h3>
            <div className="flex flex-wrap gap-2">
              {['all', 'easy', 'medium', 'hard', 'insane'].map((difficulty) => (
                <MatrixButton
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? 'primary' : 'secondary'}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  glow={selectedDifficulty === difficulty}
                  size="sm"
                  className="capitalize"
                >
                  {difficulty}
                </MatrixButton>
              ))}
            </div>
          </div>
        </div>

        {/* Writeups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredWriteups.map((writeup) => (
            <MatrixCard 
              key={writeup.id} 
              glow 
              animated 
              className="p-6 cursor-pointer hover:border-green-400/70"
            >
              {/* Writeup Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-mono bg-black/50 border border-current rounded ${categoryColors[writeup.category]}`}>
                    {writeup.category.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 text-xs font-mono bg-black/50 border border-current rounded ${difficultyColors[writeup.difficulty]}`}>
                    {writeup.difficulty.toUpperCase()}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-green-500 font-mono text-xs">
                    {writeup.platform}
                  </div>
                  <div className="text-green-600 font-mono text-xs">
                    {formatDate(writeup.date)}
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-green-400 font-mono text-lg font-bold">
                  {writeup.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-mono rounded ${
                  writeup.completed 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                }`}>
                  {writeup.completed ? 'COMPLETED' : 'IN PROGRESS'}
                </span>
              </div>

              {/* Description */}
              <p className="text-green-300 text-sm leading-relaxed mb-4">
                {writeup.description}
              </p>

              {/* Techniques */}
              <div className="space-y-3">
                <h4 className="text-green-400 font-mono text-sm font-bold">TECHNIQUES:</h4>
                <div className="flex flex-wrap gap-2">
                  {writeup.techniques.map((technique) => (
                    <span 
                      key={technique} 
                      className="px-2 py-1 text-xs bg-green-500/10 text-green-400 border border-green-500/30 rounded font-mono"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Writeup Button */}
              <div className="mt-6 pt-4 border-t border-green-500/20">
                <MatrixButton 
                  size="sm" 
                  variant={writeup.completed ? "primary" : "ghost"} 
                  className="w-full"
                  glow={writeup.completed}
                >
                  {writeup.completed ? 'READ WRITEUP →' : 'WORK IN PROGRESS'}
                </MatrixButton>
              </div>
            </MatrixCard>
          ))}
        </div>

        {/* No results message */}
        {filteredWriteups.length === 0 && (
          <div className="text-center py-16">
            <div className="text-green-600 font-mono text-lg">
              No writeups found matching the selected filters.
            </div>
          </div>
        )}

        {/* Bottom Status */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/60 border border-green-500/30 rounded px-6 py-3 font-mono">
            <TypingEffect
              text={`${filteredWriteups.length} WRITEUPS FOUND • ${completedCount}/${totalCount} COMPLETED`}
              speed={60}
              className="text-green-400 text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}