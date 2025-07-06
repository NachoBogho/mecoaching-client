# MEC Coaching - Landing Page

Una landing page moderna y responsive para un instituto de inglés y coaching, construida con React y Vite.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones
- **Responsive**: Totalmente optimizada para dispositivos móviles, tablets y desktop
- **Navegación SPA**: Navegación fluida entre páginas usando React Router
- **Animaciones**: Animaciones suaves con Framer Motion
- **Formulario de Contacto**: Formulario funcional para capturar leads
- **SEO Optimizado**: Estructura semántica y optimizada para motores de búsqueda

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework de JavaScript para la interfaz de usuario
- **Vite**: Build tool rápido y moderno
- **React Router DOM**: Navegación entre páginas
- **Framer Motion**: Animaciones y transiciones suaves
- **React Icons**: Iconos modernos y vectoriales
- **CSS3**: Estilos personalizados con CSS Grid y Flexbox

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/mec-coaching.git
cd mec-coaching
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Navegación principal
│   ├── Header.css      # Estilos del header
│   ├── Footer.jsx      # Pie de página
│   └── Footer.css      # Estilos del footer
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página de inicio
│   ├── Home.css        # Estilos del home
│   ├── About.jsx       # Página sobre nosotros
│   ├── About.css       # Estilos de about
│   ├── Services.jsx    # Página de servicios
│   ├── Services.css    # Estilos de servicios
│   ├── Courses.jsx     # Página de cursos
│   ├── Courses.css     # Estilos de cursos
│   ├── Contact.jsx     # Página de contacto
│   └── Contact.css     # Estilos de contacto
├── App.jsx             # Componente principal
├── App.css             # Estilos globales
├── main.jsx            # Punto de entrada
└── index.css           # Reset y estilos base
```

## 📱 Páginas Incluidas

### 🏠 Home (Inicio)
- Hero section con call-to-action
- Características principales
- Estadísticas del instituto
- Testimonios de estudiantes
- Sección de call-to-action final

### 👥 About (Nosotros)
- Historia del instituto
- Misión y valores
- Equipo de trabajo
- Logros y certificaciones

### 🎯 Services (Servicios)
- Clases particulares
- Cursos grupales
- Inglés empresarial
- Preparación TOEFL/IELTS
- Coaching conversacional
- Metodología de enseñanza

### 📚 Courses (Cursos)
- Catálogo de cursos disponibles
- Horarios y modalidades
- Precios y beneficios
- Niveles de aprendizaje

### 📞 Contact (Contacto)
- Formulario de contacto
- Información de ubicación
- Horarios de atención
- Mapa interactivo
- Preguntas frecuentes

## 🎨 Paleta de Colores

- **Primario**: #667eea (Azul)
- **Secundario**: #764ba2 (Púrpura)
- **Acento**: #ffd700 (Dorado)
- **Éxito**: #28a745 (Verde)
- **Texto**: #333 (Gris oscuro)
- **Texto secundario**: #666 (Gris medio)

## 📋 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🌟 Características Técnicas

- **Responsive Design**: Mobile-first approach
- **Performance**: Optimizado para carga rápida
- **Accessibility**: Cumple con estándares WCAG
- **SEO**: Meta tags y estructura semántica
- **Progressive Enhancement**: Funciona sin JavaScript

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/` y estarán listos para desplegar en cualquier servidor web.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

Para más información sobre el proyecto, contacta a:
- Email: info@meccoaching.com
- Teléfono: +1 (555) 123-4567

---

Desarrollado con ❤️ para MEC Coaching Institute+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
