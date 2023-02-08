import React from 'react';
import { createRoot } from 'react-dom/client';
import GoBack from '../components/GoBack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<GoBack />);
});