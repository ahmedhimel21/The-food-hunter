import React, { useState } from "react";
import Lottie from "lottie-react";
import carousel from "../../assets/carousel.json";
import { useLoaderData } from "react-router-dom";
import SingleChefCards from "../singleChefCards/singleChefCards";

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
