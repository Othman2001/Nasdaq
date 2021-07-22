import styled from 'styled-components'



export  const SideBar  = styled.nav 
`
width: 220px;
transform: ${ props=> props.width ?  " translateX(0)": " translateX(-100%)"}    ;
transition: transform ease-out 0.3s;
position: fixed;
height: 100%;
padding: 1vw 0 ;
transition: transform ease-out 0.3s;
grid-area: sidebar;
box-shadow: 11px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 768px) {
    width: 100%;
  }

`
export const Logo = styled.h1 `

 font: ${props=>props.font};
 font-size: 20px;
 margin:  0 5px;
`

 export const ListLink = styled.li
 `font-family: Rubik;
 font-style: normal;
 font-weight: normal;
 font-size: 19px; 
 color: #000000;
 display: flex;
 padding: 13px 5px;
position: relative;
justify-content: space-around;
margin-left: 0;
padding-left: 0;

`
 export const Icon = styled.span `
width: 30px;
display: inline-block;
margin-left: 0;
padding-left: 0;

`
export const Image = styled.img `
width: 24px;
height: 30px;
margin-left: 0;
padding-left: 0;
`

export const MenuButton = styled.button 
`
background-color: transparent;
border: none;
display: none;
margin: auto;
width: 100%;
transform: ${props=>props.width?  "translateX(0)" : "translateX(60%)"};
transition: transform ease-out 0.3s;

@media (max-width: 768px) {
    display: block;
  }
`