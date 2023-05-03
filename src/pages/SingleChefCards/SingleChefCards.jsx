import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SingleChefCards = ({ singleData }) => {
  console.log(singleData);
  const { img, chefName, experience, recipe, like,id } = singleData;
  return (
    <>
      <div className="card w-full bg-base-200 shadow-xl p-5">
        <figure>
          <img src={img} alt="Chef" className="rounded-lg h-[599px] w-full" />
        </figure>
        <div className="card-body">
          <p className="flex justify-between items-center">
            <h2 className="card-title">{chefName}</h2>
            <span className="flex items-center">
              <EyeIcon className="w-10"> </EyeIcon>
              {like}
            </span>
          </p>
          <p className="text-md font-semibold">Experience: {experience}</p>
          <p className="text-md font-semibold">
            Numbers of Recipes:{" "}
            <span className="font-bold text-lg">{recipe.length}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/chefRecipes/${id}`}>
            <button className="btn btn-secondary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChefCards;
