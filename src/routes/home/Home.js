
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import {
  WrappedContainer,
  Input,
  Label,
  LocationResultWrapper,
  LocationResult,
  LocationResultText,
  WeatherInfoWrapper,
  NoResult,
  LoadingWrapper
} from './styles.js';
import { useStore } from '../../contexts/StoreContexts';
import { useSearchWeather } from './hooks/useSearchWeather';
import { useGetLocationWeather } from './hooks/useGetLocationWeather';
import WeatherInfo from '../../components/WeatherInfo';

const HomePage = () => {
  const [{ loading, temperatureFlag }] = useStore();
  const {
    searchValue,
    setSearchValue,
    locationList,
    showResultList,
    setShowResultList,
    isNoResult,
    handleSearchLocation,
  } = useSearchWeather();
  const { weatherInfo, handleGetWeather } = useGetLocationWeather({ setShowResultList, setSearchValue });

  return (
    <WrappedContainer>
      <Label>
        <Input
          value={searchValue}
          type="text"
          placeholder="Enter place or city"
          onChange={handleSearchLocation}
        />
        {
          showResultList && (
            <LocationResultWrapper>
              {
                locationList.map(({ title, woeid }) => (
                  <LocationResult key={title} onClick={() => handleGetWeather(title, woeid)}>
                    <LocationResultText>{title}</LocationResultText>
                  </LocationResult>
                ))
              }
            </LocationResultWrapper>
          )
        }
      </Label>
      {
        isNoResult && <NoResult>
          No result for this location!
        </NoResult>
      }
      {
        loading && (
          <LoadingWrapper>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>
          </LoadingWrapper>
        )
      }
      {
        !!weatherInfo && <WeatherInfoWrapper>
          {
            weatherInfo?.consolidated_weather?.map((info) => (
              <WeatherInfo key={info.id} info={info} isCelsius={temperatureFlag === 'celsius'} />
            ))
          }
        </WeatherInfoWrapper>
      }
    </WrappedContainer>
  )
}

export default HomePage;
