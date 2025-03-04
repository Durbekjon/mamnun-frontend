"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export default function CollabsComponent() {
  const data = [
    { img: "/images/collab.png" },
    { img: "/images/itac.png" },
    { img: "/images/uscg.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  return (
    <section className="py-10 border-b border-gray-[#2f2b26] flex items-center justify-center min-h-[30vh]">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="flex justify-center items-center h-36">
              <div className="flex justify-center items-center w-36 h-36">
                <img
                  src={d.img}
                  alt={`Collaboration ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
