import React from "react";
import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, id } = props.datos;
  const { colorprincipal, eliminarColaboradores } = props;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaboradores(id)}
      />
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
