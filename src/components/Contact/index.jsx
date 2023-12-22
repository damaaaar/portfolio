import './Contact.css'
import Title from '../Title'
import Description from '../Description'
import Form from '../Form'

function Contact () {
  return (
    <section className='contact' id='contact'>
      <div className='contact-description'>
        <Title>
          Contacta conmigo
        </Title>
        <Description>
          Si quieres contactarte conmigo, aquí te dejo un formulario para que puedas enviarme tus propuestas, estaré en contacto tan pronto como me sea posible.
        </Description>
      </div>
      <Form />
    </section>
  )
}

export default Contact
