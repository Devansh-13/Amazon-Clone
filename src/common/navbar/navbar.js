import AmazonLogo from "../logo/logo.js";
import { Link } from "react-router-dom";
import { useState } from "react";


const NavBar = () => {

    const [inputText,setInputText]=useState('');

    const handleChange=(e)=>{
        setInputText(e.target.value);
        console.log(inputText);
    }

    return (
        <div className="navbar">
            <div className='nav-logo border'>
                {AmazonLogo}
                <span className='text-in'>.in</span>
            </div>

            <div className="nav-address border">
                <span className="add-first">Delivering to Delhi 110008</span>
                <div className="add-icon-container">
                    <div className="add-icon"></div>
                    <span className="add-second">Update location</span>
                </div>
            </div>


            <div className="nav-search">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input className="search-input" type="text" placeholder="Search Amazon.in"  onChange={handleChange}/>
                <div className="search-icon"></div>
            </div>

            <div className="nav-language border">
                <div className="flag-icon"></div>
                <span className="flag-name">EN</span>
                <div className="arrow-icon"></div>
            </div>


            <div className="nav-user border">
                <div className="user-info">
                    <Link to={"/signup"}>
                    <span className="user-line1">Hello, sign in</span>
                    </Link>
                    <span className="user-line2">Account & lists</span>
                </div>
                <div className="arrow-icon-2"></div>
            </div>


            <div className="nav-orders border">
                <span className="order-1">Returns</span>
                <span className="order-2">& Orders</span>
            </div>


            <div className="nav-cart border">
                <span className="cart-count">0</span>
                <div className="cart-icon"></div>
                <span className="cart-line">Cart</span>
            </div>
        
        </div>
    )
}
export default NavBar;