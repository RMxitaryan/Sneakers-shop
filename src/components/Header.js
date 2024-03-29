import '../App.css';

function Header(props) {
	const { openBasketFunc } = props;
	return (
		<header className="d-flex  justify-between align-center p-40">
			<div className="d-flex align-center">
				<img width={50} height={50} src="/img/img sneaker.webp" />
				<div>
					<h3 style={{ margin: '0px' }} className="text-uppercase">
						React Sneakers
					</h3>
					<p style={{ margin: '0px' }} className="opacity-5">
						Shop for best sneakers
					</p>
				</div>
			</div>
			<ul className="d-flex header__right_part">
				<li className="mr-20">
					<img
						onClick={openBasketFunc}
						src="/img/cart.png"
						width={30}
						height={30}
						className="mr-10 cu-p"
					/>
				</li>
				<li>20 $</li>
				<li>
					<img src="/img/user.webp" width={30} height={30} />
				</li>
			</ul>
		</header>
	);
}

export default Header;
