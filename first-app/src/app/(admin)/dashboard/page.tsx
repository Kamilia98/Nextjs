'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://dummyjson.com/recipes');
      const data = res.data.recipes;
      setRecipes(data);

      // Calculate average rating
      const totalRating = data.reduce(
        (sum: number, recipe: any) => sum + recipe.rating,
        0
      );
      const avgRating = data.length ? totalRating / data.length : 0;
      setAverageRating(avgRating);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Recipe Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total Recipes</h2>
          <p className="text-3xl mt-2 text-blue-500">{recipes.length}</p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Average Rating</h2>
          <p className="text-3xl mt-2 text-green-500">
            {averageRating.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
