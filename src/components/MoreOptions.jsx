import React from 'react';
import './MoreOptions.css';
import icon from '../assets/icon.svg';
const MoreOptions = () => {
	const options = [
		'Popular Cuisines Near Me',
		'Popular Restaurant Types Near me',
		'Top Restaurant Chains',
		'Cities We Deliver To',
	];
	return (
		<div className="moreOptionCls">
			<h1>Explore options near me</h1>

			<div className="listDivs">
				{options.map((options) => (
					<div className="optionsList">
						<p className="para">{options}</p>
						<span className="iconSpan">
							<i class="bi bi-caret-right-fill"></i>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default MoreOptions;
