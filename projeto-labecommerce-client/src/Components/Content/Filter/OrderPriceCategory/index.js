
import { ButtonOrder, ButtonOrderCtn , ButtonAll} from "./styled";
export function OrderPriceCategory({products, setProducts, dataProducts}){
  const orderPrice1 = () => {
    setProducts(
      [...products].sort((a, b) => (a.price > b.price ? -1 : 1))
    );
  };
  const orderPrice2 = () => {
    setProducts(
    [...products].sort((a, b) => (a.price > b.price ? 1 : -1))
    );
  };
 
  return (
 
<div>
     
   
            
          <select>   
          <option value="" selected disabled>Ordenar Items</option>
           <option id="b1" onClick={orderPrice1}>MAIOR PRECO</option>
        <option  onClick={orderPrice2}>MENOR PRECO </option>
  
</select>       

</div>
      
  );
}



