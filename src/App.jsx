import { useState } from "react";

import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Stats from "./componentes/Stats";
import ComoFunciona from "./componentes/ComoFunciona";
import Categorias from "./componentes/Categorias";
import Footer from "./componentes/Footer";

import ListaDoacoes from "./componentes/ListaDoacoes";
import Doadores from "./componentes/Doadores";
import Ongs from "./componentes/Ongs";
import Sobre from "./componentes/Sobre";
import Contato from "./componentes/Contato";

import "./App.css";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <div className="app">

      <Navbar
        pagina={pagina}
        setPagina={setPagina}
      />

      {pagina === "home" && (
        <>
          <Hero setPagina={setPagina} />
          <Stats />
          <ComoFunciona />
          <Categorias />
        </>
      )}

      {pagina === "doacoes" && (
        <ListaDoacoes />
      )}

      {pagina === "doadores" && (
        <Doadores />
      )}

      {pagina === "ongs" && (
        <Ongs />
      )}

      {pagina === "sobre" && (
        <Sobre />
      )}

      {pagina === "contato" && (
        <Contato />
      )}

      <Footer
        setPagina={setPagina}
      />

    </div>
  );
}

export default App;