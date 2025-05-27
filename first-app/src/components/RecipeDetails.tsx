import React from 'react';
import { Clock, Users } from 'lucide-react';

interface RecipeDetailsProps {
  recipe: {
    name: string;
    image: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    ingredients: string[];
    instructions: string[];
    tags: string[];
  };
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  const {
    name,
    image,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    ingredients,
    instructions,
    tags,
  } = recipe;

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

  return (
    <div className="animate-fade-in">
      <div className="relative h-64 md:h-80 lg:h-96 mb-6 overflow-hidden rounded-xl">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 md:p-6 lg:p-8 w-full">
            <h1 className="text-white mb-2 drop-shadow-lg">{name}</h1>
            <div className="flex flex-wrap gap-2 items-center">
              <span
                className={`text-sm px-2 py-1 rounded ${getDifficultyColor(
                  difficulty
                )}`}
              >
                {difficulty}
              </span>
              <span className="bg-white/90 text-gray-800 text-sm px-2 py-1 rounded">
                {cuisine}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-olive-800 mb-4">Ingredients</h2>
            <ul className="bg-cream-50 rounded-lg p-4 divide-y divide-cream-200">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="py-2 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center mr-3 text-xs">
                    {index + 1}
                  </span>

                  <span className="ml-2">{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-olive-800 mb-4">Instructions</h2>
            <ol className="space-y-6">
              {instructions.map((step, index) => (
                <li key={index} className="flex">
                  <div className="bg-olive-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div>
          <div className="bg-cream-50 rounded-lg p-6 sticky top-24">
            <h3 className="font-serif text-xl mb-4 border-b border-cream-200 pb-2">
              Cooking Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-terracotta-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Prep Time</p>
                  <p className="font-medium">{prepTimeMinutes} minutes</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-terracotta-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Cook Time</p>
                  <p className="font-medium">{cookTimeMinutes} minutes</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-terracotta-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Total Time</p>
                  <p className="font-medium">
                    {prepTimeMinutes + cookTimeMinutes} minutes
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="h-5 w-5 text-terracotta-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Servings</p>
                  <p className="font-medium">{servings} servings</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white px-3 py-1 rounded-full text-sm text-olive-700 border border-olive-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
