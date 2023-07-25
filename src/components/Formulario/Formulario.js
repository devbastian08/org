import { useState } from "react";
import { v4 as uuid } from "uuid";
import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [id] = useState("");
  const [nombre, updateNombre] = useState("");
  const [puesto, updatePuesto] = useState("");
  const [foto, updateFoto] = useState("");
  const [equipo, updateEquipo] = useState("");
  const { registrarColaborador } = props;

  const Envio = (event) => {
    event.preventDefault();
    let envioDatos = {
      id: uuid(),
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(envioDatos);
  };
  return (
    <section className="formulario">
      <form onSubmit={Envio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        {id}
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
        <ListaOpciones
          valor={equipo}
          updateValor={updateEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
