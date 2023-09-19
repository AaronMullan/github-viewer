import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders the header', async () => {
    render(<Header />);
    expect(screen.getByText('Aaron Mullan')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('renders the footer', async () => {
    render(<Footer />);
    expect(screen.getByText(/Git Insight/)).toBeInTheDocument();
  });
});
