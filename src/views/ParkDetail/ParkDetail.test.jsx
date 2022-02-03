import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ParkDetail from './ParkDetail';

test('displays an individual park after clicked', async () => {
  render(
    <MemoryRouter initialEntries={['park/77E0D7F0-1942-494A-ACE2-9004D2BDC59E']}>
      <ParkDetail />
    </MemoryRouter>
  );

  const heading = await screen.findByRole('heading', {
    name: /Abraham Lincoln Birthplace National Historical Park/i,
  });
  expect(heading).toBeInTheDocument();
});
