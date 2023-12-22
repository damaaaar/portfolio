import './Footer.css'
import linkedin from '../../assets/icons/linkedin-blanco.svg'
import github from '../../assets/icons/github-blanco.svg'
import twitter from '../../assets/icons/twitter-blanco.svg'
import instagram from '../../assets/icons/instagram-blanco.svg'

import { socials } from '../../constantes/socials'

function Footer () {
  const icons = [linkedin, github, twitter, instagram]

  return (
    <footer className='footer'>
      <section className='footer-up'>
        <div className='footer-up-div-description'>
          <h4 className='footer-up-title'>Daniel Martínez</h4>
          <p className='footer-up-description'>
            Desarrollador web comprometido a brindar la mejor experiencia de
            usuario que sea posible.
          </p>
        </div>
        <div className='footer-up-div-socials'>
          <h4 className='footer-up-title'>Redes sociales</h4>
          <ul className='footer-up-socials'>
            {socials.map((social, index) => {
              return (
                <li key={index}>
                  <a
                    className='footer-up-social'
                    href={social}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img alt='icono de red social' src={icons[index]} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <section className='footer-down'>
        <p className='footer-down-description'>
          Hecho por{' '}
          <a href='./' className='footer-down-description-link'>
            Daniel Martínez{' '}
          </a>
          2023.
        </p>
      </section>
    </footer>
  )
}

export default Footer
