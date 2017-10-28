import React from 'react';
import './submit.css';

const Gender = ({onChange,onSubmit}) => {
	return(
		<div>
            <div >
				What is your recipient's gender?
				<form onSubmit={onSubmit}>
					<input type="text" onChange={onChange}/>
					<button>Submit</button>
				</form>

				<div class="sex">
                    <img class="male" draggable="false" src="src/components/asset/93.png"/>
						<p>Male</p>
                    <img class="female" draggable="false" src=""/>
                        <p>Female</p>
				</div>

            </div>
		</div>
	)
};

export default Gender;