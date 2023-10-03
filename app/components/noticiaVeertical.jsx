import React from 'react'
import Style from '../styles/dosModificado.css'
import Image from 'next/image'
import Hijo2 from '../img/hijo2.png'
const noticiaHorizontal = () => {
  return (
    <div class="dosNoticias-hijo1">
       <Image src={Hijo2} class="imgDos1" />
                <div>
                    <h2 class="">Portadas del día: Arranca la Liga F, rumores en Can Barça...</h2>
                    <br />
                    <br />
                  
                </div>
    </div>
  )
}

export default noticiaHorizontal
