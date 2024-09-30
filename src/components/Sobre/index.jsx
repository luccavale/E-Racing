import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom"
import ibirapuera from  '../../assets/ibirapuera.jpg';
import cidadesp from  '../../assets/cidade-sp.png';
import pcoc from  '../../assets/pc-oc.jpg';





const Sobre = () => {
  return (
    <div className="text-white bg-[#0c0c0c]"  style={{fontFamily: 'Incosolata, monospace'}}>
      <Header/>
      <section className="flex justify-between items-center mx-auto mb-24 mt-20 w-11/12 max-w-6xl">
        <p className="text-lg w-[468px]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi ante accumsan a sagittis praesent. Neque nisi luctus mi faucibus commodo suspendisse rutrum donec ultrices. Adipiscing porta egestas odio; velit venenatis morbi. Est ullamcorper hac a pellentesque cubilia elit. Sodales lacinia odio malesuada convallis varius potenti bibendum dapibus sagittis. Dignissim vehicula pretium, luctus ad diam posuere. Eleifend metus nostra in metus volutpat nostra nec volutpat dapibus.
        </p>
        <img
          src={ibirapuera}
          alt="Ibirapuera"
          className="w-[468px] h-[364px] object-cover rounded-lg"
        />
      </section>

      <section className="flex justify-between items-center mx-auto mb-24 mt-20 w-11/12 max-w-6xl">
        <img
          src={cidadesp}
          alt="Cidade de SP"
          className="w-[468px] h-[364px] object-cover rounded-lg"
        />
        <p className="text-lg w-[468px]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi ante accumsan a sagittis praesent. Neque nisi luctus mi faucibus commodo suspendisse rutrum donec ultrices. Adipiscing porta egestas odio; velit venenatis morbi. Est ullamcorper hac a pellentesque cubilia elit. Sodales lacinia odio malesuada convallis varius potenti bibendum dapibus sagittis. Dignissim vehicula pretium, luctus ad diam posuere. Eleifend metus nostra in metus volutpat nostra nec volutpat dapibus.
        </p>
      </section>

      <section className="flex justify-between items-center mx-auto mb-24 mt-20 w-11/12 max-w-6xl">
        <p className="text-lg w-[468px]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi ante accumsan a sagittis praesent. Neque nisi luctus mi faucibus commodo suspendisse rutrum donec ultrices. Adipiscing porta egestas odio; velit venenatis morbi. Est ullamcorper hac a pellentesque cubilia elit. Sodales lacinia odio malesuada convallis varius potenti bibendum dapibus sagittis. Dignissim vehicula pretium, luctus ad diam posuere. Eleifend metus nostra in metus volutpat nostra nec volutpat dapibus.
        </p>
        <img
          src={pcoc}
          alt="Praça"
          className="w-[468px] h-[364px] object-cover rounded-lg"
        />
      </section>
      <Footer/>
    </div>
  );
};



export default Sobre;