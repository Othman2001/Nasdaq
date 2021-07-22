import styled from 'styled-components'

// the styled component of the main component in explore page 
 
export const CardsContainer = styled.div 
`
display: grid;
grid-template-columns: 1fr 1fr ;
gap: 20px;
padding: 3rem;
@media (max-width: 768px) {
grid-template-columns :1fr ;
grid-grid-template-rows: 1fr 1fr;
}
`

 export  const MAIN = styled.div 

`
padding: 5rem;
grid-area: main;
background-color: #CFFFF6;
height: 100%;
@media (max-width: 768px) {
padding: 1rem;
    
  }

`


export const Search = styled.input 

`
width:94%;
 background-color: #fff;
 border: none ;
height:43px;

@media (max-width: 768px) {

 width: 100%;

  }

`