import React from "react";
import "./App.css";
import Card from "./componentes/Card";

function App() {
  const [estado, setEstado] = React.useState(0);
  const [mensagem, setMensagem] = React.useState("Seu carrinho está vazio");

  const funcaoApp = () => {
    setEstado(estado + 1);
  };

  React.useEffect(() => {
    if (estado > 0) {
      setMensagem("Seu carrinho tem coisa " + estado);
    }
  }, [estado]);

  return (
    <div className="App">
      <div>Quantidade de clicks: {estado}</div>
      <div>{mensagem}</div>
      <Card preco={"R$100,00"} onClickProps={funcaoApp} />
      <Card titulo={"Card2"} preco={"R$200,00"} onClickProps={funcaoApp} />
    </div>
  );
}

export default App;
