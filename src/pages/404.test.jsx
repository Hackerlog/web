import React from 'react';

import FourOhFour from './404';
import renderWithRouter from '../utils/test-utils';

describe('<FourOhFour />', () => {
  it('should render a page with 404', () => {
    const { getByTestId } = renderWithRouter(<FourOhFour />, { route: 'unmatched-route' });
    expect(getByTestId('404')).toBeDefined();
  });
});
