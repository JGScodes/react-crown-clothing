import React from 'react';
import './menu-item-style.scss';

// destructuring props.title
const MenuItem = ({ title , imageUrl , size}) => {
  return (
  <div className={`${size} menu-item`}>
   <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="content">
      {/* destructuring props.title */}
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
  )
}

export default MenuItem;
