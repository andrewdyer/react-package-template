import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render button component', () => {
    render(<Button />);

    const buttonElement = screen.getByText(/Button/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test('should call onClick when button is clicked', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick} />);

    const buttonElement = screen.getByText(/Button/i);
    buttonElement.click();

    expect(onClick).toHaveBeenCalled();
  });
});
