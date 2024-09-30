import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Rank = () => {
  return (
    
    <div className=" bg-[#0c0c0c] text-white" style={{fontFamily: 'Incosolata, monospace'}}>
      <Header/>
      {/* Título do ranking */}
      <h2 className="text-4xl font-bold mb-12 ml-32 mt-12">Ranking</h2>
      
      {/* Seção principal do ranking */}
      <div className=" flex justify-around items-center my-24">

        {/* Primeira seção de ranking */}
        <div className="bg-[#191919] text-white rounded-lg p-8 w-[458px] h-[550px] text-center text-2xl">
          <ul>
            <li className="mb-12">1º - Juninho - 999 pts</li>
            <li className="mb-12">2º - Juninho - 980 pts</li>
            <li className="mb-12">3º - Juninho - 950 pts</li>
            <li className="mb-12">4º - Juninho - 895 pts</li>
            <li className="mb-12">5º - Juninho - 880 pts</li>
            <li>6º - Juninho - 867 pts</li>
          </ul>
        </div>

        {/* Segunda seção de ranking */}
        <div className="bg-[#191919] text-white rounded-lg p-8 w-[458px] h-[550px] text-center text-2xl">
          <ul>
            <li className="mb-12">7º - Juninho - 999 pts</li>
            <li className="mb-12">8º - Juninho - 980 pts</li>
            <li className="mb-12">9º - Juninho - 950 pts</li>
            <li className="mb-12">10º - Juninho - 895 pts</li>
            <li className="mb-12">11º - Juninho - 895 pts</li>
            <li>12º - Juninho - 895 pts</li>
          </ul>
        </div>

        {/* Terceira seção de ranking */}
        <div className="bg-[#191919] text-white rounded-lg p-8 w-[458px] h-[550px] text-center text-2xl">
          <ul>
            <li className="mb-12">13º - Juninho - 999 pts</li>
            <li className="mb-12">14º - Juninho - 980 pts</li>
            <li className="mb-12">15º - Juninho - 950 pts</li>
            <li className="mb-12">16º - Juninho - 895 pts</li>
            <li className="mb-12">17º - Juninho - 895 pts</li>
            <li>18º - Juninho - 895 pts</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Rank;
