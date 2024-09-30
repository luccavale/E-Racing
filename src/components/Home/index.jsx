import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import background from  '../../assets/background.jpg';
import backgroundsection2 from  '../../assets/background-section2.png';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-[#0c0c0c] text-white  font-sans w-screen" style={{fontFamily: 'Incosolata, monospace'}}>
      {/* Header */}

      <div className=" h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
        <Header/>
      </div>
      {/* Seção Intermediária */}
      <div className="bg-cover bg-center py-20" >
        <ul className="text-center text-2xl space-y-4 flex justify-between align-center mx-[100px]">
          <li>Receba prêmios</li>
          <li>Compita com outras pessoas</li>
          <li>Seja o mais rápidos</li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="h-screen flex justify-around items-center py-16" style={{ backgroundImage: `url(${backgroundsection2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        {/* Rank Section */}
        <div className="bg-[#0c0c0c] text-white rounded-lg p-8 w-[458px] h-[550px] text-center ">
          <h2 className="text-4xl mb-8">Rank</h2>
          <ul className="flex flex-col gap-9 text-[28px] font-mono mb-8">
            <li>1º - Juninho - 999 pts</li>
            <li>2º - Juninho - 980 pts</li>
            <li>3º - Juninho - 950 pts</li>
            <li>4º - Juninho - 895 pts</li>
          </ul>
          <Link to="/Rank">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 w-full">Ver o rank completo</button>
          </Link>
        </div>

        {/* Sobre Section */}
        <div className="text-white w-1/2 text-center">
          <h2 className="text-4xl mb-8">Sobre</h2>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus nibh vel aliquet sodales.
            Feugiat turpis velit enim ultricies consectetur tempus eu rutrum.
          </p>
          <Link to="/Sobre">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64">Saiba mais</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
