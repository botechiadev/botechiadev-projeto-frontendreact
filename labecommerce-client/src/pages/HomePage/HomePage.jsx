import { useContext } from 'react';
import { ApiContext } from './../../common/context/api-context';
import { HomePageContainer } from './styled.HomePage';
import { Card } from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
export default function HomePage() {
  const { products, setProducts } = useContext(ApiContext);

  return (
    <HomePageContainer>
     
      <aside>
      <h2> HOME</h2>
      <Filters/>
      </aside>
      <section>
     
      <ul>
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </ul>
      </section>
    </HomePageContainer>
  );
}
