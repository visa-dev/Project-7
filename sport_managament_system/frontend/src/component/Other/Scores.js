import React from 'react'
import headline from '../../Assets/Images/heading_line.png'
import team1 from '../../Assets/Images/team1.jpg'
import team2 from '../../Assets/Images/team2.jpg'
import './style.css'


const Scores = () => {
  return (
    <div className='resultarea'>
      <div className='heading'>
          <h1>Latest result</h1>
          <img src={headline} alt='headline'/>
      </div>
      <div className='team'>
        <div className='teamA'>
          <img src={team1} alt='team1'/>
          <h5>teamA</h5>
          <h6>ronaldo : 01</h6>
          <h6>player02 : 01</h6>
          <h6>player03 : 01</h6>
        </div>
        <div className='result'>
          <h1>3</h1>
          <h1>:</h1>
          <h1>4</h1>
        </div>
        <div className='teamB'>
          <img src={team2} alt='team2'/>
          <h5>teamB</h5>
          <h6>Messi : 01</h6>
          <h6>player02 : 02</h6>
          <h6>player03 : 01</h6>



        </div>
        

      </div>
      

      
    </div>
  )
}

export default Scores
