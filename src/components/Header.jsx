import '../App.css';
import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { BiFontSize } from 'react-icons/bi';

function Header(props) {
    return (
        <div className="text">
          <div>
      <img src="./images/Group 2.png"  alt="pic"/> 
         </div>

<div className="navbar"> 
<a href="#OurPizzasFlavours-section">PIZZA</a>
<a href="#SpecificDeals-section">Specific Deals</a>  
<a href="#Combo-section">Combo</a>
<a href="#Appetizers-section">Appetizers</a>
<a href="#Beverages-section">Beverages</a> 
</div>
    </div>
    );
}

export default Header;
