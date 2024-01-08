import React from 'react';
import styled from 'styled-components'
import gradient from './../../assets/gradient.jpeg'



export const ContainerHeader = styled.header`

display: grid;
max-width: 1fr;
max-height: 190px;


@media screen and (max-width: 420px){
 max-height: 150px;
}

nav{
  position: fixed;
  height: 50px;
  display: flex;
  flex-flow: row wrap;
  background-color: gray;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  align-items:  center;
  color: white;
  font-weight: bolder;
}

nav button:hover{
  text-decoration: underline;
  font-weight: 900;
  color: gold;
}


.headerTitle {
      color: gold;
    width: 100%;
    text-shadow: 5px 4px 4px rgb(0, 0, 0);
    text-align: center;
    align-self:center;
   font-size: 2.4rem;

  min-height: 10vh;
  margin: auto;


}
`
