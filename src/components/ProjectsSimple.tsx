"use client";

import { useState } from 'react';
import MatrixCard from './ui/matrix-card';
import MatrixButton from './ui/matrix-button';
import TypingEffect from './ui/typing-effect';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  type: 'web' | 'security' | 'mobile' | 'desktop';
  status: 'completed' | 'active' | 'planning';
  year: string;
  links?: {
    demo?: string;
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    id: 'proj_001',
    name: 'SecureChat App',
    description: 'End-to-end encrypted messaging application with perfect forward secrecy and zero-knowledge architecture.',
    tech: ['React Native', 'Node.js', 'Socket.io', 'Crypto-JS'],
    type: 'mobile',
    status: 'completed',
    year: '2024',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: 'proj_002',
    name: 'Vulnerability Scanner',
    description: 'Automated web application security scanner that detects common vulnerabilities like XSS, SQLi, and CSRF.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'SQLAlchemy'],
    type: 'security',
    status: 'completed',
    year: '2024',
    links: {
      github: '#'
    }
  },
  {
    id: 'proj_003',
    name: 'Portfolio Dashboard',
    description: 'Real-time analytics dashboard for tracking portfolio performance with interactive charts and alerts.',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
    type: 'web',
    status: 'active',
    year: '2024',
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    id: 'proj_004',
    name: 'Binary Analysis Tool',
    description: 'Cross-platform tool for static and dynamic analysis of binary executables with plugin architecture.',
    tech: ['C++', 'Qt', 'Radare2', 'Python'],
    type: 'desktop',
    status: 'active',
    year: '2023',
    links: {
      github: '#'
    }
  },
  {
    id: 'proj_005',
    name: 'API Gateway',
    description: 'High-performance API gateway with rate limiting, authentication, and monitoring capabilities.',
    tech: ['Go', 'Redis', 'Docker', 'Prometheus'],
    type: 'web',
    status: 'completed',
    year: '2023',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: 'proj_006',
    name: 'Blockchain Auditor',
    description: 'Smart contract security auditing tool with automated vulnerability detection and reporting.',
    tech: ['Solidity', 'Web3.js', 'Node.js', 'MongoDB'],
    type: 'security',
    status: 'planning',
    year: '2024',
    links: {}
  }
];

const typeColors = {
  web: 'text-green-400',
  security: 'text-red-400',
  mobile: 'text-blue-400',
  desktop: 'text-yellow-400'
};

const statusColors = {
  completed: 'text-green-400',
  active: 'text-yellow-400',
  planning: 'text-gray-400'
};

export default function ProjectsSimple() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  const completedCount = projects.filter(p => p.status === 'completed').length;
  const activeCount = projects.filter(p => p.status === 'active').length;

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-green-400 mb-8">
            PROJECTS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"></div>
          <TypingEffect
            text="Selected works showcasing development and security expertise"
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
            <div className="text-2xl font-mono text-yellow-400 font-bold">{activeCount}</div>
            <div className="text-green-300 font-mono text-sm">Active</div>
          </MatrixCard>
          
          <MatrixCard className="p-4 text-center">
            <div className="text-2xl font-mono text-green-400 font-bold">{projects.length}</div>
            <div className="text-green-300 font-mono text-sm">Total</div>
          </MatrixCard>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {['all', 'web', 'security', 'mobile', 'desktop'].map((type) => (
            <MatrixButton
              key={type}
              variant={selectedType === type ? 'primary' : 'secondary'}
              onClick={() => setSelectedType(type)}
              glow={selectedType === type}
              size="sm"
              className="capitalize"
            >
              {type === 'all' ? 'All Projects' : type}
            </MatrixButton>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <MatrixCard 
              key={project.id} 
              glow 
              animated 
              className="p-6 h-full"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-mono bg-black/50 border border-current rounded ${typeColors[project.type]}`}>
                    {project.type.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 text-xs font-mono bg-black/50 border border-current rounded ${statusColors[project.status]}`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-green-500 font-mono text-xs">
                  {project.year}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4 flex-1">
                <h3 className="text-green-400 font-mono text-xl font-bold">
                  {project.name}
                </h3>

                <p className="text-green-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-green-400 font-mono text-sm font-bold">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs bg-green-500/10 text-green-400 border border-green-500/30 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-6 pt-4 border-t border-green-500/20">
                <div className="flex space-x-3">
                  {project.links?.demo && (
                    <MatrixButton size="sm" variant="primary" glow>
                      DEMO
                    </MatrixButton>
                  )}
                  {project.links?.github && (
                    <MatrixButton size="sm" variant="secondary">
                      CODE
                    </MatrixButton>
                  )}
                  {project.links?.live && (
                    <MatrixButton size="sm" variant="primary" glow>
                      LIVE
                    </MatrixButton>
                  )}
                  {project.status === 'planning' && (
                    <MatrixButton size="sm" variant="ghost" className="text-gray-400 border-gray-500/50">
                      PLANNING
                    </MatrixButton>
                  )}
                </div>
              </div>
            </MatrixCard>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-green-600 font-mono text-lg">
              No projects found in this category.
            </div>
          </div>
        )}

        {/* Bottom Status */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/60 border border-green-500/30 rounded px-6 py-3 font-mono">
            <TypingEffect
              text={`${filteredProjects.length} PROJECTS DISPLAYED • ${completedCount} COMPLETED • ${activeCount} ACTIVE`}
              speed={60}
              className="text-green-400 text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}