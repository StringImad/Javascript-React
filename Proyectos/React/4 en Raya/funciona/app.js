import { Component, useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente que crea un mapa de botones a partir de una lista de botones
const MapaBotones = (props) => {
  let lista = [];

  // Recorremos la lista de botones y creamos un nuevo arreglo
  // con los botones que vamos agregando
  for (let i = 0; i < props.listaBotones.length; i++) {
    let lista2 = [];

    // Recorremos la lista de botones interna
    for (let j = 0; j < props.listaBotones[i].length; j++) {
      // Creamos un botón a partir de los valores en la lista de botones
      // El key es utilizado por React para identificar elementos en una lista
      lista2.push(
        <Button
          key={i * 10 + j}
          color={props.listaBotones[i][j].color}
          onClick={() => {
            //condicion para clicar solo en la primera fila
            if (i == 0) {
              props.clica(i, j);
            }
          }}
          disabled={props.listaBotones[i][j].disabled}
          outline={!props.listaBotones[i][j].pulsado}
        />
      );
    }

    // Agregamos los botones creados a la lista
    lista.push(
      <>
        {lista2}
        <br />
      </>
    );
  }
  return <>{lista}</>;
};

// Componente principal de la aplicación
class App extends Component {
  constructor(props) {
    super(props);

    // Inicializamos el estado de la aplicación
    // con una lista de botones vacía, una lista de colores
    // y otros valores por defecto
    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "danger"],
      colorActivo: "primary",
      turno: 0,
    };

    // Llamamos la función carga para cargar el estado inicial de la aplicación
    this.carga();
  }

  // Función para cargar el estado inicial de la aplicación
  carga() {
    let l = this.state.listaBotones;

    // Creamos un nuevo arreglo de botones y lo asignamos al estado
    for (let i = 0; i < l.length; i++) {
      let aux = [];

      for (let j = 0; j < l.length; j++) {
        aux.push({ color: "info", pulsado: false });
      }
      l[i] = aux;
    }

    this.setState({ listaBotones: l });
  }

  // Función para comprobar si hay cuatro botones del mismo color consecutivos
  // horizontalmente
  comprobarHorizontal() {
    const l = this.state.listaBotones;
    for (let i = 0; i < l.length; i++) {
      for (let j = 0; j < l.length - 3; j++) {
        if (
          l[i][j].pulsado &&
          l[i][j].color === l[i][j + 1].color &&
          l[i][j + 1].color === l[i][j + 2].color &&
          l[i][j + 2].color === l[i][j + 3].color
        ) {
          let ganador = "azul";
          if (l[i][j].color == "Danger") {
            ganador = "Rojo";
          }
          alert(
            `Cuatro botones del jugador con el color ${ganador} consecutivos horizontalmente`
          );
          return true;
        }
      }
    }
    return false;
  }
  // Función para comprobar si hay cuatro botones del mismo color consecutivos
  // verticalemnet
  comprobarVertical() {
    const l = this.state.listaBotones;
    for (let i = 0; i < l.length - 3; i++) {
      for (let j = 0; j < l.length; j++) {
        if (
          l[i][j].pulsado &&
          l[i][j].color === l[i + 1][j].color &&
          l[i + 1][j].color === l[i + 2][j].color &&
          l[i + 2][j].color === l[i + 3][j].color
        ) {
          let ganador = "azul";
          if (l[i][j].color == "Danger") {
            ganador = "Rojo";
          }
          alert(
            `Cuatro fichas del jugador: ${ganador} consecutivas verticalmente`
          );
          return true;
        }
      }
    }
    return false;
  }

  clica(i, j) {
    const l = this.state.listaBotones.slice();
    //condicion ternaria
    const colorSiguiente =
      this.state.colorActivo === "primary" ? "danger" : "primary";

    let posLibre = null;
    for (let k = l.length - 1; k >= 0; k--) {
      if (!l[k][j].pulsado) {
        posLibre = k;
        break;
      }
    }

    //condición para verificar si la columna está llena
    if (posLibre !== null && !l[0][j].pulsado) {
      l[posLibre][j].pulsado = true;
      l[posLibre][j].color = this.state.colorActivo;

      this.setState({
        listaBotones: l,
        colorActivo: colorSiguiente,
      });

      if (this.comprobarHorizontal() || this.comprobarVertical()) {
        this.carga();
      }
    }
  }

  render() {
    return (
      <>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          clica={(i, j) => this.clica(i, j)}
        />
      </>
    );
  }
}

export default App;