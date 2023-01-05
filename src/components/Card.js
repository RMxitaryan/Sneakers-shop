import '../App.css';

function Card(props) {
	const { name, price, src } = props;
	return (
		<div className="card">
			{/* <div className="like">
        {/* <img src="/img/heart.jpg" alt="Heart" width={20} height={20} /> 
      </div> */}
			<img width={133} height={112} src={src} alt="Sneakers" />
			<p>{name}</p>
			<div className="d-flex justify-between">
				<div className="d-flex ">
					<span>Price:</span>
					<b>{price} $</b>
				</div>
				<button style={{ cursor: 'pointer' }}>
					<img width={11} height={11} src="/img/plus2.png" alt="Plus" />
				</button>
			</div>
		</div>
	);
}

export default Card;
