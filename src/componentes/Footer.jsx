import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-t from-gray-900 via-gray-950 to-black text-gray-300 overflow-hidden">

      {/* brilho decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 left-1/2 w-[400px] h-[400px] bg-purple-500 blur-[120px] rounded-full -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold tracking-wide">
            IA Project
          </h2>
          <p className="text-sm mt-3 text-gray-400 leading-relaxed">
            Um projeto desenvolvido para demonstrar habilidades em desenvolvimento web
            e criação de interfaces modernas com React.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navegação</h3>

          <ul className="space-y-2 text-sm">
            {["Início", "Como funciona", "Categorias", "Contato"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Conecte-se</h3>

          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <span>🐱</span>
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 hover:text-white transition"
            >
              <span>📸</span>
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition"
            >
              <span>💼</span>
            </a>
          </div>
        </div>
      </div>

      {/* linha inferior */}
      <div className="border-t border-gray-800 mt-10 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} IA Project — Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;