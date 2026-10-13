import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Download, Menu, X, Code2, BrainCircuit, GraduationCap } from 'lucide-react';
import './App.css';

const github = 'https://github.com/TalakshRabari';
const email = 'talakshrabari2017@gmail.com';
const projects = [
  { number: '01', category: 'Generative AI', title: 'GSSTB Scholar', description: 'A textbook question-answering application exploring retrieval-augmented generation, LangGraph workflows, and context-grounded answers.', tags: ['RAG', 'LangGraph', 'Python'], github: 'https://github.com/TalakshRabari/textbook-rag-langgraph', demo: 'https://gsstb-scholar.onrender.com' },
  { number: '02', category: 'Deep Learning', title: 'Multimodal Intent Recognition', description: 'Research-oriented implementation exploring intent recognition across text, audio, and video modalities, including TCL-MAP and MISA approaches.', tags: ['PyTorch', 'Transformers', 'Multimodal AI'], github: null, demo: null },
  { number: '03', category: 'Information Retrieval', title: 'Cross-Lingual Information Retrieval', description: 'Hindi passage retrieval using multilingual dense embeddings, BGE-M3, and scalable FAISS indexing.', tags: ['BGE-M3', 'FAISS', 'NLP'], github: null, demo: null },

  {
    number: '04',
    category: 'Full-Stack Development',
    title: 'AlumNet',
    description:
      'An alumni networking platform designed to connect students and alumni, encourage professional networking, and support knowledge sharing and career opportunities.',
    tags: ['React', 'Web Development', 'Networking'],
    github: 'https://github.com/TalakshRabari/AlumNet-Student-Alumni-Portal',
    demo: 'https://alum-net-student-alumni-portal.vercel.app',
  },

];
const skillGroups = [
  { title: 'Languages', items: ['Python', 'C++', 'SQL', 'JavaScript', 'TypeScript'] },
  { title: 'AI & Machine Learning', items: ['PyTorch', 'Transformers', 'Scikit-learn', 'NLP', 'Embeddings', 'FAISS'] },
  { title: 'Generative AI', items: ['RAG', 'LLMs', 'LangGraph', 'Vector Search', 'Agentic Workflows'] },
  { title: 'Software Development', items: ['React', 'Next.js', 'Django', 'PostgreSQL', 'Redis', 'Git'] },
];
const navItems = ['About', 'Projects', 'Skills', 'Education', 'Contact'];
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="site-header"><div className="container nav-inner"><a href="#home" className="brand">TR<span>.</span></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{navItems.map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main>
      <section id="home" className="hero container"><div className="hero-copy"><img
        src="/profile.jpg"
        alt="Talaksh Rabari"
        className="profile-photo"
      /> <p className="hello">Hello, I'm</p><h1>Talaksh <span>Rabari.</span></h1><h2>AI/ML & Software Developer</h2><p className="hero-description">M.Tech Software Systems student at DAIICT. I build intelligent applications and explore the intersection of machine learning, generative AI, and software engineering.</p><div className="hero-actions"><a className="btn primary" href="#projects">Explore Projects <ArrowUpRight size={18} /></a>
          <a
            href="/resume.pdf"
            download="Talaksh_Rabari_Resume.pdf"
            className="btn btn-primary"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div><div className="socials"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a><a href="mailto:talakshrabari2017@gmail.com" aria-label="Email"><Mail size={20} /></a></div></div><div className="hero-art"><div className="art-circle"><BrainCircuit size={106} strokeWidth={1.05} /><span>AI × CODE</span></div><div className="floating-tag tag-one">Machine Learning</div><div className="floating-tag tag-two">Software Engineering</div></div></section>
      <section id="about" className="section muted"><div className="container two-column"><div><span className="section-label">01 / ABOUT</span><h2 className="section-title">A little about <em>me.</em></h2></div><div className="about-copy"><p>I'm pursuing an M.Tech in Software Systems at Dhirubhai Ambani Institute of Information and Communication Technology (DAIICT), Gandhinagar.</p><p>My interests span AI/ML, generative AI, natural language processing, information retrieval, and full-stack development. I enjoy taking ideas from research and turning them into practical, working systems.</p><p>I'm looking for opportunities to contribute to impactful engineering teams, keep learning, and build useful technology.</p><a className="text-link" href={'mailto:' + email}>Let's connect <ArrowUpRight size={17} /></a></div></div></section>

      <section id="projects" className="section">
        <div className="container">
          <span className="section-label">02 / SELECTED WORK</span>

          <div className="section-heading">
            <h2 className="section-title">
              Featured <em>projects.</em>
            </h2>
            <p>Selected work across intelligent systems and software development.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / {project.category}</span>
                  <Code2 size={23} />
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <ArrowUpRight size={17} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      className="project-link"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section muted"><div className="container"><span className="section-label">03 / TOOLKIT</span><h2 className="section-title">Skills & <em>technologies.</em></h2><div className="skills-grid">{skillGroups.map(group => <div className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>
      <section id="education" className="section">
        <div className="container">
          <span className="section-label">04 / BACKGROUND</span>
          <h2 className="section-title">My <em>education.</em></h2>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={28} /></div>
            <div>
              <h3>Master of Technology, Software Systems</h3>
              <p>Dhirubhai Ambani Institute of Information and Communication Technology (DAIICT)</p>
              <span>Gandhinagar, Gujarat · Currently pursuing</span>
              <p><span>CGPA:8.66 </span></p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={28} /></div>
            <div>
              <h3>Bachelor of Engineering, Information Technology</h3>
              <p>Undergraduate degree</p>
              <span>SVIT VASAD, Anand, Gujarat · 2021-2025</span>
              <p><span>CGPA:8.43 </span></p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section contact-section"><div className="container contact-content"><span className="section-label">05 / GET IN TOUCH</span><h2>Have an opportunity<br />or an idea? <em>Let's talk.</em></h2><p>I'm interested in AI/ML, Generative AI, and software engineering opportunities.</p><a className="btn primary" href={'mailto:' + email}>Say Hello <Mail size={18} /></a></div></section>
    </main><footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Talaksh Rabari</span><span>Built with React & Vite</span><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
