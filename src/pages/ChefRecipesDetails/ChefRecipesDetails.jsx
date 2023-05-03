import React from "react";

const ChefRecipesDetails = ({ recipe }) => {
  const { ingredients, name, rating, steps } = recipe;
  console.log(steps);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
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
            <button className="btn btn-secondary">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipesDetails;
