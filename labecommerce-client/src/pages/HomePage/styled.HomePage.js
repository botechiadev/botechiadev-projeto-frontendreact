import styled from 'styled-components';

export const HomePageContainer = styled.main`
min-height: 60vh;
display: grid;
grid-template-columns: 100px auto;

@media screen and (max-width: 420px){
  grid-template-columns: 100%;
  grid-template-rows: 20% auto;
}
h2{
 text-align: center;
 margin: 30px auto;
 color: black;
}
ul{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
`;
