import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaGlobe, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img className='logo-img' src="../../public/img/logo-mec.png" alt="MECoaching Logo" />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
            <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Cursos</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
            <li><Link to="/campus-virtual" onClick={() => setIsMenuOpen(false)}>Campus Virtual</Link></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header
