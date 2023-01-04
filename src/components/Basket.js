import "../App.css";

function Basket(props) {
  const { openBasketFunc } = props;
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="justify-between d-flex ">
          Basket
          <img
            onClick={openBasketFunc}
            className="RemoveBtn cu-p"
            src="/img/cancel-svgrepo-com.svg"
            alt="Remove"
            width={30}
            height={30}
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Nike Dunk Low Argon 2022</p>
              <b>130$</b>
            </div>
            <img
              className="RemoveBtn"
              src="/img/cancel-svgrepo-com.svg"
              alt="Remove"
              width={20}
              height={20}
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Nike Dunk Low Argon 2022</p>
              <b>130$</b>
            </div>
            <img
              className="RemoveBtn"
              src="/img/cancel-svgrepo-com.svg"
              alt="Remove"
              width={20}
              height={20}
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Nike Dunk Low Argon 2022</p>
              <b>130$</b>
            </div>
            <img
              className="RemoveBtn"
              src="/img/cancel-svgrepo-com.svg"
              alt="Remove"
              width={20}
              height={20}
            />
          </div>
        </div>
        <ul>
          <li className="d-flex justify-between mb-15">
            <span>Total:</span>
            <div></div>
            <b>260$</b>
          </li>
          <li className="d-flex justify-between mb-15">
            <span>Tax 5%:</span>
            <div></div>
            <b>13$</b>
          </li>
        </ul>
        <button className="orderBtn">Make an order</button>
      </div>
    </div>
  );
}

export default Basket;
