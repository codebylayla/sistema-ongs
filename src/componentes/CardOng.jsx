import {
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  HeartHandshake,
} from "lucide-react";

function CardOng({ ong }) {
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

        <div className="mb-2 d-flex align-items-center">

          <Users
            size={17}
            className="me-2 text-success"
          />

          <span>
            {ong.pessoas} pessoas atendidas
          </span>

        </div>

        <div className="mb-2 d-flex align-items-center">

          <MapPin
            size={17}
            className="me-2 text-success"
          />

          <span>
            {ong.endereco}
          </span>

        </div>

        <div className="mb-2 d-flex align-items-center">

          <Phone
            size={17}
            className="me-2 text-success"
          />

          <span>
            {ong.telefone}
          </span>

        </div>

        <div className="mb-4 d-flex align-items-center">

          <Mail
            size={17}
            className="me-2 text-success"
          />

          <span>
            {ong.email}
          </span>

        </div>

        <button className="btn btn-success w-100">

          <HeartHandshake
            size={18}
            className="me-2"
          />

          Entrar em Contato

        </button>

      </div>

    </div>
  );
}

export default CardOng;