import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import App from '../App';

test('renders the base page', () => {
    render(<App />);
    expect(screen.getByText('Message')).toBeInTheDocument();
});