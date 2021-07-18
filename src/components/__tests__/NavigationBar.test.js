import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderProvider } from '../../utils';
import NavigationBar from '../NavigationBar'

describe('NavigationBar components', () => {
  test('snapshot testing"', async () => {
    const { getByTestId } = renderProvider({
      children: (
        <NavigationBar />
      ),
    });
    expect(getByTestId('navigation-bar')).toBeInTheDocument();
    const celsiusBtn = getByTestId('celsius-btn');
    fireEvent.click(celsiusBtn);
    expect(getByTestId('celsius-bold')).toBeInTheDocument();
  });
});
