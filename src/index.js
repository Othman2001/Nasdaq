import React from 'react';
import ReactDOM from 'react-dom';
import App from './presantion/App'
import {Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import {config} from './application/state/index'
const overmind = createOvermind(config, {
  devtools:'localhost:3031'
})

ReactDOM.render(
  <Provider value = {overmind}>
  <App/>
  </Provider>,
  document.getElementById('root')
);

