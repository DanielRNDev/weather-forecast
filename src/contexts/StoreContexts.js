import React, {
  createContext, useContext, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import reducer from './store/reducer';
import { types } from './store/types';

const StoreContext = createContext();

const StoreProvider = (props) => {
  const initialState = {
    temperatureFlag: 'celsius',
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = {
    updateTemperature: (payload) => dispatch({ type: types.UPDATE_TEMPERATURE, payload }),
    updateLoading: (payload) => dispatch({ type: types.UPDATE_LOADING, payload }),
  };

  const value = [state, actions];

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.object,
  context: PropTypes.object,
};

const useStore = () => useContext(StoreContext);

export { StoreContext, useStore, StoreProvider };
