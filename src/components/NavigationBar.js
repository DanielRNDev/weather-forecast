import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { useStore } from '../contexts/StoreContexts';
import Logo from '../assets/logo.png';

const LogoWrapper = styled.img`
  width: 140px;
`;

const NavbarWrapper = styled(Navbar)`
  background-color: #08bdb7;
`;

const ContainerWrapper = styled(Container)`
  margin-left: 0;
  margin-right: 0;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  float: right;
`
const Temperature = styled.div`
  font-size: 16px;
  cursor: pointer;
`

const NavigationBar = () => {
  const [{ temperatureFlag }, { updateTemperature }] = useStore();
  const isCelsius = temperatureFlag === 'celsius';

  return (
    <NavbarWrapper bg="blue" expand="lg" fixed="top">
      <ContainerWrapper>
        <Navbar.Brand href="/home">
          <LogoWrapper
            src={Logo}
            className="d-inline-block align-top"
            alt="weather-forecast"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey="1">
            <Nav.Link href="/home" eventKey="1">Home</Nav.Link>
            <Nav.Link href="/about" eventKey="2">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <TemperatureWrapper>
          <Temperature onClick={() => updateTemperature({ temperatureFlag: 'celsius' })}>
            {
              isCelsius ? (<b>℃</b>) : '℃'
            }
          </Temperature>
          &nbsp; / &nbsp;
          <Temperature onClick={() => updateTemperature({ temperatureFlag: 'fahrenheit' })}>
            {
              isCelsius ? '℉' : (<b>℉</b>)
            }
          </Temperature>
        </TemperatureWrapper>
      </ContainerWrapper>
    </NavbarWrapper>
  )
}

export default NavigationBar;
