import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from '../contexts/StoreContexts';

export const renderHookWrapper = () => ({ children }) => {
  const context = {
    temperatureFlag: 'celsius',
    loading: false,
  };

  return (
    <StoreProvider context={{ ...context }}>
      {children}
    </StoreProvider>
  );
};

export const renderProvider = ({ children }) => {
  const context = {
    temperatureFlag: 'celsius',
    loading: false,
  };

  return render(
    <StoreProvider context={context}>
      {children}
    </StoreProvider>
  );
};
