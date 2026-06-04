import Image from "next/image";
import {
  SiPython,
  SiMysql,
  SiGit,
  SiMicrosoftexcel
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

export default function Home() {
  return (
    <main>

      <nav className="navbar">
        <div className="logo">
          <span>ED</span>
          <h3>EUDY DE OLEO</h3>
        </div>

        <div className="menu">
          <a href="#">Inicio</a>
          <a href="#">Sobre mí</a>
          <a href="#">Skills</a>
          <a href="#">Proyectos</a>
          <a href="#">Dashboard</a>
          <a href="#">Contacto</a>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-text">

          <span className="subtitle">
            HOLA, SOY
          </span>

          <h1>
            Eudy De Oleo
          </h1>

          <h2>
            Data Analytics & Data Engineering
          </h2>

          <p>
            Transformo datos en decisiones estratégicas.
            Especializado en SQL, Power BI y Python para
            convertir información en resultados reales.
          </p>

          <div className="buttons">

            <button className="btn-primary">
              Descargar CV
            </button>

            <button className="btn-secondary">
              Ver Proyectos
            </button>

          </div>

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

        </div>

        <div className="hero-image-container">

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

      <section className="features">

        <div className="feature">
          <h3>Análisis</h3>
          <p>Basado en datos</p>
        </div>

        <div className="feature">
          <h3>Dashboards</h3>
          <p>Visuales e interactivos</p>
        </div>

        <div className="feature">
          <h3>Automatización</h3>
          <p>Procesos eficientes</p>
        </div>

        <div className="feature">
          <h3>Insights</h3>
          <p>Decisiones inteligentes</p>
        </div>

      </section>

    </main>
  );
}