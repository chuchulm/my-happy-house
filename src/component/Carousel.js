import React from 'react'
import '../styles/carousel.css'
import img1 from '../img/myHouse1.png'
import img2 from '../img/myHouse2.jpg'
import img3 from '../img/myHouse3.jpg'
import oveja from '../img/oveja.png'



function Carousel(){
    return(
     
     <>

      
  <div className='total'>

  <img src={oveja}  alt='imagen' className='oveja' width="460px" height="250px"/>

      <div className="tituloCarousel">
       <h3 >Ven a disfrutar<span className='VEN'> esta increible</span> Aventura</h3>
      </div>

        <div id="carouselExampleIndicators" className="carousel slide  carouselHouse1" data-ride="carousel">
           <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>

           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src={img1} className="carouselHouse" alt="..."/>
             </div>
             <div className="carousel-item">
               <img src={img2} className="carouselHouse" alt="..."/>
             </div>
             <div className="carousel-item">
               <img src={img3} className="carouselHouse" alt="..."/>
             </div>
           </div>

           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
           </a>
           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
           </a>
        </div>

        
    </div>
        </>
    )
}
export default Carousel;


   



   