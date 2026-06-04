"use client";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="logo">Eudy De Oleo</div>

        <div className="menu">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Tecnologías</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="tag">DATA ANALYTICS & DATA ENGINEERING</span>

            <h1>
              Transformando datos en decisiones inteligentes.
            </h1>

            <p>
              Especializado en SQL, Power BI y Python para crear
              dashboards, automatizaciones y soluciones basadas en datos.
            </p>

            <div className="buttons">
              <a href="#projects" className="btn-primary">
                Ver proyectos
              </a>

              <a href="#contact" className="btn-secondary">
                Contactarme
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/eudy.jpg"
              alt="Eudy De Oleo"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>Sobre mí</h2>

        <p>
          Soy estudiante de Ciencia de Datos enfocado en Data Analytics
          y Data Engineering. Mi objetivo es utilizar los datos para
          generar información valiosa y apoyar la toma de decisiones.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Tecnologías</h2>

        <div className="grid">
          <div className="card">Excel</div>
          <div className="card">SQL</div>
          <div className="card">Power BI</div>
          <div className="card">Python</div>
          <div className="card">Pandas</div>
          <div className="card">Data Visualization</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Proyectos</h2>

        <div className="grid">
          <div className="card">
            <h3>Dashboard de Ventas</h3>
            <p>Análisis comercial y KPIs ejecutivos.</p>
          </div>

          <div className="card">
            <h3>Análisis de Clientes</h3>
            <p>Segmentación y comportamiento de clientes.</p>
          </div>

          <div className="card">
            <h3>Control de Inventarios</h3>
            <p>Optimización y seguimiento de inventarios.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contacto</h2>

        <p>📧 eudydeoleo@icloud.com</p>
        <p>🌐 eudydeoleo.com</p>
      </section>

      <footer>
        © 2026 Eudy De Oleo
      </footer>
    </>
  );
}