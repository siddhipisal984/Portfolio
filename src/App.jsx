import { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/profile.png.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Siddhi Pisal</div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeSection === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Siddhi Pisal</span>
            </h1>
            <p className="hero-subtitle">Information Technology Student & <span className="gradient-text">Aspiring Android Developer</span></p>
            <p className="hero-description">
              Passionate about building innovative tech solutions with AI, Full-Stack Development, and Mobile Apps
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/siddhipisal984" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/siddhi-pisal-98557b30a" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:pisalsiddhi646@gmail.com" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-img-wrapper">
                <img src={profilePhoto} alt="Siddhi Pisal" className="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am Siddhi Pisal, a passionate Information Technology student at <strong>Usha Mittal Institute of Technology, Mumbai</strong>, with a strong academic foundation and a diploma in IT with 89.50%. I have hands-on experience in Android development, web technologies, and database management.
              </p>
              <p>
                As an <strong>Android App Development Intern at Maxgen Technologies</strong>, I worked on building real-time applications using Java, XML, and Firebase. I am skilled in Java, Python, C/C++, JavaScript, MySQL, and REST APIs, with a strong understanding of OOP and Agile practices.
              </p>
              <p>
                I enjoy building impactful tech solutions, such as <strong>HackMates</strong>—an AI-powered hackathon community platform that secured <strong>First Runner-Up among 127 teams</strong>.
              </p>
              <p>
                I am particularly interested in AI, full-stack development, and creating user-friendly digital experiences. With strong teamwork, problem-solving abilities, and a continuous learning mindset, I aim to contribute to innovative and scalable technology solutions.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>8.07</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-card">
                <h3>89.50%</h3>
                <p>Diploma</p>
              </div>
              <div className="stat-card">
                <h3>3+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-card">
                <h3>1st</h3>
                <p>Runner-Up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Programming</h3>
              <div className="skill-items">
                {['Python', 'Java', 'JavaScript', 'C++', 'C'].map((skill) => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <div className="skill-items">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Backend</h3>
              <div className="skill-items">
                {['Python', 'FastAPI', 'Flask', 'PHP'].map((skill) => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Databases</h3>
              <div className="skill-items">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Firebase'].map((skill) => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">DevOps & Cloud</h3>
              <div className="skill-items">
                {['Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub Actions'].map((skill) => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Concepts & Tools</h3>
              <div className="skill-items">
                {['REST APIs', 'OOP', 'UI/UX Design', 'Agile', 'Android Studio'].map((skill) => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🏆</div>
              <h3>HackMates</h3>
              <p className="project-desc">AI Hackathon Community Platform</p>
              <p>Developed a platform for hackathon discovery, AI-powered guidance, smart teammate matching, reliability scoring, and real-time communication. Secured First Runner-Up among 127 teams.</p>
              <div className="project-tags">
                <span>AI</span>
                <span>React</span>
                <span>Firebase</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">🇮🇳</div>
              <h3>Incredible India</h3>
              <p className="project-desc">Interactive Web Platform</p>
              <p>Designed a responsive website showcasing Indian culture with enhanced UI/UX and performance optimization.</p>
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">☕</div>
              <h3>Online Cafe Management System</h3>
              <p className="project-desc">Android Application</p>
              <p>Built an Android application using Java and Firebase with authentication, admin dashboard, and order tracking system.</p>
              <div className="project-tags">
                <span>Java</span>
                <span>Firebase</span>
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Android App Development Intern</h3>
                <h4>Maxgen Technologies Pvt. Ltd. - Pune, India</h4>
                <p className="timeline-date">June 2023 – July 2023</p>
                <ul>
                  <li>Developed Android applications using Java and XML in Android Studio</li>
                  <li>Integrated Firebase for real-time database and authentication</li>
                  <li>Implemented login systems, form validation, and REST API integration</li>
                  <li>Worked in Agile environment using Git for version control</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Bachelor of Technology – Information Technology</h3>
                <h4>Usha Mittal Institute of Technology - Mumbai, India</h4>
                <p className="timeline-date">Expected July 2027 | CGPA: 8.07</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Diploma – Information Technology</h3>
                <h4>ABIT Shendre - Maharashtra, India</h4>
                <p className="timeline-date">June 2024 | 89.50%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🥈</div>
              <h3>First Runner-Up</h3>
              <p>TechSprint 2026 Hackathon</p>
              <span className="achievement-detail">Top 3 among 127 teams</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🏅</div>
              <h3>Runner-Up</h3>
              <p>Technical Paper Presentation</p>
              <span className="achievement-detail">State Level, Feb 2024</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎯</div>
              <h3>Participant</h3>
              <p>WebVenture 2025</p>
              <span className="achievement-detail">National Level</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">📜</div>
              <h3>Generative AI Fundamentals</h3>
              <p>Google Cloud</p>
              <span className="achievement-detail">July 2025</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💻</div>
              <h3>AI Development Bootcamp</h3>
              <p>Udemy - 7 Days Hands-On</p>
              <span className="achievement-detail">July 2025</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎖️</div>
              <h3>Certificate of Excellence</h3>
              <p>TechSprint 2026 Hackathon</p>
              <span className="achievement-detail">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:pisalsiddhi646@gmail.com">pisalsiddhi646@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+917666182876">+91-7666182876</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Siddhi Pisal. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/siddhipisal984" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/siddhi-pisal-98557b30a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:pisalsiddhi646@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
