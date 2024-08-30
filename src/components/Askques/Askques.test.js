import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Askques from './Askques';

describe('<Askques />', () => {
  test('it should mount', () => {
    render(<Askques />);

    const Askques = screen.getByTestId('Askques');

    expect(Askques).toBeInTheDocument();
  });
});