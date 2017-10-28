/**
 * Created by bowenjiang on 10/28/17.
 */

import React from 'react';

const Age = ({onChange,onSubmit}) => {
    return(
        <div>
            What is your recipient's age?
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
};


export default Age;