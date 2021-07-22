import {useAppState , userActions} from '../../application/state/stocks/index';
import Tickers from './Tickers.components'
import { Spinner,Button} from 'react-bootstrap'



 function TickerContainer  (){
     
const renderTickers = ()=>{
    return  state.stokcs.loading ? 
<Button>
<Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button>
  :   state.stokcs.stockData?.map((res,index)=>{
         return(
             <div>
               <Tickers title = {res.ticker} name = {res.name} market = {res.market} key = {index} />
                
             </div>
         )
     })
 }
    const state = useAppState();
     return renderTickers()
 }
export default TickerContainer