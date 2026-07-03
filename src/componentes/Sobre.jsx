// src/componentes/Sobre.jsx

import {
  Heart,
  Target,
  Eye,
  Leaf,
  UtensilsCrossed,
  HandHeart,
} from "lucide-react";

function Sobre() {
  const valores = [
    {
      icon: Heart,
      titulo: "Solidariedade",
      descricao:
        "Promover a união entre estabelecimentos e instituições para ajudar quem mais precisa.",
    },
    {
      icon: Leaf,
      titulo: "Sustentabilidade",
      descricao:
        "Combater o desperdício de alimentos e incentivar o consumo consciente.",
    },
    {
      icon: HandHeart,
      titulo: "Compromisso",
      descricao:
        "Garantir transparência e responsabilidade durante todo o processo de doação.",
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Sobre a Rede Solidária
        </h2>

        <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
          A Rede Solidária é um projeto acadêmico desenvolvido com o objetivo de
          conectar empresas que possuem alimentos próprios para consumo, mas que
          não serão comercializados, às instituições beneficentes de
          Três Corações - MG.
        </p>

      </div>

      <div className="row g-4 mb-5">

        <div className="col-lg-6">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body p-4">

              <Target
                size={40}
                color="#3e513c"
                className="mb-3"
              />

              <h4 className="fw-bold">
                Nossa Missão
              </h4>

              <p className="text-muted mb-0">
                Facilitar a doação de alimentos, reduzindo o desperdício e
                promovendo uma distribuição mais justa para famílias em situação
                de vulnerabilidade através das ONGs parceiras.
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-6">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body p-4">

              <Eye
                size={40}
                color="#3e513c"
                className="mb-3"
              />

              <h4 className="fw-bold">
                Nossa Visão
              </h4>

              <p className="text-muted mb-0">
                Tornar-se uma referência regional na integração entre doadores e
                instituições beneficentes, contribuindo para uma sociedade mais
                sustentável e solidária.
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="row g-4">

        {valores.map((valor, index) => {

          const Icon = valor.icon;

          return (

            <div
              className="col-md-4"
              key={index}
            >

              <div className="card border-0 shadow-sm h-100 text-center p-4">

                <Icon
                  size={45}
                  color="#3e513c"
                  className="mx-auto mb-3"
                />

                <h5 className="fw-bold">
                  {valor.titulo}
                </h5>

                <p className="text-muted mb-0">
                  {valor.descricao}
                </p>

              </div>

            </div>

          );

        })}

      </div>

      <div
        className="card border-0 shadow-sm mt-5"
        style={{ background: "#3e513c" }}
      >

        <div className="card-body text-center text-white p-5">

          <UtensilsCrossed
            size={50}
            className="mb-3"
          />

          <h3 className="fw-bold">
            Juntos podemos reduzir o desperdício
          </h3>

          <p className="mb-0">
            Pequenas atitudes geram grandes mudanças. Cada alimento doado pode
            fazer a diferença na vida de muitas pessoas.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Sobre;