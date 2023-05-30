import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarForm, actualizarMostrar] = useState(true);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario />}
      {/*mostrarForm === true ? <Formulario /> : <div />*/}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
