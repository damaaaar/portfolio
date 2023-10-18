import './Label.css'
import { hardSkills, softSkills } from '../../constantes/skills'

function Label ({ skill }) {
  if (skill === 'hard') {
    return (
      hardSkills.map((skill, index) => {
        return (
          <label key={index} className='label'>{skill}</label>
        )
      })
    )
  } else {
    return (
      softSkills.map((skill, index) => {
        return (
          <label key={index} className='label'>{skill}</label>
        )
      })
    )
  }
}

export default Label
