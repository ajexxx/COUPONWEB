import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Lokingformore from './Lokingformore';

describe('<Lokingformore />', () => {
  test('it should mount', () => {
    render(<Lokingformore />);

    const Lokingformore = screen.getByTestId('Lokingformore');

    expect(Lokingformore).toBeInTheDocument();
  });
});