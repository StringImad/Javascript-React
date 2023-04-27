import { Component, useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MapaBotones = (props) => {
    let lista = [];

    for (let i = 0; i < props.listaBotones.length; i++) {
        let lista2 = [];

        for (let j = 0; j < props.listaBotones[i].length; j++) {
            lista2.push(
                <Button
                    key={i * 10 + j}
                    color={props.listaBotones[i][j].color}
                    onClick={() => {
                        props.clica(i, j);
                    }}
                    disabled={props.listaBotones[i][j].disabled}
                    outline={!props.listaBotones[i][j].pulsado}
                />
            );
        }

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
            listaColores: ["primary", "danger"],
            colorActivo: "primary",
            turno: 0,
        };

        this.carga();
    }

    carga() {
        let l = this.state.listaBotones;

        for (let i = 0; i < l.length; i++) {
            let aux = [];

            for (let j = 0; j < l.length; j++) {
                aux.push({ color: "info", pulsado: false });
            }
            l[i] = aux;
        }

        this.setState({ listaBotones: l });
    }
    comprobarHorizontal() {
        const l = this.state.listaBotones;
        for (let i = 0; i < l.length; i++) {
          for (let j = 0; j < l.length - 3; j++) {
            if (l[i][j].pulsado && l[i][j].color === l[i][j + 1].color && l[i][j + 1].color === l[i][j + 2].color && l[i][j + 2].color === l[i][j + 3].color) {
                let ganador = "azul";
                if(l[i][j].color=="Danger"){
                    ganador = "Rojo";
                }
                alert(`Cuatro botones del color ${l[i][j].color} consecutivos horizontalmente`);
              return true;
            }
          }
        }
        return false;
      }
    
      comprobarVertical() {
        const l = this.state.listaBotones;
        for (let i = 0; i < l.length - 3; i++) {
          for (let j = 0; j < l.length; j++) {
            if (l[i][j].pulsado && l[i][j].color === l[i + 1][j].color && l[i + 1][j].color === l[i + 2][j].color && l[i + 2][j].color === l[i + 3][j].color) {
                let ganador = "azul";
                if(l[i][j].color=="Danger"){
                    ganador = "Rojo";
                }
              alert(`Cuatro fichas del jugador: ${ganador} consecutivas verticalmente`);
              return true;
            }
          }
        }
        return false;
      }
    
    clica(i, j) {
        const l = this.state.listaBotones.slice();
        const colorSiguiente = this.state.colorActivo === 'primary' ? 'danger' : 'primary';
    
        let posLibre = null;
        for (let k = l.length - 1; k >= 0; k--) {
          if (!l[k][j].pulsado) {
            posLibre = k;
            break;
          }
        }
    
        if (posLibre !== null) {
          l[posLibre][j].pulsado = true;
          l[posLibre][j].color = this.state.colorActivo;
        }
    
        this.setState({
          listaBotones: l,
          colorActivo: colorSiguiente,
        });
    
        if (this.comprobarHorizontal() || this.comprobarVertical()) {
          this.carga();
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