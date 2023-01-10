import "../App.css";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    border: "1px solid #f3e5e5",
    padding: 30,
    width: 210,
    borderRadius: 40,
    marginRight: 30,
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.05)",
      transform: "translateY(-5px)",
    },
  },
  cardInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardPrice: {
    display: "flex",
  },
  doneIcon: {
    border: "1px solid #f2f2f2 ",
    color: "white",
    backgroundColor: "#5ced73 ",
    cursor: "pointer",
  },
  addIcon: {
    border: "1px solid #f2f2f2 ",
    color: "#6C6C6C",
    cursor: "pointer",
  },
});
function Card({ prod, cart, setCart }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {/* <div className="like">
        {/* <img src="/img/heart.jpg" alt="Heart" width={20} height={20} /> 
      </div> */}
      <img width={133} height={112} src={prod.src} alt="Sneakers" />
      <p>{prod.name}</p>
      <div className={classes.cardInfo}>
        <div className={classes.cardPrice}>
          <span>Price:</span>
          <b>{prod.price} $</b>
        </div>
        {cart?.includes(prod) ? (
          <DoneIcon
            className={classes.doneIcon}
            onClick={() => {
              setCart(cart.filter((item) => item.id !== prod.id));
            }}
          />
        ) : (
          <AddIcon
            className={classes.addIcon}
            onClick={() => {
              setCart([...cart, prod]);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
