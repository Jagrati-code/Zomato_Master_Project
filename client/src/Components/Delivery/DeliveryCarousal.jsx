import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCategory from "./DeliveryCategory";
import {NextArrow, PrevArrow} from "../CarousalArrow";

const DeliveryCarousal = () => {

    const categories = [
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "Biryani"
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/4/56464/18163c7b780365d66811997d9d118ae5_o2_featured_v2.jpg",
            title: "Waffles"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
            title: "Chicken"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
            title: "Chaat"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
            title: "Cake"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
            title: "Rolls"
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/1/60551/5175748d41698e6eab456034fddc99b5_o2_featured_v2.jpg",
            title: "Burger"
        }
    ];
     
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <h1 className = "text-xl mb-4 font-semibold">Inspiration for your first order</h1>
            <div className="lg:hidden flex flex-wrap justify-between gap-3 lg:gap-0">
                {
                    categories.map((food) => (
                        <DeliveryCategory {...food} />
                    ))
                }
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                    {
                        categories.map((food) => (
                            <DeliveryCategory {...food} />
                        ))
                    } 
                </Slider>
            </div>
        </>
    );
};
export default DeliveryCarousal;