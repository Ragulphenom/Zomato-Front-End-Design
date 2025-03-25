import './Footer.css';
// <a href="https://www.flaticon.com/free-icons/india" title="india icons">India icons created by verluk - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a>
import appStore from '../assets/images/appStore.webp';
import googlePlay from '../assets/images/googlePlay.webp';
import footerLogo from '../assets/images/footerLogo.jpg';
import flag from '../assets/images/flag1.png';
const Footer = () => {
	const whoAreWe = [
		' Blog',
		'Work With Us',
		'Investor Relations',
		'Report Fraud',
		'Press Kit',
		'Contact Us',
	];

	const zomaVerse = [
		'Zomato',
		'Blinkit',
		'Feeding India',
		'Hyperpure',
		'Zomato',
		'Live',
		'Zomaland',
		'Weather Union',
	];
	const forRestaurants = ['Partner With Us', 'Apps For You'];
	const learnMore = ['Privacy', 'Security', 'Terms', 'Sitemap'];
	return (
		<>
			<div className="superDiv">
				<div className="logoDiv d-flex justify-content-evenly foot">
					<img src={footerLogo} alt="Image will be updated Soon " />

					<button className="btn  btn-1 ">
						<img src={flag} alt="" /> <span className="ind">India</span>
					</button>
					<button className=" btn btn-2">
						<i class="fa-solid fa-globe"></i> English
					</button>
				</div>
				{/* !lists div */}
				<div className="listDivs d-flex justify-content-between lastContainer">
					<div className="firstDiv">
						<p className="bold">Who Are We </p>
						{whoAreWe.map((value, index) => (
							<p className="mapped">{value}</p>
						))}
					</div>
					<div className="secondDiv">
						<p className="bold">ZOMAVERSE</p>
						{zomaVerse.map((value) => (
							<p className="mapped">{value}</p>
						))}
					</div>
					<div className="thirdDiv">
						<p className="bold">For Restaurants</p>{' '}
						{forRestaurants.map((value) => (
							<p className="mapped">{value}</p>
						))}
					</div>
					<div className="fourthDiv">
						<p className="bold">Learn More</p>
						{learnMore.map((value) => (
							<p className="mapped">{value}</p>
						))}
					</div>
					<div className="fifthDiv">
						<p className="bold">Social Links</p>

						<div className="mapped icons">
							<i class="bi bi-linkedin"></i>
							<i class="bi bi-instagram"></i>
							<i class="bi bi-twitter-x"></i>
							<i class="bi bi-youtube"></i>
							<i class="bi bi-facebook"></i>
						</div>
						<div className="store appStore">
							<img src={appStore} alt="" />
						</div>
						<div className="store googleStore">
							<img src={googlePlay} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className="final">
				<p>
					By continuing past this page, you agree to our Terms of Service,
					Cookie Policy, Privacy Policy and Content Policies. All trademarks are
					properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
					rights reserved.
				</p>
			</div>
		</>
	);
};
export default Footer;
