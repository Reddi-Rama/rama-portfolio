import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo-section">

          <div className="logo-box">
            R
          </div>

          <div>
            <h2>Rama Narithalli Reddi</h2>
            <p>AI/ML Developer</p>
          </div>

        </div>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>

      {/* HERO SECTION */}

      <section className="hero" id="home">

        <h1>
          Hi, I'm <span>Rama</span>
        </h1>

        <h2>
          B.Tech Information Technology Student
        </h2>

        <p>
          Passionate about Artificial Intelligence, Machine Learning,
          Python development, and building intelligent real-world applications.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/Reddi-Rama"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rama-it/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about" id="about">

        <h2>About Me</h2>

        <div className="about-card">

          <p>
            I am currently pursuing Bachelor of Technology in
            Information Technology at Maharaj Vijayaram Gajapathi Raj
            College of Engineering (MVGR).
          </p>

          <p>
            I am interested in Artificial Intelligence,
            Machine Learning, Data Structures, Python programming,
            and software development.
          </p>

          <p>
            I enjoy building projects, solving problems,
            learning modern technologies, and continuously improving
            my technical skills.
          </p>

        </div>

      </section>

      {/* SKILLS */}

      <section className="skills" id="skills">

        <h2>Technical Skills</h2>

        <div className="skills-container">

          <div className="skill-box">Python</div>
          <div className="skill-box">C</div>
          <div className="skill-box">C++</div>
          <div className="skill-box">SQL</div>
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">Machine Learning</div>
          <div className="skill-box">Data Structures</div>
          <div className="skill-box">Git & GitHub</div>
          <div className="skill-box">Jupyter Notebook</div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="projects" id="projects">

        <h2>Projects</h2>

        <div className="project-card">

          <div className="project-logo">
            N
          </div>

          <h3>NeuroEstate AI</h3>

          <p>
            AI-powered property valuation web application using
            Machine Learning with responsive UI and
            currency-based prediction display.
          </p>

          <a
            href="https://github.com/Reddi-Rama/neuroestate-ai"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repository
          </a>

        </div>

      </section>

      {/* CERTIFICATIONS */}

      <section className="certifications" id="certifications">

        <h2>Certifications</h2>

        <div className="certification-container">

          <div className="cert-card">
            Google AI-ML Virtual Internship
          </div>

          <div className="cert-card">
            Python Essentials 1
          </div>

          <div className="cert-card">
            Python Essentials 2
          </div>

          <div className="cert-card">
            C Essentials 1
          </div>

          <div className="cert-card">
            C Essentials 2
          </div>

          <div className="cert-card">
            Python 101 for Data Science
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="contact" id="contact">

        <h2>Contact</h2>

        <div className="contact-card">

          <p>
            <strong>Email:</strong>
            <br />
            ramanarithallireddi@gmail.com
          </p>

          <p>
  <strong>Phone:</strong>
  <br />

  <a href="tel:+919704107583">
    +91 9704107583
  </a>
</p>

          <p>
            <strong>GitHub:</strong>
            <br />
            github.com/Reddi-Rama
          </p>

          <p>
            <strong>LinkedIn:</strong>
            <br />
            linkedin.com/in/rama-it
          </p>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Reddi Rama Narithalli. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;