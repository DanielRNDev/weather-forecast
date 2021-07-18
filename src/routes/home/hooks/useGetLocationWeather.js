import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_GET_WEATHER_URL } from '../../../constants';
import { useStore } from '../../../contexts/StoreContexts';

export const useGetLocationWeather = ({
  setShowResultList,
  setSearchValue,
}) => {
  const [{ loading }, { updateLoading }] = useStore();
  const [weatherInfo, setWeatherInfo] = useState(null);
  const handleGetWeather = async (title, woeid) => {
    setSearchValue(title);
    updateLoading(true);
    try {
      const response = await axios.post(API_GET_WEATHER_URL, { woeid });

      setShowResultList(false);

      if (response?.data) {
        setWeatherInfo(response.data);
        updateLoading(false);
      }
    } catch (error) {
      console.log(error);
      updateLoading(false);
    }
  }

  useEffect(() => {
    if (loading) {
      setWeatherInfo(null);
    }
  }, [loading])

  return {
    weatherInfo,
    handleGetWeather
  };
};
