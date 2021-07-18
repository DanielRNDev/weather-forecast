import React from 'react';
import { renderProvider } from '../../../utils';
import Home from '../Home';
import { mockDataLocation, mockDataWeather } from '../__mocks__';

jest.mock('../hooks/useSearchWeather', () => ({
  useSearchWeather: jest.fn().mockReturnValue({})
}));

import { useSearchWeather } from '../hooks/useSearchWeather';

jest.mock('../hooks/useGetLocationWeather', () => ({
  useGetLocationWeather: jest.fn().mockReturnValue({})
}));

import { useGetLocationWeather } from '../hooks/useGetLocationWeather';

describe('Home page', () => {
  test('test render location', async () => {
    useSearchWeather.mockReturnValue({
      searchValue: 'singapore',
      setSearchValue: jest.fn(),
      locationList: mockDataLocation,
      showResultList: jest.fn(),
      setShowResultList: true,
      isNoResult: false,
      handleSearchLocation: jest.fn(),
    });

    useGetLocationWeather.mockReturnValue({
      weatherInfo: null,
      handleGetWeather: jest.fn(),
    })

    const { getByTestId } = renderProvider({
      children: (
        <Home />
      ),
    });

    expect(getByTestId('home-page')).toBeInTheDocument();
    expect(getByTestId('result-list')).toBeInTheDocument();
  });

  test('test render location empty', async () => {
    useSearchWeather.mockReturnValue({
      searchValue: 'singapore',
      setSearchValue: jest.fn(),
      locationList: [],
      showResultList: jest.fn(),
      setShowResultList: true,
      isNoResult: true,
      handleSearchLocation: jest.fn(),
    });

    useGetLocationWeather.mockReturnValue({
      weatherInfo: null,
      handleGetWeather: jest.fn(),
    })

    const { getByTestId } = renderProvider({
      children: (
        <Home />
      ),
    });

    expect(getByTestId('empty-result')).toBeInTheDocument();
  });

  test('test render location weather', async () => {
    useSearchWeather.mockReturnValue({
      searchValue: 'singapore',
      setSearchValue: jest.fn(),
      locationList: mockDataLocation,
      showResultList: jest.fn(),
      setShowResultList: true,
      isNoResult: false,
      handleSearchLocation: jest.fn(),
    });

    useGetLocationWeather.mockReturnValue({
      weatherInfo: mockDataWeather,
      handleGetWeather: jest.fn(),
    })

    const { getByTestId } = renderProvider({
      children: (
        <Home />
      ),
    });

    expect(getByTestId('weather-info')).toBeInTheDocument();
  });
});
