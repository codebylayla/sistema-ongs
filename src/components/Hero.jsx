import { MapPin, Store, Users } from "lucide-react";
import flower from "../images/flower.png";

function Hero({ setPagina }) {
  return (
    <section className="hero position-relative overflow-hidden d-flex align-items-center">

      <img
        src={flower}
        alt="Flor decorativa"
        className="flower"
      />

      <div className="container position-relative text-center">

        <div className="mb-4">

          <span className="badge rounded-pill hero-badge px-4 py-2">
            <MapPin size={14} className="me-2" />
            Três Corações - MG
          </span>

        </div>

        <h1 className="logo-title mb-4">
          <span className="logo-r">R</span>
          <span className="logo-text">ede</span>

          <br />

          <span className="logo-s">S</span>
          <span className="logo-text">olidária</span>
        </h1>

        <p className="hero-subtitle mx-auto mb-5">
          Conectando doadores de alimentos a ONGs,
          reduzindo o desperdício e alimentando
          esperanças na nossa comunidade.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

          <button
            className="btn btn-warning btn-lg rounded-pill px-5"
            onClick={() => setPagina("doadores")}
          >
            <Store size={18} className="me-2" />
            Sou Doador
          </button>

          <button
            className="btn btn-outline-light btn-lg rounded-pill px-5"
            onClick={() => setPagina("ongs")}
          >
            <Users size={18} className="me-2" />
            Sou ONG
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;