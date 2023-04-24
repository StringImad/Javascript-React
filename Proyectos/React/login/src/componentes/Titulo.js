import React, { Component } from 'react';

class Titulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Titulo prueba"
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
      </div>
    );
  }
}
export default Titulo;