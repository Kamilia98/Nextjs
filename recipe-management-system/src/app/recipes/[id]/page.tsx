import { Recipe } from '@/models/recipe';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
}

async function getRecipe(id: string): Promise<Recipe | null> {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    return null;
  }
}

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}) {
  const recipe = await getRecipe(params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recipe Image */}
        <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 lg:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Recipe Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-semibold">Prep Time:</span>{' '}
              {recipe.prepTimeMinutes} min
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-semibold">Cook Time:</span>{' '}
              {recipe.cookTimeMinutes} min
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-semibold">Servings:</span> {recipe.servings}
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-semibold">Difficulty:</span>{' '}
              {recipe.difficulty}
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-semibold">Rating:</span> {recipe.rating}/5
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                {index + 1}
              </span>
              <p className="flex-1">{instruction}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
