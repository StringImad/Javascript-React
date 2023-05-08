import React from 'react';


function Uno(props) {
    const handleInputChange = (event) => {
      props.cambiarTitulo(event.target.value);
    };
  
    return (
      <div>
        <h2>Uno</h2>
        <input type="text" onChange={handleInputChange} />
      </div>
    );
  }
export default Uno;