// src/componentes/Footer.jsx

function Footer({ setPagina }) {
  return (
    <footer
      className="mt-5 text-light"
      style={{
        background: "linear-gradient(to top, #1b1b1b, #222, #2d2d2d)",
      }}
    >
      <div className="container py-5">

        <div className="row g-5">

          {/* Branding */}
          <div className="col-md-4">

            <h3 className="fw-bold">
              Rede Solidária
            </h3>

            <p className="text-light opacity-75">
              Um projeto desenvolvido para conectar estabelecimentos e
              instituições beneficentes, reduzindo o desperdício de alimentos.
            </p>

          </div>

          {/* Navegação */}
          <div className="col-md-4">

            <h5 className="fw-bold mb-3">
              Navegação
            </h5>

            <div className="d-flex flex-column gap-2">

              <button
                className="btn btn-link text-start text-decoration-none text-light p-0"
                onClick={() => setPagina("home")}
              >
                Início
              </button>

              <button
                className="btn btn-link text-start text-decoration-none text-light p-0"
                onClick={() => setPagina("doacoes")}
              >
                Doações
              </button>

              <button
                className="btn btn-link text-start text-decoration-none text-light p-0"
                onClick={() => setPagina("doadores")}
              >
                Doadores
              </button>

              <button
                className="btn btn-link text-start text-decoration-none text-light p-0"
                onClick={() => setPagina("ongs")}
              >
                ONGs
              </button>

              <button
                className="btn btn-link text-start text-decoration-none text-light p-0"
                onClick={() => setPagina("sobre")}
              >
                Sobre
              </button>

            </div>

          </div>

          

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">

          © {new Date().getFullYear()} Rede Solidária — Todos os direitos reservados.

        </div>

      </div>
    </footer>
  );
}

export default Footer;