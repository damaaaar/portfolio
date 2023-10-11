import './Home.css'
import Button from '../Button'
import Aside from '../Aside'

function Home () {
  return (
    <section className='home' id='home'>
      <Aside />
      <div className='home-content'>
        <h2 className='home-title'>Hola, soy Daniel Martínez</h2>
        <p className='home-description'>
          El desarrollador web <span className='home-span'>Front-end</span> que
          necesitas en tu equipo.
        </p>
        <Button
          address='#projects'
          local
          value='Proyectos'
          styles='button primary-button'
        />
      </div>
    </section>
  )
}

export default Home
