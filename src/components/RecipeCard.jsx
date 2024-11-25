import { Heart, Share2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMealContext } from '../pages/Context';

function RecipeCard({ meal, bg }) {
  const { favorites, toggleFavorite } = useMealContext();
  const isFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);

  const handleShare = () => {
    const shareText = `Check out this recipe: ${meal.strMeal}\nHere's the link: ${meal.strSource || `/recipe/${meal.idMeal}`}`;
    if (navigator.share) {
      navigator
        .share({
          title: meal.strMeal,
          text: shareText,
          url: meal.strSource || `/recipe/${meal.idMeal}`,
        })
        .catch((err) => console.error('Error sharing:', err));
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareText)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch((err) => console.error('Error copying text:', err));
    } else {
      alert('Sharing is not supported on this device.');
    }
  };

  if (!meal || !meal.idMeal) {
    console.error('Meal data is incomplete or undefined.');
    return null;
  }

  return (
    <div>
      <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative m-2`}>
        <Link to={`/recipe/${meal.idMeal}`} className="relative h-32 min-h-32">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
        </Link>

        <button
          className="absolute top-1 right-2 bg-white rounded-full p-1 m-3 cursor-pointer hover:bg-gray-200"
          aria-label="Add to Favorites"
          onClick={() => toggleFavorite(meal)}
        >
          {!isFavorite && <Heart className="stroke-red-500 hover:fill-red-500 hover:stroke-none" />}
          {isFavorite && <Heart className="stroke-red-500 fill-red-500" />}
        </button>

        <div className="flex mt-2">
          <p className="font-bold tracking-wide line-clamp-1">{meal.strMeal}</p>
        </div>

        <div className="flex justify-between">
          <p className="mt-0 text-slate-500">{`${meal.strArea} Dish`}</p>
          <button
            onClick={handleShare}
            aria-label="Share this recipe"
            className="bg-transparent border-none cursor-pointer"
          >
            <Share2 size="18" className="text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
