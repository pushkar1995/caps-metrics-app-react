import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { FaHome, FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import './Navbar.scss';

const Navbar = ({ title, back }) => (
  <>
    <nav className="nav__div">
      <Link to="/" className="nav__link">
        {back ? <MdOutlineArrowBackIosNew /> : <FaHome />}
      </Link>
      <h1 className="nav__title">{title}</h1>
      <div className="nav__icons">
        <FaSearch />
        <FiSettings />
      </div>
    </nav>
  </>
);

Navbar.defaultProps = {
  title: '',
  back: false,
};

Navbar.propTypes = {
  title: PropTypes.string,
  back: PropTypes.bool,
};

export default Navbar;
