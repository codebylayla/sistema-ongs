import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
} from "lucide-react";

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  function alterarCampo(e) {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function enviarFormulario(e) {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    setFormulario({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
  }

  return (
    <section className="container py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Entre em Contato
        </h2>

        <p className="text-muted">
          Caso tenha dúvidas, sugestões ou queira colaborar com o projeto.
        </p>

      </div>

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow-sm border-0">

            <div className="card-body p-4">

              <form onSubmit={enviarFormulario}>

                <div className="row g-3">

                  <div className="col-md-6">

                    <label className="form-label">
                      Nome
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <User size={18} />
                      </span>

                      <input
                        type="text"
                        className="form-control"
                        name="nome"
                        value={formulario.nome}
                        onChange={alterarCampo}
                        required
                      />

                    </div>

                  </div>

                  <div className="col-md-6">

                    <label className="form-label">
                      Email
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <Mail size={18} />
                      </span>

                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formulario.email}
                        onChange={alterarCampo}
                        required
                      />

                    </div>

                  </div>

                  <div className="col-12">

                    <label className="form-label">
                      Telefone
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <Phone size={18} />
                      </span>

                      <input
                        type="text"
                        className="form-control"
                        name="telefone"
                        value={formulario.telefone}
                        onChange={alterarCampo}
                      />

                    </div>

                  </div>

                  <div className="col-12">

                    <label className="form-label">
                      Mensagem
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <MessageSquare size={18} />
                      </span>

                      <textarea
                        className="form-control"
                        rows="5"
                        name="mensagem"
                        value={formulario.mensagem}
                        onChange={alterarCampo}
                        required
                      />

                    </div>

                  </div>

                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn btn-success w-100"
                    >
                      <Send
                        size={18}
                        className="me-2"
                      />

                      Enviar Mensagem

                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contato;