import styled from 'styled-components';

export const CardContainer = styled.li`
 width: 300px;
 background: #efefef;
 border: 2px solid gray;
 color: gray;
 list-style-type: none;
 height: 400px;
 display: flex;
 flex-flow: column wrap;
 align-items: center;
 justify-content: space-around;
 img{
   max-width: 90%;
   height: 200px;
   object-fit: cover;
 }
`;
