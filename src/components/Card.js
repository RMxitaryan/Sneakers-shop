import "../App.css";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
function Card({ prod, cart, setCart }) {
  return (
    <div className="card">
      {/* <div className="like">
        {/* <img src="/img/heart.jpg" alt="Heart" width={20} height={20} /> 
      </div> */}
      <img width={133} height={112} src={prod.src} alt="Sneakers" />
      <p>{prod.name}</p>
      <div className="d-flex justify-between">
        <div className="d-flex ">
          <span>Price:</span>
          <b>{prod.price} $</b>
        </div>
        {cart?.includes(prod) ? (
          <DoneIcon
            style={{
              border: "1px solid #f2f2f2 ",
              color: "white",
              backgroundColor: "#5ced73 ",
              cursor: "pointer",
            }}
            onClick={() => {
              setCart(cart.filter((item) => item.id !== prod.id));
            }}
          />
        ) : (
          <AddIcon
            style={{
              border: "1px solid #f2f2f2 ",
              color: "#6C6C6C",
              cursor: "pointer",
            }}
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
