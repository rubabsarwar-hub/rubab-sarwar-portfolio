import "./App.css";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <h2>Rubab Sarwar</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Rubab Sarwar</span>
          </h1>

          <h2>Web Developer & Data Science Student</h2>

          <p className="hero-text">
            I create modern, responsive and user-friendly websites and
            digital solutions that help businesses build a strong online
            presence.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View My Work</a>
            <a href="#contact">Hire Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <p className="small-title">ABOUT ME</p>

        <h2>Turning Ideas Into Digital Solutions</h2>

        <p className="section-text">
          I am a BS Data Science student and Web Developer with a strong
          interest in modern web technologies, business websites and
          AI-powered solutions. I enjoy transforming ideas into clean,
          responsive and functional digital experiences.
        </p>

        <p className="section-text">
          My work combines frontend development, backend technologies,
          databases, WordPress and AI automation to create practical
          solutions for individuals and businesses.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <p className="small-title">MY EXPERTISE</p>

        <h2>Technical Skills</h2>

        <div className="skills">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Python</span>
          <span>WordPress</span>
          <span>Git & GitHub</span>
          <span>AI Automation</span>
          <span>n8n</span>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <p className="small-title">MY EXPERIENCE</p>

        <h2>Professional Experience</h2>

        <div className="experience-card">
          <h3>Web Developer</h3>

          <p className="experience-duration">
            3+ Years Experience
          </p>

          <p>
            Worked on modern websites, responsive interfaces, WordPress
            projects, frontend applications and business-focused digital
            solutions. Experienced in developing clean and functional
            websites according to project requirements.
          </p>
        </div>
      </section>

     {/* PROJECTS */}
<section id="projects">
  <p className="small-title">MY WORK</p>

  <h2>Featured Projects</h2>

  <div className="projects">

    {/* PROJECT 1 - RESTAURANT */}
    <div className="project-card">
      <h3>Restaurant Management System</h3>

      <p>
        A modern restaurant management and POS system designed for
        managing products, orders, sales, inventory, customers and
        daily restaurant operations.
      </p>

      <div className="tech-stack">
        <span>React</span>
        <span>Vite</span>
        <span>JavaScript</span>
        <span>CSS</span>
      </div>

      <div className="project-buttons">
        <a
          href="https://restaurant-management-system-tau-seven.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>

        <a
          href="https://github.com/rubabsarwar-hub/Restaurant-Management-System"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>

    {/* PROJECT 2 - PORTFOLIO */}
    <div className="project-card">
      <h3>Personal Portfolio Website</h3>

      <p>
        A professional personal portfolio website showcasing my
        skills, experience, services and web development projects.
      </p>

      <div className="tech-stack">
        <span>React</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>Responsive Design</span>
      </div>

      <div className="project-buttons">
        <a
          href="#home"
        >
          Live Demo
        </a>

        <a
          href="#contact"
        >
          GitHub Repository
        </a>
      </div>
    </div>

  </div>
</section>

      {/* SERVICES */}
      <section id="services">
        <p className="small-title">WHAT I OFFER</p>

        <h2>My Services</h2>

        <div className="services">

          <div className="service-card">
            <h3>🌐 Website Development</h3>
            <p>
              Modern and responsive websites for businesses and personal
              brands.
            </p>
          </div>

          <div className="service-card">
            <h3>⚛️ React Development</h3>
            <p>
              Interactive and user-friendly web applications using React.
            </p>
          </div>

          <div className="service-card">
            <h3>📝 WordPress</h3>
            <p>
              Professional WordPress websites with clean design and
              business-focused layouts.
            </p>
          </div>

          <div className="service-card">
            <h3>🤖 AI Automation</h3>
            <p>
              AI-powered workflows and business automation using modern
              automation tools.
            </p>
          </div>

          <div className="service-card">
            <h3>🔍 SEO</h3>
            <p>
              Search-friendly website structure and optimization to improve
              online visibility.
            </p>
          </div>

          <div className="service-card">
            <h3>📱 Responsive Design</h3>
            <p>
              Websites optimized for mobile, tablet and desktop devices.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="small-title">GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p className="section-text">
          Have a project, business idea or website requirement? Let's
          discuss your project and build something professional together.
        </p>

        <div className="contact-info">

          <a href="tel:+923197111521">
            📞 +92 319 7111521
          </a>

          <a href="mailto:rubabsarwar427@gmail.com">
            📧 rubabsarwar427@gmail.com
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            📸 Instagram — FALQORA Tech
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            📘 Facebook — FALQORA Tech
          </a>

        </div>

        <div className="contact-buttons">

          <a
            className="whatsapp-btn"
            href="https://wa.me/923197111521"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp Me
          </a>

          <a
            className="cv-btn"
            href="#contact"
          >
            📄 Download CV
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Rubab Sarwar. All Rights Reserved.</p>
        <p>FALQORA Tech</p>
      </footer>
    </div>
  );
}

export default App;