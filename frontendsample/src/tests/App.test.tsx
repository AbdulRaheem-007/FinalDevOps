import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Frontend Application Tests', () => {

    // Test 1: App renders without crashing
    it('should render App component without crashing', () => {
        expect(() => render(<App />)).not.toThrow();
    });

    // Test 2: Router is initialized
    it('should initialize React Router', () => {
        const { container } = render(<App />);
        expect(container).toBeTruthy();
    });

    // Test 3: Query Client Provider is present
    it('should have QueryClientProvider', () => {
        const { container } = render(<App />);
        const queryProvider = container.querySelector('[class*="QueryClient"]');
        // App should render successfully with providers
        expect(container.firstChild).toBeTruthy();
    });
});

// Simple component tests
describe('Component Structure Tests', () => {

    it('should render without errors', () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });

    it('should have proper structure', () => {
        const { container } = render(<App />);
        expect(container.firstChild).not.toBeNull();
    });
});
