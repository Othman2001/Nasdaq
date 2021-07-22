import React, {useEffect , useState } from 'react'
import {MAIN , Search , CardsContainer} from '../styles/main.styles'
import OverView from './OverView.component';
import { userActions , useAppState} from '../../application/state/stocks/index';
import TickerContainer from './Tickers.Container' 
import { Button} from '../styles/Button.style'

// 

function Main() {
    // calling api key from .env file
    const API_KEY ='TWra6NOMRj9WnT5E5llhDs1c9TipjkjZ';

    const actions = userActions();
    const state = useAppState();
    // end overmind js
    // state 
    // 1. state for counting to fetch data
    // state for search query to implment live search 
    const [search , setSearch] = useState("")
    // state for limit to implment infnite scroll
const [limit , setLimit] = useState(10)
    const URL = `https://api.polygon.io/v3/reference/tickers?search=${search}&active=true&sort=ticker&order=asc&limit=${limit}&apiKey=${API_KEY}`;
//  function  to implment scoll pagnation
    const fetchMoreData = () =>{
        if(limit => 10 && limit <=100){

            // increase limit on every click 
            setLimit(prevLimit=> prevLimit + 10)
            actions.stokcs.fetchStocks(URL);
        }else{
        //  if limit exceeds 100 which is the limit of the api url 
            setLimit(null)
        }
    }
    // handle search data
    const handleSearch = (event)=>{
        setSearch(event.target.value)
    }
useEffect(()=>{
    // fetch stocks data
        actions.stokcs.fetchStocks(URL);
    }, [  search , limit]);
    
    // function render tickers cards
const renderTickers = ()=>{
    return (
        state.stokcs.stockData ?     <TickerContainer/>: <h1> No results found </h1>
    )
}

    return (

    <MAIN >
 
    <Search type = "text"  placeholder = "search anyting " value = {search} onChange = {handleSearch} />
    <div className ="container">
    <OverView/>
    
         <CardsContainer  >
{
    renderTickers()
}  
       {
           limit < 100 ?<Button onClick = {fetchMoreData} >Show more </Button>:<h1> You have Reached to end of our stocks data to get more data upgrade your Tier </h1>
       }
 
</CardsContainer>
    </div>

</MAIN>
    )

}
export default Main