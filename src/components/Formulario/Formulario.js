import { useState } from "react";
import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const [nombre, updateNombre] = useState("");
  const [puesto, updatePuesto] = useState("");
  const [foto, updateFoto] = useState("");
  const [equipo, updateEquipo] = useState("");

  const Envio = (event) => {
    event.preventDefault();
    let envioDatos = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(envioDatos);
  };
  return (
    <section className="formulario">
      <form onSubmit={Envio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required={true}
          valor={nombre}
          updateValor={updateNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          updateValor={updatePuesto}
        />

        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          updateValor={updateFoto}
        />
        <ListaOpciones valor={equipo} updateValor={updateEquipo} />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
