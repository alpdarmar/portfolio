import { useState } from "react";

// id, size , x , y , opacity, animationduration

export const Backgrounding = () => {
    const [stars,setStars] = useState();

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000)
    };

    const newStars = []

    for ( let i = 0; i < numberOfStars; i++){

    }
    return <div></div>;

};