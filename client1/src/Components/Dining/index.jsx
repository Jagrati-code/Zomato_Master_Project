import React from "react";
import DineOutRestaurantCard from "../dineOutRest";

// Components
import DiningCarousal from "./DiningCarousal";
import DiningCategory from "./DiningCategory";

const Dining = () => {
    return (
        <div>
            <h1 className="text-xl text-gray-900 my-3 md:my-2  md:text-3xl font-semibold">Collection</h1>
            <p className="text-sm text-gray-500 md:text-lg my-3 md:my-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends</p>
            <DiningCarousal />
            <h1 className="text-xl my-4 md:my-8 md:text-3xl font-semibold">Dine-Out Restaurants in Jaipur</h1>
            <DiningCategory />
        </div>
    );
};

export default Dining;