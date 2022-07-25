import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart } from '@mui/icons-material';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() {
    const[{basket}, dispatch] = useStateValue();
  return(
    <div className = 'header'>
        {/* <Link to = "/" > */}
            <img classname = "header_logo" src = "./images/VMC_black(5).png"/>
        {/* </Link> */}
        <div className = "header_search">
            <input className = "header_searchInput" type="text" />
            <SearchIcon className = "header_searchIcon"/>

        </div>
        <div className="header_nav">
            <div className='header_option'>
                <span className = 'header_optionUC'>For Ordering</span>
                <span className = 'header_optionLC'> Sign In </span>
                
            </div>
            <div className='header_option'>
                <span className = 'header_optionUC'>For Ordering</span>
                <span className = 'header_optionLC'> Sign In </span>

            </div>
            <div className='header_option'>
                <span className = 'header_optionUC'>For Ordering</span>
                <span className = 'header_optionLC'> Sign In </span>

            </div>

            <Link to="/checkout">

                <div className="header_optionBasket">
                    <ShoppingCart />
                    <span className="header_optionLineTwo  header_basketCount">{basket.length}</span>

                </div>
            </Link>
        
        </div>

  </div>
  )
}

export default Header;
