import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Slide1 from '../../Assets/Images/slide1.jpg'
import Slide2 from '../../Assets/Images/slide2.jpg'
import Slide3 from '../../Assets/Images/slide3.jpg'
import './style.css'

const Sliderbar = () => {
     
      

  return (
    <Slide>
    <div className='each-slide-effect'>
          <div >
            <img src={Slide1} alt='slide1'/>
          </div>
          
        
    </div>
    <div className='each-slide-effect'>
          <div >
            <img src={Slide2} alt='slide2'/>
          </div>
          
        
    </div>
    <div className='each-slide-effect'>
          <div >
            <img src={Slide3} alt='slide3'/>
          </div>
          
        
    </div>
    
    </Slide>
  )
}

export default Sliderbar
