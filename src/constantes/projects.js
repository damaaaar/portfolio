import totito from '../assets/images/totito.webp'
import rick from '../assets/images/rick.webp'

export const PROJECTS_INFO = [
  {
    id: 0,
    title: 'Tic-tac-toe',
    image: totito,
    description: 'El clásico juego de tres en raya hecho con react y usando el almacenamiento local del navegador para guardar los puntajes del juego con persistencia de datos.',
    linkLive: 'https://tres-en-raya-damar.vercel.app/',
    linkCode: 'https://github.com/damaaaar/tres-en-raya'
  },
  {
    id: 1,
    title: 'Rick and Morty characters',
    image: rick,
    description: 'Se trata de un generador de personajes de la serie Rick y Morty. Proyecto con el cual se demuestra el consumo de una API.',
    linkLive: 'https://rick-morty-characters-damar.vercel.app/',
    linkCode: 'https://github.com/damaaaar/rick-morty-characters'
  }
]
