'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-slate-900/80 backdrop-blur border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Antony Muriithi</h1>
          <div className="flex gap-6 text-sm">
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="space-y-6">
          <h2 className="text-6xl font-bold">
            Web Developer <span className="text-purple-400">&</span><br />
            Network Engineer
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            Building scalable web applications and robust network solutions for businesses across Kenya. 
            Passionate about Claude AI and creating intelligent systems.
          </p>
          <p className="text-sm text-purple-400 font-mono">
            CCNA 200-301 Candidate | IT Diploma @ Kiambu National Polytechnic
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition">
              Get in Touch
            </a>
            <a href="#projects" className="px-8 py-3 border border-purple-400 hover:bg-purple-400/10 rounded-lg font-semibold transition">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold mb-12">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-800/50 border border-purple-500/30 p-8 rounded-lg hover:border-purple-400/60 transition">
            <h4 className="text-xl font-bold mb-2">FarmLink</h4>
            <p className="text-slate-400 mb-4">Agricultural marketplace platform connecting farmers with buyers across Kenya. Built with modern web technologies for a seamless trading experience.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">React</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Node.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Agriculture</span>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/30 p-8 rounded-lg hover:border-purple-400/60 transition">
            <h4 className="text-xl font-bold mb-2">Loytex Closet v2</h4>
            <p className="text-slate-400 mb-4">E-commerce product catalogue for fashion retail. Features bulk photo uploads, auto-categorization, and 4K image optimization.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Next.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">E-commerce</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Web Design</span>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/30 p-8 rounded-lg hover:border-purple-400/60 transition">
            <h4 className="text-xl font-bold mb-2">Attend Pro</h4>
            <p className="text-slate-400 mb-4">Digital attendance management system for Kenyan colleges and universities. Streamlines student attendance tracking.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Web App</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Education</span>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/30 p-8 rounded-lg hover:border-purple-400/60 transition">
            <h4 className="text-xl font-bold mb-2">Freelance Web Development</h4>
            <p className="text-slate-400 mb-4">Custom web solutions for small businesses across Nairobi. Specializing in responsive design and e-commerce platforms.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">HTML/CSS</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">JavaScript</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">Consulting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold mb-12">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-400">Web Development</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• React & Next.js</li>
              <li>• JavaScript & TypeScript</li>
              <li>• HTML5 & CSS3</li>
              <li>• Node.js & Express</li>
              <li>• Responsive Design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-400">Network Engineering</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• CCNA 200-301 (In Progress)</li>
              <li>• Network Configuration</li>
              <li>• Network Security</li>
              <li>• Hands-on Lab Experience</li>
              <li>• Avios (Company Experience)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-400">Tools & Platforms</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Git & GitHub</li>
              <li>• Vercel & Netlify</li>
              <li>• Database Design</li>
              <li>• API Development</li>
              <li>• Claude AI & LLMs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold mb-8">About Me</h3>
        <div className="bg-slate-800/50 border border-purple-500/30 p-8 rounded-lg">
          <p className="text-slate-300 leading-relaxed mb-4">
            I'm Antony Muriithi (Griezzy), a passionate web developer and aspiring network engineer based in Ruaka, Nairobi. 
            I switched from Electrical Engineering to Information Technology because I realized my true passion lies in building 
            digital solutions and infrastructure that solve real problems.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Currently pursuing my IT Diploma at Kiambu National Polytechnic while working towards my CCNA 200-301 certification. 
            I gain hands-on networking experience through Avios, while maintaining an active freelance web development practice 
            serving Nairobi's small business community.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I'm deeply passionate about Claude AI and the potential of language models to transform how we build products. 
            I believe in leveraging AI tools to work smarter, not harder, and I'm excited to be part of the Claude community 
            by becoming an ambassador.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold mb-12">Get in Touch</h3>
        <div className="bg-gradient-to-r from-purple-600 to-purple-900 p-12 rounded-lg">
          <p className="text-lg mb-6">Let's build something amazing together.</p>
          <div className="flex flex-col gap-4">
            <p><strong>Email:</strong> <a href="mailto:antony@example.com" className="text-purple-200 hover:text-white">griezzy@example.com</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com" className="text-purple-200 hover:text-white">github.com/griezzy</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com" className="text-purple-200 hover:text-white">linkedin.com/in/griezzy</a></p>
            <p><strong>Location:</strong> Ruaka, Nairobi, Kenya</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-16 py-8 text-center text-slate-400">
        <p>© 2024 Antony Muriithi. Built with Next.js & Claude AI.</p>
      </footer>
    </div>
  );
}