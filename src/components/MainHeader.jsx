import logo from '../assets/images/logo.svg';
function MainHeader() {
	return (
		<header className="main-header">
			<span className="main-layout">
				<img src={logo} className="logo" alt="logo" />
				<h1>Exquisite dining since 1989</h1>
				<h2>
					Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the
					comfort of our farmhouse.
				</h2>
				<button>Book a table</button>
			</span>
		</header>
	);
}

export default MainHeader;
