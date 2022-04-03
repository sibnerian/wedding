import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './NavItem.scss';

const NavItem = ({ href, to, onClick, children, offset }) => {
  if (href) {
    return (
      <Nav.Item>
        <Nav.Link href={href}>{children}</Nav.Link>
      </Nav.Item>
    );
  }
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
  href: PropTypes.string,
};

NavItem.defaultProps = {
  to: '',
  href: null,
  onClick: null,
  children: null,
};

export default NavItem;
