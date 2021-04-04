import logo from '../assets/images/logo.svg';
function MainFooter() {
	return (
		<footer className="main-footer main-layout">
			<span className="footer-content flex center space wrap">
				<img src={logo} alt="" />
				<span>
					<p>Marthwaite, Sedbergh Cumbria</p>
					<p>+00 44 123 4567</p>
				</span>
				<span>
					<p>OPEN TIMES</p>
					<p>MON - FRI: 09:00 AM - 10:00 PM</p>
					<p>SAT - SUN: 09:00 AM - 11:30 PM</p>
				</span>
			</span>
		</footer>
	);
}
export default MainFooter;
