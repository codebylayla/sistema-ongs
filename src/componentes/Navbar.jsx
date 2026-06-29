import { useState } from "react";
import { Home, Heart, Store, Users, HandHeart, Leaf, Menu, X, } from "lucide-react";

function Navbar({ pagina, setPagina }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const itensMenu = [
    {
      id: "home",
      label: "Início",
      icon: Home,
    },
    {
      id: "doacoes",
      label: "Doações",
      icon: Heart,
    },
    {
      id: "doadores",
      label: "Doadores",
      icon: Store,
    },
    {
      id: "ongs",
      label: "ONGs",
      icon: Users,
    },
    {
      id: "sobre",
      label: "Sobre",
      icon: HandHeart,
    },
  ];

  function mudarPagina(id) {
    setPagina(id);
    setMenuAberto(false);
  }

  return (
    <header className="sticky-top bg-white shadow-sm border-bottom">

      <div className="container">

        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: "70px" }}
        >

          <button
            className="btn d-flex align-items-center gap-2 border-0"
            onClick={() => mudarPagina("home")}
          >
            <div
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: 40,
                height: 40,
                background: "#3e513c",
              }}
            >
              <Leaf color="white" size={20} />
            </div>

            <span
              className="fw-bold fs-5 d-none d-sm-inline"
              style={{ color: "#3e513c" }}
            >
              Rede Solidária
            </span>
          </button>

          <nav className="d-none d-md-flex gap-2">

            {itensMenu.map((item) => {

              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`btn ${
                    pagina === item.id
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => mudarPagina(item.id)}
                >
                  <Icon size={18} className="me-1" />
                  {item.label}
                </button>
              );
            })}

          </nav>

          <button
            className="btn d-md-none"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {menuAberto && (

        <div className="container pb-3 d-md-none">

          {itensMenu.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`btn w-100 mb-2 text-start ${
                  pagina === item.id
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => mudarPagina(item.id)}
              >
                <Icon size={18} className="me-2" />
                {item.label}
              </button>
            );
          })}

        </div>

      )}

    </header>
  );
}

export default Navbar;