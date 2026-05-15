import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('main-nav');
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Stagger skill chips
    document.querySelectorAll('.skill-chip').forEach((chip, i) => {
      chip.style.transitionDelay = `${i * 40}ms`;
    });

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav id="main-nav">
        <a href="#" className="nav-logo">jc.dev</a>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-left">
          <div className="availability">
            <div className="availability-dot"></div>
            Disponible para oportunidades
          </div>
          <div className="hero-tag">Software Engineer</div>
          <h1 className="hero-name">José<br/><span>Cammisi</span></h1>
          <p className="hero-role">Full Stack Developer · Backend Specialist</p>
          <p className="hero-bio">
            Estudiante de Ingeniería en Sistemas de Información en UTN FRSF, próximo a graduarme.<br/>
            Apasionado por el Backend, las APIs REST y la aplicación de IA en soluciones reales.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">↗ Contactar</a>
            <a href="#projects" className="btn btn-ghost">Ver proyectos</a>
            <a href="/cv.pdf" target="_blank" className="btn btn-ghost" id="cv-btn">⬇ Descargar CV</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="dot dot-r"></div>
              <div className="dot dot-y"></div>
              <div className="dot dot-g"></div>
              <span className="terminal-title">jose@portfolio ~ whoami</span>
            </div>
            <div className="terminal-body">
              <div><span className="t-prompt">→</span> <span className="t-cmd">cat developer.json</span></div>
              <div className="t-comment">// cargando perfil...</div>
              <br/>
              <div>{"{"}</div>
              <div>&nbsp;&nbsp;<span className="t-key">"nombre"</span>: <span className="t-string">"José Cammisi"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"rol"</span>: <span className="t-string">"Full Stack Developer"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"carrera"</span>: <span className="t-string">"Ing. en Sistemas — UTN FRSF"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"estado"</span>: <span className="t-string">"Último año 🎓"</span>,</div>
              <div>&nbsp;&nbsp;<span className="t-key">"stack"</span>: [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"Java"</span>, <span className="t-string">"Spring Boot"</span>,</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"React"</span>, <span className="t-string">"Python"</span>, <span className="t-string">"SQL"</span></div>
              <div>&nbsp;&nbsp;],</div>
              <div>&nbsp;&nbsp;<span className="t-key">"idiomas"</span>: [<span className="t-string">"Español (nativo)"</span>, <span className="t-string">"Inglés B1+"</span>],</div>
              <div>&nbsp;&nbsp;<span className="t-key">"open_to_work"</span>: <span style={{ color: '#b8ff57' }}>true</span></div>
              <div>{"}"} <span className="t-cursor"></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="reveal">
          <div className="section-label">Stack técnico</div>
          <h2 className="section-title">Skills &amp; Tecnologías</h2>
        </div>
        <div className="skills-grid reveal">
          <div className="skill-chip"><div className="skill-icon">☕</div><div className="skill-name">Java</div><div className="skill-level">Backend core</div></div>
          <div className="skill-chip"><div className="skill-icon">🍃</div><div className="skill-name">Spring Boot</div><div className="skill-level">API REST</div></div>
          <div className="skill-chip"><div className="skill-icon">⚛️</div><div className="skill-name">React</div><div className="skill-level">Frontend</div></div>
          <div className="skill-chip"><div className="skill-icon">🐍</div><div className="skill-name">Python</div><div className="skill-level">IA / Scripts</div></div>
          <div className="skill-chip"><div className="skill-icon">🗄️</div><div className="skill-name">SQL</div><div className="skill-level">Modelado BD</div></div>
          <div className="skill-chip"><div className="skill-icon">🐘</div><div className="skill-name">PostgreSQL</div><div className="skill-level">Relacional</div></div>
          <div className="skill-chip"><div className="skill-icon">🐋</div><div className="skill-name">Docker</div><div className="skill-level">Containers</div></div>
          <div className="skill-chip"><div className="skill-icon">🌿</div><div className="skill-name">Git</div><div className="skill-level">Control de versiones</div></div>
          <div className="skill-chip"><div className="skill-icon">🚀</div><div className="skill-name">REST APIs</div><div className="skill-level">Diseño e integración</div></div>
          <div className="skill-chip"><div className="skill-icon">🔗</div><div className="skill-name">Node.js</div><div className="skill-level">JS Backend</div></div>
          <div className="skill-chip"><div className="skill-icon">🎨</div><div className="skill-name">Tailwind CSS</div><div className="skill-level">Estilos</div></div>
          <div className="skill-chip"><div className="skill-icon">🤖</div><div className="skill-name">IA / ML</div><div className="skill-level">Aplicaciones</div></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="reveal">
          <div className="section-label">Lo que construí</div>
          <h2 className="section-title">Proyectos</h2>
        </div>

        <div className="projects-grid">
          {/* FEATURED PROJECT */}
          <div className="project-card featured reveal">
            <div className="project-info">
              <div className="project-number">01 — Producción</div>
              <div className="project-title">Plataformas de Comunas Municipales</div>
              <p className="project-desc">
                Plataformas web institucionales en producción para las comunas de Santo Domingo y Progreso.
                Sistemas con gestión de dominios <strong>.gob.ar</strong>, hosting institucional y frontend desarrollado en React.
                Proyectos reales con impacto ciudadano directo.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Dominio .gob.ar</span>
                <span className="tag">Producción</span>
                <span className="tag">Gobierno</span>
              </div>
              <div className="project-links">
                <a href="https://www.santodomingo.gob.ar/" className="project-link">↗ Santo Domingo</a>
                <a href="https://www.progreso.gob.ar/" className="project-link">↗ Progreso</a>
              </div>
            </div>
            <div className="project-visual">🏛️</div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card reveal">
            <div className="project-number">02 — Backend</div>
            <div className="project-title">Sistema de Gestión de Libros</div>
            <p className="project-desc">
              API REST completa con arquitectura en capas, inyección de dependencias (Spring). Diseño de esquema relacional en PostgreSQL/MySQL, implementando transacciones seguras (ACID) y mapeo objeto-relacional (ORM) con Hibernate/JPA.
            </p>
            <div className="project-tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">REST API</span>
              <span className="tag">SQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Cammisi/SistemaGestionLibros" className="project-link">⌥ GitHub</a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card reveal">
            <div className="project-number">03 — Full Stack</div>
            <div className="project-title">Sistema de Reservas</div>
            <p className="project-desc">
              Aplicación de gestión de reservas con backend Spring Boot y frontend React.
              Autenticación JWT, manejo de estados y base de datos relacional con consultas optimizadas.
            </p>
            <div className="project-tags">
              <span className="tag">Spring Boot</span>
              <span className="tag">React</span>
              <span className="tag">JWT</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Cammisi/Proyecto-Seminario" className="project-link">⌥ GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="reveal">
          <div className="section-label">Formación</div>
          <h2 className="section-title">Educación &amp; Certificaciones</h2>
        </div>

        <div className="edu-grid reveal">
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-inst">UTN FRSF</div>
            <div className="edu-title">Ingeniería en Sistemas de Información</div>
            <div className="edu-period">2020 — 2026 (Último año)</div>
            <div className="edu-desc">
              Universidad Tecnológica Nacional — Facultad Regional Santa Fe.
              Formación integral en desarrollo de software, bases de datos,
              arquitecturas de sistemas y gestión de proyectos.
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-icon">💼</div>
            <div className="edu-inst">University of Pennsylvania (Coursera)</div>
            <div className="edu-title">English for Career Development</div>
            <div className="edu-period">Mayo 2026</div>
            <div className="edu-desc">
              Perfeccioné mis habilidades de comunicación profesional, optimización de perfiles técnicos para sistemas ATS y estrategias de networking aplicadas al mercado IT global.
            </div>
              <a 
                href="https://coursera.org/verify/XVIEQ4GHLVBZ" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-ghost" 
                style={{ fontSize: '.68rem', padding: '.5rem 1rem', marginTop: '.5rem', display: 'inline-flex', width: 'fit-content' }}
              >
                ↗ Ver credencial
              </a>
          </div>

          <div className="edu-card">
            <div className="edu-icon">🌐</div>
            <div className="edu-inst">EF SET</div>
            <div className="edu-title">Certificación de Inglés B1+</div>
            <div className="edu-period">2026</div>
            <div className="edu-desc">
              Certificado de nivel B1+ en el EF Standard English Test.
              Capacidad de comunicación técnica en inglés para entornos profesionales globales —
              documentación, código, reuniones y trabajo remoto.
            </div>
              <a 
                href="/certificado-ingles.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-ghost" 
                style={{ fontSize: '.68rem', padding: '.5rem 1rem', marginTop: '.5rem', display: 'inline-flex', width: 'fit-content' }}
              >
                ↗ Ver certificado
              </a>
          </div>
        </div>
      </section>
      
      {/* CONTACT */}
      <section id="contact">
        <div className="reveal">
          <div className="section-label">Hablemos</div>
          <h2>¿Tenés un<br/><span style={{ color: 'var(--accent)' }}>proyecto</span><br/>en mente?</h2>
          <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '.82rem', color: '#777', lineHeight: 1.8, maxWidth: '38ch' }}>
            Estoy buscando nuevas oportunidades — ya sea un rol de ingeniería, proyectos freelance o colaboraciones interesantes. ¡Escribime!
          </p>
        </div>

        <div className="contact-right reveal">
          <a href="mailto:joseccammisi@gmail.com" className="contact-link">
            <div className="contact-icon">✉️</div>
            <div className="contact-info">
              <div className="contact-label">Email</div>
              <div className="contact-value">joseccammisi@gmail.com</div>
            </div>
            <div className="contact-arrow">→</div>
          </a>

          <a href="https://linkedin.com/in/jose-cammisi" target="_blank" rel="noreferrer" className="contact-link">
            <div className="contact-icon">💼</div>
            <div className="contact-info">
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">linkedin.com/in/jose-cammisi</div>
            </div>
            <div className="contact-arrow">→</div>
          </a>

          <a href="https://github.com/Cammisi" target="_blank" rel="noreferrer" className="contact-link">
            <div className="contact-icon">🐙</div>
            <div className="contact-info">
              <div className="contact-label">GitHub</div>
              <div className="contact-value">github.com/Cammisi</div>
            </div>
            <div className="contact-arrow">→</div>
          </a>

          <a href="/cv.pdf" target="_blank" className="contact-link" id="cv-link">
            <div className="contact-icon">📄</div>
            <div className="contact-info">
              <div className="contact-label">Currículum Vitae</div>
              <div className="contact-value">Descargar PDF</div>
            </div>
            <div className="contact-arrow">⬇</div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 <span style={{ color: 'var(--accent)' }}>José Cammisi</span></p>
        <p>Hecho con <span>React + Vite + Tailwind</span> · Deployed en Vercel</p>
      </footer>
    </>
  );
}

export default App;