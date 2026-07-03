// src/componentes/Ongs.jsx

import {
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  HeartHandshake,
} from "lucide-react";

function Ongs() {
  const ongs = [
    {
      id: 1,
      nome: "Casa da Esperança",
      responsavel: "Maria Aparecida",
      pessoas: 120,
      endereco: "Centro - Três Corações",
      telefone: "(35) 99999-1111",
      email: "contato@esperanca.org",
    },
    {
      id: 2,
      nome: "Lar São Vicente",
      responsavel: "João Pedro",
      pessoas: 85,
      endereco: "Santa Tereza",
      telefone: "(35) 99999-2222",
      email: "larsv@email.com",
    },
    {
      id: 3,
      nome: "Projeto Vida Nova",
      responsavel: "Ana Cristina",
      pessoas: 160,
      endereco: "Jardim América",
      telefone: "(35) 99999-3333",
      email: "vidanova@email.com",
    },
    {
      id: 4,
      nome: "Comunidade Solidária",
      responsavel: "Carlos Henrique",
      pessoas: 95,
      endereco: "Boa Ventura",
      telefone: "(35) 99999-4444",
      email: "solidaria@email.com",
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          ONGs Parceiras
        </h2>

        <p className="text-muted">
          Instituições cadastradas para receber doações.
        </p>

      </div>

      <div className="row g-4">

        {ongs.map((ong) => (

          <div
            key={ong.id}
            className="col-md-6"
          >

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <div className="d-flex align-items-center mb-4">

                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center me-3"
                    style={{
                      width: 60,
                      height: 60,
                      background: "#3e513c",
                    }}
                  >
                    <Building2
                      size={28}
                      color="white"
                    />
                  </div>

                  <div>

                    <h5 className="fw-bold mb-1">
                      {ong.nome}
                    </h5>

                    <small className="text-muted">
                      Responsável: {ong.responsavel}
                    </small>

                  </div>

                </div>

                <p className="mb-2">
                  <Users size={17} className="me-2" />
                  {ong.pessoas} pessoas atendidas
                </p>

                <p className="mb-2">
                  <MapPin size={17} className="me-2" />
                  {ong.endereco}
                </p>

                <p className="mb-2">
                  <Phone size={17} className="me-2" />
                  {ong.telefone}
                </p>

                <p className="mb-4">
                  <Mail size={17} className="me-2" />
                  {ong.email}
                </p>

                <button className="btn btn-success w-100">

                  <HeartHandshake
                    size={18}
                    className="me-2"
                  />

                  Entrar em Contato

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Ongs;