import MainHeader from '../components/MainHeader';
import Description from '../components/Description';
import Highlights from '../components/Highlights';
import TableBooking from '../components/TableBooking';
function Home() {
	return (
		<main className="home">
			<MainHeader />
			<Description />
			<Highlights />
			<TableBooking />
		</main>
	);
}

export default Home;
