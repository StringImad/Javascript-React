import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaFarmacos from './components/ListaFarmacos';
import ListaFarmacos2 from './components/ListaFarmacos2';

import { FARMACOS } from './shared/datos';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lista_incluidos: [],
      lista_excluidos: [],
      isOpen: false,
      farmacos: FARMACOS,
      farmacos2: FARMACOS

    }
  }

  insertar_incluidos(medicamento) {

    let copia = this.state.lista_incluidos
    copia.push(medicamento);
    this.setState({ lista_incluidos: copia })
  }

  insertar_excluidos(medicamento) {

    let copia = this.state.lista_excluidos
    copia.push(medicamento);
    this.setState({ lista_excluidos: copia })
  }

  limpiar_incluidos() {

    let vacia = [];
    this.setState({ lista_incluidos: vacia })
  }

  limpiar_excluidos() {

    let vacia = [];
    this.setState({ lista_excluidos: vacia })
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
  }


  render() {

    return (
      <div className="App">
        <ListaFarmacos insertar={(medicamento) => this.insertar_incluidos(medicamento)} farmacos={this.state.farmacos.filter(f => !this.state.lista_excluidos.includes(f))} isOpen={this.state.isOpen} toggleModal={() => this.toggleModal()} lista={this.state.lista_incluidos} titulo={"Incluir X medicamentos"} limpiar={() => this.limpiar_incluidos()} />
        {/* <ListaFarmacos2 insertar={(medicamento) => this.insertar_incluidos(medicamento)} farmacos={this.state.farmacos.filter(f => !this.state.lista_excluidos.includes(f))} isOpen={this.state.isOpen} toggleModal={() => this.toggleModal()} lista={this.state.lista_incluidos} titulo={"Excluir X medicamentos"} limpiar={() => this.limpiar_incluidos()} /> */}

        <ListaFarmacos2 insertar={(medicamento) => this.insertar_excluidos(medicamento)} farmacos={this.state.farmacos.filter(f => !this.state.lista_incluidos.includes(f))} isOpen={this.state.isOpen} toggleModal={() => this.toggleModal()} lista={this.state.lista_excluidos} titulo={"Excluir X medicamentos"} limpiar={() => this.limpiar_excluidos()} />

      </div>
    );

  }

}

export default App;
