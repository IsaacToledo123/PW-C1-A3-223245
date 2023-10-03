import React from "react";
import Image from "next/image";
import NoticiaPrincipal from "../../components/noticiaPrincipal";
import DosNoticias from "../../components/noticiasSecundarias"
import Style from "../../styles/inicio.css";
import Notas from "../../components/notas";
import Equipo from '../../components/equipo'
const page = () => {
  return (
    <div>
      <div class="noticias">
        <h1 class="tituloNoticia">Top News</h1>
        <NoticiaPrincipal></NoticiaPrincipal>

     <Notas></Notas>
        <DosNoticias></DosNoticias>
<br />
<br />
        <div class="shorts">
          
          <Equipo ></Equipo>
      
          <Equipo></Equipo>
         
        </div>
        
      </div>
    </div>
  );
};

export default page;
