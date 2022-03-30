import React from 'react';

const Meal = ({meal}) => {
    console.log(meal);
    const { strMeal, strInstructions, strMealThumb } = meal;
    return (
        <div className="border-solid border-2 border-{#e8eaec} rounded p-4">
            <img
                className="rounded opacity-90 hover:opacity-100 hover:scale-105 ease-in-out"
                src={strMealThumb}
                alt=""
            />
            <h4 className="text-xl my-3">{strMeal}</h4>
            <p>{strInstructions.slice(0, 100 + ".")}</p>
            <button className="bg-blue-600 hover:bg-blue-800 text-white rounded my-4 w-full py-2">
                Details
            </button>
        </div>
    );
};

export default Meal;