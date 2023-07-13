import React from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
  const { colorprincipal, colorsecundario, titulo } = props.datos;
  const { colaboradores } = props;
  const obj = { backgroundColor: colorsecundario };
  const titulostyle = { borderColor: colorprincipal };

  return (
    <div>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <h3 style={titulostyle}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorprincipal={colorprincipal}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Equipo;
