import React, { useState } from "react";

const PersonCard = props =>{
    const { fName, lName, age, hairColor, initialFollowers } = props;
    const [currentFollowers,setCurrentFollowers ] = useState(initialFollowers);
    // React working magic and passing through my props dictionary
    return (
        <div>
            <h1>{fName}, {lName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Followers: { currentFollowers}</p>
            <button onClick={(event) => setCurrentFollowers(currentFollowers + 1)}>Follow {fName}! </button><br></br><br></br>
            <button onClick={(event) => setCurrentFollowers(currentFollowers - 1)}>Unfollow {fName}! </button>
        </div>
    );
}
export default PersonCard;