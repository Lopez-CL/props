import React from "react";

const PersonCard = (props) =>{
    // React working magic and passing through my props dictionary
const { fName, lName, age, hairColor } = props;
    return (
        <div>
            <h1>{fName}, {lName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}