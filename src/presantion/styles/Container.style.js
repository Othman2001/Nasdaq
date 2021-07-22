import styled from 'styled-components'

 export  const Container = styled.div 
`
display: grid;
grid-template-columns: 0.2fr 1fr 0.3fr ;
grid-template-areas:
"main  main   main  main"
"main  main   main  main"
"main  main   main  main"
"main  main   main  main"

;
@media (max-width: 768px) {
 grid-template-columns: 0.2fr 2fr ;
 grid-auto-rows: 1fr 1fr;
 grid-template-areas: 
 "sidebar  main main"
 "sidebar  news news"
 

 ;
  }
`
export const FlexContainer = styled.div 
`
 display: flex;
 align-items:  ${props=> props.align};
 flex-direction:  ${props => props.direction};
 justify-content: center;



`