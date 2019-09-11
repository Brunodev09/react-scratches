import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (<nav className="navbar bg-dark">
        <h1>{props.myTitle}</h1>
    </nav>)
}


Navbar.defaultProps = {
    myTitle: "Default"
};

Navbar.propTypes = {
    myTitle: PropTypes.string.isRequired
}


export default Navbar;