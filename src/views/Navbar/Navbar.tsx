import clsx from 'clsx';
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import Icon from '../../components/Icon';
import NavItem from '../../components/NavItem';
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';
import useWindowOnScroll from '../../hooks/useWindowOnScroll';
import './Navbar.scss';

export type Props = {
  anchors: string[];
  frontmatter: { brand: React.ReactNode; menuText: string };
  extraItems?: any;
};

export default function Navbar({ anchors, frontmatter, extraItems }: Props) {
  const { brand, menuText } = frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <BootstrapNavbar
      className={clsx('navbar-root', { 'navbar-shrink': shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          {brand}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          <Icon iconName="BarsIcon" />
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {anchors.map((anchor) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
