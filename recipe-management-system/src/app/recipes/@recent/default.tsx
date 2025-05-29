import { Recipe } from "@/models/recipe";
import Link from "next/link";
import { Suspense } from "react";

async function getRecentRecipes(): Promise<Recipe[]> {
  const response = await fetch('https://dummyjson.com/recipes?limit=3&skip=10');
  const data = await response.json();
  return data.recipes;
}

function RecentRecipesList() {
  return (
    <Suspense fallback={<RecentLoadingFallback />}>
      <RecentRecipesContent />
    </Suspense>
  );
}

async function RecentRecipesContent() {
  const recipes = await getRecentRecipes();

  return (
    <div className="space-y-3">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="block hover:bg-purple-50 p-2 rounded-lg transition-colors"
        >
          <div className="flex items-center space-x-3">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-10 h-10 rounded object-cover"
            />
            <div>
              <h3 className="font-medium text-sm">{recipe.name}</h3>
              <p className="text-xs text-gray-600">
                {recipe.prepTimeMinutes} min prep
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function RecentLoadingFallback() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded"></div>
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentRecipesList;
