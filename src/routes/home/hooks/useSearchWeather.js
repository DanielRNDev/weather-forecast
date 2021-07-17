import { useState, useEffect } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { API_SEARCH_LOCATION_URL } from '../../../constants';
import { useStore } from '../../../contexts/StoreContexts';

export const useSearchWeather = () => {
  const [{ loading }, { updateLoading }] = useStore();
  const [searchValue, setSearchValue] = useState('');
  const [locationList, setLocationList] = useState([]);
  const [showResultList, setShowResultList] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false)
  const handleSearchLocation = (e) => {
    const value = e?.target?.value;
    setSearchValue(value)
  }

  useEffect(() => {
    if (searchValue.length >= 3) {
      (async () => {
        updateLoading(true);
        try {
          const response = await axios.post(API_SEARCH_LOCATION_URL, {
            location: searchValue
          });

          updateLoading(false);

          if (isEmpty(response?.data)) {
            setLocationList([]);
            setShowResultList(false);
            setIsNoResult(true);
            return;
          }

          if (!isEmpty(response?.data)) {
            setLocationList(response.data)
            setShowResultList(true);
            setIsNoResult(false);
          }
        } catch (error) {
          updateLoading(false);
          console.log(error);
        }
      })();
    }
  }, [searchValue])

  useEffect(() => {
    if (loading) {
      setLocationList([]);
      showResultList && setShowResultList(false);
      isNoResult && setIsNoResult(false);
    }
  }, [loading])

  return {
    searchValue,
    setSearchValue,
    locationList,
    showResultList,
    setShowResultList,
    isNoResult,
    handleSearchLocation,
  };
};
