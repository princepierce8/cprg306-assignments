"use client";
import { useState , useEffect } from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(id) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            return data.meals[0];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }    
    }

    const loadMealIdeas = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();

            if (!data.meals) {
                setMeals([]);
                return;
            }

            const mealchallenge = await Promise.all(
                data.meals.map(async (meal) => {
                    return await fetchMealIdeas(meal.idMeal);
                })
            );
            setMeals(mealchallenge);
        } catch (error) {
            console.error("Error loading meal ideas:", error)
            setMeals([]);
        }
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    function getIngredients(meal){
        let ingredients = [];
        for (let i = 1; i <= 20; i++){
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== ""){
                ingredients.push(`${measure} ${ingredient}`);
            } 
        }
        return ingredients;
    }

    return (
        <div className="bg-slate-800 p-6 rounded-lg mt-8 text-white max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            {ingredient ? (
                <>
                    <p className="mb-4">Meals with {ingredient}:</p>
                    <ul>
                        {meals.length > 0 ? (
                        meals.map((meal) => (
                            <li key={meal.idMeal} className="bg-slate-700 p-2 mb-2 rounded hover:bg-slate-600">
                            <h3>{meal.strMeal}</h3>

                            <div className="text-xs text-gray-500">
                                <p className="font-semibold">Ingredients</p>
                                <ul>
                                    {getIngredients(meal).map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            </li>
                        ))
                        ) : (
                            <p>No meals found for {ingredient}</p>
                        )}

                    </ul>
                </>
            ) : (
                <p>Please select an ingredient to see meal ideas.</p>
            )}
        </div>
    );
}