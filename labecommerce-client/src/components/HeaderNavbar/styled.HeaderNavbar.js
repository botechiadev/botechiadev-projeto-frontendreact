import styled from 'styled-components';

export const HeaderNavbarContainer = styled.header`
display: grid;
max-width: 1fr;
height: 80px;


nav{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  background: hotpink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}


button{
  background: none;
  border: none;
  font-weight: 700px;
}


button:hover{
  font-weight: 900px;
  text-decoration: underline;
  color: white;
}

`;
