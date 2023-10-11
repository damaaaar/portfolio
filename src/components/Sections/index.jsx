import './Sections.css'

function Sections (props) {
  const { ulClass, aClass, liClass, goSection } = props

  return (
    <ul className={ulClass}>
      <li className={liClass}>
        <a href='#home' className={aClass} onClick={goSection}>
          Inicio
        </a>
      </li>
      <li className={liClass}>
        <a href='#about' className={aClass} onClick={goSection}>
          Sobre mí
        </a>
      </li>
      <li className={liClass}>
        <a href='#projects' className={aClass} onClick={goSection}>
          Proyectos
        </a>
      </li>
      <li className={liClass}>
        <a href='#contact' className={aClass} onClick={goSection}>
          Contacto
        </a>
      </li>
    </ul>
  )
}

export default Sections
