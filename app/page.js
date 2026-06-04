import Image from "next/image";
import {
  SiPython,
  SiMysql,
  SiGit,
  SiMicrosoftexcel
} from "react-icons/si";
import { FaChartBar, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main>

      <nav className="navbar">
        <div className="logo">EUDY</div>

        <div className="menu">
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#timeline">Ruta</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            DATA ANALYTICS
          </span>

          <h1>Eudy De Oleo</h1>

          <h2>
            Data Analyst | Future Data Engineer
          </h2>

          <p>
            Transformando datos en decisiones
            inteligentes utilizando SQL,
            Power BI y Python.
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
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/eudydo/"
              target="_blank"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="glow"></div>

          <Image
            src="/eudy.png"
            alt="Eudy"
            width={700}
            height={800}
            priority
            className="hero-image"
          />

        </div>

      </section>

      <section className="stats">

        <div className="stat">
          <h3>10+</h3>
          <p>Proyectos</p>
        </div>

        <div className="stat">
          <h3>100K+</h3>
          <p>Registros</p>
        </div>

        <div className="stat">
          <h3>5</h3>
          <p>Tecnologías</p>
        </div>

      </section>

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
            <SiMicrosoftexcel />
            <span>Excel</span>
          </div>

          <div className="tech-card">
            <SiGit />
            <span>Git</span>
          </div>

        </div>

      </section>

      <section id="projects" className="projects">

        <h2>Proyectos Destacados</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>Dashboard Ejecutivo</h3>
            <p>Power BI + SQL</p>
          </div>

          <div className="project-card">
            <h3>Análisis de Ventas</h3>
            <p>Python + Pandas</p>
          </div>

          <div className="project-card">
            <h3>Pipeline de Datos</h3>
            <p>Python + SQL</p>
          </div>

        </div>

      </section>

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
          <strong>Meta</strong>
          <p>Data Analyst</p>
        </div>

        <div className="timeline-item">
          <strong>Futuro</strong>
          <p>Data Engineer</p>
        </div>

      </section>

      <footer id="contact">
        <p>eudydeoleo@icloud.com</p>
        <p>© 2026 Eudy De Oleo</p>
      </footer>

    </main>
  );
}