/**
 * Created by bowenjiang on 10/28/17.
 */
import React from 'react';
import './../style/style.css'

const Relationship = ({onClick}) => {



    let relType = [{relationship: "Significant other"},{relationship: "Friend"},{relationship:"Family member"},
        {relationship:"Someone from work"},{relationship:"I could f**king kill him"}];

    const relRegion = relType.map((el,i)=>(
        <li key={i}>
            <button onClick={onClick.bind(null,el.relationship)}>
                {el.relationship}
            </button>
        </li>
    ));


    return(
        <div>
            What is your relationship with your recipient?
            <ul id="ul_buttons">
                {relRegion}
            </ul>
        </div>
    )
};

export default Relationship;