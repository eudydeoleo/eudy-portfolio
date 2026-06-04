export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">ED</div>

        <div className="menu">
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="home">

        <div className="hero-left">

          <span className="badge">
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
            Especializado en SQL, Power BI y Python
            para generar impacto real en los negocios.
          </p>

          <div className="buttons">
            <a href="#" className="primary">
              Descargar CV
            </a>

            <a href="#projects" className="secondary">
              Ver Proyectos
            </a>
          </div>

          <div className="tech-stack">

            <div className="tech-card">
              SQL
            </div>

            <div className="tech-card">
              Power BI
            </div>

            <div className="tech-card">
              Python
            </div>

            <div className="tech-card">
              Excel
            </div>

            <div className="tech-card">
              Git
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="glow"></div>

          <img
            src="/eudy.png"
            alt="Eudy"
            className="hero-image"
          />

        </div>

      </section>

      <section className="services">

        <div className="service-card">
          <h3>Análisis</h3>
          <p>Basado en datos</p>
        </div>

        <div className="service-card">
          <h3>Dashboards</h3>
          <p>Visuales e interactivos</p>
        </div>

        <div className="service-card">
          <h3>Automatización</h3>
          <p>Procesos eficientes</p>
        </div>

        <div className="service-card">
          <h3>Insights</h3>
          <p>Decisiones inteligentes</p>
        </div>

      </section>
    </>
  );
}