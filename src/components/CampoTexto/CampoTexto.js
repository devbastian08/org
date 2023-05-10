import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const modplaceholder = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input placeholder={modplaceholder} />
    </div>
  );
};
export default CampoTexto;
