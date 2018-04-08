
import React from 'react';
import '../style/Result.css';

const Result = ({relationship,budget}) => {
    let result;
    let link;


    console.log(budget);
    console.log(relationship);
    if (budget=="Under 50"){
        console.log(budget);
        switch(relationship){
            case "Baby boy":
                result="https://images-na.ssl-images-amazon.com/images/I/91p49o1UmmL._SX522_.jpg";
                link = "https://www.amazon.com/Handprint-Little-Hippo-SPECIAL-Footprint/dp/B01N5K0VLV";
                console.log(result);
                break;
            case "Young Boy":
                result="https://images-na.ssl-images-amazon.com/images/I/81DdvyZ%2BXoL._SL1500_.jpg";
                link ="https://www.amazon.com/T-Rex-Dinosaur-Birthday-Invitations-Envelopes/dp/B01B51BUA6/ref=pd_lpo_vtph_21_tr_img_2?_encoding=UTF8&psc=1&refRID=3A5HPRYKWRSHS8PYJ3KY";
                break;
            case "Baby girl":
                result="https://images-na.ssl-images-amazon.com/images/I/81AwpKGQZ1L._SL1500_.jpg";
                link= "https://www.amazon.com/Light-up-Terrarium-Customized-Mini-Explorer/dp/B0763TLL6V";
                break;
            case "Young girl":
                result="https://images-na.ssl-images-amazon.com/images/I/71wPSSvnL2L._SL1001_.jpg";
                link="https://www.amazon.com/Mermaid-Blanket-Crochet-Sleeping-Jr-White/dp/B01M7OU12S/ref=lp_362533011_1_6?s=bedbath&ie=UTF8&qid=1523134035&sr=1-6";
                break;
            case "Father":
                result="https://images-na.ssl-images-amazon.com/images/I/81DnuixewVL._SL1500_.jpg";
                link = "https://www.amazon.com/Dad-flashlight-emergencies-roadside-household/dp/B06ZY3ZBLG";
                break;
            case "Husband":
                result="https://images-na.ssl-images-amazon.com/images/I/81bZp3L5uaL._SX522_.jpg";
                link = "https://www.amazon.com/Hatteker-Waterproof-Precision-Rechargeable-Valentines/dp/B075LCDS53";
                break;
            case "Mother":
                result="https://images-na.ssl-images-amazon.com/images/I/91CwsjbCJeL._SX522_.jpg";
                link = "https://www.amazon.com/Barnetts-Chocolate-Delicious-Birthday-Corporate/dp/B00KWR6G4A";
                break;
            case "Wife":
                result="https://images-na.ssl-images-amazon.com/images/I/71XrOd3oUGL._SX679_.jpg";
                link = "https://www.amazon.com/Illusion-Changing-Romantic-Boyfriend-Girlfriend/dp/B01IEUPPY8";
                break;
            case "Friend":
                result="https://images-na.ssl-images-amazon.com/images/I/71NWNzahrcL._SL1001_.jpg";
                link = "https://www.amazon.com/NChance-Christmas-Elephant-Illusion-Decoration/dp/B076KC7D7B";
                break;
            case "Someone from work":
                result="https://images-na.ssl-images-amazon.com/images/I/81dlMdDrM9L._SL1500_.jpg";
                link = "https://www.amazon.com/Starbucks-Easter-Cocoa-Gift-Basket/dp/B076FFSF9Y";
                break;
            case "Son":
                result="https://images-na.ssl-images-amazon.com/images/I/713FLGpLk3L._SL1074_.jpg";
                link = "https://www.amazon.com/Tactical-Self-Defense-Flashlight-Multi-Tool-Gift-Boxed/dp/B073DNLM9F";
                break;
            case "Boyfriend":
                result="https://images-na.ssl-images-amazon.com/images/I/61gn0sYgQwL._AC_.jpg";
                link = "https://www.amazon.com/TOBSKBY-Charging-Charger-Playstation-Controller-3/dp/B074L61GTZ";
                break;
            case "Daughter":
                result="https://images-na.ssl-images-amazon.com/images/I/91KhK3Nu2wL._SX679_.jpg";
                link ="https://www.amazon.com/Cottage-Garden-Daughter-Jewelry-Amazing/dp/B00BRX32R2";

                break;
            case "Girlfriend":
                result="https://images-na.ssl-images-amazon.com/images/I/61I0cst3Z-L._UY575_.jpg";
                link="https://www.amazon.com/Necklace-NINASUN-Sterling-Anniversary-Girlfriend/dp/B0757MGK13/ref=sr_1_3?ie=UTF8&qid=1523134700&sr=8-3&keywords=best+gift+for+girlfriend+under+50";
                break;
            case "Friend":
                result="https://images-na.ssl-images-amazon.com/images/I/71Or1x3yW3L._UY575_.jpg";
                link = "https://www.amazon.com/Sterling-Friendship-Eternity-Necklace-Interlocking/dp/B07566MRPV/ref=sr_1_9?ie=UTF8&qid=1523134781&sr=8-9&keywords=best+gift+for+friend+under+50";
                break;
            case "Grandad":
                result="https://images-na.ssl-images-amazon.com/images/I/71tLGCn2v4L._SX522_.jpg";
                link = "https://www.amazon.com/Magnifying-Assistant-Birthday-OCEAN-BLUE/dp/B06Y669DPV/ref=sr_1_4_a_it?ie=UTF8&qid=1523135165&sr=8-4&keywords=gift%2Bfor%2Bsenior%2Bmen%2Bunder%2B50&th=1";
                break;
            case "Grandma":
                result="https://images-na.ssl-images-amazon.com/images/I/71hAAuvu96L._SX522_.jpg";
                link ="https://www.amazon.com/NurtureSoft-Orthopedic-Support-Cushion-Long-lasting/dp/B01KDWWZC0/ref=sr_1_10?ie=UTF8&qid=1523135081&sr=8-10&keywords=gift+for+senior+women+under+50";
                break;
            case "Family member":
                result="https://images-na.ssl-images-amazon.com/images/I/91TcSESWv8L._SX522_.jpg";
                link="https://www.amazon.com/Minifigures-Professions-Compatible-Educational-Collectibles/dp/B07B8LMTS8/ref=sr_1_4?ie=UTF8&qid=1523135204&sr=8-4&keywords=gift+for+family+member+under+50";
                break;
        }
    // } else if(budget=="50 - 200") {
    //     switch(relationship){
    //         case "Baby boy":
    //             result=
    //             break;
    //         case "Young Boy":
    //             result=
    //             break;
    //         case "Baby girl":
    //             result=
    //             break;
    //         case "Young girl":
    //             result=
    //             break;
    //         case "Father":
    //             result=
    //             break;
    //         case "Husband":
    //             result=
    //             break;
    //         case "Mother":
    //             result=
    //             break;
    //         case "Wife":
    //             result=
    //             break;
    //         case "Friend":
    //             result=
    //             break;
    //         case "Someone from work":
    //             result=
    //             break;
    //         case "Son":
    //             result=
    //             break;
    //         case "Boyfriend":
    //             result=
    //             break;
    //         case "Daughter":
    //             result=
    //             break;
    //         case "Girlfriend":
    //             result=
    //             break;
    //         case "Friend":
    //             result=
    //             break;
    //         case "Grandad":
    //             result=
    //             break;
    //         case "Grandma":
    //             result=
    //             break;
    //         case "Family member":
    //             result=
    //             break;
    //     }
    // }else if(budget = "200 - 500"){
    //     switch(relationship){
    //         case "Baby boy":
    //             result=
    //             break;
    //         case "Young Boy":
    //             result=
    //             break;
    //         case "Baby girl":
    //             result=
    //             break;
    //         case "Young girl":
    //             result=
    //             break;
    //         case "Father":
    //             result=
    //             break;
    //         case "Husband":
    //             result=
    //             break;
    //         case "Mother":
    //             result=
    //             break;
    //         case "Wife":
    //             result=
    //             break;
    //         case "Friend":
    //             result=
    //             break;
    //         case "Someone from work":
    //             result=
    //             break;
    //         case "Son":
    //             result=
    //             break;
    //         case "Boyfriend":
    //             result=
    //             break;
    //         case "Daughter":
    //             result=
    //             break;
    //         case "Girlfriend":
    //             result=
    //             break;
    //         case "Friend":
    //             result=
    //             break;
    //         case "Grandad":
    //             result=
    //             break;
    //         case "Grandma":
    //             result=
    //             break;
    //         case "Family member":
    //             result=
    //             break;
    //     }
    // }else if(budget ="Above 500"){
    //     switch(relationship){
    //         case "Baby boy":
    //             result=
    //             break;
    //         case "Young Boy":
    //             result=
    //             break;
    //         case "Baby girl":
    //             result=
    //             break;
    //         case "Young girl":
    //             result=
    //             break;
    //         case "Father":
    //             result=
    //             break;
    //         case "Husband":
    //             result=
    //             break;
    //         case "Mother":
    //             result=
    //             break;
    //         case "Wife":
    //             result=
    //             break;
    //         case "Friend":
    //             result=
    //             break;
    //         case "Someone from work":
    //             result=
    //             break;
    //         case "Son":
    //             result=
    //             break;
    //         case "Boyfriend":
    //             result=
    //             break;
    //         case "Daughter":
    //             result=
    //             break;
    //         case "Girlfriend":
    //             result=
    //             break;
    //         case "Friend":
    //             result=
    //             break;
    //         case "Grandad":
    //             result=
    //             break;
    //         case "Grandma":
    //             result=
    //             break;
    //         case "Family member":
    //             result=
    //             break;

    }






    return(
        <div>
            <div className="relationStatement"> This is the gift we recommend you</div>

            <a href={link}>
                <img className="resultImg" src={result}/>
                <div className="introduction"> Like! </div>
            </a>
        </div>
    )
};

export default Result;