/**
 * Created by bowenjiang on 10/28/17.
 */
import React from 'react';

const Relationship = ({onChange,onSubmit}) => {
    return(
        <div>
            What is your relationship with your recipient?
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Relationship;