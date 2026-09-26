import { startTransition } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App';

typeof window != 'undefined' &&
  ('requestIdleCallback' in window
    ? requestIdleCallback(() => ReactGA.initialize('G-HWLK0PZVBM'))
    : setTimeout(() => ReactGA.initialize('G-HWLK0PZVBM'), 0));

const base = import.meta.env.BASE_URL;
const basename = base === '/' ? undefined : base.replace(/\/$/, '');

const root = createRoot(document.getElementById('root'));

startTransition(() => {
  root.render(
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>,
  );
});
