// src/componentes/Doadores.jsx

import {
  Store,
  MapPin,
  Phone,
  Mail,
  Package,
} from "lucide-react";

function Doadores() {
  const doadores = [
    {
      id: 1,
      nome: "Padaria Pão Quente",
      categoria: "Padaria",
      endereco: "Centro - Três Corações",
      telefone: "(35) 99999-1111",
      email: "contato@paoquente.com",
      doacoes: 48,
    },
    {
      id: 2,
      nome: "Supermercado Central",
      categoria: "Supermercado",
      endereco: "Jardim América",
      telefone: "(35) 99999-2222",
      email: "contato@mercadocentral.com",
      doacoes: 73,
    },
    {
      id: 3,
      nome: "Hortifruti Verde Vida",
      categoria: "Hortifruti",
      endereco: "Centro",
      telefone: "(35) 99999-3333",
      email: "verdevida@email.com",
      doacoes: 39,
    },
    {
      id: 4,
      nome: "Açougue Boi Forte",
      categoria: "Açougue",
      endereco: "Santa Tereza",
      telefone: "(35) 99999-4444",
      email: "boiforte@email.com",
      doacoes: 21,
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Estabelecimentos Doadores
        </h2>

        <p className="text-muted">
          Empresas cadastradas na Rede Solidária.
        </p>
      </div>

      <div className="row g-4">

        {doadores.map((item) => (

          <div
            key={item.id}
            className="col-md-6"
          >

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <div className="d-flex align-items-center mb-4">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: 60,
                      height: 60,
                      background: "#3e513c",
                    }}
                  >
                    <Store
                      color="white"
                      size={28}
                    />
                  </div>

                  <div>

                    <h5 className="fw-bold mb-1">
                      {item.nome}
                    </h5>

                    <span className="badge bg-success">
                      {item.categoria}
                    </span>

                  </div>

                </div>

                <p className="mb-2">
                  <MapPin
                    size={17}
                    className="me-2"
                  />
                  {item.endereco}
                </p>

                <p className="mb-2">
                  <Phone
                    size={17}
                    className="me-2"
                  />
                  {item.telefone}
                </p>

                <p className="mb-3">
                  <Mail
                    size={17}
                    className="me-2"
                  />
                  {item.email}
                </p>

                <div className="d-flex justify-content-between align-items-center">

                  <div className="fw-semibold">

                    <Package
                      size={18}
                      className="me-2"
                    />

                    {item.doacoes} doações realizadas

                  </div>

                  <button className="btn btn-success">
                    Ver Perfil
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Doadores;