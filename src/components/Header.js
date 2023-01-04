import "../App.css";

function Header(props) {
  const { openBasketFunc } = props;
  return (
    <header className="d-flex  justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={50} height={50} src="/img/img sneaker.webp" />
        <div>
          <h3 style={{ margin: "0px" }} className="text-uppercase">
            React Sneakers
          </h3>
          <p style={{ margin: "0px" }} className="opacity-5">
            Shop for best sneakers
          </p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-20">
          <img
            onClick={openBasketFunc}
            src="/img/cart.png"
            width={18}
            height={18}
            className="mr-10 cu-p"
          />
          <span>20 $</span>
        </li>
        <li>
          <img src="/img/user.webp" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
