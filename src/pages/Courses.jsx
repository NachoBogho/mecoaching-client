import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaClock, FaUsers, FaCalendarAlt, FaStar, FaPlay, FaArrowRight, FaCheck } from 'react-icons/fa'
import './Courses.css'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Inglés Básico - Principiantes",
      description: "Curso ideal para quienes comienzan desde cero. Aprende vocabulario esencial, gramática básica y frases cotidianas.",
      image: "/api/placeholder/400/250",
      level: "Principiante",
      duration: "3 meses",
      students: "25 estudiantes",
      schedule: "Lun-Mie-Vie 7:00 PM",
      price: "$200/mes",
      rating: 4.8,
      features: ["Vocabulario básico", "Gramática elemental", "Pronunciación", "Conversación básica"],
      popular: false
    },
    {
      id: 2,
      title: "Inglés Intermedio - Conversacional",
      description: "Perfecciona tu fluidez y confianza al hablar. Ideal para quienes ya tienen bases sólidas del idioma.",
      image: "/api/placeholder/400/250",
      level: "Intermedio",
      duration: "4 meses",
      students: "20 estudiantes",
      schedule: "Mar-Jue 6:30 PM",
      price: "$250/mes",
      rating: 4.9,
      features: ["Conversación fluida", "Gramática avanzada", "Comprensión auditiva", "Expresión oral"],
      popular: true
    },
    {
      id: 3,
      title: "Inglés Avanzado - Profesional",
      description: "Domina el inglés para el ámbito profesional. Presentaciones, reuniones, negociaciones y más.",
      image: "/api/placeholder/400/250",
      level: "Avanzado",
      duration: "6 meses",
      students: "15 estudiantes",
      schedule: "Sáb 9:00 AM",
      price: "$300/mes",
      rating: 4.7,
      features: ["Inglés de negocios", "Presentaciones", "Negociaciones", "Comunicación ejecutiva"],
      popular: false
    },
    {
      id: 4,
      title: "Preparación TOEFL Intensivo",
      description: "Curso intensivo para aprobar el TOEFL con la puntuación que necesitas. Incluye simulacros y estrategias.",
      image: "/api/placeholder/400/250",
      level: "Intermedio-Avanzado",
      duration: "2 meses",
      students: "12 estudiantes",
      schedule: "Lun-Vie 8:00 AM",
      price: "$400/mes",
      rating: 4.9,
      features: ["Simulacros reales", "Estrategias específicas", "Writing correction", "Speaking practice"],
      popular: false
    },
    {
      id: 5,
      title: "Preparación IELTS",
      description: "Prepárate para el IELTS Academic y General. Curso completo con práctica intensiva de las 4 habilidades.",
      image: "/api/placeholder/400/250",
      level: "Intermedio-Avanzado",
      duration: "3 meses",
      students: "15 estudiantes",
      schedule: "Mar-Jue-Sáb 10:00 AM",
      price: "$350/mes",
      rating: 4.8,
      features: ["IELTS Academic", "IELTS General", "Band 7+ strategies", "Mock tests"],
      popular: false
    },
    {
      id: 6,
      title: "Inglés para Niños (8-12 años)",
      description: "Curso dinámico y divertido para niños. Aprenden jugando con actividades interactivas y materiales coloridos.",
      image: "/api/placeholder/400/250",
      level: "Principiante",
      duration: "6 meses",
      students: "10 estudiantes",
      schedule: "Sáb 2:00 PM",
      price: "$150/mes",
      rating: 4.9,
      features: ["Aprendizaje lúdico", "Actividades interactivas", "Materiales didácticos", "Pequeños grupos"],
      popular: false
    }
  ]

  const scheduleOptions = [
    {
      time: "Mañana",
      hours: "8:00 AM - 12:00 PM",
      description: "Ideal para estudiantes y profesionales con horarios flexibles"
    },
    {
      time: "Tarde",
      hours: "2:00 PM - 6:00 PM",
      description: "Perfecto para trabajadores de horario matutino"
    },
    {
      time: "Noche",
      hours: "6:00 PM - 10:00 PM",
      description: "Diseñado para profesionales que trabajan durante el día"
    },
    {
      time: "Sábados",
      hours: "9:00 AM - 1:00 PM",
      description: "Intensivo de fin de semana para máximo aprovechamiento"
    }
  ]

  return (
    <div className="courses">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Nuestros Cursos</h1>
            <p>
              Descubre el curso perfecto para tu nivel y objetivos. 
              Desde principiantes hasta preparación para exámenes internacionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Explora Nuestros Cursos</h2>
            <p>Cada curso está diseñado para llevarte al siguiente nivel</p>
          </motion.div>
          
          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                className={`course-card ${course.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {course.popular && <div className="popular-badge">Más Popular</div>}
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-level">{course.level}</div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-info">
                    <div className="info-item">
                      <FaClock className="info-icon" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <FaUsers className="info-icon" />
                      <span>{course.students}</span>
                    </div>
                    <div className="info-item">
                      <FaCalendarAlt className="info-icon" />
                      <span>{course.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="course-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(course.rating) ? 'star-filled' : 'star-empty'} />
                      ))}
                    </div>
                    <span className="rating-text">{course.rating} ({Math.floor(Math.random() * 50) + 20} reseñas)</span>
                  </div>
                  
                  <div className="course-features">
                    <h4>Incluye:</h4>
                    <ul>
                      {course.features.map((feature, i) => (
                        <li key={i}>
                          <FaCheck className="check-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="course-footer">
                    <div className="course-price">{course.price}</div>
                    <Link to="/contact" className="btn btn-primary">
                      Inscribirse <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Horarios Flexibles</h2>
            <p>Encuentra el horario que mejor se adapte a tu estilo de vida</p>
          </motion.div>
          
          <div className="schedule-grid">
            {scheduleOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="schedule-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{option.time}</h3>
                <div className="schedule-hours">{option.hours}</div>
                <p>{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div 
            className="benefits-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="benefits-text">
              <h2>¿Por qué elegir nuestros cursos?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <div>
                    <h4>Metodología Probada</h4>
                    <p>Más de 15 años perfeccionando nuestros métodos de enseñanza</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <div>
                    <h4>Profesores Nativos</h4>
                    <p>Instructores certificados con inglés como lengua materna</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <div>
                    <h4>Grupos Reducidos</h4>
                    <p>Máximo 15 estudiantes por clase para atención personalizada</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <div>
                    <h4>Material Incluido</h4>
                    <p>Libros, audios y acceso a plataforma digital sin costo extra</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <div>
                    <h4>Certificación</h4>
                    <p>Certificado oficial al completar cada nivel exitosamente</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-image">
              <img src="/api/placeholder/500/400" alt="Beneficios de nuestros cursos" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>¿Listo para comenzar tu transformación?</h2>
            <p>Reserva tu lugar en el curso que más te interese y comienza a dominar el inglés</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Reservar Lugar <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Conocer Más
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Courses
