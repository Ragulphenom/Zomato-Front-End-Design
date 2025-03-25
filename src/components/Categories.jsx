import card1 from '../assets/images/dish1.jpg';
import card2 from '../assets/images/dish2.jpg';
import card3 from '../assets/images/dish3.jpg';
import './Categories.css';
function Categories() {
	return (
		<>
			<div className="wrapperDiv">
				<div className="cardDiv">
					<div className="subCard">
						<img src={card1} alt="Dish 1" />
					</div>
					<div className="captions">
						<h5>Order Online</h5>
						<h6> Stay Home and order to you doorstep</h6>
					</div>
				</div>
				<div className="cardDiv">
					<div className="subCard">
						<img src={card2} alt="Dish 1" />
					</div>
					<div className="captions">
						<h5>Dining</h5>
						<h6> View the city's favourite dining views</h6>
					</div>
				</div>
				<div className="cardDiv">
					<div className="subCard">
						<img src={card3} alt="Dish 1" />
					</div>
					<div className="captions">
						<h5>Live Events</h5>
						<h6> Discover India's best events and concerts</h6>
					</div>
				</div>
			</div>
		</>
	);
}

export default Categories;
