import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo / Nome do projeto */}
        <div>
          <h2 className="text-white text-xl font-bold">IA Project</h2>
          <p className="text-sm mt-2 text-gray-400 max-w-xs">
            Um projeto de integração com Inteligência Artificial para explorar
            novas possibilidades de interação e automação.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Início</li>
            <li className="hover:text-white cursor-pointer">Como funciona</li>
            <li className="hover:text-white cursor-pointer">Categorias</li>
            <li className="hover:text-white cursor-pointer">Contato</li>
          </ul>
        </div>

        {/* Social / Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contato</h3>
          <p className="text-sm text-gray-400">
            Projeto acadêmico / desenvolvimento React + IA
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;