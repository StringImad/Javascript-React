import React, { Component } from 'react';

class Uno extends Component {
    constructor(props) {
        super(props);
    }

   

    render() {
        return (
            <div>
                <button onClick={() => this.props.cambiarTitulo("Nuevo Título")}>Cambiar Título</button>       </div>
        );
    }
}

export default Uno;
