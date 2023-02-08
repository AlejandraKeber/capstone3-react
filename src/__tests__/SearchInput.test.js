import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchInput from '../components/SearchInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<SearchInput />);
});