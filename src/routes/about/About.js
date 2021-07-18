
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const WrappedContainer = styled(Container)`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 50px;
`;

const TextBold = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;
`;

const AboutPage = () => (
  <WrappedContainer data-testid="about-page">
    <TextBold>
      Author:
      </TextBold>
    <Nav.Link href='https://github.com/DanielRNDev'>https://github.com/DanielRNDev</Nav.Link>
    <TextBold>
      API:
    </TextBold>
    <Nav.Link href='https://www.metaweather.com/api'>https://www.metaweather.com/api</Nav.Link>
    <TextBold>
      Logo design:
    </TextBold>
    <Nav.Link href='https://looka.com'>https://looka.com</Nav.Link>
    <TextBold>
      Icon:
    </TextBold>
    <Nav.Link href='https://www.flaticon.com'>https://www.flaticon.com</Nav.Link>
  </WrappedContainer>
)

export default AboutPage;
