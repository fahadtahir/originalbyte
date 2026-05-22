'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  CloudSun,
  ExternalLink,
  GitFork,
  Globe,
  Mail,
  MonitorSmartphone,
  Server,
  Star,
  Terminal,
  Utensils,
} from 'lucide-react;'
import Navbar from '../components/Navbar';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const githubProfile = 'https://github.com/fahadtahir';

  const projects = [
    {
      title: 'Meteomatics Django React',
      eyebrow: 'Weather API platform',
      desc: 'A Django and React app that integrates Meteomatics weather APIs, supports custom coordinates, and provides searchable Saudi city weather data.',
      repo: 'https://github.com/fahadtahir/meteomatics-django-react',
      icon: <CloudSun size={40} />,
      tech: ['Django', 'React', 'Python', 'MySQL', 'Meteomatics API'],
      proof: ['Custom coordinate weather lookup', 'Saudi city autocomplete dataset', 'Postman-documented API workflow'],
      stats: { stars: 1, forks: 0, language: 'Python + JavaScript' },
    },
    {
      title: 'Labayh Node App',
      eyebrow: 'Restaurant management APIs',
      desc: 'A Node.js backend for restaurant management with authentication, MongoDB models, Swagger documentation, and a shared Postman collection.',
      repo: 'https://github.com/fahadtahir/labayh-node-app',
      icon: <Utensils size={40} />,
      tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Swagger'],
      proof: ['JWT/passport authentication stack', 'Swagger API docs', 'Mongo restaurant/city data modeling'],
      stats: { stars: 0, forks: 0, language: 'JavaScript' },
    },
    {
      title: 'Restaurant Reservation Node.js',
      eyebrow: 'Reservation backend',
      desc: 'A restaurant reservation API using Node.js and PostgreSQL, covering users, roles, tables, available time slots, and token-based requests.',
      repo: 'https://github.com/fahadtahir/restaurant-reservation-nodejs',
      icon: <CalendarCheck size={40} />,
      tech: ['Node.js', 'PostgreSQL', 'Express', 'JWT', 'Redis'],
      proof: ['Role-aware user login flow', 'Table availability endpoints', 'Documented database structure'],
      stats: { stars: 1, forks: 1, language: 'JavaScript' },
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Background elements */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Hero Section */}
      <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px' }}
          >
            <motion.div variants={itemVariants} style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--surface)', borderRadius: '2rem', border: '1px solid var(--surface-border)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              <span className="text-gradient" style={{ fontWeight: 600 }}>Available for new opportunities</span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              Hi, I&apos;m <span className="text-gradient">Fahad Tahir</span><br />
            </motion.h1>

            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              I build exceptional and accessible digital experiences for the web. Specialized in e-commerce, React and Node.js architectures.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
              <a href={githubProfile} aria-label="GitHub profile" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Globe size={24} className="hover:text-primary transition-colors" /></a>
              <a href="https://www.linkedin.com/in/fahad-tahir-a9a2016a/" aria-label="LinkedIn profile" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Briefcase size={24} className="hover:text-primary transition-colors" /></a>
              <a href="mailto:fahadtahir94@gmail.com" aria-label="Email Fahad" style={{ color: 'var(--text-muted)' }}><Mail size={24} className="hover:text-primary transition-colors" /></a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="section-title">What I Do</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: <MonitorSmartphone size={32} color="var(--primary)" />, title: 'Frontend Development', desc: 'Creating responsive, interactive, and visually stunning user interfaces using modern web technologies.' },
                { icon: <Server size={32} color="var(--secondary)" />, title: 'Backend Engineering', desc: 'Building robust, scalable, and secure server-side applications and RESTful APIs.' },
                { icon: <Terminal size={32} color="var(--primary)" />, title: 'DevOps & Tools', desc: 'Implementing CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment.' }
              ].map((skill, index) => (
                <div key={index} className="glass-card">
                  <div style={{ marginBottom: '1.5rem' }}>{skill.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="section-title">Featured Projects</h2>

            <div className="projects-intro">
              <p>
                Selected public GitHub work from <a href={githubProfile} target="_blank" rel="noreferrer">@fahadtahir</a>.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.title} className="glass-card project-card">
                  <div className="project-visual" aria-hidden="true">
                    <div className="project-icon">{project.icon}</div>
                    <div className="repo-window">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{project.stats.language}</p>
                  </div>

                  <div className="project-card-body">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>

                    <div className="project-stats" aria-label={`${project.title} GitHub stats`}>
                      <span><Star size={14} /> {project.stats.stars}</span>
                      <span><GitFork size={14} /> {project.stats.forks}</span>
                      <span><Globe size={14} /> Public repo</span>
                    </div>

                    <ul className="project-proof">
                      {project.proof.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline">
                        <GitFork size={17} /> View repo
                      </a>
                      <a href={`${project.repo}#readme`} target="_blank" rel="noreferrer" className="project-link">
                        README <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let&apos;s Build Something Together</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Feel free to reach out if you&apos;re looking for a developer, have a question, or simply want to connect.
            </p>
            <a href="mailto:fahadtahir94@gmail.com" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--surface-border)' }}>
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} OriginalByte 2026. Built by Fahad</p>
      </footer>

    </main>
  );
}
