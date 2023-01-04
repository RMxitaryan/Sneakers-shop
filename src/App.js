import { useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [openBasket, setOpenBasket] = useState(false);

  const openBasketFunc = () => {
    setOpenBasket(!openBasket);
  };
  return (
    <div className="wrapper clear">
      {openBasket && <Basket openBasketFunc={openBasketFunc} />}
      <Header openBasketFunc={openBasketFunc} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 style={{ margin: "0px" }}>All sneakers</h1>
          <div className="search-block d-flex">
            <img width={37} height={27} src="/img/search.jpg" alt="Search" />
            <input
              style={{ border: "0px", padding: "10px" }}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="d-flex">
          <Card name="Nike Dunk Low Argon 2022" price={130} src="/img/1.jpg" />
          <Card
            name="Nike Terminator High Cocoa Snake"
            price={140}
            src="/img/5.jpg"
          />
          <Card
            name="Nike Air Max Flyknit Racer"
            price={160}
            src="/img/6.jpg"
          />
          <Card
            name="Nike Air Max 97 OG Silver Chlorine"
            price={179}
            src="/img/7.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
