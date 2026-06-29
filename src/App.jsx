import { useState } from "react";

import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Stats from "./componentes/Stats";
import ComoFunciona from "./componentes/ComoFunciona";
import Categorias from "./componentes/Categorias";
import Footer from "./componentes/Footer";

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
        <div className="container py-5">
          <h2 className="fw-bold mb-3">
            Doações
          </h2>

          <p>
            Em breve será adicionada a lista de
            doações.
          </p>
        </div>
      )}

      {pagina === "doadores" && (
        <div className="container py-5">
          <h2 className="fw-bold">
            Doadores
          </h2>

          <p>
            Lista de estabelecimentos parceiros.
          </p>
        </div>
      )}

      {pagina === "ongs" && (
        <div className="container py-5">
          <h2 className="fw-bold">
            ONGs
          </h2>

          <p>
            Lista das instituições cadastradas.
          </p>
        </div>
      )}

      {pagina === "sobre" && (
        <div className="container py-5">

          <h2 className="fw-bold mb-4">
            Sobre o Projeto
          </h2>

          <p>
            A Rede Solidária conecta estabelecimentos
            que possuem alimentos disponíveis para
            doação com ONGs da cidade de Três Corações.
          </p>

        </div>
      )}

      <Footer
        setPagina={setPagina}
      />

    </div>
  );
}

export default App;