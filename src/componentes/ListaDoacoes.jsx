import {
  Calendar,
  MapPin,
  Package,
  CircleCheck,
} from "lucide-react";

function ListaDoacoes() {
  const doacoes = [
    {
      id: 1,
      alimento: "Pães Franceses",
      categoria: "Padaria",
      quantidade: "35 unidades",
      validade: "Hoje",
      doador: "Padaria Pão Quente",
      endereco: "Centro",
      status: "Disponível",
    },
    {
      id: 2,
      alimento: "Bananas",
      categoria: "Frutas",
      quantidade: "20 kg",
      validade: "2 dias",
      doador: "Supermercado Central",
      endereco: "Jardim América",
      status: "Disponível",
    },
    {
      id: 3,
      alimento: "Leite Integral",
      categoria: "Laticínios",
      quantidade: "15 litros",
      validade: "3 dias",
      doador: "Mercado São José",
      endereco: "Centro",
      status: "Disponível",
    },
    {
      id: 4,
      alimento: "Macarrão",
      categoria: "Não Perecíveis",
      quantidade: "40 pacotes",
      validade: "12 meses",
      doador: "Atacadão Mineiro",
      endereco: "Santa Tereza",
      status: "Disponível",
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Doações Disponíveis
        </h2>

        <p className="text-muted">
          Confira os alimentos cadastrados pelos doadores.
        </p>

      </div>

      <div className="row g-4">

        {doacoes.map((item) => (

          <div
            key={item.id}
            className="col-md-6 col-lg-4"
          >

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <span className="badge bg-success">
                    {item.categoria}
                  </span>

                  <CircleCheck
                    color="#198754"
                    size={22}
                  />

                </div>

                <h4 className="fw-bold">
                  {item.alimento}
                </h4>

                <p className="text-muted mb-4">
                  <Package
                    size={17}
                    className="me-2"
                  />
                  {item.quantidade}
                </p>

                <div className="mb-2">

                  <Calendar
                    size={17}
                    className="me-2"
                  />

                  Validade: {item.validade}

                </div>

                <div className="mb-2">

                  <MapPin
                    size={17}
                    className="me-2"
                  />

                  {item.endereco}

                </div>

                <div className="mb-4">

                  <strong>Doador:</strong><br />

                  {item.doador}

                </div>

                <button className="btn btn-success w-100">

                  Solicitar Doação

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ListaDoacoes;