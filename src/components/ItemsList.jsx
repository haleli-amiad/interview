import ItemsPreview from './ItemsPreview';

function ItemsList({ items }) {
	return items.map((item) => <ItemsPreview item={item} key={item.title} />);
}
export default ItemsList;
