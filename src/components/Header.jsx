import { PropTypes } from "prop-types";
import { NavTabs } from "./NavTabs";

function Header (setCurrentPage, currentPage) {
    return (
        <div>
            <h1> Zoe Edge </h1>
            <NavTabs/>
        </div>
    )
};

export default Header;