/**
 * Created by bowenjiang on 10/28/17.
 */
import React from 'react';
import './relationship.css';

const Relationship = ({onClick}) => {



    let relType = [{rel: "Significant other"},{rel: "Friend"},{rel:"Family member"},
        {rel:"Someone from work"},{rel:"I could f**king kill him"}];

    const relRegion = relType.map((el,i)=>(
        <li key={i}>
            <button className="relationSelection" id="relationSelection" onClick={onClick.bind(null,el.rel)}>
                {el.rel}
            </button>
        </li>
    ));


    return(
        <div>
            <div className="relationStatement"> What is your relationship with your recipient?</div>
            <ul id="ul_buttons3">
                {relRegion}
            </ul>
        </div>
    )
};

export default Relationship;