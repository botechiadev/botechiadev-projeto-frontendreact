import { useNavigate } from 'react-router-dom';
import { handleHome, handleCart } from '../../router/coordinator';
import { HeaderNavbarContainer } from './styled.HeaderNavbar';

export function HeaderNavbar() {
  const navigate = useNavigate();
  return (
    <HeaderNavbarContainer>
      <nav>
        <button
          onClick={() => {
            handleHome(navigate);
          }}
        >
          HOME
        </button>
        <button
          onClick={() => {
            handleCart(navigate);
          }}
        >
          CART
        </button>
      </nav>
    </HeaderNavbarContainer>
  );
}
