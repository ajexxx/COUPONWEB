import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Highcasback from './Highcasback';

describe('<Highcasback />', () => {
  test('it should mount', () => {
    render(<Highcasback />);

    const Highcasback = screen.getByTestId('Highcasback');

    expect(Highcasback).toBeInTheDocument();
  });
});