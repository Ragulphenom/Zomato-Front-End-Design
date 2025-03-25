import { useEffect, useState } from 'react';
import './Locations.css';

function Locations() {
	const placeArray = [
		'T. Nagar',
		'Nungambakkam',
		'Velacherry',
		'Adyar',
		'Anna Nagar East',
		'Thuraipakkam',
		'Mylapore',
		'Alwarpet',
	];
	let [state] = useState(515);

	return (
		<>
			<h1>
				<span className="firstHalf"> Popular localities in and around </span>{' '}
				<span className="secondHalf">Chennai</span>{' '}
			</h1>
			<div className="outerDiv">
				{placeArray.map((places, index) => (
					<div className="">
						<div className="d-flex justify-content-between locationButton">
							<section className="sectionLocation ms-3">
								<li className="locationName" key={index}>
									{places}
								</li>
								<li className="locationCount">
									{state + index * 12 - 3} Places
								</li>
							</section>
							<section className="arrowIcon">
								<i class="bi bi-caret-right-fill"></i>
							</section>
						</div>
					</div>
				))}
				<div className="">
					<div className="d-flex justify-content-between locationButton last">
						<section className="sectionLocation seeMoreSection">
							<li className="locationName">See More </li>
						</section>
						<section className="arrowIcon seeMoreIcon">
							<i class="bi bi-caret-right-fill"></i>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

export default Locations;
