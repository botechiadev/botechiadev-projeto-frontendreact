import React from 'react';
import styled from 'styled-components'
/* NAVTOP*/


export const NavTop = styled.div`
box-sizing: border-box;
position: fixed;
margin: 10px auto;
max-width: 1440px;
height: 104px;
left: 0px;
right: 0px;
top: 0px;

/* Primary/0

#FFFFFF
*/
background: #FFFFFF;
border: 1px solid rgba(195, 212, 233, 0.4);
`

















const BgCarbon1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1106291278.rsc.cdn77.org%2Fwp-content%2Fuploads%2F2019%2F07%2FCarbon-Fiber-Gradient-1080x608.jpg&f=1&nofb=1&ipt=b4a1f5fbe0eacb4fa4a951a2b5779fa9ca23fc8ec6be7c012dedfff21422935f&ipo=images'

export const HeaderCtn = styled.div`
display: flex;
flex-flow: column wrap;
width: 90%;
left: 5%;
right: 5%;
list-style-type: none;
display: flex;
max-height: 20px;
background:gray;
justify-content: flex-end;
`
export const TitlePageText= styled.div`

  font-family: Pacifico, cursive;
    color: #e5ff00;
    width: 100%;
    text-shadow: 5px 4px 4px rgb(0, 0, 0);
    text-align: center;
    align-self: center;
    border-radius: 25px;
   font-size: 2.4rem;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
  background: #2f302f;
  min-height: 10vh;
  margin: auto;
  padding: 2vh;
`

export const NavButton = styled.button`
width: 100px;
height:80px;
background: #000000;
color: white;
margin-top: auto;
border-radius: 6px;
border: 1.2px groove white;
`


export const NavLogo = styled.img`
display: inline-block;
    width: 30%;
    height: 60px;
    align-self: flex-start;

`


export const NavBrand = styled.h1`
    font-size: 1rem;
    

    display: inline-block;

`

export const NavList = styled.ul`
  display: inline-block;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 90%;
  top:0;
  left: 5%;
right: 5%;
  height: 100%;
  padding: 5px auto;
  background-color: rgb(168, 168, 168);
color: #48ff00;
  text-align: center;
  align-self: center;
  border-radius: 5px ;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  -webkit-border-radius: 25px ;
  -moz-border-radius: 25px ;
  -ms-border-radius: 25px ;
  -o-border-radius: 25px ;
justify-content: space-around;
max-height: 7vh;
`



export const Hero = styled.header`
display: flex;
flex-flow: column wrap;
align-self: center;
justify-content: center;
align-content: center;
width: 100%;
margin-top: 120px;
border-radius: var(--roundedMedium);
min-height: 200px;
color: white;
text-shadow: var(--Shadow-Card1);
/*DEGRADADO CSS*/
background:whitesmoke;`