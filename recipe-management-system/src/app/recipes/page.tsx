import Link from 'next/link';
import { cookies } from 'next/headers';

interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: string;
  cuisine: string;
}

async function getAllRecipes(): Promise<{ recipes: Recipe[] }> {
  const response = await fetch('https://dummyjson.com/recipes?limit=12');
  return response.json();
}

export default async function RecipesPage() {
  const { recipes } = await getAllRecipes();
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth-token');
  const isAuthenticated = !!authToken;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Recipes</h2>
        {isAuthenticated && (
          <Link
            href="/recipes/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Recipe
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{recipe.name}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  Prep: {recipe.prepTimeMinutes} min | Cook:{' '}
                  {recipe.cookTimeMinutes} min
                </p>
                <p>
                  Difficulty: {recipe.difficulty} | Cuisine: {recipe.cuisine}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
