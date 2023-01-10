import { useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Card from "./components/Card";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import { createUseStyles } from "react-jss";

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

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04)",
    borderRadius: 20,
    maxWidth: 1000,
    margin: "20px auto",
  },

  content: {
    padding: 40,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  titleH1: {
    margin: 0,
  },
  searchBlock: {
    border: "3px solid #f3f3f3",
    height: 27,
    display: "flex",
  },
  input: {
    border: 0,
    padding: 10,
  },
  cardsDiv: {
    display: "flex",
  },
});

function App() {
  const [openBasket, setOpenBasket] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const classes = useStyles();

  const openBasketFunc = () => {
    setOpenBasket(!openBasket);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      {openBasket && (
        <Basket openBasketFunc={openBasketFunc} cart={cart} setCart={setCart} />
      )}
      <Header openBasketFunc={openBasketFunc} />
      <div className={classes.content}>
        <div className={classes.title}>
          <h1 className={classes.titleH1}>All sneakers</h1>
          <div className={classes.searchBlock}>
            <img width={30} height={21} src="/img/search.jpg" alt="Search" />
            <input
              onChange={handleSearch}
              value={search}
              className={classes.input}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className={classes.cardsDiv}>
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
