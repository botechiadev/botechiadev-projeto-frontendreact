import React, { useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import {Project} from './Views/Project'
import { GlobalStyled } from './Globals/globalStyled';
import dataProducts from './Data/dataProducts';
import { CardProduct } from './Components/Content/ProductsList/CardProduct/index';
import { OrderCategories } from './Components/Content/Filter/OrderCategories';
import { ClearFilters } from './Components/Content/Filter/ClearFilters';
import { OrderPriceCategory } from './Components/Content/Filter/OrderPriceCategory/index';
import { CreditClient } from './Components/Content/Client/CreditClient/index';
import { HeaderNav } from './Components/Main/HeaderNav/index';
import { Footer } from './Components/Base/Footer/index';
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
} from './Components/Base/Containers/styled';

import './Globals/normalize.css';

function App() {
  const [modalDisplay, setModalDisplay] = useState(0);
  const [products, setProducts] = useState([...dataProducts]);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(200);
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
              <FormContainer>
                <SectionTitle>Filtros</SectionTitle>
                <FormFilter>
                  <label htmlFor="minValue" className="form-label">
                    Preco Minimo:
                  </label>
                  <InputNumber
                    type="number"
                    id="minValue"
                    name="minValue"
                    min="1"
                    placeholder="R$30"
                    value={minValue}
                    onChange={(e) => filterPriceMin(e.target.value)}
                  />
                  <label htmlFor="maxValue" className="form-label">
                    Preco Maximo:
                  </label>
                  <InputNumber
                    type="number"
                    id="maxValue"
                    name="maxValue"
                    value={maxValue}
                    placeholder="R$200"
                    onChange={(e) => filterPriceMax(e.target.value)}
                  />
                  <label htmlFor="productName" className="form-label">
                    Modelo:
                  </label>
                  <InputText type="text" id="productName" placeholder="Astro Basket" onChange={(e) => filterName(e.target.value)} />
                  <CtnType>
                    <p>Ordenar por TIPO</p>
                    <OrderCategories filterType={filterType} />
                    <br />
                  </CtnType>
                </FormFilter>
                <hr />
              </FormContainer>
            </AsideRight>
            <SectionCtn>
              <SectionTitle>
                PRODUTOS ENCONTRADOS {products.length}
                <Flex>
                  <ClearFilters products={products} setProducts={setProducts} dataProducts={dataProducts} />
                </Flex>
              </SectionTitle>
              <br />
              {[...products].map((product) => (
                <ArticleBox key={product.id}>
                  <CardProduct product={product} />
                  <ButtonCard1 onClick={() => addCart(product)}>
                    <i className="fa-solid fa-cart-plus"></i>+1Produto
                  </ButtonCard1>
                </ArticleBox>
              ))}
            </SectionCtn>
          </MainCtn>
        ) : pages === 2 ? (
          <MainCtn>
            <DivRow>
              <SectionTitle>Credito Cliente</SectionTitle>
              <CreditClient />
            </DivRow>
          </MainCtn>
        ) : (
          <Project />
        )}
      </Page>
    </ChakraProvider>
  );
}

export default App;
