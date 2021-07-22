import React from 'react'
import { OverViewContainer , OverViewTitle , OverViewBalane , OverViewLightText  ,OverViewCurrencyBox , OverViewButton} from '../styles/OverView.styles'

function OverView() {
    return (
             <OverViewContainer>
             {/* start right side */}
             <div>
               <OverViewTitle>  
                   Over View
               </OverViewTitle>
               <OverViewBalane>
               Totla Balnace: <OverViewLightText> 120k </OverViewLightText>
               </OverViewBalane>

             </div>
            
             {/* end right side */}

             {/* start left side */}
             <div>
              <OverViewCurrencyBox> USD </OverViewCurrencyBox>
              <OverViewButton>  Show Balance </OverViewButton>
             </div>
             {/* end left side */}
         </OverViewContainer>
    
    )
}

export default OverView
