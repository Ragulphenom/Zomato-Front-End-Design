import 'bootstrap/dist/css/bootstrap.min.css';
import './headerComponent.css';
import zomatoLogo from '../assets/images/zomatoLogo.avif';
import inputImage from '../assets/images/input.png';

function Header() {
	return (
		<div className="mainDiv">
			<div className=" d-flex justify-content-around navBar">
				<div className="getTheApp">
					<p>Get the App</p>
				</div>
				<div className=" d-flex justify-content-around typicalNavBar">
					<p>Investor Relations</p>
					<p>Add restaurant</p>
					<p>Log in</p>
					<p>Sign up</p>
				</div>
			</div>

			<div className="headerContent">
				<div className="logo">
					<img src={zomatoLogo} alt="Zomato Logo" />
				</div>
				<div className="caption">
					<h3>Discover the best food & drinks in Chennai</h3>
				</div>
			</div>

			<div className="inputClone">
				<section className="cloneSection">
					<span className="location">
						<i class="fa-solid fa-location-dot"></i> Chennai
					</span>
					<span className="iconDown">
						<i class="bi bi-caret-down-fill"></i>
					</span>
					<span className="pipe">|</span>
					<span className="search">
						<i class="bi bi-search"></i>
					</span>
					<span className="placeHolders">
						Search for restaurant, cuisine or a dish
					</span>
				</section>
			</div>
		</div>
	);
}
export default Header;
