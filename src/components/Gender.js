import React from 'react';

const Gender = ({onChange,onSubmit}) => {
	return(
		<div>
			<div >
				What is your recipient's gender?
				<form onSubmit={onSubmit}>
					<input type="text" onChange={onChange}/>
					<button>Submit</button>
				</form>

			</div>
		</div>
	)
};

export default Gender;