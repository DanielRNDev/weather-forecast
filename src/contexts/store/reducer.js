import { types } from './types';

export const storeReducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE_TEMPERATURE:
      return {
        ...state,
        temperatureFlag: action.payload.temperatureFlag,
      };

    case types.UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default storeReducer;
