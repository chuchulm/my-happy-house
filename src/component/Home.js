import React from  'react'
import Header from './Header';
import Main from './main'
import Personal from './personal'
import Carousel from './Carousel'
import Portafolio from './Portafolio'
import Footer from './footer'


function Home(){
  return(
    <div>
     <Header/>
     <Main/>
     <Carousel/>
     <Portafolio/>
     <Personal/>
     <Footer/>
    
    
     </div>
  )
}

export default Home;