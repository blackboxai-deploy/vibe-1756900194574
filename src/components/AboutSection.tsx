"use client";

import MatrixCard from './ui/matrix-card';
import TypingEffect from './ui/typing-effect';


export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-green-400 mb-8">
            ABOUT
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <MatrixCard glow className="p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 border border-green-500/50 rounded-lg flex items-center justify-center bg-black/50">
                  <img 
                    src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=80&h=80&fit=crop&crop=face" 
                    alt="Developer profile photo" 
                    className="w-16 h-16 rounded object-cover opacity-90"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-mono text-green-400 font-bold">
                    SYSTEM ADMIN
                  </h3>
                  <p className="text-green-300 font-mono text-sm">
                    Full Stack Developer & Security Expert
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-green-300">
                <p className="leading-relaxed">
                  <TypingEffect
                    text="Passionate developer with expertise in cybersecurity and full-stack development. Specializing in creating secure, scalable applications and conducting penetration testing."
                    speed={30}
                  />
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div>
                    <h4 className="text-green-400 font-mono text-sm font-bold mb-2">FOCUS AREAS</h4>
                    <ul className="text-green-300 text-sm font-mono space-y-1">
                      <li>→ Web Security</li>
                      <li>→ API Development</li>
                      <li>→ DevOps & Cloud</li>
                      <li>→ Penetration Testing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-mono text-sm font-bold mb-2">TECHNOLOGIES</h4>
                    <ul className="text-green-300 text-sm font-mono space-y-1">
                      <li>→ React/Next.js</li>
                      <li>→ Node.js/Python</li>
                      <li>→ Docker/K8s</li>
                      <li>→ Linux/Bash</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MatrixCard>

          {/* Stats & Skills */}
          <div className="space-y-8">
            <MatrixCard glow className="p-6">
              <h3 className="text-green-400 font-mono text-lg font-bold mb-6">
                [SYSTEM STATUS]
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">Experience</span>
                  <span className="text-green-400 font-mono">5+ Years</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">Projects Completed</span>
                  <span className="text-green-400 font-mono">50+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">Security Audits</span>
                  <span className="text-green-400 font-mono">25+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">Bug Bounties</span>
                  <span className="text-green-400 font-mono">15+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">Current Status</span>
                  <span className="text-green-400 font-mono animate-pulse">AVAILABLE</span>
                </div>
              </div>
            </MatrixCard>

            <MatrixCard className="p-6">
              <h3 className="text-green-400 font-mono text-lg font-bold mb-6">
                [CERTIFICATIONS]
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">OSCP</span>
                  <span className="text-green-500 font-mono text-xs">CERTIFIED</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">CEH</span>
                  <span className="text-green-500 font-mono text-xs">CERTIFIED</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">AWS Solutions Architect</span>
                  <span className="text-green-500 font-mono text-xs">CERTIFIED</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-300 font-mono text-sm">CISSP</span>
                  <span className="text-yellow-500 font-mono text-xs">IN PROGRESS</span>
                </div>
              </div>
            </MatrixCard>
          </div>
        </div>

        {/* Terminal-style quote */}
        <div className="mt-16">
          <div className="bg-black/60 border border-green-500/30 rounded p-6 font-mono">
            <div className="flex items-center mb-3">
              <span className="text-green-400">root@matrix:~$ </span>
              <span className="text-green-300">cat /etc/philosophy</span>
            </div>
            <p className="text-green-400 italic pl-4">
              <TypingEffect
                text="Security is not a product, but a process. Code is poetry written in logic."
                speed={40}
                delay={2000}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}