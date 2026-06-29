import { Store, Users, HeartHandshake, Package } from "lucide-react";

function Stats() {
  const estatisticas = [
    {
      icon: Store,
      numero: "25+",
      titulo: "Estabelecimentos",
      descricao: "Empresas parceiras cadastradas",
    },
    {
      icon: Users,
      numero: "12",
      titulo: "ONGs",
      descricao: "Instituições beneficiadas",
    },
    {
      icon: HeartHandshake,
      numero: "180+",
      titulo: "Doações",
      descricao: "Doações realizadas",
    },
    {
      icon: Package,
      numero: "1,2t",
      titulo: "Alimentos",
      descricao: "Alimentos reaproveitados",
    },
  ];

  return (
    <section className="py-5 bg-light">

      <div className="container">

        <div className="row g-4">

          {estatisticas.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                className="col-6 col-lg-3"
                key={index}
              >
                <div className="card border-0 shadow-sm h-100 text-center p-4">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "#3e513c",
                    }}
                  >
                    <Icon color="white" size={30} />
                  </div>

                  <h2
                    className="fw-bold mb-1"
                    style={{ color: "#3e513c" }}
                  >
                    {item.numero}
                  </h2>

                  <h5 className="fw-semibold">
                    {item.titulo}
                  </h5>

                  <p className="text-muted mb-0">
                    {item.descricao}
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

export default Stats;