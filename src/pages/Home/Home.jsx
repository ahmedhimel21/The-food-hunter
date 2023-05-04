import React, { useState } from "react";
import Lottie from "lottie-react";
import carousel from "../../assets/carousel.json";
import { useLoaderData } from "react-router-dom";
import SingleChefCards from "../singleChefCards/singleChefCards";
import city1 from "../../../public/dhaka.jpg";
import city2 from "../../../public/chittogong.webp";
import city3 from "../../../public/sylhet.jpg";
import city4 from "../../../public/barisal.jpg";
import city5 from "../../../public/comilla.jpg";
import city6 from "../../../public/rajshahi.jpg";
import city7 from "../../../public/jashore.webp";
import city8 from "../../../public/jhenidah.jpg";

const Home = () => {
  const chefData = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "20px 50px",
        }}
      >
        <div>
          <h1 className="text-7xl font-bold">
            It's not just <br /> Food, It's an
            <br /> Experience
          </h1>
        </div>
        <div>
          <Lottie animationData={carousel} loop={true} />
        </div>
      </div>
      <h1 className="text-3xl font-medium mx-12">
        Find us in these cities and many more!
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-12 my-8">
        <div className="relative">
          <img src={city1} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Dhaka
          </h1>
        </div>
        <div className="relative">
          <img src={city2} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Chittagong
          </h1>
        </div>
        <div className="relative">
          <img src={city3} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Sylhet
          </h1>
        </div>
        <div className="relative">
          <img src={city4} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Barisal
          </h1>
        </div>
        <div className="relative">
          <img src={city5} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Comilla
          </h1>
        </div>
        <div className="relative">
          <img src={city6} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Rajshahi
          </h1>
        </div>
        <div className="relative">
          <img src={city7} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Jashore
          </h1>
        </div>
        <div className="relative">
          <img src={city8} alt="city" className="w-full h-40 rounded" />
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold text-white">
            Jhenidah
          </h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center">Our Chefs</h1>
      <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-2 gap-5 mx-5 my-7">
        {chefData.slice(0, showAll ? 6 : 4).map((singleData) => (
          <SingleChefCards
            key={singleData.id}
            singleData={singleData}
          ></SingleChefCards>
        ))}
      </div>
      <div className="text-center mb-4">
        {!showAll && (
          <button onClick={handleShowAll} className="btn btn-secondary">
            See More
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
