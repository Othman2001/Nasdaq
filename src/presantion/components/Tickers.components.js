import React from 'react'
import {TickerContainer , TickerCard ,TickerMarketBox, TickerTitle , TickerLightText , TickerSmallBox , CardContainer , ContainerBoxes,ContainerButtons , TickerButton} from '../styles/Ticker.style'
import { OverViewButton} from '../styles/OverView.styles'
import { Link } from 'react-router-dom'
function Tickers({title , name , market}) {

    // this component will need testing 
    return (
        <TickerContainer>
        <div>
            <CardContainer >
            <TickerTitle data-testid = "22">
               {title}
                <TickerLightText>
               {name.length > 10 ? name.substring(0 , 12)  : name}
            </TickerLightText>
            </TickerTitle>
      
            </CardContainer>
            {/* */}
          <div>
              <ContainerBoxes>
              <TickerSmallBox> Active </TickerSmallBox>
         <TickerSmallBox> Type </TickerSmallBox>

              </ContainerBoxes>
          </div>
        </div>
        <ContainerButtons>
                <TickerMarketBox data-testid = "101">{market} </TickerMarketBox>
                <Link to = {`/${title}`} >
                <TickerButton> Show Stock </TickerButton>

                    </Link>
        </ContainerButtons>
        </TickerContainer>               
    )
}

export default Tickers
