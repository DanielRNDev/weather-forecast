import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderHookWrapper } from '../../../utils'
import { API_GET_WEATHER_URL } from '../../../constants';
import { useGetLocationWeather } from '../hooks/useGetLocationWeather';
import { mockDataWeather } from '../__mocks__';

describe('verify useGetLocationWeather is working properly', () => {
  test('call get weather success', async () => {
    const setSearchValue = jest.fn();
    const setShowResultList = jest.fn();
    const mock = new MockAdapter(axios);
    mock.onPost(API_GET_WEATHER_URL).reply(200, mockDataWeather);

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
