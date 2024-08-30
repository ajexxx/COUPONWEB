import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Couponapi from './Couponapi';

describe('<Couponapi />', () => {
  test('it should mount', () => {
    render(<Couponapi />);

    const Couponapi = screen.getByTestId('Couponapi');

    expect(Couponapi).toBeInTheDocument();
  });
});