import Image from "next/image";

import {
  SiLinux,
  SiPython,
  SiGit,
  SiWireshark,
} from "react-icons/si";

import {
  FaGithub,
  FaInstagram,
  FaShieldAlt,
  FaNetworkWired,
  FaBug,
  FaCloud,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">ED</div>

        <div className="menu">
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#timeline">Ruta</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="hero-left">

          <span className="tag">CYBERSECURITY</span>

          <h1>
            Eudy
            <br />
            De Oleo
          </h1>

          <h2>
            Cybersecurity | Security Analyst
          </h2>

          <p>
            Me estoy especializando en ciberseguridad, con enfoque en
            seguridad de redes, evaluación de vulnerabilidades, seguridad
            operacional y protección de infraestructuras tecnológicas.
          </p>

          <div className="buttons">

            <a href="#projects" className="btn-primary">
              Ver Proyectos
            </a>

            <a href="#" className="btn-secondary">
              Descargar CV
            </a>

          </div>

          <div className="socials">

            <a
              href="https://github.com/eudydeoleo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/eudydo/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="glow"></div>

          <Image
            src="/eudy.png"
            alt="Eudy De Oleo - Cybersecurity"
            width={800}
            height={900}
            priority
            className="hero-image"
          />

        </div>
      </section>


      {/* SPECIALIZATION */}

      <section className="stats">

        <div className="stat">
          <FaShieldAlt />

          <h3>Security</h3>

          <p>
            Protección de infraestructuras y sistemas
          </p>
        </div>

        <div className="stat">
          <FaNetworkWired />

          <h3>Networks</h3>

          <p>
            Seguridad y análisis de redes
          </p>
        </div>

        <div className="stat">
          <FaBug />

          <h3>Vulnerability</h3>

          <p>
            Identificación y evaluación de vulnerabilidades
          </p>
        </div>

      </section>


      {/* SKILLS */}

      <section id="skills" className="skills">

        <h2>
          Tecnologías & Seguridad
        </h2>

        <div className="tech-grid">

          <div className="tech-card">
            <SiLinux />
            <span>Linux</span>
          </div>

          <div className="tech-card">
            <FaNetworkWired />
            <span>Networking</span>
          </div>

          <div className="tech-card">
            <SiPython />
            <span>Python</span>
          </div>

          <div className="tech-card">
            <SiWireshark />
            <span>Wireshark</span>
          </div>

          <div className="tech-card">
            <SiGit />
            <span>Git</span>
          </div>

          <div className="tech-card">
            <FaShieldAlt />
            <span>Cybersecurity</span>
          </div>

          <div className="tech-card">
            <FaLock />
            <span>Security Operations</span>
          </div>

          <div className="tech-card">
            <FaCloud />
            <span>Cloud Security</span>
          </div>

        </div>

      </section>


      {/* PROYECTOS */}

      <section id="projects" className="projects">

        <h2>
          Proyectos de Ciberseguridad
        </h2>

        <div className="project-grid">

          {/* PROJECT 1 */}

          <div className="project-card">

            <FaShieldAlt />

            <h3>
              Security Assessment
            </h3>

            <p>
              Evaluación de la postura de seguridad de una infraestructura
              tecnológica para identificar riesgos, debilidades y posibles
              vectores de ataque.
            </p>

            <br />

            <FaArrowRight />

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <FaBug />

            <h3>
              Vulnerability Assessment
            </h3>

            <p>
              Identificación, análisis y documentación de vulnerabilidades
              utilizando herramientas y metodologías de evaluación de
              seguridad.
            </p>

            <br />

            <FaArrowRight />

          </div>


          {/* PROJECT 3 */}

          <div className="project-card">

            <FaNetworkWired />

            <h3>
              Network Security
            </h3>

            <p>
              Análisis de tráfico, servicios y configuraciones de red para
              identificar comportamientos anómalos y mejorar los controles
              de seguridad.
            </p>

            <br />

            <FaArrowRight />

          </div>


          {/* PROJECT 4 */}

          <div className="project-card">

            <FaCloud />

            <h3>
              Cloud Security
            </h3>

            <p>
              Análisis de configuraciones y controles de seguridad en
              entornos cloud para identificar riesgos y mejorar la
              protección de los recursos.
            </p>

            <br />

            <FaArrowRight />

          </div>

        </div>

      </section>


      {/* PROFESSIONAL ROADMAP */}

      <section id="timeline" className="timeline">

        <h2>
          Ruta Profesional
        </h2>

        <div className="timeline-item">

          <strong>
            Fundamentos
          </strong>

          <p>
            Linux & Networking
          </p>

        </div>


        <div className="timeline-item">

          <strong>
            2026
          </strong>

          <p>
            Cybersecurity Fundamentals
          </p>

        </div>


        <div className="timeline-item">

          <strong>
            Próximo Paso
          </strong>

          <p>
            Security Analyst
          </p>

        </div>


        <div className="timeline-item">

          <strong>
            Meta Profesional
          </strong>

          <p>
            Cybersecurity Consultant
          </p>

        </div>

      </section>


      {/* CONTACT */}

      <footer id="contact">

        <h3>
          Eudy De Oleo
        </h3>

        <br />

        <p>
          eudydeoleo@icloud.com
        </p>

        <br />

        <div className="socials">

          <a
            href="https://github.com/eudydeoleo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/eudydo/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

        </div>

        <br />

        <p>
          © 2026 Eudy De Oleo
        </p>

      </footer>

    </main>
  );
}