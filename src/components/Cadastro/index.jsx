import React from "react";
import Header from "../Header"
import Footer from "../Footer"

const Cadastro = () => {
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen font-sans"  style={{fontFamily: 'Incosolata, monospace'}}>
      {/* Header */}
      <Header/>

      {/* Título */}
      <div className="text-center mt-16 mb-8">
        <h1 className="text-4xl font-bold">Cadastrar dados pessoais</h1>
      </div>

      {/* Formulário de Cadastro */}
      <main className="flex justify-center ">
        <div className="bg-[#191919] p-8 rounded-lg w-full max-w-xl space-y-6 mb-20">
          <form action="/register" method="POST">
            {/* Inputs de Dados Pessoais */}
            <div className="space-y-4">
              <input
                type="text"
                name="nome"
                id="name"
                placeholder="Nome"
                className="w-full p-4 bg-[#4B5563] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="sobrenome"
                id="sobrenome"
                placeholder="Sobrenome"
                className="w-full p-4 bg-[#4B5563] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                className="w-full p-4 bg-[#4B5563] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email-validation"
                id="email-validation"
                placeholder="Confirme seu e-mail"
                className="w-full p-4 bg-[#4B5563] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                name="senha"
                id="password"
                placeholder="Senha"
                className="w-full p-4 bg-[#4B5563] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                name="password-confirmation"
                id="password-confirmation"
                placeholder="Confirme sua senha"
                className="w-full p-4 bg-[#4B5563] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            {/* Checkbox e Botão */}
            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="salvarInfo"
                  className="form-checkbox bg-[#4B5563] border-gray-600"
                />
                <span className="ml-2">Salvar informações pessoais?</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 rounded-lg text-white font-bold text-lg mt-4 hover:bg-blue-700"
            >
              Cadastrar-se
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Cadastro;
