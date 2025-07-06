import { motion } from 'framer-motion'
import { FaGraduationCap, FaUsers, FaGlobe, FaAward, FaHeart, FaLightbulb } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: "Pasión por la Enseñanza",
      description: "Creemos que la pasión es el motor del aprendizaje efectivo."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovación Constante",
      description: "Utilizamos las últimas metodologías y tecnologías educativas."
    },
    {
      icon: <FaUsers />,
      title: "Enfoque Personalizado",
      description: "Cada estudiante es único y merece atención individualizada."
    },
    {
      icon: <FaGlobe />,
      title: "Visión Global",
      description: "Preparamos a nuestros estudiantes para un mundo conectado."
    }
  ]

  const team = [
    {
      name: "Dr. María Elena Contreras",
      role: "Directora Académica",
      description: "PhD en Lingüística Aplicada con más de 20 años de experiencia en enseñanza del inglés.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Prof. Carlos Mendoza",
      role: "Coordinador de Programas",
      description: "Especialista en metodologías innovadoras y certificaciones internacionales.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Lic. Ana Rodríguez",
      role: "Coach Ejecutivo",
      description: "Experta en coaching empresarial y desarrollo de habilidades comunicativas.",
      image: "/api/placeholder/200/200"
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sobre MECoaching</h1>
            <p>
              Transformando vidas a través del dominio del inglés desde 2008. 
              Somos más que una escuela de idiomas, somos tu socio en el crecimiento personal y profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Nuestra Misión</h2>
              <p>
                Empoderar a individuos y organizaciones a través del dominio del inglés, 
                proporcionando educación de calidad mundial que trasciende las barreras 
                lingüísticas y culturales.
              </p>
              <p>
                Creemos que el conocimiento del inglés es una herramienta fundamental 
                para el éxito en el mundo globalizado de hoy, y nos dedicamos a hacer 
                que este aprendizaje sea accesible, efectivo y transformador.
              </p>
            </motion.div>
            <motion.div 
              className="mission-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/api/placeholder/500/400" alt="Nuestra misión" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Nuestros Valores</h2>
            <p>Los principios que guían nuestro trabajo diario</p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Nuestra Historia</h2>
            <div className="story-text">
              <p>
                <strong>MECoaching</strong> nació en 2008 de la visión de un grupo de educadores 
                apasionados que creían que el aprendizaje del inglés podía ser más efectivo, 
                personalizado y transformador.
              </p>
              <p>
                Comenzamos como un pequeño centro de enseñanza con apenas 50 estudiantes. 
                Hoy, después de más de 15 años, hemos graduado a más de 2,500 estudiantes 
                que han transformado sus vidas profesionales y personales.
              </p>
              <p>
                Nuestra metodología única combina técnicas tradicionales probadas con 
                innovaciones tecnológicas y un enfoque de coaching personalizado que 
                nos distingue en el mercado educativo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Nuestro Equipo</h2>
            <p>Conoce a los profesionales que harán posible tu transformación</p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="achievements">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Nuestros Logros</h2>
            <p>Números que reflejan nuestro compromiso con la excelencia</p>
          </motion.div>
          
          <div className="achievements-grid">
            <motion.div 
              className="achievement-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="achievement-icon" />
              <h3>2500+</h3>
              <p>Estudiantes Graduados</p>
            </motion.div>
            <motion.div 
              className="achievement-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaAward className="achievement-icon" />
              <h3>98%</h3>
              <p>Tasa de Aprobación</p>
            </motion.div>
            <motion.div 
              className="achievement-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaUsers className="achievement-icon" />
              <h3>50+</h3>
              <p>Profesores Certificados</p>
            </motion.div>
            <motion.div 
              className="achievement-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaGlobe className="achievement-icon" />
              <h3>15+</h3>
              <p>Años de Experiencia</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
