import React from 'react';
import "./Checkout.css"
import Subtotal from "./Subtotal";

function Checkout() {
  return( 
  <div className = "checkout">
      <div className="checkout_left">
          <img className = "checkout_news" src="./images/checkout_add.jpg" alt="" />
          <div>
              <h2 className="checkout title">
                  Your Shopping Basket
              </h2>
              {/* BasketItem */}
              {/* BasketItem */}
              {/* BasketItem */}
              {/* BasketItem */}
              {/* BasketItem */}
          </div>
      </div>
      <div className="checkout_right">
          <Subtotal />
          
      </div>

  </div>
  )
}

export default Checkout;
