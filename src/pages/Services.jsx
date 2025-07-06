import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaUser, FaUsers, FaBuilding, FaCertificate, FaGraduationCap, FaComments, FaArrowRight, FaCheck } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaUser />,
      title: "Clases Particulares",
      description: "Atención personalizada uno a uno para un aprendizaje acelerado.",
      features: ["Horarios flexibles", "Contenido personalizado", "Progreso acelerado", "Atención individualizada"],
      price: "Desde $50/hora",
      popular: false
    },
    {
      icon: <FaUsers />,
      title: "Cursos Grupales",
      description: "Aprende en grupo con otros estudiantes de tu nivel.",
      features: ["Grupos reducidos (6-8 personas)", "Interacción social", "Práctica conversacional", "Precio accesible"],
      price: "Desde $30/hora",
      popular: true
    },
    {
      icon: <FaBuilding />,
      title: "Inglés Empresarial",
      description: "Programas especializados para empresas y profesionales.",
      features: ["In-company training", "Inglés de negocios", "Presentaciones", "Reuniones internacionales"],
      price: "Cotización personalizada",
      popular: false
    },
    {
      icon: <FaCertificate />,
      title: "Preparación TOEFL",
      description: "Curso intensivo para aprobar el examen TOEFL con éxito.",
      features: ["Simulacros de examen", "Estrategias específicas", "Material actualizado", "Garantía de resultados"],
      price: "Desde $400/mes",
      popular: false
    },
    {
      icon: <FaGraduationCap />,
      title: "Preparación IELTS",
      description: "Preparación completa para el examen IELTS Academic y General.",
      features: ["Speaking practice", "Writing correction", "Listening skills", "Reading strategies"],
      price: "Desde $400/mes",
      popular: false
    },
    {
      icon: <FaComments />,
      title: "Coaching Conversacional",
      description: "Mejora tu fluidez y confianza al hablar inglés.",
      features: ["Conversación práctica", "Corrección en tiempo real", "Temas variados", "Confianza comunicativa"],
      price: "Desde $35/hora",
      popular: false
    }
  ]

  const levels = [
    {
      level: "Principiante",
      description: "Para quienes empiezan desde cero",
      skills: ["Vocabulario básico", "Frases cotidianas", "Pronunciación", "Gramática elemental"]
    },
    {
      level: "Intermedio",
      description: "Para quienes ya tienen bases",
      skills: ["Conversaciones fluidas", "Gramática avanzada", "Comprensión auditiva", "Escritura estructurada"]
    },
    {
      level: "Avanzado",
      description: "Para perfeccionar tu inglés",
      skills: ["Inglés profesional", "Presentaciones", "Negociaciones", "Expresión sofisticada"]
    }
  ]

  const methodology = [
    {
      step: "01",
      title: "Evaluación Inicial",
      description: "Determinamos tu nivel actual y objetivos específicos."
    },
    {
      step: "02",
      title: "Plan Personalizado",
      description: "Diseñamos un programa de estudios adaptado a tus necesidades."
    },
    {
      step: "03",
      title: "Implementación",
      description: "Comenzamos con clases dinámicas y materiales actualizados."
    },
    {
      step: "04",
      title: "Seguimiento",
      description: "Monitoreamos tu progreso y ajustamos el plan según necesites."
    }
  ]

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Nuestros Servicios</h1>
            <p>
              Ofrecemos una amplia gama de servicios diseñados para satisfacer 
              todas tus necesidades de aprendizaje del inglés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Elige el Servicio Ideal para Ti</h2>
            <p>Cada servicio está diseñado para diferentes objetivos y estilos de aprendizaje</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`service-card ${service.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {service.popular && <div className="popular-badge">Más Popular</div>}
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-price">{service.price}</div>
                <Link to="/contact" className="btn btn-primary">
                  Más Información <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="levels">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Niveles de Aprendizaje</h2>
            <p>Tenemos programas para cada nivel de conocimiento</p>
          </motion.div>
          
          <div className="levels-grid">
            {levels.map((level, index) => (
              <motion.div 
                key={index}
                className="level-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{level.level}</h3>
                <p className="level-description">{level.description}</p>
                <div className="level-skills">
                  <h4>Habilidades a desarrollar:</h4>
                  <ul>
                    {level.skills.map((skill, i) => (
                      <li key={i}>
                        <FaCheck className="check-icon" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Nuestra Metodología</h2>
            <p>Un proceso estructurado para garantizar tu éxito</p>
          </motion.div>
          
          <div className="methodology-steps">
            {methodology.map((step, index) => (
              <motion.div 
                key={index}
                className="step-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>¿Listo para Comenzar?</h2>
            <p>Contacta con nosotros y descubre cuál es el servicio ideal para ti</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Evaluación Gratuita <FaArrowRight />
              </Link>
              <Link to="/courses" className="btn btn-outline">
                Ver Cursos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
