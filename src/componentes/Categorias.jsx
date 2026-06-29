import {
  Apple,
  Beef,
  Milk,
  Croissant,
  Carrot,
  Package,
} from "lucide-react";

function Categorias() {
  const categorias = [
    {
      icon: Apple,
      titulo: "Frutas",
      descricao: "Frutas frescas e próprias para consumo.",
    },
    {
      icon: Carrot,
      titulo: "Verduras",
      descricao: "Legumes e verduras provenientes de feiras e mercados.",
    },
    {
      icon: Croissant,
      titulo: "Padaria",
      descricao: "Pães, bolos e outros produtos de panificação.",
    },
    {
      icon: Beef,
      titulo: "Proteínas",
      descricao: "Carnes e alimentos refrigerados dentro da validade.",
    },
    {
      icon: Milk,
      titulo: "Laticínios",
      descricao: "Leite, queijos, iogurtes e derivados.",
    },
    {
      icon: Package,
      titulo: "Não Perecíveis",
      descricao: "Arroz, feijão, macarrão e alimentos industrializados.",
    },
  ];

  return (
    <section className="py-5 bg-light">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Categorias de Doações
          </h2>

          <p className="text-muted">
            Os alimentos são organizados por categoria para facilitar a busca
            das instituições.
          </p>
        </div>

        <div className="row g-4">

          {categorias.map((categoria, index) => {

            const Icon = categoria.icon;

            return (
              <div
                key={index}
                className="col-sm-6 col-lg-4"
              >
                <div className="card border-0 shadow-sm h-100 p-4 text-center">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#3e513c",
                    }}
                  >
                    <Icon
                      size={30}
                      color="white"
                    />
                  </div>

                  <h5
                    className="fw-bold"
                    style={{ color: "#3e513c" }}
                  >
                    {categoria.titulo}
                  </h5>

                  <p className="text-muted mb-0">
                    {categoria.descricao}
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

export default Categorias;