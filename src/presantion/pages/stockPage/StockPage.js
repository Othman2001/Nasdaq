import React from 'react'
import {   useParams} from "react-router-dom"
import useFetch from '../../../application/custom-hooks/useFetch';
import { useState, useEffect } from 'react';
import{ PageContainer,Container} from '../../styles/StockDataContainer.stockpage.style'
import {useAppState , userActions,useEffects,useReaction } from '../../../application/state/stocks/'
import StockData from '../../components/StockData'
import StockAbout from '../../components/StockAbout'
import  NavBar from '../../components/Navbar.Component'
import {OverViewContainer } from '../../styles/OverView.styles'
function  StockPage() {
  const today = new Date()
  const yesterday = new Date(today)
  
  yesterday.setDate(yesterday.getDate() - 2)

    const {stock} = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL  = `https://api.polygon.io/v1/meta/symbols/${stock}/company?&apiKey=${API_KEY}`
    const DailyURl = `https://api.polygon.io/v1/open-close/AAPL/${yesterday.toISOString().slice(0,10)}?adjusted=true&apiKey=${API_KEY}`
const actions = userActions();
const state  = useAppState()

 useEffect(() => {
   actions.stokcs.fetchStockData(URL)
 actions.stokcs.fetchDailyData(DailyURl)
 }, [])

 {
}
const {  stockDetalies , dailyData} = state.stokcs
console.log(stockDetalies);

    return (
        <PageContainer>
          <NavBar/>
       <Container>
       <StockData 
           price = {dailyData['preMarket']} 
           open = {dailyData['open']}
           symbol = {stock}
           close = {dailyData['close']}
           volume = {dailyData['volume']}
           high = {dailyData['high']}
           low = {dailyData['low']}
           name = {stockDetalies['name']}
           logo = {stockDetalies['logo']}
           />
       </Container>

          <StockAbout
         
          desc = {stockDetalies['description']}
          indstuary = {stockDetalies['industry']}
          name = {stockDetalies['name']}
          url = {stockDetalies['url']}
          />

       </PageContainer>
    )
}

export default StockPage
