import './Header.css'
import menu from '../../assets/icons/menu.svg'
import x from '../../assets/icons/x.svg'
import Sections from '../Sections'
import { useState } from 'react'

function Header () {
  const [icon, setIcon] = useState(menu)
  const [visibility, setVisibility] = useState('hidden-nav-hidden')

  const handleClick = () => {
    icon === menu ? setIcon(x) : setIcon(menu)
    visibility === 'hidden-nav-hidden'
      ? setVisibility('hidden-nav-show')
      : setVisibility('hidden-nav-hidden')
    console.log('hla')
  }

  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className='header-title'>Daniel Martínez</h1>
        <Sections ulClass='header-sections' aClass='header-section' />
        <figure className='header-figure' onClick={handleClick}>
          <img className='header-menu' src={icon} alt='abre/cierra menu' />
        </figure>
      </div>
      <nav className={visibility}>
        <Sections
          ulClass='hidden-sections'
          aClass='hidden-section'
          liClass='liClass'
          goSection={handleClick}
        />
      </nav>
    </header>
  )
}

export default Header
