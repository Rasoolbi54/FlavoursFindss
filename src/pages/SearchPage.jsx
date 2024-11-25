import { Heart, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import axios from 'axios';
import { getRandomColor } from '../lib/utils';

function SearchPage() {
    const [recipes , setRecipes] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [searchInput , setSearchInput] = useState('');

  

   async function fetchRandomMeal(){
    setIsLoading(true);
    const fetchedMeals = [];
    try {
      for (let i = 0; i < 20; i++) {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/random.php'
        );
        fetchedMeals.push(response.data.meals[0]);
      
      }
      setRecipes(fetchedMeals);
      setIsLoading(false)
      
      
    } catch (error) {
      console.error("Error fetching random meals:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchMeals = async (query) => {
    setIsLoading(true);
    try {
      // Normalize the query (remove extra spaces, etc.)
      const normalizedQuery = query.trim().toLowerCase();
  
      // Variables to hold the results
      let mealsByIngredient = [];
      let mealsByName = [];
      let mealsByCategory = [];
      let mealsByCuisine = [];
  
      // Check if the query includes "quick" or "healthy" and modify behavior
      if (normalizedQuery.includes("quick")) {
        // Fetch quick recipes (Breakfast, Snacks, Under 20 mins)
        const quickCategories = ["Breakfast", "Snacks", "Under 20 mins"];
        for (const category of quickCategories) {
          const categoryResponse = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          mealsByCategory = [...mealsByCategory, ...(categoryResponse.data.meals || [])];
        }
      } else if (normalizedQuery.includes("healthy")) {
        // Fetch healthy recipes (Vegetarian, Vegan, Low-calorie)
        const healthyCategories = ["Vegetarian", "Vegan", "Low-calorie"];
        for (const category of healthyCategories) {
          const categoryResponse = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          mealsByCategory = [...mealsByCategory, ...(categoryResponse.data.meals || [])];
        }
      } else {
        // Fetch meals by ingredient
        const ingredientResponse = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${normalizedQuery}`
        );
        mealsByIngredient = ingredientResponse.data.meals || [];
  
        // Fetch meals by name
        const nameResponse = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${normalizedQuery}`
        );
        mealsByName = nameResponse.data.meals || [];
  
        // Fetch meals by category (general categories)
        const categoryResponse = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${normalizedQuery}`
        );
        mealsByCategory = categoryResponse.data.meals || [];
  
        // Fetch meals by cuisine
        const cuisineResponse = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${normalizedQuery}`
        );
        mealsByCuisine = cuisineResponse.data.meals || [];
      }
  
      // Combine all results and filter duplicates
      const allMeals = [
        ...mealsByIngredient,
        ...mealsByName,
        ...mealsByCategory,
        ...mealsByCuisine,
      ];
  
      // Filter duplicates by meal id
      const uniqueMeals = allMeals.filter(
        (meal, index, self) => self.findIndex((m) => m.idMeal === meal.idMeal) === index
      );
  
      // Update recipes state with the final list of unique meals
      setRecipes(uniqueMeals);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setRecipes([]); // Fallback to empty array in case of an error
    } finally {
      setIsLoading(false); // End loading state
    }
  };
  

  
  
  function handleInputChange(e){
         setSearchInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(searchInput.trim()){
     fetchMeals(searchInput)
    }
  }


  

  


 useEffect(()=>{
    fetchRandomMeal()
 },[])


  return (
    <div className=' h-full flex-1 bg-[#faf9fb] p-10 '>
       <div className='max-w-screen-lg mx-auto'>
          <form onSubmit={handleSubmit}>
             <label className='input shadow-md flex items-center gap-2'>
                <Search />
                <input 
                 type='text'
                 value={searchInput}
                 onChange={handleInputChange}
                 className='text-sm md:text-md grow gap-2'
                 placeholder="Enter ingredients separated by commas (e.g., chicken, tomato)"
                />
             </label>
          </form>

  

          <p className='font-bold text-3xl md:text-5xl mt-4 '>Recommended Recipes</p>
          <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight '>Popoular Choices</p>
             

          {isLoading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(9)].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-md bg-gray-200 p-3 relative m-2 animate-pulse"
                    >
                        <div className="h-32 w-full bg-gray-300 rounded-md"></div>
                        <div className="mt-2 h-4 w-3/4 bg-gray-300 rounded"></div>
                        <div className="mt-1 h-3 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    ))}
                </div>
          )}

            {/* recipie card */}
          <div className='grid grid-3   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
            {
              !isLoading && recipes?.map((meal)=>
                 <RecipeCard  key={meal.idMeal} meal={meal} {...getRandomColor()}/>
                )
            }
          </div>
       </div>
    </div>
  )
}

export default SearchPage
