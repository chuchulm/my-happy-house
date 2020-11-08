import React from 'react'
import '../styles/main.css';
import FondoVerde from '../img/fondoVerde.jpg';
import elefante from '../img/elefante.png'
import video from '../img/videoHappyHouse.mp4';





function Main(){
    return(
        <>
        
        <section className="contenedor">
                   
                    <div className="sobre-nosotros">
                        
                            <video className="video-about-us"  autoplay controls loop audio>
                              <source src={video} type="video/mp4"></source>
                            </video>
                    </div>

                        <div className="contenido-textos">
                            <div className="contenido-texto">
                                <h3>My House Happy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                            </div>
                        </div>

                        <img src={elefante}  alt='imagen' className='elefante' width="460px" height="250px"/>
        </section>
                

        </>
                  
    )
}
export default Main;





/*












*/
