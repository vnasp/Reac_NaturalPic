
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-success bg-gradient p-4 text-white d-flex flex-row justify-content-between">
      <p>© {currentYear} Todos los derechos reservados</p>
        <p>
          Sitio creado con <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> ReactJS</a> y <a href="https://getbootstrap..com/" target="_blank" rel="noopener noreferrer"
          >Bootstrap</a>
        </p>
    </footer>
  )
}

export default Footer