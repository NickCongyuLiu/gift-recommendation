/**
 * Created by bowenjiang on 10/28/17.
 */

import React from 'react';
import './../style/style.css';

const Age = ({onClick}) => {
    let ageRange=[{age:"child"},{age:"teenager"},{age:"mid-age"},{age:"senior"}];

    const ageRegion = ageRange.map((el,i) => (
        <li key={i}>
            <button onClick={onClick.bind(null,el.age)}>
                {el.age}
            </button>
        </li>

    ));


    return(
        <div>
            What is your recipient's age?
            <ul id="ul_buttons">
                {ageRegion}
            </ul>
        </div>
    )
};


export default Age;