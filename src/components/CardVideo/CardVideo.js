import React from "react";
import InfoUsuario from "../InfoUsuario/InfoUsuario";

export default function CardVideo({ videoObj , estudante}) {
  const { id, titulo, pathUrl, imgUrl, description } = videoObj;

  const reproduzVideo = (e) => {
    e.preventDefault();
    alert("video em reprodução");
  };
  return (
    <li className="box-pagina-principal" onClick={reproduzVideo}>
      <InfoUsuario userData={estudante}/>
      <img src={imgUrl} alt="" />
      <h4>{titulo}</h4>
    </li>
  );
}
