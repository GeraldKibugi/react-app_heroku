import PropTypes from 'prop-types'
const Button = ({color, text, onAdd}) => {
    
  return (
    <button 
        onClick = {onAdd}
        style ={{background: color}} 
        className='btn'
    >
        {text}
    </button>
    )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onAdd: PropTypes.func.isRequired
}
export default Button
