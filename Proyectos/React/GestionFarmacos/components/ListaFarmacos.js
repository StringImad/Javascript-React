import { useState } from "react";
import { Button,  Input, Toast, ToastBody, ToastHeader } from "reactstrap";
import VentanaModal from './VentanaModal';


export default function ListaFarmacos(props) {

    //Hooks
    const [texto] = useState("");

    const listado = () => {

        var listado = "";
        props.lista.map((value, index) => {

            if (index == props.lista.length - 1) {
                listado += value;
            } else {
                listado += value + ", ";
            }
        });

        return listado;
    }

    return (
        <div>
            <Toast>
                <ToastHeader>
                    {props.titulo}
                </ToastHeader>
                <ToastBody>
                    <Input
                        type="textarea"
                        rows={5}
                        value={listado()}
                    />
                </ToastBody>
                
                <Button onClick={() => props.toggleModal()}>Añadir</Button>
                <Button onClick={() => props.limpiar()}>Limpiar</Button>
            </Toast>
            <VentanaModal insertar={(medicamento) => props.insertar(medicamento)} farmacos = {props.farmacos} isOpen = {props.isOpen} lista={props.lista} toggleModal={()=>props.toggleModal()}/>
        </div>


    );
}