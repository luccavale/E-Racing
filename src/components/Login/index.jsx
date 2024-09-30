import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="bg-[#0c0c0c] text-white  font-sans w-screen" style={{fontFamily: 'Incosolata, monospace'}}>
    <Header/>
    <main className="flex justify-center items-center p-12 my-[101px]">
     
      {/* Seção de Login */}
      <section className="flex flex-col justify-center items-center bg-gray-900 rounded-2xl w-[400px] h-[480px] p-6 m-5">
        <h1 className="text-3xl text-white mb-10 text-center">Já sou cadastrado!</h1>
        
        <form id="form-login" action="/login" method="POST" className="w-full px-5">
          {/* Campo de Email */}
          <div className="input-container mb-6">
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="E-mail" 
              required 
              className="w-full h-11 rounded-full border-none pl-6 bg-gray-600 text-white placeholder-white outline-none" 
            />
            <ul className="ml-2">
              <li><small className="small-email text-red-500"></small></li>
            </ul>
          </div>

          {/* Campo de Senha */}
          <div className="input-container mb-6">
            <input 
              type="password" 
              name="senha" 
              id="senha" 
              placeholder="Senha" 
              required 
              className="w-full h-11 rounded-full border-none pl-6 bg-gray-600 text-white placeholder-white outline-none" 
            />
            <ul className="ml-2">
              <li><small className="small-senha text-red-500"></small></li>
            </ul>
          </div>

          {/* Checkbox de salvar informações */}
          <div className="flex items-center mb-6 ml-5">
            <input type="checkbox" id="salvarInfo" name="salvarInfo" className="mr-2" />
            <label htmlFor="salvarInfo" className="text-white text-sm">Salvar e-mail e senha?</label>
          </div>

          {/* Botão de login */}
          <button type="submit" className="w-full h-11 mt-9 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
            Entrar
          </button>
        </form>

        {/* Link para recuperação de senha */}
        <div className="flex justify-center mt-4">
          <a href="#" className="text-white hover:text-blue-500 transition duration-100">Esqueci a senha</a>
        </div>
      </section>

      {/* Seção para não cadastrados */}
      <section className="flex flex-col justify-center items-center max-w-xs p-6 ml-10">
        <h1 className="text-3xl text-white text-center mb-4">Não sou cadastrado!</h1>
        <p className="text-white text-center mb-4">Cadastre-se agora mesmo de maneira rápida, fácil e segura</p>
        
        <Link to="/Cadastro">
          <button className="w-full h-11 mt-6 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-500 transition px-[30px]">
            Cadastre-se
          </button>
        </Link>
      </section>
      
    </main>
    <Footer/>
    </div>
  );
};


export default Login;
