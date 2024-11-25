import { Heart} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMealContext } from '../pages/Context';

function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const {favorites , toggleFavorite} = useMealContext()
  
  console.log(id);
  
  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setMeal(data.meals ? data.meals[0] : null);
    };
    fetchMeal();
  }, [id]);

  if (!meal) {
    return (
      <div className="flex items-center ml-96 pl-52 text-center justify-center min-h-screen ">
              <span className="loading loading-ring text-center  loading-lg"></span>
      </div>
    );
  }

  return (
    <div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-5">
        <div className="w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 h-full flex flex-col">
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-1/2 object-cover rounded-lg shadow-md"
              />

                <button
                  className='absolute top-1 right-2 bg-white rounded-full p-1  m-3 cursor-pointer hover:bg-gray-200'
                  aria-label='Add to Favorites'
                  onClick={() => toggleFavorite(meal)}
                >
                

                  {!favorites && <Heart className='stroke-red-500 hover:fill-red-500 hover:stroke-none' />}
                  {favorites && <Heart className='stroke-red-500 fill-red-500 ' />}
                </button>
         </div>

            {/* Right Section: Details */}
            <div className="flex-1 md:pl-8">
              <h1 className="text-2xl font-bold mb-4 underline">{meal.strMeal}</h1>
             
              {/* Ingredients */}
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = meal[`strIngredient${index + 1}`];
                    const measure = meal[`strMeasure${index + 1}`];
                    if (ingredient) {
                      return (
                        <button
                          key={index}
                          className="bg-blue-500 text-white px-2 py-1 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                        >
                          {ingredient} {measure && `(${measure})`}
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              

              {/* Instructions */}
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Instructions</h2>
                <p className="text-md text-slate-600 leading-6">{meal.strInstructions}</p>
              </div>


              <Link
                to={meal.strYoutube} 
                target="_blank" 
                rel="noopener noreferrer" // Ensure security for external links
                className="font-bold p-4 mt-5 text-xl text-end text-blue-500 underline hover:text-blue-700"
              >
                Watch on YouTube
              </Link>

            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
