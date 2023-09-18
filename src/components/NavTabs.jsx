import  React  from 'react';
import { PropTypes } from 'prop-types';
import '../App.css';

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

    return (
        <>
         <div>
            {navTabs.map((item) => (
                <a 
                id='nav-tabs'
                href={item.href}
                onClick={(e) => handleClick(e, item.name)}
                key = {item.name}
                className={item.name === currentPage ? 'active' : ''}
                >
                    {item.name}
                </a>
            ))}
         </div>
        </>
    )
};

NavTabs.propTypes = {
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.string
};

export default NavTabs;