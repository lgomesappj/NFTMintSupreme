// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTMintSupreme title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTMintSupreme/i);
    expect(titleElement).toBeInTheDocument();
});
