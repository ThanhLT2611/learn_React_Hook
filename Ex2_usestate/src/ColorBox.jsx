import { useState } from "react";


function ColorBox() {
    const [color, setColor] = useState('red');

    function click(){
        setColor('blue');
    }
    return (
      <div className="color-box"
            style={{backgroundColor : color}}
            onClick = {click}
      >
        alo alo alo
      </div>
    );
  }
  
  export default ColorBox;
