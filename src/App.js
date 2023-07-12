import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };
  const equipos = [
    {
      titulo: "Programacion",
      colorprincipal: "#57C278",
      colorsecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorprincipal: "#82CFFA",
      colorsecundario: "#E8F8FF",
    },
    {
      titulo: "Data science",
      colorprincipal: "#A6D157",
      colorsecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorprincipal: "#E06B69",
      colorsecundario: "#FDE7E8",
    },
    {
      titulo: "Ux y Diseño",
      colorprincipal: "#DB6EBF",
      colorsecundario: "#FAE9F5",
    },
    {
      titulo: "Movil",
      colorprincipal: "#FFBA05",
      colorsecundario: "#FFF5D9",
    },
    {
      titulo: "Innovacion y Gestion",
      colorprincipal: "#FF8A29",
      colorsecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {mostrarForm && <Formulario />}
      {/*mostrarForm === true ? <Formulario /> : <div />*/}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipos) => {
        return <Equipo datos={equipos} key={equipos.titulo} />;
      })}
    </div>
  );
}

export default App;
