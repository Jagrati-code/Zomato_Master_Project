import React, {useState} from "react";
import Slider from "react-slick";

// Components
import PictureCarousalCard from "../PictureCarousal";
import {NextArrow, PrevArrow} from "../CarousalArrow";

const DiningCarousal = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const [picture, setPicture] = useState([
      {
          image: "https://images.unsplash.com/photo-1519998203158-48b796d5cbfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVzdCUyMHBsYWNlJTIwaW4lMjBqYWlwdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Best in Jaipur",
          places: 37
      },
      {
        image: "https://images.unsplash.com/photo-1568633122100-4704717ab8c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlbmRpbmclMjB0aGlzJTIwd2Vla3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Trending this week",
        places: 15
      },
      {
        image: "https://images.unsplash.com/photo-1582920980795-2f97b0834c58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Most happy places",
        places: 24
      },
      {
        image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29yayUyMGZyaWVuZGx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Work friendly places",
        places: 8
      },
      {
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3dlZXQlMjB0b290aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Sweet tooth",
        places: 12
      },
      {
        image: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldCUyMGJhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Live screening",
        places: 4
      },
      {
        image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Newly Opened",
        places: 6
      }
  ]);

    return (
        <div className="w-full">
            <Slider { ...settings}>
                {
                  picture.map((rest) => (
                    <PictureCarousalCard {...rest} />
                  ))
                }
                
            </Slider>
        </div>
    );
};

export default DiningCarousal;