function ItemsPreview({ item }) {
	const itemImage = require(`../assets/images/${item.imgUrl}.jpg`).default;

	return (
		<div className="items-container flex space wrap">
			<div className="image-container">
				<img src={itemImage} alt="" />
			</div>
			<div className="desc-container">
				<h2 className="item-title">{item.title}</h2>
				<h3>{item.desc}</h3>
			</div>
		</div>
	);
}

export default ItemsPreview;
