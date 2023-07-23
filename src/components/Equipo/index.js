import React from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorprincipal, titulo } = props.datos;
  const { colaboradores, eliminarColaboradores, actualizarColor } = props;
  const obj = {
    backgroundColor: hexToRgba(colorprincipal, 0.75),
  };
  const titulostyle = { borderColor: colorprincipal };

  return (
    <div>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="input-color"
            value={colorprincipal}
            onChange={(event) => {
              actualizarColor(event.target.value, titulo);
            }}
          />
          <h3 style={titulostyle}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorprincipal={colorprincipal}
                eliminarColaboradores={eliminarColaboradores}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Equipo;
