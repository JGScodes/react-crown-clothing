import React from 'react'

import './custom-button.styles.scss';

// onSubmit is being passed here
const CustomButton = ({ children, ...otherProps}) => {
  return <button className="custom-button"{...otherProps}>
    { children }
  </button>
}

export default CustomButton;
