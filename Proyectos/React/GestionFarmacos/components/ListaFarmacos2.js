// import { useState } from "react";
import { Button, Input, Toast, ToastBody, ToastHeader } from "reactstrap";
import VentanaModal from "./VentanaModal";

export default function ListaFarmacos2(props) {
  //Hooks
  // const [texto] = useState("");

  const listado = () => {
    let resultado = "";
    props.lista.map((value, index) => {
      if (index === props.lista.length - 1) {
        resultado += value;
      } else {
        resultado += value + ", ";
      }
    });

    return resultado;
  };

  return (
    <div className="p-3 m-2 rounded">
      <Toast className="bg-danger">
        <ToastHeader>Excluir X medicamentos</ToastHeader>

        <ToastBody>
          <Input type="textarea" rows={5} value={listado()} />
        </ToastBody>

        <Button
          color="primary"
          onClick={() => props.toggleModal("lista_excluidos")}
        >
          Añadir
        </Button>
        <span>&nbsp;-&nbsp;</span>

        <Button color="secondary" onClick={() => props.limpiar()}>
          Limpiar
        </Button>
      </Toast>
      <VentanaModal
        insertar={(medicamento) => props.insertar(medicamento)}
        farmacos={props.farmacos}
        isOpen={props.isOpen}
        lista={props.lista}
        toggleModal={() => props.toggleModal("lista_excluidos")}
      />
    </div>
  );
}
