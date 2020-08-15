import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/MEMORY TENNIS LET'S GO!/i);
  expect(welcomeElement).toBeInTheDocument();
});
