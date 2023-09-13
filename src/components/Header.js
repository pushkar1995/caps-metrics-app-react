import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import backIcon from '../images/icon-back.png';

function Header({ title, back }) {
  return (
    <header>
      <div className="lhead">{(back === 'true') ? <Link to="/"><img src={backIcon} alt="" /></Link> : ''}</div>
      <div className="thead"><h1>{title}</h1></div>
      <div className="rhead">&nbsp;</div>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool.isRequired,
};
export default Header;
