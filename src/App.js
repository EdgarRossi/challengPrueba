import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Tabla from "./Components/Tabla/Tabla";
import Formulario from "./Components/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path="tabla" element={<Tabla />} />
          <Route path="formulario" element={<Formulario />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
