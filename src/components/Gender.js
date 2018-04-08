import React from 'react';
import '../style/gender.css';

const Gender = ({onClick}) => {

	let genders=[{gen:"Male"},{gen:"Female"}];

	const genderRegion = genders.map((el,i) => (
		<li key={i}>
			<button className="genderRegion" id="genderRegion" onClick={onClick.bind(null,el.gen)}>
				{el.gen}
			</button>
		</li>
	));

	return(
		<div>
            <div className="welcomePage"> Welcome to our page, we would ask few thing to recommend your best gift</div>
			<div className="genderStatement"> What is your recipient's gender?</div>
			<ul id="ul_buttons">
				{genderRegion}
			</ul>
		</div>
	)
};

export default Gender;