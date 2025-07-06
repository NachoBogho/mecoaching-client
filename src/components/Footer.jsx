import { Link } from 'react-router-dom'
import { FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaGlobe className="logo-icon" />
              <span className="logo-text">MECoaching</span>
            </div>
            <p className="footer-description">
              Transformando vidas a través del dominio del inglés. 
              Ofrecemos cursos de inglés y coaching personalizado para 
              ayudarte a alcanzar tus metas profesionales y personales.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/services">Servicios</Link></li>
              <li><Link to="/courses">Cursos</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Servicios</h3>
            <ul className="footer-links">
              <li><a href="#">Clases Particulares</a></li>
              <li><a href="#">Cursos Grupales</a></li>
              <li><a href="#">Inglés Empresarial</a></li>
              <li><a href="#">Preparación TOEFL</a></li>
              <li><a href="#">Preparación IELTS</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Calle Principal, Ciudad, País</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@mecoaching.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 MECoaching. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
