import React from 'react'
import { render, fireEvent,cleanup,screen } from '@testing-library/react'
import StockAbout from '../StockAbout'
afterEach(cleanup);


describe("stock About page" , ()=>{
    it("should render the stock component with the props correctly " , ()=>{
        render( <StockAbout desc = "stock data " indstuary = "medical"   url = "Www.apple.com"/>)

        const desc = screen.getByText(/data/i)
        const indstuary = screen.getByText(/medical/i)
        const url = screen.getByText(/Visit./i)
     
        expect(desc).toBeInTheDocument()
        expect(indstuary).toBeInTheDocument()
        expect(url).toBeInTheDocument()

    })
})