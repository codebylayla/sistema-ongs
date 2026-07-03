// src/componentes/CardDoacao.jsx

import {
  Calendar,
  MapPin,
  Package,
  Store,
  Clock,
} from "lucide-react";

function CardDoacao({ doacao }) {
  const corCategoria = {
    Frutas: "success",
    Verduras: "success",
    Padaria: "warning",
    Proteínas: "danger",
    Laticínios: "primary",
    "Não Perecíveis": "secondary",
  };

  return (
    <div className="card shadow-sm border-0 h-100">

      <div className="card-body">

        <div className="d-flex justify-content-between align-items-start mb-3">

          <span
            className={`badge bg-${corCategoria[doacao.categoria] || "success"}`}
          >
            {doacao.categoria}
          </span>

          <span className="badge bg-light text-dark">
            {doacao.status}
          </span>

        </div>

        <h5 className="fw-bold mb-3">
          {doacao.alimento}
        </h5>

        <p className="text-muted mb-3">
          {doacao.descricao}
        </p>

        <div className="mb-2 d-flex align-items-center">
          <Package
            size={17}
            className="me-2 text-success"
          />

          <span>{doacao.quantidade}</span>
        </div>

        <div className="mb-2 d-flex align-items-center">
          <Calendar
            size={17}
            className="me-2 text-success"
          />

          <span>
            Validade: {doacao.validade}
          </span>
        </div>

        <div className="mb-2 d-flex align-items-center">
          <Store
            size={17}
            className="me-2 text-success"
          />

          <span>{doacao.doador}</span>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <MapPin
            size={17}
            className="me-2 text-success"
          />

          <span>{doacao.local}</span>
        </div>

        <div className="mb-4 d-flex align-items-center text-muted">

          <Clock
            size={16}
            className="me-2"
          />

          Publicado há {doacao.publicado}

        </div>

        <button className="btn btn-success w-100">
          Solicitar Doação
        </button>

      </div>

    </div>
  );
}

export default CardDoacao;