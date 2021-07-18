import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderHookWrapper } from '../../../utils'
import { API_SEARCH_LOCATION_URL } from '../../../constants';
import { useSearchWeather } from '../hooks/useSearchWeather';
import { mockDataLocation } from '../__mocks__';

describe('verify useSearchWeather is working properly', () => {
  test('call get location success with array of locations', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(API_SEARCH_LOCATION_URL).reply(200, mockDataLocation);

    let render;

    act(() => {
      render = renderHook(
        () =>
        useSearchWeather(),
        {
          wrapper: renderHookWrapper(),
        },
      );
    });

    const { waitForNextUpdate, result } = render;
    await act(async () => {
      await result.current.handleSearchLocation({ target: { value: 'HAN' }});
    });
    waitForNextUpdate(() => {
      expect(result.current.searchValue).toEqual('HAN');
      expect(result.current.locationList.length).not.toEqual(0);
    });
  });

  test('call get location success but array of locations is empty', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(API_SEARCH_LOCATION_URL).reply(200, []);

    let render;

    act(() => {
      render = renderHook(
        () =>
        useSearchWeather(),
        {
          wrapper: renderHookWrapper(),
        },
      );
    });

    const { waitForNextUpdate, result } = render;
    await act(async () => {
      await result.current.handleSearchLocation({ target: { value: 'HAN' }});
    });
    waitForNextUpdate(() => {
      expect(result.current.locationList.length).toEqual(0);
      expect(result.current.isNoResult).toEqual(true);
    });
  });

  test('call get location error', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(API_SEARCH_LOCATION_URL).reply(500, { error: 'server error'});

    let render;

    act(() => {
      render = renderHook(
        () =>
        useSearchWeather(),
        {
          wrapper: renderHookWrapper(),
        },
      );
    });

    const { waitForNextUpdate, result } = render;
    await act(async () => {
      await result.current.handleSearchLocation({ target: { value: 'HAN' }});
    });
    waitForNextUpdate(() => {
      expect(result.current.locationList.length).toEqual(0);
    });
  });
});
