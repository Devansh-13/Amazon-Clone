import NavLogo from "../navcomponents/nav-logo/navLogo";
import { useState } from "react";
import NavAddress from "../navcomponents/nav-address/navAddress";
import NavSearch from "../navcomponents/nav-search/navSearch";
import NavLanguage from "../navcomponents/nav-language/navLanguage";
import NavUser from "../navcomponents/nav-user/navUser";
import NavOrder from "../navcomponents/nav-order/navOrder";
import NavCart from "../navcomponents/nav-cart/navCart"


const NavBar = (props) => {

    console.log(props)
    return (
        <div className="navbar">

            <NavLogo/>

            <NavAddress/>
           

            <NavSearch searchText={props.searchText} setSearchText={props.setSearchText}/>
           
            <NavLanguage/>
            
            <NavUser/>

            <NavOrder/>
          
            <NavCart/>
           
        
        </div>
    )
}
export default NavBar;