import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const LogoWrapper = styled.img`
  width: 140px;
`;

const NavbarWrapper = styled(Navbar)`
  display: flex;
  justify-content: center;
  background-color: #08bdb7;
`;

const Footer = () => (
  <NavbarWrapper expand="lg" fixed="bottom" data-testid="footer">
    <Navbar.Brand href="/home">
      <LogoWrapper
        src={Logo}
        className="d-inline-block align-top"
        alt="weather-forecast"
      />
    </Navbar.Brand>
  </NavbarWrapper>
)

export default Footer;
