import React from 'react';

function Tres(props) {
  const handleInputChange = (event) => {
    props.cambiarTitulo(event.target.value);
  };

  return (
    <div>
      <h2>Tres</h2>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default Tres;