import React, { useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import {Project} from './Views/Project'
import { GlobalStyled } from './Globals/globalStyled';
import dataProducts from './data/dataProducts';
import { CardProduct } from './components/Content/ProductsList/CardProduct/index';
import FilterPrice from './components/Filters/FilterPrice';
import { OrderCategories } from './components/Filters/OrderCategories';
import { ClearFilters } from './components/Filters/ClearFilters';
import { CreditClient } from './components/Content/Client/CreditClient/index';
import  HeaderNav  from './components/HeaderNav';
import  Footer  from './components/Footer';
import {
  Page,
  MainCtn,
  AsideRight,
  SectionCtn,
  SectionTitle,
  FormContainer,
  FormFilter,
  InputNumber,
  InputText,
  CtnType,
  ArticleBox,
  ButtonCard1,
  DivModal,
  Div50,
  DivTotal,
  DivRow,
} from './components/Base/Containers/styled';

import './Globals/normalize.css';
import { PriceFilterInputs } from './components/Filters/FilterPrice/FilterPrice';
import { useContext } from 'react';
import { FiltersContext } from './common/context/filters-context';

function App() {
  const [modalDisplay, setModalDisplay] = useState(0);

  const { products, setProducts, minValue, setMinValue, maxValue, setMaxValue , filteredProducts} = useContext(FiltersContext)

  const [carrito, setCarrito] = useState([]);
  const [pages, setPages] = useState(1);
  const [cartItemTotal, setCartItemTotal] = useState(0)
  const calcItem = (a, b) => a * b;

  const addCart = (product) => {
    if (carrito.some((productCart) => productCart.id === product.id)) {
      setCarrito((prevCart) =>
        prevCart.map((productCart) =>
          productCart.id === product.id
            ? { ...productCart, quantity: productCart.quantity + 1 }
            : productCart
        )
      );
    } else {
      setCarrito((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const lessProduct = (product) => {
    setCarrito((prevCart) =>
      prevCart.map((productCart) =>
        productCart.id === product.id
          ? { ...productCart, quantity: Math.max(1, productCart.quantity - 1) }
          : productCart
      )
    );
  };

  const filterPriceMin = (value) => {
    if (Number(value) < maxValue) {
      setMinValue(Number(value));
      setProducts([...dataProducts].filter((product) => product.price <= maxValue && product.price > minValue));
    }
  };

  const filterPriceMax = (value) => {
    if (Number(value) > minValue) {
      setMaxValue(Number(value));
      setProducts([...dataProducts].filter((product) => product.price <= maxValue && product.price > minValue));
    }
  };

  const filterName = (value) => {
    setProducts([...dataProducts].filter((product) => product.name.toLowerCase().includes(value.toLowerCase())));
  };

  const closeModal = () => {
    setModalDisplay(0);
  };

  const handleFiltrados = (maxPrice, minValue, nameProducts) => {
    filterName(nameProducts);
    filterPriceMin(minValue);
    filterPriceMax(maxPrice);
    return products;
  };

  const filterType = (value) => {
    setProducts(value === 0 ? dataProducts : [...dataProducts].filter((product) => Number(product.typeCategory) === Number(value)));
  };

  return (
    <ChakraProvider>
      <Page>
        <GlobalStyled />
        <HeaderNav modalDisplay={modalDisplay} setModalDispay={setModalDisplay} pages={pages} setPages={setPages} carrito={carrito} setCarrito={setCarrito} />
        <DivModal modalDisplay={modalDisplay}>
          <Div50>
            <DivTotal>
              <button onClick={closeModal}>X Fechar</button>
              <SectionTitle>
                Valor Total
                <span>
                  R${' '}
                  {[...carrito].reduce((productTotal, cartProduct) => Number(productTotal + cartItemTotal(cartProduct)), 0)}
                </span>
              </SectionTitle>
            </DivTotal>
          </Div50>
          <Div50>
            <ul>
              {carrito.length >= 1 ? (
                carrito.map((cartProduct) => (
                  <li key={cartProduct.id}>
                    <div>
                      <h2>{cartProduct.name}</h2>
                      <button onClick={() => lessProduct(cartProduct)}>
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                      <span>{cartProduct.quantity}</span>
                      <button onClick={() => addCart(cartProduct)}>
                        <i className="fa-solid fa-circle-plus"></i>
                      </button>
                      <p>R$ {calcItem(cartProduct.quantity, cartProduct.price)}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li>Carrinho Vazio...</li>
              )}
            </ul>
          </Div50>
        </DivModal>

        {pages === 1 ? (
          <MainCtn>
            <AsideRight>
              <FilterPrice />
            </AsideRight>
            <SectionCtn>
              <SectionTitle></SectionTitle>
              <br />
              {filteredProducts.map((product) => (
                <ArticleBox key={product.id}>
                  <CardProduct product={product} />
                  <ButtonCard1 onClick={() => addCart(product)}>
                    <i className="fa-solid fa-cart-plus"></i>+1Produto
                  </ButtonCard1>
                </ArticleBox>
              ))}
            </SectionCtn>
          </MainCtn>
        ) : (
          <Project />
        )}
      </Page>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
