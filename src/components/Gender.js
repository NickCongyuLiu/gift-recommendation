import React from 'react';
import './submit.css';

const Gender = ({onClick}) => {

	let genders=[{gen:"Male"},{gen:"Female"}];

	const genderRegion = genders.map((el,i) => (
		<li key={i}>
			<button onClick={onClick.bind(null,el.gen)}>
				{el.gen}
			</button>
		</li>
	));

	return(
		<div>
			What is your recipient's gender?
			<ul>
				{genderRegion}
			</ul>

		</div>
	)
};

export default Gender;