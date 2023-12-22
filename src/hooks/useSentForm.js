import emailjs from '@emailjs/browser'
import confetti from 'canvas-confetti'
import { useRef, useState } from 'react'

export function useSentForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const reference = useRef()

  const successful = () => {
    confetti()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const SERVICE_ID = 'service_whtepw5'
    const TEMPLATE_ID = 'template_31vmvzo'
    const KEY = 'QmUmNeaP1CVNC4zVP'

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, reference.current, KEY)
      .then(() => {
        successful()
      })
      .catch(() => {
        console.error('MENSAJE NO ENVIADO')
      })

    setName('')
    setEmail('')
    setMessage('')
  }

  return { name, setName, email, setEmail, message, setMessage, reference, handleSubmit }
}
