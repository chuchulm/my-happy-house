import React from 'react'
import '../styles/carousel.css'
import img1 from '../img/myHouse1.png'
import img2 from '../img/myHouse2.jpg'
import img3 from '../img/myHouse3.jpg'



function Carousel(){
    return(
     
     <>
  <div className='total'>
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

        <div className="wave" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
           <path d="M-15.01,43.71 C280.70,236.15 523.93,-117.14 549.32,207.53 L500.22,150.29 L-4.85,153.25 Z" className="wave2">
           </path></svg>
        </div>
    </div>
        </>
    )
}
export default Carousel;


   



   