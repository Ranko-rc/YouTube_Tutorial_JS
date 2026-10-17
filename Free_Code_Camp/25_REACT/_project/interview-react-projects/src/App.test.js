import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the tabs and displays the selected tab content', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<App />);

  try {
    expect(screen.getByRole('button', { name: 'Tab 1' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('This is content for Tab 1')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Tab 2' }));

    expect(screen.getByRole('button', { name: 'Tab 2' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('This is content for Tab 2')).toBeInTheDocument();
    expect(screen.queryByText('This is content for Tab 1')).not.toBeInTheDocument();
  } finally {
    logSpy.mockRestore();
  }
});
