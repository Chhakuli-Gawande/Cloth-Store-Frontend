import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Clothes() {
  const [cloth, setcloth] = useState([]);
  useEffect(() => {
    const getcloth = async () => {
      try {
        const res = await axios.get("https://cloth-store-a44p.onrender.com/cloth");

        console.log(res.data); // Log all data from the API
        setcloth(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getcloth();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Life’s too short to wear boring clothes! </h1>
          <p>
          Don’t miss out! Discover a selection of stylish apparel available . Dress well, feel confident, and grab yours today!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {cloth.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Clothes;
