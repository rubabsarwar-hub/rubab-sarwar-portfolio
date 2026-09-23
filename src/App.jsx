
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h2>Rubab Sarwar</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="hero">
        <div>
          <p className="small-title">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Rubab Sarwar</span>
          </h1>

          <h2>Web Developer & Data Science Student</h2>

          <p>
            I build modern, responsive and professional websites
            that help businesses grow online.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View My Work</a>
            <a href="#contact">Hire Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I am a Data Science student and Web Developer passionate about
          creating modern websites, business solutions and AI-powered
          digital experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>My Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
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

      {/* PROJECTS */}
      <section id="projects">
        <h2>Featured Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>Restaurant Management System</h3>

            <p>
              A modern restaurant management and POS system for handling
              products, orders and sales.
            </p>

            <button>Live Demo</button>
          </div>

          <div className="project-card">
            <h3>CineVault</h3>

            <p>
              A movie discovery website built with React and movie API
              integration.
            </p>

            <button>Live Demo</button>
          </div>

          <div className="project-card">
            <h3>Student Registration System</h3>

            <p>
              A full-stack student registration application with frontend
              and backend integration.
            </p>

            <button>Live Demo</button>
          </div>

          <div className="project-card">
            <h3>Business Website</h3>

            <p>
              A professional responsive website designed for modern
              businesses and service providers.
            </p>

            <button>Live Demo</button>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2>Services</h2>

        <div className="services">
          <div>🌐 Website Development</div>
          <div>⚛️ React Development</div>
          <div>📝 WordPress Websites</div>
          <div>🤖 AI Automation</div>
          <div>🔍 SEO</div>
          <div>📱 Responsive Design</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">

        <p className="small-title">GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind? Contact me and let's build something
          professional together.
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
            📸 Instagram — Felqora Tech
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            📘 Facebook — Felqora Tech
          </a>

          

        </div>

        <a
          className="whatsapp-btn"
          href="https://wa.me/923197111521"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Me
        </a>

      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Rubab Sarwar. All Rights Reserved.</p>
        <p>Felqora Tech</p>
      </footer>

    </div>
  );
}

export default App;