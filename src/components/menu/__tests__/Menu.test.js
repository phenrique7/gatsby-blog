import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../Menu';

describe('<Menu /> test suite', () => {
  it('should render the component correctly', () => {
    render(<Menu />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
