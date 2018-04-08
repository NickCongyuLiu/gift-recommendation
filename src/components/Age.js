import React from 'react';
import '../style/age.css';
import '../style/style.css'


const Age = ({onClick}) => {
    let ageRange=[{age:"Child"},{age:"Teenager"},{age:"Mid-age"},{age:"Senior"}];

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