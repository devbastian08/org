import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programacion",
    "Front End",
    "Data science",
    "Devops",
    "Ux y Diseño",
    "Movil",
    "Innovacion y Gestion",
  ];

  const manejarCambio = (event) => {
    props.updateValor(event.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipos, index) => {
          return <option key={index}>{equipos}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
