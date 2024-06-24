import styled from "styled-components";
export const ContainerItem = styled.li`
  display: flex;
  flex-flow: row wrap;
  min-height: 295px;
  max-height: 295px;
  max-width: 237px;
  border: 1px solid rgb(201, 199, 199);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-self: center;
  border-radius: 22px;
  overflow: hidden;
  list-style-type: none;
  box-shadow: rgb(100, 100, 100) 0px 0px 10px;
  background: #ff9937;
  padding-bottom: 5px;
padding: 1rem;
  .img-produto img {
    display: flex;
    flex-flow: row wrap;
    min-width: 99.5%;
    width: 100%;
    min-height: 70%;
    max-height: 71%;
    object-fit: cover;
    position: relative;
    width: 132px;
    height: 87px;
    margin: 20px auto;
  }

  .info-produto {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
  }

  .info-produto div {
    max-width: 44%;
  }

  @media screen and (max-width: 469px) {
    margin-top: 80px;
`;
