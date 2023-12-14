
import Header from '../../component/common/Header.js'
import Footer from '../../component/common/Footer.jsx'

import React from 'react'
import Sliderbar from '../../component/Other/Sliderbar.js';
import Scores from '../../component/Other/Scores.js';
import Schedule from '../../component/Other/Schedule.js';
import News from '../../component/Other/News.js';

import { userNavLinks } from '../../Assets/Data/HeaderItems.jsx';

function Home() {
  return (
    <div>

      <Header navLinks={userNavLinks} />
      <Sliderbar></Sliderbar>
      <Scores></Scores>
      <Schedule></Schedule>
      <News></News>
      <Footer></Footer>
    </div>
  )
}

export default Home;

