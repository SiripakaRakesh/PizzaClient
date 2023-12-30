import React from 'react';
import HomeHead from './Home/HomeHead';
import PizzaFlex from './Home/PizzaFlex';
import PizzaDisplay from './Home/PizzaDisplay';
import TrackPizza from './Home/TrackPizza';
import Navbar from '../components/static/Navbar';
import Footer1 from '../components/static/Footer';

const Home = () => {
  return (
    <div className='home-container'>
       <div className="home-container-contents">
        <Navbar/>
        <HomeHead/>
        <PizzaDisplay/>
        <PizzaFlex/>
        <TrackPizza/>
        <Footer1/>
       </div>
    </div>
  )
}

export default Home