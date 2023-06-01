import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const modplaceholder = `${props.placeholder}...`;
  const manejarCambio = (event) => {
    props.updateValor(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={modplaceholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};
export default CampoTexto;
