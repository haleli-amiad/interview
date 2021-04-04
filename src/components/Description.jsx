import image1 from '../assets/images/enjoyable-place-desktop.jpg';
import image2 from '../assets/images/locally-sourced-desktop.jpg';
function Description() {
	return (
		<section className="description main-layout">
			<div className="desc-1">
				<span className="image-container flex space wrap">
					<img className="image" src={image1} alt="" />
					<div className="content">
						<span className="svg" />
						<h2>Enjoyable place for all the family</h2>
						<p>
							Our relaxed surroundings make dining with us a great experience for everyone. We can even
							arrange a tour of the farm before your meal.
						</p>
					</div>
				</span>
			</div>
			<div className="desc-2">
				<span className="image-container flex space wrap">
					<img className="image" src={image2} alt="" />
					<span className="content">
						<h2>The most locally sourced food</h2>
						<p>
							All our ingredients come directly from our farm or local fishery. So you can be sure that
							you’re eating the freshest, most sustainable food.
						</p>
					</span>
				</span>
			</div>
		</section>
	);
}

export default Description;
