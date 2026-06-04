import Image from "next/image";

import {
  SiPython,
  SiMysql,
  SiGit,
} from "react-icons/si";

import {
  FaChartBar,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaFileExcel
} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}

      <nav className="navbar">
        <div src="/logo.png"></div>

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
          <span className="tag">DATA ANALYTICS</span>

          <h1>
            Eudy
            <br />
            De Oleo
          </h1>

          <h2>Data Analyst | Future Data Engineer</h2>

          <p>
            Transformo datos en decisiones estratégicas utilizando SQL,
            Power BI y Python para crear soluciones que generen impacto
            real en los negocios.
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
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/eudydo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="glow"></div>

          <Image
            src="/eudy.png"
            alt="Eudy De Oleo"
            width={800}
            height={900}
            priority
            className="hero-image"
          />
        </div>
      </section>

      {/* STATS */}

      <section className="stats">
        <div className="stat">
          <h3>10+</h3>
          <p>Proyectos Analíticos</p>
        </div>

        <div className="stat">
          <h3>100K+</h3>
          <p>Registros Analizados</p>
        </div>

        <div className="stat">
          <h3>2026</h3>
          <p>Objetivo Data Engineer</p>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="skills">
        <h2>Tecnologías</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <SiMysql />
            <span>SQL</span>
          </div>

          <div className="tech-card">
            <FaChartBar />
            <span>Power BI</span>
          </div>

          <div className="tech-card">
            <SiPython />
            <span>Python</span>
          </div>

          <div className="tech-card">
            <FaFileExcel />
           <span>Excel</span>
          </div>

          <div className="tech-card">
            <SiGit />
            <span>Git</span>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}

      <section id="projects" className="projects">
        <h2>Proyectos Destacados</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Dashboard Ejecutivo</h3>

            <p>
              Visualización estratégica para seguimiento de KPIs,
              rendimiento y toma de decisiones.
            </p>

            <br />

            <FaArrowRight />
          </div>

          <div className="project-card">
            <h3>Análisis de Ventas</h3>

            <p>
              Limpieza, transformación y análisis de datos con Python,
              Pandas y Power BI.
            </p>

            <br />

            <FaArrowRight />
          </div>

          <div className="project-card">
            <h3>Pipeline de Datos</h3>

            <p>
              Automatización de flujos de datos utilizando SQL y Python
              para procesos repetitivos.
            </p>

            <br />

            <FaArrowRight />
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section id="timeline" className="timeline">
        <h2>Ruta Profesional</h2>

        <div className="timeline-item">
          <strong>2025</strong>
          <p>Excel & SQL</p>
        </div>

        <div className="timeline-item">
          <strong>2026</strong>
          <p>Power BI & Python</p>
        </div>

        <div className="timeline-item">
          <strong>Próximo Paso</strong>
          <p>Data Analyst</p>
        </div>

        <div className="timeline-item">
          <strong>Meta Final</strong>
          <p>Data Engineer</p>
        </div>
      </section>

      {/* CONTACTO */}

      <footer id="contact">
        <h3>Eudy De Oleo</h3>

        <br />

        <p>eudydeoleo@icloud.com</p>

        <br />

        <div className="socials">
          <a
            href="https://github.com/eudydeoleo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/eudydo/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <br />

        <p>© 2026 Eudy De Oleo</p>
      </footer>
    </main>
  );
}