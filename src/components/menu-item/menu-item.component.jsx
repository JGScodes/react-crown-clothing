import React from 'react';
import './menu-item-style.scss';

// destructuring props.title
const MenuItem = ({ title , imageUrl , size}) => {
  return (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}className={`${size} menu-item`}>
    <div className="content">
      {/* destructuring props.title */}
      <h1 className="title">{ title }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
  )
}

export default MenuItem;
