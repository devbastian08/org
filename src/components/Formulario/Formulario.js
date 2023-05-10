import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const Envio = (event) => {
    event.preventDefault();
    console.log("Manejar envio", event);
  };
  return (
    <section className="formulario">
      <form onSubmit={Envio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
        <ListaOpciones />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
