import React from 'react'
import {TitleContaienr,About,AboutContainer,Industary,SPAN} from '../styles/StockDataContainer.stockpage.style'
function StockAbout({ desc , indstuary , url ,}) {
    return (
        <AboutContainer>

            <TitleContaienr>
                
            <About> About </About>
        {url?  <a  href = {url}>Visit WebSite</a>: null}
            </TitleContaienr>
            { indstuary?
            <Industary>Industary : <SPAN>{ indstuary} </SPAN> </Industary>
           :null
            }
           {desc?  
           <div>
     <About>Description</About>
               <p> {desc}</p>
           </div>
           : null
           }


           {!desc && !indstuary ? <h1>no infomration provided </h1>:null }
       
        </AboutContainer>
    )
}

export default StockAbout
