
import React from 'react';

// import './custom-buttom.styles.scss';
import "./custom-button.style.scss"

const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;