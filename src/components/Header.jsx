import { React } from 'react';
import { PropTypes } from "prop-types";
import  NavTabs  from "./NavTabs";

function Header ({ setCurrentPage, currentPage }) {
    return (
        <div className=''>
            <h1> Zoe Edge </h1>
            <NavTabs setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
};

Header.propTypes = {
    setCurrentPage : PropTypes.func,
    currentPage : PropTypes.string
}
 
export default Header;