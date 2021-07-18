import React from 'react';
import { renderProvider } from '../../utils';
import Footer from '../Footer'

describe('Footer components', () => {
  test('snapshot testing"', async () => {
    const { getByTestId } = renderProvider({
      children: (
        <Footer />
      ),
    });

    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
