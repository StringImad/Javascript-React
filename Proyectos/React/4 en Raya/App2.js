import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MapaBotones = (props) => {
  let lista = [];
  // Recorremos la lista de botones y creamos una lista auxiliar para almacenar cada fila de botones
  for (let i = 0; i < props.listaBotones.length; i++) {
    let lista2 = [];

    for (let j = 0; j < props.listaBotones.length; j++) {
      lista2.push(
        <Button
          key={i * 10 + j}
          color={props.listaBotones[i][j].color}
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
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaBotones: Array(9).fill().map(() => Array(9).fill({ color: "outline", pulsado: false })),
      /*aquí almaceno los colores de los botones*/
      listaColores: ["primary", "danger"],
      // tendrás que añadir más atributos al state como el turno...
    }
    this.componentWillMount();
  }

  componentWillMount() {
    // Utilízalo si necesitas hacer algo antes de renderizar
    let l = this.state.listaBotones;
    //creamos una lista auxiliar para almacenar cada fila de botones
    for (let i = 0; i < l.length; i++) {
      let aux = [];
      // Recorremos la lista de botones de la fila actual y creamos un botón por cada elemento
      for (let j = 0; j < l.length; j++) {
        aux.push({ color: "outline", pulsado: false });
      }
      l[i] = aux;
    }

    this.setState({ listaBotones: l });
  }
  render() {
    return (
      <div className="App">
        <MapaBotones
          listaBotones={this.state.listaBotones}
        />            </div>
    );
  }
}
export default App;