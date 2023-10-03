import Image from "next/image"
import Hijo1 from '../img/hijo1.png'
import Hijo2 from '../img/hijo2.png'
import Style from '../styles/dosNoticias.css'

const dosNoticias = () => {
  return (
    <div>
         <div class="dosNoticias">
            <div class="dosNoticias-hijo">
             <Image src={Hijo1} class="imgDos" />
                <div>
                    <h2>Portadas del día: Arranca la Liga F, rumores en Can Barça...</h2>
                    <br />
                    <br />
                    <p>
                        Ya ha sonado el despertador y es hora de arrancar el día echándole un vistazo a las noticias más
                        importantes que nos traen las portadas de los periódicos nacionales. Desde el...
                    </p>
                </div>

            </div>
            <div class="dosNoticias-hijo">
            <Image src={Hijo2} class="imgDos" />
                <div>
                    <h2 class="">Portadas del día: Arranca la Liga F, rumores en Can Barça...</h2>
                    <br />
                    <br />
                    <p>
                        Ya ha sonado el despertador y es hora de arrancar el día echándole un vistazo a las noticias más
                        importantes que nos traen las portadas de los periódicos nacionales. Desde el...
                    </p>
                </div>

            </div>


        </div>
      
    </div>
  )
}

export default dosNoticias
