import './App.css'

function App() {
  return (
    <div className="app">

      <header className="hero text-white text-center d-flex flex-column justify-content-center align-items-center">

        <h1 className="display-4 fw-bold">
          Rede Solidária de Alimentos
        </h1>

        <p className="lead mt-3">
          Conectando estabelecimentos doadores a instituições
          que precisam de alimentos em Três Corações - MG.
        </p>

        <div className="hero-buttons mt-4">
          <button className="btn btn-light btn-lg me-3">
            Sou Doador
          </button>

          <button className="btn btn-outline-light btn-lg">
            Sou ONG
          </button>
        </div>

      </header>

      <section className="sobre container text-center py-5">

        <h2 className="mb-5 fw-bold">Como funciona?</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h3 className="text-success">1. Cadastro</h3>
              <p>Empresas e ONGs realizam o cadastro na plataforma.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h3 className="text-success">2. Doação</h3>
              <p>O doador registra alimentos disponíveis.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h3 className="text-success">3. Entrega</h3>
              <p>A ONG solicita o item e agenda a retirada.</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default App