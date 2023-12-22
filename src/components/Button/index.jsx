import './Button.css'

function Button (props) {
  const { address, local, value, styles } = props

  if (local) {
    return (
      <a href={address} className={styles}>
        {value}
      </a>
    )
  } else {
    return (
      <a
        href={address}
        target='_blank'
        rel='noreferrer'
        className={styles}
      >
        {value}
      </a>
    )
  }
}

export default Button
