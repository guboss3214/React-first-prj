import './button.css'

const Button = ({text, type = "button", num, disabled = false}) => {
  const handleClick = () => {
    alert(`You clicked button № ${num}`)
  }
  return(
    <div>
        <h2>Button {num} {disabled ? 'disabled': 'enabled'}</h2>
        <button type={type} disabled={disabled} onClick={handleClick} className='btn'>{text}</button>
    </div>
  ) 
}

export default Button