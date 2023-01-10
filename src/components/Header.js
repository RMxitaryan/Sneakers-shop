import { createUseStyles } from "react-jss";
import "../App.css";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  headerDiv: {
    display: "flex",
    alignItems: "center",
  },
  headerTitle: {
    margin: 0,
  },
  headerUnderTitle: {
    margin: 0,
    opacity: 0.5,
  },
  headerUl: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
  headerFirstLi: {
    marginRight: 20,
    listStyleType: "none",
  },
  headerOtherLi: {
    listStyleType: "none",
  },
  cartImg: {
    marginBottom: 10,
    cursor: "pointer",
  },
});

function Header(props) {
  const { openBasketFunc } = props;
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.headerDiv}>
        <img width={50} height={50} src="/img/img sneaker.webp" />
        <div>
          <h3 className={classes.headerTitle}>REACT SNEAKERS</h3>
          <p className={classes.headerUnderTitle}>Shop for best sneakers</p>
        </div>
      </div>
      <ul className={classes.headerUl}>
        <li className={classes.headerFirstLi}>
          <img
            onClick={openBasketFunc}
            src="/img/cart.png"
            width={30}
            height={30}
            className={classes.cartImg}
          />
        </li>
        <li className={classes.headerOtherLi}>20 $</li>
        <li className={classes.headerOtherLi}>
          <img src="/img/user.webp" width={30} height={30} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
