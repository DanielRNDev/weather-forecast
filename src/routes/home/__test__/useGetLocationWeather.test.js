import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderHookWrapper } from '../../../utils'
import { API_GET_WEATHER_URL } from '../../../constants';
import { useGetLocationWeather } from '../hooks/useGetLocationWeather';

const mockData = {
  consolidated_weather: [
    {
      id: 6200255239421952,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'SSW',
      created: '2021-07-17T13:04:23.048930Z',
      applicable_date: '2021-07-17',
      min_temp: 4.4,
      max_temp: 14.26,
      the_temp: 13.02,
      wind_speed: 5.0539763556695565,
      wind_direction: 194.56872718737284,
      air_pressure: 1028.5,
      humidity: 35,
      visibility: 16.704943132108486,
      predictability: 68,
    },
    {
      id: 6566883848355840,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'E',
      created: '2021-07-17T13:04:25.393061Z',
      applicable_date: '2021-07-18',
      min_temp: 3.0149999999999997,
      max_temp: 15.809999999999999,
      the_temp: 13.725,
      wind_speed: 5.391056115435191,
      wind_direction: 98.3380551892927,
      air_pressure: 1028.5,
      humidity: 16,
      visibility: 16.95784120734908,
      predictability: 68,
    },
    {
      id: 6383405798260736,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'W',
      created: '2021-07-17T13:04:28.567510Z',
      applicable_date: '2021-07-19',
      min_temp: 3.5500000000000003,
      max_temp: 15.76,
      the_temp: 13.09,
      wind_speed: 2.589409426371325,
      wind_direction: 266.5407820846127,
      air_pressure: 1026,
      humidity: 18,
      visibility: 16.795663326175138,
      predictability: 68,
    },
    {
      id: 6263259121319936,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'WNW',
      created: '2021-07-17T13:04:31.466582Z',
      applicable_date: '2021-07-20',
      min_temp: 4.435,
      max_temp: 16.064999999999998,
      the_temp: 13.785,
      wind_speed: 4.247117328744134,
      wind_direction: 302.35850598005663,
      air_pressure: 1022.5,
      humidity: 20,
      visibility: 16.5669987274318,
      predictability: 68,
    },
    {
      id: 5817475338862592,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'W',
      created: '2021-07-17T13:04:34.378941Z',
      applicable_date: '2021-07-21',
      min_temp: 4.51,
      max_temp: 13.775,
      the_temp: 13.57,
      wind_speed: 8.272809136138287,
      wind_direction: 260.85946579308717,
      air_pressure: 1021.5,
      humidity: 24,
      visibility: 16.466025908693233,
      predictability: 70,
    },
    {
      id: 5681325412450304,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'SW',
      created: '2021-07-17T13:04:37.469122Z',
      applicable_date: '2021-07-22',
      min_temp: -2.405,
      max_temp: 7.73,
      the_temp: 4.28,
      wind_speed: 6.151639823431162,
      wind_direction: 227.99999999999997,
      air_pressure: 1027,
      humidity: 33,
      visibility: 9.999726596675416,
      predictability: 68,
    },
  ],
  time: '2021-07-17T16:59:51.002708+02:00',
  sun_rise: '2021-07-17T06:53:53.336560+02:00',
  sun_set: '2021-07-17T17:34:21.746400+02:00',
  timezone_name: 'LMT',
  parent: {
    title: 'South Africa',
    location_type: 'Country',
    woeid: 23424942,
    latt_long: '-28.479330,24.679930',
  },
  sources: [
    {
      title: 'BBC',
      slug: 'bbc',
      url: 'http://www.bbc.co.uk/weather/',
      crawl_rate: 360,
    },
    {
      title: 'Forecast.io',
      slug: 'forecast-io',
      url: 'http://forecast.io/',
      crawl_rate: 480,
    },
    {
      title: 'HAMweather',
      slug: 'hamweather',
      url: 'http://www.hamweather.com/',
      crawl_rate: 360,
    },
    {
      title: 'Met Office',
      slug: 'met-office',
      url: 'http://www.metoffice.gov.uk/',
      crawl_rate: 180,
    },
    {
      title: 'OpenWeatherMap',
      slug: 'openweathermap',
      url: 'http://openweathermap.org/',
      crawl_rate: 360,
    },
    {
      title: 'Weather Underground',
      slug: 'wunderground',
      url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
      crawl_rate: 720,
    },
    {
      title: 'World Weather Online',
      slug: 'world-weather-online',
      url: 'http://www.worldweatheronline.com/',
      crawl_rate: 360,
    },
  ],
  title: 'Johannesburg',
  location_type: 'City',
  woeid: 1582504,
  latt_long: '-26.204941,28.040030',
  timezone: 'Africa/Johannesburg',
};

describe('verify useGetLocationWeather is working properly', () => {
  test('call get weather success', async () => {
    const setSearchValue = jest.fn();
    const setShowResultList = jest.fn();
    const mock = new MockAdapter(axios);
    mock.onPost(API_GET_WEATHER_URL).reply(200, mockData);

    let render;

    act(() => {
      render = renderHook(
        () =>
          useGetLocationWeather(
            {
              setShowResultList,
              setSearchValue,
            },
          ),
        {
          wrapper: renderHookWrapper(),
        },
      );
    });

    const { waitForNextUpdate, result } = render;
    await act(async () => {
      await result.current.handleGetWeather('Johannesburg', 1582504);
    });
    expect(setSearchValue).toHaveBeenCalled();
    expect(setShowResultList).toHaveBeenCalled();
    waitForNextUpdate(() => {
      expect(result.current.weatherInfo).not.toBe(null);
    });
  });

  test('call get weather error', async () => {
    const setSearchValue = jest.fn();
    const setShowResultList = jest.fn();
    const mock = new MockAdapter(axios);
    mock.onPost(API_GET_WEATHER_URL).reply(500, { error: 'server error'});

    let render;

    act(() => {
      render = renderHook(
        () =>
          useGetLocationWeather(
            {
              setShowResultList,
              setSearchValue,
            },
          ),
        {
          wrapper: renderHookWrapper(),
        },
      );
    });

    const { waitForNextUpdate, result } = render;
    await act(async () => {
      await result.current.handleGetWeather('Johannesburg', 1582504);
    });
    waitForNextUpdate(() => {
      expect(result.current.weatherInfo).toBe(null);
    });
  });
});
