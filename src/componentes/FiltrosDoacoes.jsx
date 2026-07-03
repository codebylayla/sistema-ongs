// src/componentes/FiltrosDoacoes.jsx

import { Search, Filter, MapPin } from "lucide-react";

function FiltrosDoacoes({
  busca,
  setBusca,
  categoria,
  setCategoria,
  bairro,
  setBairro,
}) {
  return (
    <section className="container mb-4">

      <div className="card border-0 shadow-sm">

        <div className="card-body">

          <div className="row g-3">

            <div className="col-lg-5">

              <label className="form-label fw-semibold">
                Buscar alimento
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  <Search size={18} />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex.: pão, arroz, leite..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />

              </div>

            </div>

            <div className="col-lg-4">

              <label className="form-label fw-semibold">
                Categoria
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  <Filter size={18} />
                </span>

                <select
                  className="form-select"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">
                    Todas
                  </option>

                  <option>
                    Frutas
                  </option>

                  <option>
                    Verduras
                  </option>

                  <option>
                    Padaria
                  </option>

                  <option>
                    Proteínas
                  </option>

                  <option>
                    Laticínios
                  </option>

                  <option>
                    Não Perecíveis
                  </option>

                </select>

              </div>

            </div>

            <div className="col-lg-3">

              <label className="form-label fw-semibold">
                Bairro
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  <MapPin size={18} />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FiltrosDoacoes;