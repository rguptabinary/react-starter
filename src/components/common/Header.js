import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingDots from './LoadingDots';
import { Link } from 'react-router-dom';


const Header = ({ loading }) => {
    return (
        <nav>
            <Link to="/" >Home</Link>
            {"|"}
            <Link to="/courses" >Courses</Link>
            {"|"}
            <Link to="/about" >About</Link>
            {loading && <LoadingDots interval={100} dots={5} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Header;