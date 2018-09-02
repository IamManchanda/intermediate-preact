import React, { render } from 'preact-compat';
import App from './app';

/* Grab App Root & Hydrate it into the `App` */
const appRoot = document.getElementById('app');
render(<App />, appRoot);
