import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  padding-top: 10px;

  button {
    width: 99px;
    height: 42px;
    border: none;
    background: none;
  }

  .headerFlex {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (max-width: 450px) {
    h1 . h1 img {
      max-width: 25px;
      max-height: 25px;
    }
  }
`;
