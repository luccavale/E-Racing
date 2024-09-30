import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#111111] py-6"  style={{fontFamily: 'Incosolata, monospace'}}>
    <ul className="flex justify-center space-x-6 text-sm">
      <li><a href="#" className="hover:text-blue-500">Dúvidas Frequentes</a></li>
      <li><a href="#" className="hover:text-blue-500">Política de Privacidade</a></li>
      <li><a href="#" className="hover:text-blue-500">Fale Conosco</a></li>
      <li><Link to="/Sobre" className="hover:text-blue-500">Sobre Nós</Link></li>
    </ul>
    <p className="text-center mt-4">© 2024. Todos os direitos reservados</p>
  </footer>
  );
};

export default Footer;