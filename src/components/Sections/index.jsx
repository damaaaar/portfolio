import './Sections.css'
import { sections, names } from '../../constantes/sections'

function Sections (props) {
  const { ulClass, aClass, liClass, goSection } = props

  return (
    <ul className={ulClass}>
      {sections.map((section, index) => {
        return (
          <li key={index} className={liClass}>
            <a href={section} className={aClass} onClick={goSection}>
              {names[index]}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Sections
