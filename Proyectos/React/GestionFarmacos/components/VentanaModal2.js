import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,

} from 'reactstrap';

export default function VentanaModal2(props) {

  const list_to_options = (lista) => {

   return lista.map(x => { return <option value={x.codATC}>{x.codATC} | {x.descATC}</option> })
  }

  const [farmaco2, setFarmaco] = useState("");
  const [lista, setLista] = useState(list_to_options(props.farmacos));

  const handleChange = (event) => {
    if (event.target.name === "filtro") {
      let filtrada = props.farmacos.filter(f => f.descATC.includes(event.target.value.toUpperCase()));
      setLista(list_to_options(filtrada))
    }

    if (event.target.name === "farmaco") {
      setFarmaco(event.target.value)
    }
  }

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={() => props.toggleModal()} >
        <ModalHeader toggle={() => props.toggleModal()}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            id="filtro"
            name="filtro"
            type="text"
            placeholder="Escribe para filtrar"
            rows={5}
            onChange={handleChange}
          />

          <Input
            id='farmaco'
            name='farmaco'
            type="select"
            rows={5}
            onChange={handleChange}
          >
            {lista}
          </Input>
        </ModalBody>

        <ModalFooter>
          <span>{farmaco2}</span>
          <Button color="primary" onClick={() => {props.toggleModal(); props.insertar2(farmaco2)}}>
            Añadir
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}