import React from 'react';


function Dos(props) {
  const handleInputChange = (event) => {
    props.cambiarTitulo(event.target.value);
  };

  return (
    <div>
      <h2>Dos</h2>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}


export default Dos;