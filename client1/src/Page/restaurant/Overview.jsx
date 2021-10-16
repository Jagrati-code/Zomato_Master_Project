import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// Components
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import MapView from "../../Components/restaurant/MapView";


import { getReviews } from "../../Redux/Reducer/Reviews/review.action";
import { getImage } from "../../Redux/Reducer/Image/image.action";

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviewss] = useState([]);
    const {id} = useParams();

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
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

    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
      if (reduxState) {
        dispatch(getImage(reduxState?.menuImage)).then((data) => {
          const images = [];
          data.payload.image.images.map(({ location }) => images.push(location));
          setMenuImages(images);
        });
        dispatch(getReviews(reduxState?._id)).then((data) =>
          setReviewss(data.payload.reviews)
        );
      }
    }, []);

    const ratingChanged = (newRating) => {
      console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
      return mapAddress?.split(",").map((item) => parseFloat(item));
    };
  
    console.log(
      reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))
    );

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                  <h2 className="font-semibold text-lg md:text-xl my-4">About this place</h2>
                  <div className="flex justify-between items-center">
                      <h4 className="text-lg font-medium">Menu</h4>
                      <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-1 text-zomato-400">
                            See all menu <IoMdArrowDropright />
                        </span>
                      </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 my-4">
                    <MenuCollection 
                      menuTitle="Menu" 
                      pages="4" 
                      image={menuImage}
                    />
                  </div>

                  <h4 className="text-lg font-medium  my-4">Cuisines</h4>
                  <div className="flex flex-wrap gap-2">
                  {reduxState?.cuisine.map((data) => (
                    <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                      {data}
                    </span>
                  ))}
                  </div>
    
                  <div className="my-4">
                    <h4 className="text-lg font-medium ">Average Cost</h4>
                    <h6>₹{reduxState?.averageCost}  for two people (approx.)</h6>
                    <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                  </div>

                  <div className="my-4">
                    <h4 className="text-lg font-medium ">Similar Restaurants</h4>
                    <Slider {...settings}>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/54578/942707e37f65beb8bdce1659d61de5ed_featured_v2.jpg?output-format=webp" title="Shankar Bhel House"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/6/100256/75d199829038cdcd50e25bf3f43bc5eb_o2_featured_v2.jpg?output-format=webp" title="Subway"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/7/100727/7a7a53ad94144f28122061c03fb6bcb0_o2_featured_v2.jpg" title="Ganesh Bhojnalaya"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/6/100036/04acf727baa7e2a27aa954d43e88153a_o2_featured_v2.jpg" title="Brown Sugar-Baker & Cafe"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/8/18772388/c4d69bac1a6388acccbd2ef56988fd08_o2_featured_v2.jpg" title="Crazy Coffee"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/0/19182660/db669e7d2c225d1b5cc4a83d5a60a13c_o2_featured_v2.jpg" title="Thali-N-Platters"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/5/102795/42abd5585712945dc473a1a9ccc7b2f0_o2_featured_v2.jpg" title="Cafe Bae"/>
                    </Slider>
                  </div>
                
                  <div className="my-4">
                    <h4 className="text-lg font-medium ">Rate your delivery experience</h4>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    {
                      Reviews.map((reviewData) => (
                        <ReviewCard {...reviewData}  />
                      ))
                    }
                  </div>
                  
                  <div className="my-4 w-full md:hidden flex flex-col gap-4">
                    <MapView 
                      title={reduxState?.name}
                      phno={`+91${reduxState?.contactNumber}`}
                      mapLocation={getLatLong(reduxState?.mapLocation)}
                      address={reduxState?.address}
                    />
                  </div>

                  <div className="my-4 flex flex-col gap-4">
                    
                  </div>
                
                </div>
                
                <aside style={{height: "fit-content"}} className="hidden md:flex md:w-4/12 rounded-xl sticky top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                  <MapView 
                    title={reduxState?.name}
                    phno={`+91${reduxState?.contactNumber}`}
                    mapLocation={getLatLong(reduxState?.mapLocation)}
                    address={reduxState?.address}
                  />
                </aside>
            </div>
        </>
    );
};

export default Overview;