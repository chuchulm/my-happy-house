import React from 'react'
import '../styles/personal.css';
import Logo from '../img/first-person.jpg'
import rana from '../img/rana.png'


function Personal(){
    return(
        <section className="testimony">
        <div className="container">
            <h2 className="Encabezado">Nuestra Familia</h2>
            <p className="Encabezado"> </p>

            <div className="testimony-container">
                <div className="testimony__card">
                    <img src={Logo} className="testimony__img"/>
                    <div className="testimony__copy">
                        <i className='bx bxl-google testimony__logo'></i>
                        <div className="testimony__info">
                            <h3 className="testimony__name">Francisco Puleo </h3>
                            <p className="testimony__position">El mas pato de todos</p>
                        </div>
                    </div>
                </div>

                <div className="testimony__card">
                    <img src={Logo} className="testimony__img"/>
                    <div className="testimony__copy">
                        <i className='bx bxl-apple testimony__logo'></i>
                        <div className="testimony__info">
                            <h3 className="testimony__name">Andres García</h3>
                            <p className="testimony__position">Director de Apple México</p>
                        </div>
                    </div>
                </div>

                <div className="testimony__card">
                    <img src={Logo} className="testimony__img"/>
                    <div className="testimony__copy">
                        <i className='bx bxl-apple testimony__logo'></i>
                        <div className="testimony__info">
                            <h3 className="testimony__name">Carlas Paredes</h3>
                            <p className="testimony__position">Directora</p>
                        </div>
                    </div>
                </div>

                <img src={rana}  alt='imagen' className='rana' width="490px" height="300px"/>
                
            </div>
        </div>
    </section>
    )
}
export default Personal;