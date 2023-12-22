import './Input.css'

function Input (props) {
  const { label, placeholder, data, setData, name, isInput } = props

  const handleInput = (e) => {
    setData(e.target.value)
  }

  if (isInput) {
    return (
      <label className='form-label'>
        {label}
        <input
          className='form-input'
          type='text'
          name={name}
          placeholder={placeholder}
          value={data}
          onChange={handleInput}
          required
        />
      </label>
    )
  } else {
    return (
      <label className='form-label'>
        {label}
        <textarea
          className='form-input'
          cols='30'
          rows='10'
          placeholder={placeholder}
          value={data}
          name={name}
          onChange={handleInput}
          required
        />
      </label>
    )
  }
}

export default Input
