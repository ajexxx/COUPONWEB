import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Aboutcopon from './Aboutcopon';

describe('<Aboutcopon />', () => {
  test('it should mount', () => {
    render(<Aboutcopon />);

    const Aboutcopon = screen.getByTestId('Aboutcopon');

    expect(Aboutcopon).toBeInTheDocument();
  });
});