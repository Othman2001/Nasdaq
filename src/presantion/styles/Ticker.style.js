import styled from 'styled-components'



export const TickerContainer = styled.div 
`
// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-template-rows: 1fr ;
background: #9DFAEB;
max-width: 500px;
max-height: 125px;
text-align: center;
display: flex;
justify-content: space-around;


margin-top: 37px;
margin-left: 5px;
white-space: nowrap;
text-overflow: ellipsis;

overflow: hidden;
white-space: nowrap;
`


export const TickerTitle = styled.h3 
`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 24px;
text-align: center;
color: #000000;
`

export const TickerLightText = styled.span `

font-family: Rubik;
font-style: normal;
font-weight: 300;
font-size: 16px;
text-align: center;
color: #705C5C; 
display: block;
`
export const TickerSmallBox = styled.div
`

background: #7BE36A;
font-family: Rubik;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #000000;
padding: 10px;



`
export const TickerMarketBox = styled.div 
`
text-align: center;
background: #7BE36A;
color: #000000;
padding: 10px;
margin-top: 8px

`
export const FlexContainer = styled.div
`
display: flex;


`
export const ContainerBoxes = styled.div 
`
display: flex;
gap: 10px;

margin-top: 28px;
margin-left: 5px;


`

export const ContainerButtons = styled.div 
`
display: flex;
flex-direction: column;
margin-left: 43px;

`
export const TickerButton = styled.button 
`
border-radius: 50px;
padding:10px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 13px;
/* identical to box height */
color: #443535;
border:none;
background: #DFFFFA;
text-align: center;
transition: 0.5s ease-in-out ;
margin-top: 25px;
&:hover{
    background-color: #008871;
    cursor: pointer;
    color: #fff;
}
`
export const CardContainer = styled.div 
`
// max-width: 500px;
// text-overflow: ellipsis;
// overflow: hidden;
`