

import React from 'react';
import '../style/budget.css';
import '../style/style.css'


const Budget = ({onClick}) => {
    let budgetRange=[{budget:"Under 50"},{budget:"50 - 200"},{budget:"200 - 500"},{budget:"Above 500"}];

    const budgetRegion = budgetRange.map((el,i) => (
            <li key={i}>
                <button className="budgetSelection" id="budgetSelection" onClick={onClick.bind(null,el.budget)}>
                    {el.budget}
                </button>
            </li>

        )
    );



    return(
        <div>
            <div className="budgetStatement"> What is your budget range?</div>
            <ul id="ul_buttons4">
                {budgetRegion}
            </ul>
        </div>
    )
};


export default Budget;