import './ErrorPage.css'

function ErrorPage () {
  return (
    <section className='errorPage'>
      <h2 className='errorPage-title'>¡Rayos!</h2>
      <p className='errorPage-content'>La página a la que quieres acceder no existe, ya sabes, <span>404</span> y eso...</p>
      <small className='errorPage-small'>Revise que la dirección URL sea correcta</small>
    </section>
  )
}

export default ErrorPage
