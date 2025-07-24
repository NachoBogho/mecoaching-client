import React from 'react';
import './CampusVirtual.css';

const CampusVirtual = () => {
  return (
    <div className="campus-virtual">
      <h1>Campus Virtual del Alumno</h1>
      <div className="form-container">
        <form className="login-form">
          <h2>Iniciar Sesión</h2>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Iniciar Sesión</button>
        </form>

        <form className="register-form">
          <h2>Registrarse</h2>
          <label htmlFor="name">Nombre Completo:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email-register">Correo Electrónico:</label>
          <input type="email" id="email-register" name="email-register" required />

          <label htmlFor="password-register">Contraseña:</label>
          <input type="password" id="password-register" name="password-register" required />

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default CampusVirtual;
