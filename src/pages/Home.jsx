import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUsers, FaCertificate, FaGlobe, FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Profesores Certificados",
      description: "Nuestros instructores están altamente calificados y certificados internacionalmente."
    },
    {
      icon: <FaUsers />,
      title: "Clases Personalizadas",
      description: "Adaptamos nuestros métodos de enseñanza a tu estilo de aprendizaje único."
    },
    {
      icon: <FaCertificate />,
      title: "Certificaciones Reconocidas",
      description: "Obtén certificaciones reconocidas mundialmente como TOEFL, IELTS y más."
    }
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Ejecutiva de Marketing",
      content: "MECoaching me ayudó a conseguir mi trabajo soñado en una empresa internacional. Su metodología es excepcional.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Estudiante Universitario",
      content: "Gracias a MECoaching, logré aprobar mi examen TOEFL con una puntuación excelente. Recomiendo totalmente sus servicios.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Emprendedora",
      content: "El coaching personalizado me dio la confianza que necesitaba para presentar mi negocio a inversionistas internacionales.",
      rating: 5
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Domina el Inglés, Transforma tu Futuro</h1>
            <p>
              Únete a miles de estudiantes que han transformado sus vidas 
              profesionales y personales con nuestros cursos de inglés y 
              coaching personalizado.
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-secondary">
                Ver Cursos <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contactar Ahora
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="../../public/img/alumnos.png" alt="Estudiantes aprendiendo inglés" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>¿Por qué elegir MEC Coaching?</h2>
            <p>Ofrecemos una experiencia de aprendizaje única y personalizada</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>2500+</h3>
              <p>Estudiantes Graduados</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>15+</h3>
              <p>Años de Experiencia</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>98%</h3>
              <p>Tasa de Éxito</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>50+</h3>
              <p>Profesores Certificados</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Lo que dicen nuestros estudiantes</h2>
            <p>Historias reales de transformación y éxito</p>
          </motion.div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.content}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>¿Listo para comenzar tu transformación?</h2>
            <p>Únete a nuestra comunidad de estudiantes exitosos y comienza tu viaje hacia el dominio del inglés.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-secondary">
                Comenzar Ahora <FaArrowRight />
              </Link>
              <Link to="/courses" className="btn btn-secondary">
                Ver Cursos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
