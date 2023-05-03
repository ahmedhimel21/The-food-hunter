import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipesDetails from "../ChefRecipesDetails/ChefRecipesDetails";
import LazyLoad from 'react-lazy-load'

const ChefRecipes = () => {
  const chefRecipes = useLoaderData();
  const { id, chefName, img, experience, like, recipe } = chefRecipes;
  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-2xl font-bold">Chef Information</h1>
        <div className="card card-side bg-base-100 shadow-xl mx-5 p-5">
          <figure>
            <LazyLoad>
            <img
              src={img}
              alt="chef_picture"
              className="rounded-md h-[599px]"
            />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-xl font-bold">Name:</span> {chefName}
            </h2>
            <p className="text-md font-semibold space-y-5">
              <span className="text-xl font-bold">Description:</span> Chef
              responsibilities include studying recipes, <br />
              setting up menus and preparing high-quality dishes. <br /> You
              should be able to delegate tasks to kitchen staff to ensure meals
              are <br /> prepared in a timely manner. Also, you should be <br />{" "}
              familiar with sanitation regulations. <br />
            </p>
            <p className="text-xl font-bold ">
              <span className="text-md font-bold">Likes: </span> {like}
            </p>
            <p className="text-xl font-bold">
              <span className=" text-md font-bold">Number of Recipes: </span>{" "}
              {recipe.length}
            </p>
            <p className="text-xl font-bold">
              <span className=" text-md font-bold">Experience: </span>{" "}
              {experience}
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold text-2xl mt-6">Chef Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mx-5 gap-5">
        {recipe.map((r) => (
          <ChefRecipesDetails recipe={r} id={id}></ChefRecipesDetails>
        ))}
      </div>
    </>
  );
};

export default ChefRecipes;
