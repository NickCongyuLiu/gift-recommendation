import React from 'react';
import '../style/relationship.css';

const Relationship = ({age,gender,onClick}) => {
    let relType = [{}];

    if (gender=="Male"){
        console.log(gender);
        switch(age){
            case "Child":
                relType = [{rel:"Baby boy"},{rel:"Young Boy"}];
                break;
            case "Mid-age":
                relType = [{rel:"Father"},{rel:"Husband"},{rel: "Friend"},{rel: "Someone from work"}];
                break;
            case "Teenager":
                relType = [{rel: "Son"},{rel: "Boyfriend"},{rel: "Friend"}];
                break;
            case "Senior":
                relType = [{rel: "Grandad"},{rel: "Family member"}];
                break;
        }
    } else if(gender=="Female") {
        switch (age) {
            case "Child":
                relType = [{rel: "Baby girl"}, {rel: "Young Girl"}];
                break;
            case "Mid-age":
                relType = [{rel: "Mother"}, {rel: "Wife"}, {rel: "Friend"}, {rel: "Someone from work"}];
                break;
            case "Teenager":
                relType = [{rel: "Daughter"}, {rel: "Girlfriend"}, {rel: "Friend"}];
                break;
            case "Senior":
                relType = [{rel: "Grandma"}, {rel: "Family member"}];
                break;
        }
    }



    const relRegion = relType.map((el,i)=>(
        <div key={i}>
            <button className="relationSelection" id="relationSelection" onClick={onClick.bind(null,el.rel)}>
                {el.rel}
            </button>
        </div>
    ));


    return(
        <div>
            <div className="relationStatement"> What is the relationship with your recipient?</div>
            <div id="ul_buttons3">
                {relRegion}
            </div>
        </div>
    )
};

export default Relationship;