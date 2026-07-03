import {
  Store,
  MapPin,
  Phone,
  Mail,
  Package,
} from "lucide-react";

function CardDoador({ doador }) {
  return (
    <div className="card border-0 shadow-sm h-100">

      <div className="card-body p-4">

        <div className="d-flex align-items-center mb-4">

          <div
            className="rounded-circle d-flex justify-content-center align-items-center me-3"
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#3e513c",
            }}
          >
            <Store
              size={28}
              color="white"
            />
          </div>

          <div>

            <h5 className="fw-bold mb-1">
              {doador.nome}
            </h5>

            <span className="badge bg-success">
              {doador.categoria}
            </span>

          </div>

        </div>

        <div className="mb-2 d-flex align-items-center">

          <MapPin
            size={17}
            className="me-2 text-success"
          />

          <span>{doador.endereco}</span>

        </div>

        <div className="mb-2 d-flex align-items-center">

          <Phone
            size={17}
            className="me-2 text-success"
          />

          <span>{doador.telefone}</span>

        </div>

        <div className="mb-3 d-flex align-items-center">

          <Mail
            size={17}
            className="me-2 text-success"
          />

          <span>{doador.email}</span>

        </div>

        <div className="d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center fw-semibold">

            <Package
              size={18}
              className="me-2 text-success"
            />

            {doador.doacoes} doações

          </div>

          <button className="btn btn-success">
            Ver Perfil
          </button>

        </div>

      </div>

    </div>
  );
}

export default CardDoador;