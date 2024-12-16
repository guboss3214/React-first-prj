const Button = ({text, type, num, disabled}) => {
  return(
    <div>
        <h2>Button {num} {disabled ? 'disabled': 'enabled'}</h2>
        <button type={type} disabled={disabled}>{text}</button>
    </div>
  ) 
}

export default Button