import image from '../assets/images/family-gathering-desktop.jpg';
function TableBooking() {
	return (
		<section className="table-booking main-layout">
			<span className="tb-main full">
				<span className="main-layout">
					<span className="flex center space wrap">
						<img className="family-image" src={image} alt="family-gather" />
						<span className="content">
							<h2>Family Gathering</h2>
							<p>
								We love catering for entire families. So please bring everyone along for a special meal
								with your loved ones. We’ll provide a memorable experience for all.
							</p>
							<button>Book a table</button>
							<h3>FAMILY GATHERING</h3>
							<h3>SPECIAL EVENTS</h3>
							<h3>SOCIAL EVENTS</h3>
						</span>
					</span>
				</span>
			</span>
			<span className="tb-cta full">
				<span className="main-layout">
					<span className="flex center space wrap">
						<h2>Ready to make a reservation?</h2>
						<button>Book a table</button>
					</span>
				</span>
			</span>
		</section>
	);
}

export default TableBooking;
