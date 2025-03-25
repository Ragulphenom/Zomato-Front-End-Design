import image1 from '../assets/images/restaurantChair.jpg';
import image2 from '../assets/images/kingSizeDining.jpg';
import image3 from '../assets/images/hotelOnPhone.jpg';
import image4 from '../assets/images/hotelOnPhone-2.jpg';
import image5 from '../assets/images/foodOnLeaf.jpg';
import './Collections.css';
import collections from '../assets/images/collectionScreenshot.jpg';
function Collections() {
	const styles = {
		marginLeft: '2vw',
	};
	return (
		// <>
		// 	<div className="headerDiv">
		// 		<h2>Collections</h2>
		// 		<p>
		// 			<span>
		// 				Explore curated lists of top restaurants, cafes, pubs, and bars in
		// 				Chennai, based on trends
		// 			</span>
		// 			<span>All Collections in Chennai</span>
		// 		</p>
		// 	</div>

		// 	<div className=" d-flex collection-Images ">
		// 		<div className=" innerDiv innerDiv1">
		// 			<p>Newly Opened Places</p>
		// 			<span>17 Places</span>
		// 		</div>
		// 		<div className=" innerDiv innerDiv2">
		// 			<p>Newly Opened Places</p>
		// 			<span>17 Places</span>
		// 		</div>
		// 		<div className=" innerDiv innerDiv3">
		// 			<p>Newly Opened Places</p>
		// 			<span>17 Places</span>
		// 		</div>
		// 		<div className=" innerDiv innerDiv4">
		// 			<p>Newly Opened Places</p>
		// 			<span>17 Places</span>
		// 		</div>
		// 	</div>
		<>
			<img src={collections} style={styles} alt="" />
		</>
	);
}
export default Collections;
