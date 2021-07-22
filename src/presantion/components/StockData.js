import React from 'react'
import { StatContainer,LightText,Symbol,StatText,StatSpan, FlexContainer} from '../styles/StockDataContainer.stockpage.style'
function StockData({price , open ,  symbol ,name, close , logo, volume , high , low}) {
    return (
        <div>
                {
                logo?    <img src = {logo} alt = "logo" />:null
            }
         <Symbol> {symbol} </Symbol>
         <LightText>{name} </LightText>
             <StatContainer >
                 <FlexContainer>

                 <StatText> Open: <StatSpan> {open}</StatSpan></StatText> 
                 <StatText> Close: <StatSpan> {close}</StatSpan></StatText> 
                 <StatText> Volume:<StatSpan> {volume}</StatSpan> </StatText> 
                 <StatText> high:  <StatSpan> {high}</StatSpan></StatText> 
                 <StatText> low: <StatSpan> {low}</StatSpan>
 </StatText> 
                 </FlexContainer>
                



         </StatContainer>
        </div>
    )
}

export default StockData
