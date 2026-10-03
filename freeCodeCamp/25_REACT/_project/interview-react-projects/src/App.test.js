import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('loads images and navigates between slides', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { author: 'First image', download_url: 'https://example.com/first.jpg' },
      { author: 'Second image', download_url: 'https://example.com/second.jpg' },
    ],
  });

  render(<App />);

  expect(await screen.findByRole('img', { name: 'First image' })).toBeInTheDocument();
  expect(screen.getByText('1 / 2')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /next image/i }));

  await waitFor(() => {
    expect(screen.getByRole('img', { name: 'Second image' })).toBeInTheDocument();
  });
  expect(screen.getByText('2 / 2')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Show image 2' })).toHaveAttribute('aria-current', 'true');

  fireEvent.click(screen.getByRole('button', { name: 'Show image 1' }));

  expect(screen.getByRole('img', { name: 'First image' })).toBeInTheDocument();
  expect(screen.getByText('1 / 2')).toBeInTheDocument();
});
