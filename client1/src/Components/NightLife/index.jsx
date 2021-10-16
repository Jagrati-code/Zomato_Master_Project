import React from "react";

// Components
import NightLifeCarousal from "./NightLifeCarousal";
import DiningCategory from "../Dining/DiningCategory";

const NightLife = () => {
    return (
        <div>
            <NightLifeCarousal />
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">NightLife Restaurants in Jaipur</h1>
            <DiningCategory />
        </div>
    );
};

export default NightLife;