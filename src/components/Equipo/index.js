import React from "react";
import "./Equipo.css";

const Equipo = (props) => {
  const { colorprincipal, colorsecundario, titulo } = props.datos;
  const obj = { backgroundColor: colorsecundario };
  const titulostyle = { borderColor: colorprincipal };
  return (
    <section className="equipo" style={obj}>
      <h3 style={titulostyle}>{titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;
