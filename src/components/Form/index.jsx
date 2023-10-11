import './Form.css'
import Input from '../Input'
import { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'
import confetti from 'canvas-confetti'

function Form () {
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

  return (
    <form className='form' onSubmit={handleSubmit} ref={reference}>
      <Input
        label='Nombre'
        placeholder='Ingrese su nombre'
        data={name}
        setData={setName}
        name='contact_nombre'
        isInput
      />
      <Input
        label='Email'
        placeholder='Ingrese su email'
        data={email}
        setData={setEmail}
        name='contact_email'
        isInput
      />
      <Input
        label='Mensaje'
        placeholder='Ingrese su mensaje'
        data={message}
        setData={setMessage}
        name='contact_mensaje'
      />
      <div className='form-button-container'>
        <button type='submit' className='button secundary-button form-button'>
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Form
