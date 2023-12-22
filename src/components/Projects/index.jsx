import './Projects.css'
import Title from '../Title'
import Description from '../Description'
import Project from '../Project'
import { PROJECTS_INFO } from '../../constantes/projects'

function Projects () {
  return (
    <section className='projects' id='projects'>
      <div className='projects-content'>
        <Title>
          Proyectos
        </Title>
        <Description>
          En esta sección podrán apreciar algunos de los proyectos que he realizado. Esta sección cambiará constantemente ya que tengo más proyectos en mente.
        </Description>
      </div>
      <Project PROJECTS_INFO={PROJECTS_INFO} />
    </section>
  )
}

export default Projects
