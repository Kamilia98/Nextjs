import { Recipe } from '@/models/recipe';
import Link from 'next/link';

export const revalidate = 3600;

async function getFeaturedRecipes(): Promise<Recipe[]> {
  const response = await fetch('https://dummyjson.com/recipes?limit=50');
  const data = await response.json();

  // Sort by rating and get top 2
  return data.recipes
    .sort((a: Recipe, b: Recipe) => b.rating - a.rating)
    .slice(0, 2);
}

export default async function FeaturedPage() {
  const recipes = await getFeaturedRecipes();

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="block hover:bg-orange-50 p-3 rounded-lg transition-colors"
        >
          <div className="flex items-center space-x-3">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-medium">{recipe.name}</h3>
              <p className="text-sm text-gray-600">Rating: {recipe.rating}/5</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
