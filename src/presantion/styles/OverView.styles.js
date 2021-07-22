import styled from 'styled-components'

// overview box container
export const OverViewContainer = styled.div

`

max-width: 700px;
margin-top: 3rem;
padding-top: 3rem;
display: flex;
background-color: #DAF2EE;
justify-content: space-around;
// flex-direction: column-reverse;
flex-wrap: wrap;
min-height: 170px;
margin-left: 12%;


`

// overview box title

export const OverViewTitle = styled.h2
`
font-family: Rubik;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;

color: #000000;
`
// overview h3 total balance
export const OverViewBalane = styled.h3 
`
margin-top: 28%;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;

`
// overivew for light text
export const OverViewLightText = styled.span 
`
  
font-family: Rubik;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #796F6F;
`

export const OverViewCurrencyBox = styled.div 
`

background: #008871;
color: #fff;

font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
padding: 14px;
color: #FFFFFF;
`
export const OverViewButton = styled.button 
`
margin-top: 21%;
border-radius: 50px;
padding: 10px;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
order: 1;
color: #443535;
border:none;
background: #DFFFFA;
transition: 0.5s ease-in-out ;
&:hover{
    background-color: #008871;
    cursor: pointer;
    color: #fff;
}

`