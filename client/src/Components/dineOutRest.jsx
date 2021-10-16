import React from "react";
import {AiTwotoneStar} from "react-icons/ai";

const DineOutRestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-2 w-full mb-6 rounded-2xl hover:shadow-lg transition duration-700 ease-in-out md:w-1/2 lg:w-1/3">
                <div className="w-full h-56 lg:h-64 relative ">
                    <div className="absolute w-full bottom-4 flex items-end justify-between">
                        <div className="flex flex-col gap-2 items-start">
                            <span className="bg-pink-700 text-white px-2 py-1 rounded text-sm">Pro - Get {props.isPro}% off</span>
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded mr-3">{props.distance} m</span>
                    </div>
                    <img src={props.image} alt="food" className="w-full h-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex items-center justify-between"> 
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">4.1 <AiTwotoneStar /></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>{props.descript}</p>
                        <p>₹ {props.price} for two</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DineOutRestaurantCard;