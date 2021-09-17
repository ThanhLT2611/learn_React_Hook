import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';
ColorBox.propTypes = {
  
};

function ColorBox() {

 
  const [color,setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'green';
    console.log(initColor);
    return initColor;
  }
  );

  function handleBoxClick(){
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem('box-color',newColor);
  }

  function getRandomColor(){
    const COLOR_LIST = ['pink','yellow','lightblue','orange','cyan'];
    const randomIndex = Math.trunc(Math.random()*5);
    return COLOR_LIST[randomIndex];
  }

  return (
    <div 
    className="color-box" 
    style={{backgroundColor:color}}
    onClick={handleBoxClick}
    >
    </div>
  );
}

export default ColorBox;