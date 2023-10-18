import './About.css'
import Title from '../Title'
import SubTitle from '../SubTitle'
import Description from '../Description'
import Button from '../Button'
import Label from '../Label'

function About () {
  return (
    <section className='about' id='about'>
      <div className='about-content'>
        <Title value='Sobre mí' />
        <Description value='A continuación, encontrará más información de mi persona, sobre lo que hago, lo que quiero hacer y lo que sé hacer, claro, tratándose del área de programación.' />
      </div>
      <div className='about-content-explicit'>
        <article className='about-content-explicit-knowMe'>
          <SubTitle value='Conóceme' />
          <p className='about-info'>
            Soy un programador{' '}
            <span className='about-info-span'>web frontend</span>, futuro
            fullstack, muy consciente de la importancia y el impacto que tiene
            la web hoy en día, por eso mismo creo que los servicios que van a
            ser ofrecidos por este medio tienen que ser lo suficientemente
            buenos como para que las personas quieran volver.
          </p>
          <p className='about-info'>
            Antes de interesarme por la programación, el ochenta por ciento de
            mi tiempo lo pasaba en internet y mi experiencia con los diferentes
            sitios que visitaba siempre fue muy variada, desde páginas que
            funcionaban muy mal, hasta algunas que me dejaban perplejo por lo
            bien que funcionaban y lo mucho que podía hacer en ellas.
          </p>
          <p className='about-info'>
            Es por eso que ahora quiero colaborar con crear buenas experiencias,
            y hacer que las personas queden fascinadas con el trabajo que puedo
            hacer.{' '}
            <span className='about-info-span'>
              Si quieres que forme parte de tu equipo
            </span>
            , estaré más que encantado, no dudes en contactarme
          </p>
          <Button
            address='#contact'
            local
            value='Contacto'
            styles='button secundary-button'
          />
        </article>
        <article className='about-content-explicit-technologies'>
          <SubTitle value='Habilidades técnicas' />
          <div className='about-labels'>
            <Label skill='hard' />
          </div>
          <SubTitle value='Habilidades blandas' />
          <div className='about-labels'>
            <Label skill='soft' />
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
