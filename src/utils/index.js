import React from 'react';
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
