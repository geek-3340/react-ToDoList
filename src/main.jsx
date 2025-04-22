import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Component} from './Component';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Component />
  </StrictMode>
);
