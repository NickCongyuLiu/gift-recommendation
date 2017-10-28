/**
 * Created by bowenjiang on 10/28/17.
 */
import React from 'react';

const Relationship = ({onClick}) => {

    let relType = [{rel: "Significant other"},{rel: "Friend"},{rel:"Family member"},
        {rel:"Someone from work"},{rel:"I could f**king kill him"}];

    const relRegion = relType.map((el,i)=>(
        <li key={i}>
            <button onClick={onClick.bind(null,el.rel)}>
                {el.rel}
            </button>
        </li>
    ));


    return(
        <div>
            What is your relationship with your recipient?
            <ul>
                {relRegion}
            </ul>
        </div>
    )
};

export default Relationship;