import React from  'react'
import Header from './Header';
import Main from './main'
import Personal from './personal'
import Carousel from './Carousel'


function Home(){
  return(
    <div>
     <Header/>
     <Main/>
     <Carousel/>
     <Personal/>
    
     </div>
  )
}

export default Home;