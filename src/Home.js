import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return( 
  <div className='home'>
    <div className="home_container">
      <img className="home_image" src="./images/VMC.png" alt="" />
      <div className="home_row">      
        <Product title='Veg Burger' price = {80} image="./images/veg_burger.jpg" rating = {5}/>
        <Product title='Aaloo Tikki' price = {85} image="./images/aaloo_tikki.jpg" rating = {5}/>/
        
      </div>     
      <div className="home_row">      
        {/* product */}
        <Product title='Veg Fingers' price = {80} image="./images/veg_fingers.png" rating = {5}/>/
        <Product title='Veg Cheese Nuggets' price = {80} image="./images/veg_nuggets.jpg" rating = {5}/>/
        <Product title='Chicken Burger' price = {90} image="./images/chicken_burger.jpg" rating = {5}/>/
        {/* product */}
        {/* product */}
      </div>     
      <div className="home_row">      
        <Product title='Chicken Roll' price = {85} image="./images/veg_burger.jpg" rating = {5}/>/
        {/* product */}
      </div>     
    </div>  
  </div>
  );
}

export default Home;
