import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Topstore from './Topstore';

describe('<Topstore />', () => {
  test('it should mount', () => {
    render(<Topstore />);

    const Topstore = screen.getByTestId('Topstore');

    expect(Topstore).toBeInTheDocument();
  });
});