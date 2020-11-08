import React from 'react'
import '../styles/navBar.css'
import Logo from '../img/logo.jpg'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'


function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light  navBarColor">
          <img src={Logo} alt='imagen'  width="150px" height="150px" className='logo-navBar'/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link  colorLetras" href="#">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link colorLetras" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link colorLetras" href="#">Eventos</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle colorLetras" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Servicios
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Camara</a>
                <a className="dropdown-item" href="#">seguridad</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Opina</a>
              </div>
            </li>
            <li className="nav-item">
             
            </li>
          </ul>
          <a href="#" title="Flaticon"><img src={facebook} alt='imagen'  width="30px" height="30px" className='redes'/></a>
          <a href="#" title="Flaticon"><img src={instagram} alt='imagen'  width="30px" height="30px" className='redes'/></a>
          <a href="#" title="Flaticon"><img src={whatsapp} alt='imagen'  width="30px" height="30px" className='redes1'/></a>
        </div>
      </nav>

    )
}
export default NavBar;