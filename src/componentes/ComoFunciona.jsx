import {
  UserPlus,
  PackagePlus,
  HandHeart,
} from "lucide-react";

function ComoFunciona() {
  const etapas = [
    {
      icon: UserPlus,
      titulo: "1. Cadastro",
      descricao:
        "Estabelecimentos e ONGs realizam um cadastro simples na plataforma para começar a utilizar o sistema.",
    },
    {
      icon: PackagePlus,
      titulo: "2. Publicação",
      descricao:
        "O estabelecimento informa os alimentos disponíveis para doação com quantidade e validade.",
    },
    {
      icon: HandHeart,
      titulo: "3. Entrega",
      descricao:
        "A ONG solicita a doação, agenda a retirada e os alimentos chegam rapidamente a quem precisa.",
    },
  ];

  return (
    <section className="py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Como funciona?
          </h2>

          <p className="text-muted">
            O processo é simples, rápido e ajuda a combater o desperdício de
            alimentos.
          </p>
        </div>

        <div className="row g-4">

          {etapas.map((etapa, index) => {

            const Icon = etapa.icon;

            return (
              <div
                className="col-md-4"
                key={index}
              >
                <div className="card border-0 shadow-sm h-100 p-4 text-center">

                  <div
                    className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "#3e513c",
                    }}
                  >
                    <Icon
                      size={34}
                      color="white"
                    />
                  </div>

                  <h4
                    className="fw-bold mb-3"
                    style={{ color: "#3e513c" }}
                  >
                    {etapa.titulo}
                  </h4>

                  <p className="text-muted mb-0">
                    {etapa.descricao}
                  </p>

                </div>
              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default ComoFunciona;