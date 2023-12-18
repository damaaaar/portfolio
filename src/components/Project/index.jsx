import './Project.css'
import SubTitle from '../SubTitle'
import Button from '../Button'

function Project ({ PROJECTS_INFO }) {
  return (
    <>
      {
        PROJECTS_INFO.map(project => {
          return (
            <details key={project.id} className='projects-details' name='project'>
              <summary className='projects-summary'>{project.title}</summary>
              <article className='projects-project'>
                <figure className='project-figure'>
                  <img src={project.image} alt={`${project.title} ilustration`} />
                </figure>
                <aside className='project-content'>
                  <SubTitle value={project.title} />
                  <p className='project-description'>
                    {project.description}
                  </p>
                  <footer className='project-footer'>
                    <Button address={project.linkLive} value='Live' styles='button project-button' />
                    <Button address={project.linkCode} value='Code' styles='button project-button' />
                  </footer>
                </aside>
              </article>
            </details>
          )
        })
      }
    </>
  )
}

export default Project
