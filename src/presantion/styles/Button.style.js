import styled from 'styled-components'
export const Button = styled.button 
`
border-radius: 50px;
padding: 10px;
background-color: #008871;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
order: 1;
color: #fff;
border:none;

transition: 0.5s ease-in-out ;
&:hover{
    background: #DFFFFA;
    cursor: pointer;
    color: #333;
}
@media (max-width: 768px) {

    }
`