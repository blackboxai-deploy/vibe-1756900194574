"use client";

import { useState, useEffect, useRef } from 'react';
import { TERMINAL_COMMANDS, formatTerminalOutput, ASCII_ART } from '@/lib/matrix-utils';
import { useTypingEffect } from '@/hooks/use-typing-effect';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: string;
}

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: ASCII_ART.logo,
      timestamp: new Date().toISOString().slice(11, 19)
    },
    {
      type: 'output',
      content: 'Matrix Terminal v2.1.0 initialized...',
      timestamp: new Date().toISOString().slice(11, 19)
    },
    {
      type: 'output',
      content: 'Type "help" for available commands.',
      timestamp: new Date().toISOString().slice(11, 19)
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const { displayText: bootText } = useTypingEffect(
    'SYSTEM BOOT COMPLETE... ACCESS GRANTED',
    { speed: 80, showCursor: false }
  );

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addToHistory = (content: string, type: TerminalLine['type'] = 'output') => {
    const timestamp = new Date().toISOString().slice(11, 19);
    setHistory(prev => [...prev, { type, content, timestamp }]);
  };

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    addToHistory(formatTerminalOutput(command), 'command');

    setTimeout(() => {
      if (cmd in TERMINAL_COMMANDS) {
        if (cmd === 'clear') {
          setHistory([]);
        } else {
          addToHistory(TERMINAL_COMMANDS[cmd as keyof typeof TERMINAL_COMMANDS]);
        }
      } else if (cmd.startsWith('echo ')) {
        const message = command.slice(5);
        addToHistory(message);
      } else if (cmd === 'date') {
        addToHistory(new Date().toString());
      } else if (cmd === 'pwd') {
        addToHistory('/matrix/portfolio/root');
      } else if (cmd === 'ls') {
        addToHistory('profile.exe  skills.db  projects/  contact.txt  secrets/');
      } else if (cmd === '') {
        // Empty command, just show prompt
      } else {
        addToHistory(`bash: ${command}: command not found`, 'error');
        addToHistory('Type "help" for available commands.');
      }
      setIsTyping(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isTyping) {
      setIsTyping(true);
      executeCommand(currentInput.trim());
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-green-500/20">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-green-400 text-xs">
          {bootText}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-96 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-500/50"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            <div className={`
              ${line.type === 'command' ? 'text-green-300' : ''}
              ${line.type === 'output' ? 'text-green-400' : ''}
              ${line.type === 'error' ? 'text-red-400' : ''}
              whitespace-pre-wrap break-words
            `}>
              {line.content}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="text-green-300 animate-pulse">
            Processing command...
          </div>
        )}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <span className="text-green-400 mr-2">
          root@matrix:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-green-400 outline-none caret-green-400"
          placeholder={!isTyping ? "Type a command..." : ""}
          disabled={isTyping}
          autoFocus
        />
        <span className="text-green-400 animate-pulse ml-1">_</span>
      </form>
    </div>
  );
}