import Image from 'next/image'
import Style from '../../styles/equipos.css'
import Escudo from '../../img/barca.png'
import Espaciado from '../../components/espaciado'
import NoticiaPrincipal from '../../components/noticiaPrincipal'
import Notas from '../../components/notas'
import DosModificado from '../../components/noticiasSecundariasModificada'
import AlterNoticiaSecundarias from '../../components/alterNoticiaSecundarias'
const Equipos = () => {
  return (
    <div>
       <div class="noticias">
            <div class="inicio">
            <Image class="logoEquipo" src={Escudo}/>
                <div style={{left:0}}>
                   <p class="tituloNoticia2">EQUIPO</p>
                   <p class='tituloNoticia1' >FC BARCELONA</p>
                 
                </div> 
            </div>
            <br />
            <br />
          <NoticiaPrincipal></NoticiaPrincipal>
           <br />
           <br />
           <DosModificado></DosModificado>
           <br />
           <br />
           <AlterNoticiaSecundarias></AlterNoticiaSecundarias>
            
            <Notas></Notas>
           
           

        </div>
      
      
    </div>
  )
}

export default Equipos
