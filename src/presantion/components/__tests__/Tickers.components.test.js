import React from 'react'
import { render, fireEvent,cleanup,screen } from '@testing-library/react'
import Tickers from '../Tickers.components'
import App from '../../App'
import Main from '../Main.Component'
import { BrowserRouter as Router } from 'react-router-dom';
afterEach(cleanup);

it('should render the ticker compnent', () => {
    render( 
      <Router>
        <Tickers title = "AA"
        name = "align technolgy "
        market = "stock" />
      </Router>
    
 )
const titleElemnet = screen.getByText(/AA/i);
const nameElment = screen.getByText(/align/i);
const marketElement = screen.getByTestId("101");
expect(titleElemnet).toBeInTheDocument()
expect (nameElment).toBeInTheDocument()
expect (marketElement).toBeInTheDocument()

})