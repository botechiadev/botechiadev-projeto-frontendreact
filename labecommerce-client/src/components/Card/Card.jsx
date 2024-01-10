import { CardContainer } from './styled.Card';
export function Card({ item }) {
  const { id, name, price, imageUrl, description } = item;
  return (
    <CardContainer key={id}>
      <h2>{name}</h2>
      <img src={imageUrl} alt="img do produto" />
      <p>R$ {price}</p>
      <p>{description}</p>
      <button>AddCart</button>
    </CardContainer>
  );
}
