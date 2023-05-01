import React from "react";
import Lottie from "lottie-react";
import carousel from "../../assets/carousel.json";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: '20px 50px',
        }}
      >
        <div>
          <h1 className="text-7xl font-bold">It's not just <br /> Food, It's an 
          <br /> Experience</h1>
        </div>
        <div>
          <Lottie animationData={carousel} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Home;
