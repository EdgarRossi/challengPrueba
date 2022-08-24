import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const { nombre, apellido, edad } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido Completo</Form.Label>
        <Form.Control type="Text" placeholder="Apellido" name="apellido" value={apellido} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="Text" placeholder="edad" name="edad" value={edad} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
      <div>
        <h2>valores del formulario</h2>
        <p>{JSON.stringify(values)}</p>
      </div>
    </Form>
  );
}

export default Formulario;
