import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';

describe('<Main />', () => {
  test('it should mount', () => {
    render(<Main />);

    const Main = screen.getByTestId('Main');

    expect(Main).toBeInTheDocument();
  });
});