import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './NavItem.scss';

const NavItem = ({ to, onClick, children, offset }) => {
  return (
    <Nav.Item>
      <Link
        className="nav-link cursor-pointer"
        activeClass="active"
        to={to}
        spy
        duration={100}
        isDynamic
        smooth="easeOutQuint"
        onClick={onClick}
        offset={offset}
      >
        {children || to}
      </Link>
    </Nav.Item>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  offset: PropTypes.number,
};

NavItem.defaultProps = {
  to: '',
  onClick: null,
  children: null,
};

export default NavItem;
