/**
 * Created by bowenjiang on 10/28/17.
 */

import React from 'react';
import './age.css';


const Age = ({onClick}) => {
    let ageRange=[{age:"child"},{age:"teenager"},{age:"mid-age"},{age:"senior"}];

    const ageRegion = ageRange.map((el,i) => (
        <li key={i}>
                <button className="ageSelection" id="ageSelection" onClick={onClick.bind(null,el.age)}>
                    {el.age}
                </button>

        </li>

        )
    );


    return(
        <div>
            <div className="ageStatement"> What is your recipient's age?</div>
            <ul id="ul_buttons2">
                {ageRegion}
            </ul>

        </div>
    )
};


export default Age;