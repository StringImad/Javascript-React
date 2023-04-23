import "./App.css";
import { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// recibe una lista de botones y los renderiza en pantalla
const ListaBotones = (props) => {
  let lista = [];
  // Recorremos la lista de botones y creamos una lista auxiliar para almacenar cada fila de botones
  for (let i = 0; i < props.listaBotones.length; i++) {
    let lista2 = [];

    for (let j = 0; j < props.listaBotones.length; j++) {
      lista2.push(
        <Button
          key={i * 10 + j}
          color={props.listaBotones[i][j].color}
          onClick={() => props.accionClicar(i, j)}
          disabled={props.listaBotones[i][j].disabled}
        />
      );
    }
    // agregamos la lista de botones de la fila actual a la lista principal
    lista.push(
      <>
        {lista2}
        <br />
      </>
    );
  }
  return <>{lista}</>;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "secondary", "success", "warning", "danger"],
      colorActivo: "primary",
    };

    this.carga();
  }
  // Carga la lista de botones con valores por defecto
  carga() {
    let l = this.state.listaBotones;
    //creamos una lista auxiliar para almacenar cada fila de botones
    for (let i = 0; i < l.length; i++) {
      let aux = [];
      // Recorremos la lista de botones de la fila actual y creamos un botón por cada elemento
      for (let j = 0; j < l.length; j++) {
        aux.push({ color: "info", pulsado: false });
      }
      l[i] = aux;
    }

    this.setState({ listaBotones: l });
  }

  accionClicar(i, j) {
    let l = this.state.listaBotones;
    // Si el botón no está pulsado lo pulsamos
    if (!l[i][j].pulsado) {
      l[i][j].pulsado = true;
      // Si alguno de los botones adyacentes está pulsado, cambiamos el color del botón actual
      if (
        (i > 0 && l[i - 1][j].pulsado) ||
        (i < l.length - 1 && l[i + 1][j].pulsado) ||
        (j > 0 && l[i][j - 1].pulsado) ||
        (j < l.length - 1 && l[i][j + 1].pulsado)
      ) {
        l[i][j].color = this.state.colorActivo;
      } else {
        // Si no hay ningún botón adyacente pulsado, cambiamos el color del botón actual de forma aleatoria
        l[i][j].color =
          this.state.listaColores[
            Math.floor(Math.random() * this.state.listaColores.length)
          ]; // Coloreamos aleatoriamente
        this.setState({ colorActivo: l[i][j].color });
      }
    } else {
      l[i][j].pulsado = false;
      l[i][j].color = "info";
    }

    this.setState({ listaBotones: l });
  }

  render() {
    return (
      <>
        <ListaBotones
          listaBotones={this.state.listaBotones}
          accionClicar={(i, j) => this.accionClicar(i, j)}
        />
      </>
    );
  }
}

export default App;
