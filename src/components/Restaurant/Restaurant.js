import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, [searchText]);

    const searchResult = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div>
            <h1 className="text-3xl md:text-4xl text-center mt-20">
                Search Your Meal 🤤🤤
            </h1>
            <div className="flex justify-center mt-10">
                <input
                    onChange={searchResult}
                    className="content-center Restaurant py-2 w-64 md:w-96 bg-gray-200 rounded"
                    type="text"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                {meals.map((meal) => (
                    <Meal key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
