import styled from "styled-components";

const ButtonAllResetFilter = styled.button`
width: 20px
height: 20px;
border-radius: 25px;
background: #fff200;

&&active{
    background: yellow;
}
`

export function ClearFilters({products, dataProducts, setProducts}){
    const orderReset = () => { 
    setProducts([...dataProducts])};
    return(
    <ButtonAllResetFilter onClick={orderReset}>TODOS ITEMS</ButtonAllResetFilter>
)}