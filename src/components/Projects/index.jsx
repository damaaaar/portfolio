import './Projects.css'
import Title from '../Title'
import Description from '../Description'
import Project from '../Project'
import { PROJECTS_INFO } from '../../constantes/projects'

function Projects () {
  return (
    <section className='projects' id='projects'>
      <div className='projects-content'>
        <Title value='Proyectos' />
        <Description value='En esta sección podrán apreciar algunos de los proyectos que he realizado. Esta sección cambiará constantemente ya que tengo más proyectos en mente.' />
      </div>
      <Project PROJECTS_INFO={PROJECTS_INFO} />
    </section>
  )
}

export default Projects
