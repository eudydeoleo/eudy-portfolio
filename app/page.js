export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Eudy De Oleo</div>

        <div className="menu">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Tecnologías</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Eudy De Oleo</h1>

        <h2>
          Data Analytics & Data Engineering Student
        </h2>

        <p>
          Transformando datos en información útil para la toma de decisiones.
        </p>

        <div className="tech">
          Excel • SQL • Power BI • Python
        </div>

        <a href="#projects" className="button">
          Ver Proyectos
        </a>
      </section>

      <section id="about" className="section">
        <h2>Sobre mí</h2>

        <p>
          Soy estudiante de Ciencia de Datos con enfoque en
          Análisis de Datos e Ingeniería de Datos.

          Mi objetivo es desarrollar soluciones basadas en datos
          utilizando Excel, SQL, Power BI y Python para ayudar
          a las organizaciones a tomar mejores decisiones.
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
            <p>
              Análisis comercial con KPIs y visualización ejecutiva.
            </p>
          </div>

          <div className="card">
            <h3>Análisis de Clientes</h3>
            <p>
              Segmentación y comportamiento de clientes.
            </p>
          </div>

          <div className="card">
            <h3>Control de Inventarios</h3>
            <p>
              Seguimiento y optimización de inventario.
            </p>
          </div>

        </div>
      </section>

      <section className="section">
        <h2>Mi Ruta Profesional</h2>

        <div className="timeline">

          <div className="step">
            <strong>2025-2026</strong>
            <p>Excel, SQL, Power BI y Python</p>
          </div>

          <div className="step">
            <strong>Próximo objetivo</strong>
            <p>Data Analyst</p>
          </div>

          <div className="step">
            <strong>Futuro</strong>
            <p>Data Engineer</p>
          </div>

        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contacto</h2>

        <p>Email: contacto@eudydeoleo.com</p>
        <p>LinkedIn: linkedin.com/in/eudydeoleo</p>
        <p>GitHub: github.com/eudydeoleo</p>
      </section>

      <footer>
        <p>
          © 2026 Eudy De Oleo
        </p>
      </footer>
    </>
  );
}