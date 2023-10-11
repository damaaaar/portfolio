import './Aside.css'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import pdf from '../../assets/icons/pdf.svg'
import cv from '../../assets/extras/cv.pdf'

import { socials } from '../../constantes/socials'

function Aside () {
  const icons = [linkedin, github, twitter, instagram]
  return (
    <aside className='aside'>
      {icons.map((icon, index) => {
        return (
          <a
            className='aside-social'
            href={socials[index]}
            target='_blank'
            rel='noreferrer'
            key={index}
          >
            <img src={icon} alt='icono' />
          </a>
        )
      })}
      <a
        className='aside-social'
        href={cv}
        target='_blank'
        rel='noreferrer'
      >
        <img src={pdf} alt='icono' />
      </a>
    </aside>
  )
}

export default Aside
