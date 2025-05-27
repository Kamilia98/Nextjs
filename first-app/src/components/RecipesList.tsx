'use client';
import React, { useState, useEffect } from 'react';
import RecipeCard from '@/components/RecipeCard';
import axios from 'axios';

const RecipesList = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
        setError('');
      } catch (err) {
        setError('Failed to load recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const cuisines = Array.from(new Set(recipes.map((r) => r.cuisine)));
  const difficulties = Array.from(new Set(recipes.map((r) => r.difficulty)));

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine
      ? recipe.cuisine === selectedCuisine
      : true;
    const matchesDifficulty = selectedDifficulty
      ? recipe.difficulty === selectedDifficulty
      : true;
    return matchesSearch && matchesCuisine && matchesDifficulty;
  });

  return (
    <div className="container mx-auto py-8">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />

        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value="">All Cuisines</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value="">All Difficulties</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      {/* Loading, Error, or Recipe List */}
      {loading ? (
        <p className="text-center text-gray-500">Loading recipes...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                image={recipe.image}
                cuisine={recipe.cuisine}
                difficulty={recipe.difficulty}
                prepTimeMinutes={recipe.prepTimeMinutes}
                cookTimeMinutes={recipe.cookTimeMinutes}
                rating={recipe.rating}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No recipes found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipesList;
