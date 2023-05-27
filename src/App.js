import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Formulario />
        <MiOrg />
      </div>
    );
  }
}

export default App;
