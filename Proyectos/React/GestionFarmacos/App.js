import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaFarmacos from "./components/ListaFarmacos";
import ListaFarmacos2 from "./components/ListaFarmacos2";

import { FARMACOS } from "./assets/datos";

class App extends Component {
  constructor(props) {
    super(props);
    // Estado inicial del componente
    this.state = {
      lista_incluidos: [], // Lista de medicamentos incluidos
      lista_excluidos: [], // Lista de medicamentos excluidos
      isOpen: false, // Estado del modal
      farmacos: FARMACOS, // Lista de todos los medicamentos
    };
  }

  // Función para insertar medicamentos en la lista de incluidos
  insertar_incluidos(medicamento, areaTexto) {
    console.log(this.state[areaTexto].slice());

    let copia = this.state[areaTexto].slice();
    // Comprueba si el medicamento ya está en la lista
    if (!copia.includes(medicamento)) {
      copia.push(medicamento); // Añade el medicamento a la lista
    }
    this.setState({ [areaTexto]: copia }); // Actualiza el estado
  }

  // Función para insertar medicamentos en la lista de excluidos
  insertar_excluidos(medicamento, areaTexto) {
    console.log(this.state[areaTexto].slice());

    let copia = this.state[areaTexto].slice();
    // Comprueba si el medicamento ya está en la lista
    if (!copia.includes(medicamento)) {
      copia.push(medicamento); // Añade el medicamento a la lista
    }
    this.setState({ [areaTexto]: copia }); // Actualiza el estado
  }

  // Función para limpiar la lista de medicamentos incluidos
  limpiar_incluidos() {
    let vacia = [];
    this.setState({ lista_incluidos: [] }); // Actualiza el estado
  }

  // Función para limpiar la lista de medicamentos excluidos
  limpiar_excluidos() {
    let vacia = [];
    this.setState({ lista_excluidos: [] }); // Actualiza el estado
  }

  // Función para alternar el estado del modal
  toggleModal(areaTexto) {
    if (areaTexto === "lista_incluidos") {
      this.setState((prevState) => ({
        isOpenIncluidos: !prevState.isOpenIncluidos,
      }));
    } else if (areaTexto === "lista_excluidos") {
      this.setState((prevState) => ({
        isOpenExcluidos: !prevState.isOpenExcluidos,
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <ListaFarmacos
          insertar={(medicamento) =>
            this.insertar_incluidos(medicamento, "lista_incluidos")
          }
          farmacos={this.state.farmacos.filter(
            (f) => !this.state.lista_incluidos.includes(f)
          )}
          isOpen={this.state.isOpenIncluidos}
          toggleModal={() => this.toggleModal("lista_incluidos")}
          lista={this.state.lista_incluidos}
          limpiar={() => this.limpiar_incluidos()}
        />

        <ListaFarmacos2
          insertar={(medicamento) =>
            this.insertar_excluidos(medicamento, "lista_excluidos")
          }
          farmacos={this.state.farmacos.filter(
            (f) => !this.state.lista_excluidos.includes(f)
          )}
          isOpen={this.state.isOpenExcluidos}
          toggleModal={() => this.toggleModal("lista_excluidos")}
          lista={this.state.lista_excluidos}
          limpiar={() => this.limpiar_excluidos()}
        />
      </div>
    );
  }
}
export default App;
