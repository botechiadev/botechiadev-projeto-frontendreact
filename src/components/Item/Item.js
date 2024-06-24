import React from "react";
import { ContainerItem } from "./styled";

export default function Item({ bananinha }) {
  const {
    id,
    modelo,
    marca,
    cor,
    isFlex,
    ano,
    categoria,
    adicionadoPara,
    imgUrl,
    preco,
  } = bananinha;
  return (
    <>
      <ContainerItem>
        <div className="TitleH3">
          <h3>
            {modelo} - {marca} - {ano}
          </h3>
          <div className="img-produto">
            <img src={imgUrl} alt="img produto" />
          </div>
        </div>
        <div className="info-produto">
          <div>
            <p>Cor: {cor}</p>
            <p>Ano: {ano}</p>
          </div>
          <div>
            <p>Flex: {isFlex}</p>
            <button>{adicionadoPara}</button>
          </div>
        </div>
      </ContainerItem>
    </>
  );
}
