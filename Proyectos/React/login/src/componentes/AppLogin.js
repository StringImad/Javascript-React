import React from "react";
import { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input }
    from 'reactstrap';
export default function AppLogin(props) {
    // Utilizamos un valor y un setter, e inicializamos a vacio
    //useState(''): Este hook se utiliza para crear una variable de estado 
   //llamada "password" con un valor inicial de una cadena vacía.
   // También se está creando una función "setPassword"
   // que se puede utilizar para actualizar el valor
   // de la variable de estado "password"
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [info, setInfo] = useState('');

    const handleChange = (event) => {
        //La primera línea de código setInfo('');
        // esta limpiando el valor de la variable de estado "info"
        setInfo('');
        //En las siguientes líneas, se está utilizando el método "event.target"
        // para obtener el elemento de la página web que ha generado el evento.
        const target = event.target;
        //se está utilizando el atributo "name" del elemento para determinar
        // si el evento se ha generado en un campo de contraseña 
        //o en un campo de teléfono
        if (target.name == "password") {
            setPassword(event.target.value)
        }
        if (target.name == "telefono") {
            setTelefono(event.target.value)
        }
    }
    const clicar=()=>{
        console.log(telefono+" "+password)
        if (password==''||telefono==''){
            setInfo('CUMPLIMENTE TODOS LOS DATOS')
        }else{
                props.userLogin(telefono,password)

        }
    }

        return (
            <Row>
                <Col sm="4"></Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="text-center" tag="h4">
                            Log in
                        </CardTitle>
                        <Form inline>
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label className="me-sm-2" for="exampleEmail">User id</Label>
                                <Input
                                    id="Telefono"
                                    name="telefono"
                                    placeholder="type your user id"
                                    type="email"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label className="me-sm-2"
                                    for="examplePassword">Password</Label>
                                <Input
                                    id="Password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br />
                            <Button color="primary" size="lg" block onClick={clicar}>
                                <strong>Log in</strong>
                            </Button>
                            <CardText className="text-danger">{info}</CardText>

                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
