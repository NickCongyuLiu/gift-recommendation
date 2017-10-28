/**
 * Created by bowenjiang on 10/28/17.
 */

import React from 'react';

const Age = ({onClick}) => {
    let ageRange=[{age:"child"},{age:"teenager"},{age:"mid-age"},{age:"senior"}];

    const ageRegion = ageRange.map((el,i) => (
        <li key={i}>
            <div>
                <button onClick={onClick.bind(null,el.age)}>
                    {el.age}
                </button>
            </div>

        </li>

        )
    );


    return(
        <div>
            What is your recipient's age?
            <ul>
                {ageRegion}
            </ul>

        </div>
    )
};


export default Age;