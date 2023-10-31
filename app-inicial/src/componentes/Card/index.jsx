import React from "react";
import imagem from "../../imagem.png";
import "./style.css";

function Card({ titulo = "Titulo padrão", preco, onClickProps }) {
  return (
    <div className="containerCard">
      <img src={imagem} alt="produto" className="imagemCard" />
      <div>{titulo}</div>
      <div>{preco}</div>
      <button onClick={onClickProps}>Comprar</button>
    </div>
  );
}

export default Card;
