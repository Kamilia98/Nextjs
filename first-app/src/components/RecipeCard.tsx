import React from 'react';
import { Clock, Star } from 'lucide-react';
import Link from 'next/link';

interface RecipeCardProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  rating: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  name,
  image,
  cuisine,
  difficulty,
  prepTimeMinutes,
  cookTimeMinutes,
  rating,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<Star key="half-star" className="h-4 w-4 text-yellow-400" />);
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <Link href={`/recipes/${id}`} className="block">
      <div className="recipe-card overflow-hidden rounded-lg bg-white shadow">
        <div className="h-48 w-full overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif font-bold text-xl line-clamp-2">
              {name}
            </h3>
            <span
              className={`text-xs px-2 py-1 rounded ${getDifficultyColor(
                difficulty
              )}`}
            >
              {difficulty}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{cuisine}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>{prepTimeMinutes + cookTimeMinutes} min</span>
            </div>
            <div className="flex">{renderStars(rating)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
