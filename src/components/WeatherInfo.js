import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar'
import styled from 'styled-components';
import { round } from 'lodash';
import Clear from '../assets/clear.png';
import LightCloud from '../assets/light-cloud.png';
import HeavyCloud from '../assets/heavy-cloud.png';
import LightRain from '../assets/light-rain.png';
import HeavyRain from '../assets/heavy-rain.png';
import Showers from '../assets/showers.png';
import Weather from '../assets/weather.png';

const ICON_MAPPING = {
  s: Showers,
  c: Clear,
  hc: HeavyCloud,
  lc: LightCloud,
  lr: LightRain,
  hr: HeavyRain
}

dayjs.extend(calendar)

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-right: 1px solid black;
  &:last-child {
    border: none;
  }
`;

const Date = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #08bdb7;
`;

const Info = styled.p`
  font-size: 16px;
  letter-spacing: 1.5px;
`;

const BreakInfo = styled.p`
  font-size: 16px;
  letter-spacing: 1.5px;
  margin-bottom: 0;
`;

const Image = styled.img`
  width: 60px;
  margin-bottom: 20px;
  transform: none;
`;

const WeatherInfo = ({ info, isCelsius }) => {
  const roundedMinTemp = round(info?.min_temp, 1);
  const roundedMinTempFahrenheit = round(info?.min_temp + 33.8, 1);
  const roundedMaxTemp = round(info?.max_temp, 1);
  const roundedMaxTempFahrenheit = round(info?.max_temp + 33.8, 1);
  const weatherIcon = ICON_MAPPING[info?.weather_state_abbr];

  return (
    <Column>
      <Date>
        {dayjs(info?.applicable_date, 'YYYY-MM-DD').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          sameElse: 'DD/MM/YYYY'
        })}
      </Date>
      <Image
        src={weatherIcon ? weatherIcon : Weather}
        alt="weather-forecast"
      />
      <Info>
        <b>{info?.weather_state_name}</b>
      </Info>
      <div>
        <Info>
          <b>Min: </b>
          {`${isCelsius ? roundedMinTemp : roundedMinTempFahrenheit} ${isCelsius ? '℃' : '℉'}`}
        </Info>
        <Info>
          <b>Max: </b>
          {`${isCelsius ? roundedMaxTemp : roundedMaxTempFahrenheit} ${isCelsius ? '℃' : '℉'}`}
        </Info>
        <BreakInfo><b>Humidity:</b></BreakInfo>
        <Info>
          {`${info?.humidity}%`}
        </Info>
      </div>
    </Column>
  )
}

WeatherInfo.propTypes = {
  info: PropTypes.object,
  isCelsius: PropTypes.bool,
}

export default WeatherInfo;
