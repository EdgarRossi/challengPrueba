import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Formulario from "../Formulario/Formulario";
import Tabla from "../Tabla/Tabla";

function Home() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="tabla">Tabla</Nav.Link>
            <Nav.Link href="formulario">Formulario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </header>
  );
}

export default Home;
