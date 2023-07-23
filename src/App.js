import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarForm, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([]);
  const [equipos, actualizarEquipos] = useState([
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
  ]);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };
  const registrarColaborador = (colaborador) => {
    console.log(colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaboradores = () => {};

  const actualizarColor = (color, titulo) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.titulo === titulo) {
        equipo.colorprincipal = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarForm && (
        <Formulario registrarColaborador={registrarColaborador} />
      )}
      {/*mostrarForm === true ? <Formulario /> : <div />*/}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaboradores={eliminarColaboradores}
            actualizarColor={actualizarColor}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
