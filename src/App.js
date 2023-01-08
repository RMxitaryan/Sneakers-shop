import { useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Card from "./components/Card";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";

const arr = [
  {
    name: "Nike Dunk Low Argon 2022",
    price: 130,
    src: "/img/1.jpg",
    id: uuidv4(),
  },
  {
    name: "Nike Terminator High Cocoa Snake",
    price: 140,
    src: "/img/5.jpg",
    id: uuidv4(),
  },
  {
    name: "Nike Air Max Flyknit Racer",
    price: 160,
    src: "/img/6.jpg",
    id: uuidv4(),
  },
  {
    name: "Nike Air Max 97 OG Silver Chlorine",
    price: 179,
    src: "/img/7.jpg",
    id: uuidv4(),
  },
];

function App() {
  const [openBasket, setOpenBasket] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const openBasketFunc = () => {
    setOpenBasket(!openBasket);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {openBasket && (
        <Basket openBasketFunc={openBasketFunc} cart={cart} setCart={setCart} />
      )}
      <Header openBasketFunc={openBasketFunc} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 style={{ margin: "0px" }}>All sneakers</h1>
          <div className="search-block d-flex">
            <img width={30} height={21} src="/img/search.jpg" alt="Search" />
            <input
              onChange={handleSearch}
              value={search}
              style={{ border: "0px", padding: "10px" }}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="d-flex">
          {arr
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((obj) => {
              return (
                <Card
                  key={obj.id}
                  name={obj.name}
                  price={obj.price}
                  src={obj.src}
                  prod={obj}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
