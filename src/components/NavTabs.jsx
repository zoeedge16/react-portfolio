import { React } from 'react';
import { PropTypes } from 'prop-types';

const navTabs = [
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Portfolio',
        href: '/portfolio'
    },
    {
        name: 'Resume',
        href: '/resume'
    }
]

function NavTabs( { setCurrentPage, currentPage }) {
    function handleClick (e, page) {
        e.preventDefault();
        setCurrentPage(page)

    };

    function currentNav (item, currentPage) {
        if ( item.name === currentPage ) {
            return (
                <a href={item.href} onClick={(e) => handleClick(e, item.name)} key = {item.name}>{item.name}</a>
            )
        } else {
            return (
                <a href={item.href} onClick={(e) => handleClick(e, item.name)} key = {item.name}>{item.name}</a>
            )
        }
    };

    return (
        <div>
            {navTabs.map((item) => (
                currentNav(item, currentPage)
            ))}
        </div>
    )
};

NavTabs.propTypes = {
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.string
};

export default NavTabs;