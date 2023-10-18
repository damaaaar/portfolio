import './Header.css'
import Sections from '../Sections'
import { useMenuControl } from '../../hooks/useMenuControl'

function Header () {
  const { handleClick, icon, visibility } = useMenuControl()

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
