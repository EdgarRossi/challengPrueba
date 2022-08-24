import React from "react";
import Table from "react-bootstrap/Table";

function Tabla() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobbie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pedro</td>
          <td>20</td>
          <td>Ingenieria</td>
          <td>Futbol</td>
        </tr>
        <tr>
          <td>Rodrigo</td>
          <td>22</td>
          <td>Arquitectura</td>
          <td>Bajo Electrico</td>
        </tr>
        <tr>
          <td>Romina</td>
          <td>21</td>
          <td>Abogacia</td>
          <td>Acrobacia</td>
        </tr>
        <tr>
          <td>Ana</td>
          <td>23</td>
          <td>Contadora</td>
          <td>Astronomia</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabla;
