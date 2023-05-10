import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = () => {
  const equipos = [
    "Programacion",
    "Front End",
    "Data science",
    "Devops",
    "Ux y Diseño",
    "Movil",
    "Innovacion y Gestion",
  ];
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos.map((equipos, index) => {
          return <option key={index}>{equipos}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
