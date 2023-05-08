import React from "react";
import { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
export default function NewUser(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar la lógica para enviar los datos del usuario al servidor aquí

    // Restablecemos los valores del formulario después del envío
    setUser('');
    setPassword('');
    setEmail('');
    setType('');
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="w-50">
        <FormGroup>
          <Label for="user">Usuario</Label>
          <Input
            type="text"
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Tipo</Label>
          <Input
            type="select"
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Seleccione un tipo</option>
            <option value="admin">Admin</option>
            <option value="normal">Normal</option>
          </Input>
        </FormGroup>
        <Button type="submit" className="w-100">Agregar Usuario</Button>
      </Form>
    </Container>
  );
};

