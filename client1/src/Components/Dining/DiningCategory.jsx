import React, {useState} from "react";

// Components
import DineOutRestaurantCard from "../dineOutRest";

const DiningCategory = () => {
    

    const [dineOut, setDineOut] = useState([
      {
          image: "https://b.zmtcdn.com/data/pictures/6/18748726/2fa6cb333e7183f47ec0f0099dac4c08_featured_v2.jpg",
          name: "The Night Jar",
          rating: 4.6,
          isPro : 20,
          price: 2400,
          distance: 176,
          descript: "North Indian, Continental, Asian, Beverages",
      },
      {
        image: "https://b.zmtcdn.com/data/pictures/8/18922348/57068d7f1e87cac33dc01d9b6fd48df3_featured_v2.jpg",
        name: "Retreat",
        rating: 4.1,
        isPro : 20,
        price: 1600,
        distance: 341,
        descript: "North Indian, Chinese, Mexican, Fast Food, Beverages",
      },
      {
        image: "https://b.zmtcdn.com/data/pictures/3/18688513/6733a6f4ca5b494271ef94e12e27a5e4_featured_v2.jpg",
        name: "Stardust",
        rating: 4.1,
        isPro : 15,
        price: 1000,
        distance: 3000,
        descript: "North Indian, Rajasthani, Chinese, Mughlai, Fast Food, Beverages",
      },
      {
        image: "https://b.zmtcdn.com/data/pictures/1/18631351/8d3a3785abdffb3027df10586c8198c1_featured_v2.jpg",
        name: "360°",
        rating: 4.2,
        isPro : 15,
        price: 1700,
        distance: 133,
        descript: "North Indian, Mughlai, Fast Food, Beverages, Chinese",
      },
      {
        image: "https://b.zmtcdn.com/data/pictures/7/101887/f3e17a8f027d73d569f7b329ea028da3_featured_v2.jpg",
        name: "Bar Palladio Jaipur",
        rating: 4.0,
        isPro : 10,
        price: 1800,
        distance: 2000,
        descript: "Italian, Finger Food",
      },
      {
        image: "https://b.zmtcdn.com/data/pictures/1/18557371/6c90152ba888589c08cc63bbf7f2b595_featured_v2.jpg",
        name: "Asteria",
        rating: 4.3,
        isPro : 10,
        price: 1000,
        distance: 8600,
        descript: "Bar Food, North Indian, Italian, Chinese, Desserts, Beverages",
      },

  ]);

    return (
        <div className="w-full flex flex-wrap items-center">
                {
                  dineOut.map((dine) => (
                    <DineOutRestaurantCard {...dine} />
                  ))
                }            
        </div>
    );
};

export default DiningCategory;