import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipesDetails = ({ recipe }) => {
  const { ingredients, name, rating, steps } = recipe;
  const [disable,setDisable] = useState(false);
  const handleAddToFavoriteButton = () => {
    toast.success('Added to favorite', {autoClose: 500})
    setDisable(true)
  };
  return (
    <div>
      <div className="card w-full h-[650px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="text-md font-semibold">Ingredients:</span>{" "}
            {ingredients.map((i) => (
              <li>{i}</li>
            ))}
          </p>
          <p>
            <span className="text-md font-semibold">Cooking Methods:</span>{" "}
            {steps.map((s) => (
              <li>{s}</li>
            ))}
          </p>
          <p className="text-md font-semibold">
            {" "}
            Rating:<span className="text-lg font-bold"> {rating}</span>{" "}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToFavoriteButton} disabled={disable}
              className="btn btn-secondary"
            >
              Add to Favorite
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipesDetails;
