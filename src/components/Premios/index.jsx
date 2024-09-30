import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import LogoPremios from "../../assets/logo-premios.png"

const Premios = () => {
  return (
    <div className="text-white text-center bg-[#0c0c0c]"  style={{fontFamily: 'Incosolata, monospace'}}>
      <Header/>
      {/* Título */}
      <div className="px-[100px] mb-[200px]">
        <h2 className="text-3xl mb-10 mt-32">Resgate suas Recompensas</h2>
        
        {/* Container de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-white">
            <div className="flex items-center justify-start mb-4">
              <img src={LogoPremios} alt="Recompensa 1" className="w-11 h-10 mr-3"/>
              <h3 className="text-2xl">Ecobag</h3>
            </div>
            <p className="text-left ml-12 mb-12 text-sm">
              Reutilizável <br /> Prática <br /> Sustentável
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-white pt-5">
              <p className="ml-8">Vence em 30 de dezembro.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Resgatar
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-white">
            <div className="flex items-center justify-start mb-4">
              <img src={LogoPremios} alt="Recompensa 2" className="w-11 h-10 mr-3"/>
              <h3 className="text-2xl">Boné Formula-E</h3>
            </div>
            <p className="text-left ml-12 mb-12 text-sm">
              Estilo casual <br /> Confortável <br /> Leve
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-white pt-5">
              <p className="ml-8">Vence em 30 de dezembro.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Resgatar
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-white">
            <div className="flex items-center justify-start mb-4">
              <img src={LogoPremios} alt="Recompensa 3" className="w-11 h-10 mr-3"/>
              <h3 className="text-2xl">Mochila Mahindra</h3>
            </div>
            <p className="text-left ml-12 mb-12 text-sm">
              Espaçosa <br /> Resistente <br /> 20L
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-white pt-5">
              <p className="ml-8">Vence em 30 de dezembro.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Resgatar
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-white">
            <div className="flex items-center justify-start mb-4">
              <img src={LogoPremios} alt="Recompensa 4" className="w-11 h-10 mr-3"/>
              <h3 className="text-2xl">Garrafa Térmica</h3>
            </div>
            <p className="text-left ml-12 mb-12 text-sm">
              Portátil <br /> Durável <br /> Ideal para bebidas quentes
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-white pt-5">
              <p className="ml-8">Vence em 30 de dezembro.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Resgatar
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-white">
            <div className="flex items-center justify-start mb-4">
              <img src={LogoPremios} alt="Recompensa 5" className="w-11 h-10 mr-3"/>
              <h3 className="text-2xl">Caneca</h3>
            </div>
            <p className="text-left ml-12 mb-12 text-sm">
              Compacta <br /> Resistente <br /> Alumínio
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-white pt-5">
              <p className="ml-8">Vence em 30 de dezembro.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Resgatar
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-white">
            <div className="flex items-center justify-start mb-4">
              <img src={LogoPremios} alt="Recompensa 6" className="w-11 h-10 mr-3"/>
              <h3 className="text-2xl">Fone de ouvido bluetooth</h3>
            </div>
            <p className="text-left ml-12 mb-12 text-sm">
              Sem fio <br /> Bateria de longa duração <br /> Som nítido
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-white pt-5">
              <p className="ml-8">Vence em 30 de dezembro.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Resgatar
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Premios;