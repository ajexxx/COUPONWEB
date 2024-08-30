import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Casbackincrese from './Casbackincrese';

describe('<Casbackincrese />', () => {
  test('it should mount', () => {
    render(<Casbackincrese />);

    const Casbackincrese = screen.getByTestId('Casbackincrese');

    expect(Casbackincrese).toBeInTheDocument();
  });
});