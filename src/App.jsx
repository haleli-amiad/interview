import './assets/styles/styles.scss';
import Home from './pages/Home';
import MainFooter from './components/MainFooter';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
			<MainFooter />
		</Router>
	);
}

export default App;
