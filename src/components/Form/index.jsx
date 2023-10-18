import './Form.css'
import Input from '../Input'
import { useSentForm } from '../../hooks/useSentForm'

function Form () {
  const { name, setName, email, setEmail, message, setMessage, reference, handleSubmit } = useSentForm()

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
