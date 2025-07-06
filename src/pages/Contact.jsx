import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irían la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Dirección",
      info: "123 Calle Principal, Ciudad, País CP 12345"
    },
    {
      icon: <FaPhone />,
      title: "Teléfono",
      info: "+1 (555) 123-4567"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "info@mecoaching.com"
    },
    {
      icon: <FaClock />,
      title: "Horarios",
      info: "Lun-Vie: 8:00 AM - 10:00 PM\nSáb: 9:00 AM - 6:00 PM"
    }
  ]

  const officeHours = [
    { day: "Lunes - Viernes", hours: "8:00 AM - 10:00 PM" },
    { day: "Sábados", hours: "9:00 AM - 6:00 PM" },
    { day: "Domingos", hours: "Cerrado" }
  ]

  const faqs = [
    {
      question: "¿Cuánto tiempo toma completar un curso?",
      answer: "Los cursos varían de 2 a 6 meses dependiendo del nivel y la intensidad. Ofrecemos opciones flexibles para adaptarse a tu horario."
    },
    {
      question: "¿Ofrecen clases de prueba gratuitas?",
      answer: "Sí, ofrecemos una clase de prueba gratuita y una evaluación inicial para determinar tu nivel actual."
    },
    {
      question: "¿Qué certificaciones obtengo al completar un curso?",
      answer: "Al completar exitosamente un curso, recibes un certificado oficial de MECoaching reconocido internacionalmente."
    },
    {
      question: "¿Puedo cambiar de horario durante el curso?",
      answer: "Sí, entendemos que las circunstancias pueden cambiar. Ofrecemos flexibilidad para cambiar horarios según disponibilidad."
    }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contáctanos</h1>
            <p>
              Estamos aquí para ayudarte a comenzar tu viaje hacia el dominio del inglés. 
              Ponte en contacto con nosotros para más información.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Servicio de Interés</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="clases-particulares">Clases Particulares</option>
                      <option value="cursos-grupales">Cursos Grupales</option>
                      <option value="ingles-empresarial">Inglés Empresarial</option>
                      <option value="toefl">Preparación TOEFL</option>
                      <option value="ielts">Preparación IELTS</option>
                      <option value="coaching-conversacional">Coaching Conversacional</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Cuéntanos sobre tus objetivos y cómo podemos ayudarte..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Información de Contacto</h2>
              <div className="contact-info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-content">
                      <h3>{item.title}</h3>
                      <p>{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="office-hours">
                <h3>Horarios de Atención</h3>
                <div className="hours-list">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="social-links">
                <h3>Síguenos</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook"><FaFacebook /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div 
            className="map-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Nuestra Ubicación</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093664!2d-122.41941578467871!3d37.77492927975899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094110%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación MECoaching"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Preguntas Frecuentes</h2>
            <p>Respuestas a las dudas más comunes sobre nuestros servicios</p>
          </motion.div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
