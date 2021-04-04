import ItemsList from './ItemsList';
function Highlights() {
	const items = [
		{
			title: 'Seared Salmon Fillet',
			desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
			imgUrl: 'menu-item1'
		},
		{
			title: 'Rosemary Filet Mignon',
			desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
			imgUrl: 'menu-item2'
		},
		{
			title: 'Summer Fruit Chocolate Mousse',
			desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
			imgUrl: 'menu-item3'
		}
	];
	return (
		<section className="highlights main-layout">
			<span className="flex space wrap">
				<span className="highlights-desc">
					<div className="svg" />
					<h2>A few highlights from our menu</h2>
					<p>
						We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
						Our menu is revamped every season.
					</p>
				</span>
				<span className="items-list flex space col">
					<ItemsList items={items} />
				</span>
			</span>
		</section>
	);
}

export default Highlights;
