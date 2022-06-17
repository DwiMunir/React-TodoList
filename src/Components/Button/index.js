import React from 'react'

function Button({
  id,
  title,
  onClick,
  className = ''
}) {
  const style = id === 'submit'
    ? 'btn-primary'
    : id === 'delete'
      ? 'btn-danger'
      : 'btn-warning'
  return (
    <button 
      className={`btn btn-sm ${style} ${className}`}
      onClick={onClick}
    >
        {title}
    </button>
  )
}

export default Button