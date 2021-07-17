import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const WrappedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Label = styled.label`
  width: 800px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid black;
  box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
  letter-spacing: 2px;
  text-transform: uppercase;
  &:focus{
    outline: none;
  }
  transform: skew(-3deg, 1deg);
`;

const LocationResultWrapper = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid black;
  transform: skew(-3deg, 1deg);
`

const LocationResult = styled.div`
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid black;
  &:last-child {
    border: none;
  }
`;

const LocationResultText = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;

const WeatherInfoWrapper = styled(Row)`
  border: 2px solid black;
  box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
  transform: skew(-3deg, 1deg);
  padding: 15px;
  margin-top: 30px;
`;

const NoResult = styled.p`
  font-size: 16px;
  color: #e31010;
  margin-top: 20px;
`;

const LoadingWrapper = styled.div`
  margin-top: 20px;
`;

export {
  WrappedContainer,
  Label,
  Input,
  LocationResultWrapper,
  LocationResult,
  LocationResultText,
  WeatherInfoWrapper,
  NoResult,
  LoadingWrapper
}
