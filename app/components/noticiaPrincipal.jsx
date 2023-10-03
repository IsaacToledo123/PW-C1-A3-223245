import Css from '../styles/noticiaPrincipal.css'
import Noticia from '../img/barca1.png'
import Image from 'next/image'
import Guardar from '../svg/icon.svg'

const noticiaPrincipal = () => {
  return (
    <div>
         
        <div class="noticiaPrincipal">
        <Image className='noticia' src={Noticia} />
            <div>
                <h1 class="title">Portadas del día: Arranca la Liga F, rumores en Can Barça...</h1>
                <p class="hola">
                    Ya ha sonado el despertador y es hora de arrancar el día echándole un vistazo a las noticias más
                    importantes que nos traen las portadas de los periódicos nacionales. Desde el...
                </p>
            </div>
            <div class="autor">
              <Guardar class='guardar'></Guardar>
            </div>
        </div>
      
    </div>
  )
}

export default noticiaPrincipal
