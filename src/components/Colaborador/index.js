import React from "react";
import "./Colaborador.css";

const Colaborador = (props) => {
  const { nombre, puesto, foto } = props.datos;
  const { colorprincipal } = props;
  return (
    <div className="colaborador">
      <div className="encabezado" style={{ backgroundColor: colorprincipal }}>
        <img src={foto} alt="foto colaborador" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};
export default Colaborador;
