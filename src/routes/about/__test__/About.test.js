import React from 'react';
import { renderProvider } from '../../../utils';
import About from '../About'

describe('About page', () => {
  test('snapshot testing"', async () => {
    const { getByTestId } = renderProvider({
      children: (
        <About />
      ),
    });

    expect(getByTestId('about-page')).toBeInTheDocument();
  });
});
