// Matrix-themed utility functions

export const MATRIX_COLORS = {
  primary: '#00ff41',
  secondary: '#008f11', 
  dark: '#003b00',
  neon: '#39ff14',
  background: '#0a0a0a',
  backgroundLight: '#1a1a1a',
  text: '#00ff41',
  textDim: '#008f11'
} as const;

export const MATRIX_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?アカサタナハマヤラワンイキシチニヒミイリウクスツヌフムユルエケセテネヘメエレオコソトノホモヨロヲ";

export const TERMINAL_COMMANDS = {
  whoami: "Access granted. Hacker/Developer matrix initialized.",
  skills: "Loading skill matrix... Languages: JavaScript, TypeScript, Python, Rust, Go",
  projects: "Scanning project repositories... Found 12 classified projects",
  contact: "Establishing secure communication channel...",
  help: "Available commands: whoami, skills, projects, contact, clear, matrix",
  clear: "",
  matrix: "Welcome to the Matrix. Follow the white rabbit..."
} as const;

export function getRandomMatrixChar(): string {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

export function createGlitchText(text: string, intensity = 0.1): string {
  return text.split('').map(char => 
    Math.random() < intensity ? getRandomMatrixChar() : char
  ).join('');
}

export function formatTerminalOutput(command: string): string {
  const timestamp = new Date().toISOString().slice(11, 19);
  return `[${timestamp}] $ ${command}`;
}

export function generateMatrixSequence(length = 50): string {
  return Array.from({ length }, () => getRandomMatrixChar()).join('');
}

export const ASCII_ART = {
  logo: `
    ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
    ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
    ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝ 
    ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗ 
    ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗
    ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
  `,
  hacker: `
    ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ 
    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
    ███████║███████║██║     █████╔╝ █████╗  ██████╔╝
    ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
    ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║
    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
  `
} as const;