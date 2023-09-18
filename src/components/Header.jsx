import { React } from 'react';
import { PropTypes } from "prop-types";
import  NavTabs  from "./NavTabs";

function Header ({ setCurrentPage, currentPage }) {
    return (
        <div>
            <h1> Zoe Edge </h1>
            <NavTabs />
        </div>
    )
};

Header.propTypes = {
    setCurrentPage : PropTypes.func,
    currentPage : PropTypes.string
}
 
export default Header;