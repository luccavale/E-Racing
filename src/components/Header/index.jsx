import React from "react";
import {Link} from "react-router-dom"
import logo from  '../../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-transparent py-8" style={{fontFamily: 'Incosolata, monospace'}}>
    <nav className="container mx-auto flex justify-between items-center">
      <img src={logo} alt="logo" className="w-[300px]" />
      <ul className="flex space-x-6">
        <li><Link className="hover:text-blue-500" to = '/'>Início</Link></li>
        <li><Link className="hover:text-blue-500" to = '/Sobre'>Sobre</Link></li>
        <li><Link className="hover:text-blue-500" to = '/Rank'>Rank</Link></li>
        <li><Link className="hover:text-blue-500" to = '/Premios'>Prêmios</Link></li>
      </ul>
      <div className="flex space-x-4">
        <Link to="/Cadastro">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign-in</button>
        </Link>
        <Link to="/Login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </Link>
      </div>
    </nav>
  </header>

  );
};

export default Header;