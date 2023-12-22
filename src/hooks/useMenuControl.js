import { useState } from 'react'
import menu from '../assets/icons/menu.svg'
import x from '../assets/icons/x.svg'

export function useMenuControl () {
  const [icon, setIcon] = useState(menu)
  const [visibility, setVisibility] = useState('hidden-nav-hidden')

  const handleClick = () => {
    icon === menu ? setIcon(x) : setIcon(menu)
    visibility === 'hidden-nav-hidden'
      ? setVisibility('hidden-nav-show')
      : setVisibility('hidden-nav-hidden')
  }

  return { handleClick, icon, visibility }
}
