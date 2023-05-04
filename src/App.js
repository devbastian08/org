import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Formulario />
      </div>
    );
  }
}

export default App;
